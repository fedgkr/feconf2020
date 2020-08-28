import React from 'react';
import css from './LineBackground.module.scss';
import LinePathCSS from './LinePath.module.scss';
import AirPlaneCSS from './AirPlanePath.module.scss';
import Scene from 'scenejs';
import LinePathPC from './pc/LinePathPC';
import LinePathMobile from './mobile/LinePathMobile';
import AirPlanePath from './AirPlanePath';

const LINE_BACKGROUND_INFOS = {
  pc: {
    athomeLength: 1550,
    speeds: [
      { pos: 10100, speed: 0.8 },
      { pos: 21400, speed: 1.5 },
    ],
    stopLength: 28480,
    LinePath: LinePathPC,
    width: 1448,
    height: 5823,
    sign: -1,
    scale: 1,
  },
  mobile: {
    athomeLength: 670,
    speeds: [
      { pos: 5000, speed: 0.8 },
      { pos: 12000, speed: 1.4 },
    ],
    stopLength: 13450,
    LinePath: LinePathMobile,
    width: 736,
    height: 4744,
    sign: 1,
    scale: 0.6,
  }
} as const;

function getSaceShipInfo(linePath: SVGPathElement, length: number, totalLength: number, sign: number,) {
  const length1 = sign > 0 ? length : totalLength - length;
  const length2 = sign > 0 ? length1 + 2 : length1 - 2;
  const { x, y } = linePath.getPointAtLength(length1);
  const { x: x2, y: y2 } = linePath.getPointAtLength(length2);
  const rad = Math.atan2(y2 - y, x2 - x);

  return {
    x: x - 23,
    y: y - 23,
    rad: rad + Math.PI / 4,
  };
}

interface LineBackgroundProps {
  isMobile?: number;
}


const LineBackground: React.FC<LineBackgroundProps> = () => {
  const [isMobile, setIsMobile] = React.useState(false);
  const {
    athomeLength,
    sign,
    speeds,
    width,
    height,
    stopLength,
    LinePath,
    scale,
  } = LINE_BACKGROUND_INFOS[isMobile ? "mobile" : "pc"];

  React.useEffect(() => {
    const linePath = document.querySelector<SVGPathElement>(`.${LinePathCSS.LinePath}:not(.${LinePathCSS.LinePathGray})`);
    const lineStrokePath = document.querySelector<SVGPathElement>(`.${LinePathCSS.LineStrokePath}:not(.${LinePathCSS.LinePathGray})`);
    const grayPath = document.querySelector<SVGPathElement>(`.${LinePathCSS.LinePath}.${LinePathCSS.LinePathGray}`);
    const airplanePath = document.querySelector<SVGPathElement>(`.${AirPlaneCSS.AirPlanePath}`);
    const totalLength = linePath.getTotalLength();
    let playTimer = 0;
    let innerWidth = 0;
    let innerHeight = 0;

    const scene = new Scene({
      [`.${LinePathCSS.LinePath}`]: {
        0: {
          'stroke-dashoffset': `0`,
          'stroke-dasharray': `0 ${totalLength}`
        },
        2: {
          'stroke-dashoffset': `${athomeLength - sign * athomeLength}`,
          'stroke-dasharray': `${athomeLength} ${totalLength}`
        },
        10: {},
      },
      [`.${LinePathCSS.LineStrokePath}`]: {
        0.7: {
          'stroke-dasharray': `${0} ${5000}`
        },
        1: {
          'stroke-dasharray': `${100} ${5000}`
        }
      },
      [`.${AirPlaneCSS.AirPlanePath}`]: {
        1.6: {
          opacity: 0,
          transform: {
            translate: () => {
              const time = Math.min(2, Math.max(1.6, scene.getIterationTime()));
              const info = getSaceShipInfo(linePath, athomeLength - 100 + 100 * time / 2, totalLength, sign);

              return `${info.x}px, ${info.y}px`;
            },
            scale,
          },
        },
        2: {
          opacity: 1,
        },
        options: {
          easing: 'ease-in-out',
        }
      },
    }, {
      iterationCount: "infinite",
      easing: 'ease-in-out',
      selector: true,
    }).play();

    function onScroll() {
      clearTimeout(playTimer);

      const backgroundTop = innerWidth > 768 ? 450 : 212;
      const height = document.body.scrollHeight - innerHeight;
      const scrollTop = document.documentElement.scrollTop;
      const time = height ? Math.max(0, scrollTop - backgroundTop * 0.8) / (height - backgroundTop) * 100 : 0;

      const totalTime = totalLength * time / 100;
      let length = athomeLength + totalTime;

      if (time > 0 && !scene.isPaused()) {
        scene.pause();
        scene.setTime(9.5);
      }
      speeds.forEach(info => {
        if (length > info.pos) {
          length = info.pos + (length - info.pos) * info.speed;
        }
      });
      let lineWidth = Math.max(500, athomeLength - totalTime * totalLength / 10000);

      if (length >= stopLength) {
        lineWidth += (length - stopLength);
      }
      const { x, y, rad } = getSaceShipInfo(linePath, length, totalLength, sign);

      lineStrokePath.style.cssText += `stroke-dashoffset: ${-totalTime}`;
      grayPath.style.cssText += `stroke-dashoffset: ${length - sign * length};stroke-dasharray: ${length} ${totalLength}`
      linePath.style.cssText += `stroke-dashoffset: ${lineWidth - sign * length}; stroke-dasharray: ${lineWidth} ${totalLength}`;
      airplanePath.style.cssText += `transform: translate(${x}px, ${y}px) rotate(${rad}rad) scale(${scale})`;

      if (time === 0 && scene.isPaused()) {
        playTimer = window.setTimeout(() => {
          scene.play();
        }, 2000);
      }
    }
    function onResize() {
      innerWidth = window.innerWidth;
      innerHeight = window.innerHeight;

      if (!isMobile && innerWidth < 768) {
        setIsMobile(true);
      } else if (isMobile && innerWidth > 768) {
        setIsMobile(false);
      }
    }
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onResize);

    onResize();
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      scene.clear();
    };
  }, [isMobile]);
  return <div className={css.LineBackground}>
    <svg xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}>
      <AirPlanePath></AirPlanePath>
      <LinePath isGray={true}></LinePath>
      <LinePath isGray={false}></LinePath>
    </svg>
  </div>;
}

export default LineBackground;
