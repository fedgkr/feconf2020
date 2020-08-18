import React from 'react';
import LinePath from './LinePath';
import css from './LineBackground.module.scss';
import LinePathCSS from './LinePath.module.scss';
import AirPlaneCSS from './AirPlanePath.module.scss';
import Scene from 'scenejs';
import AirPlanePath from './AirPlanePath';

function getSaceShipInfo(linePath: SVGPathElement, length: number, totalLength: number) {
  const { x, y } = linePath.getPointAtLength(totalLength - length);
  const { x: x2, y: y2 } = linePath.getPointAtLength(totalLength - length - 2);
  const rad = Math.atan2(y2 - y, x2 - x);

  return {
    x: x - 23,
    y: y - 23,
    rad: rad + Math.PI / 4,
  };
}

const LineBackground: React.FC = () => {
  React.useEffect(() => {
    const linePath = document.querySelector<SVGPathElement>(`.${LinePathCSS.LinePath}:not(.${LinePathCSS.LinePathGray})`);
    const lineStrokePath = document.querySelector<SVGPathElement>(`.${LinePathCSS.LineStrokePath}:not(.${LinePathCSS.LinePathGray})`);
    const grayPath = document.querySelector<SVGPathElement>(`.${LinePathCSS.LinePath}.${LinePathCSS.LinePathGray}`);
    const airplanePath = document.querySelector<SVGPathElement>(`.${AirPlaneCSS.AirPlanePath}`);
    const totalLength = linePath.getTotalLength();
    const athomeLength = 1550;
    let playTimer = 0;

    const scene = new Scene({
      [`.${LinePathCSS.LinePath}`]: {
        0: {
          'stroke-dashoffset': `0`,
          'stroke-dasharray': `0 ${totalLength}`
        },
        2: {
          'stroke-dashoffset': `${athomeLength * 2}`,
          'stroke-dasharray': `${athomeLength} ${totalLength}`
        },
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
              const time = Math.max(1.6, scene.getTime());
              const info = getSaceShipInfo(linePath, athomeLength - 100 + 100 * time / 2, totalLength);

              return `${info.x}px, ${info.y}px`;
            },
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
      easing: 'ease-in-out',
      selector: true,
    }).play();

    const speeds = [
      { pos: 12100, speed: 0.8 },
      { pos: 21400, speed: 1.5 },
    ]
    function scroll() {
      const innerWidth = window.innerWidth;
      const inenrHeight = window.innerHeight;
      const backgroundTop = innerWidth > 768 ? 450 : 212 + innerWidth * 0.2;
      const height = document.body.scrollHeight - inenrHeight;
      const scrollTop = document.documentElement.scrollTop;
      const time = height ? Math.max(0, scrollTop - backgroundTop * 0.8) / (height - backgroundTop) * 100 : 0;

      const totalTime = totalLength * time / 100;
      let length = athomeLength + totalTime;

      if (time > 0 && !scene.isPaused()) {
        console.log("??");
        scene.pause();
        scene.setTime(2);
      }
      speeds.forEach(info => {
        if (length > info.pos) {
          length = info.pos + (length - info.pos) * info.speed;
        }
      });
      let lineWidth = Math.max(500, athomeLength - totalTime * totalLength / 10000);

      if (length >= 27500) {
        lineWidth += (length - 27500);
      }
      const { x, y, rad } = getSaceShipInfo(linePath, length, totalLength);


      lineStrokePath.style.cssText += `stroke-dashoffset: ${-totalTime}`;
      grayPath.style.cssText += `stroke-dashoffset: ${length * 2};stroke-dasharray: ${length} ${totalLength}`
      linePath.style.cssText += `stroke-dashoffset: ${lineWidth + length}; stroke-dasharray: ${lineWidth} ${totalLength}`;
      airplanePath.style.cssText += `transform: translate(${x}px, ${y}px) rotate(${rad}rad)`;

      if (time === 0) {
        clearTimeout(playTimer);
        playTimer = window.setTimeout(() => {
          scene.play();
        }, 2000);
      }
    }
    window.addEventListener("scroll", scroll);

    return () => {
      window.removeEventListener("scroll", scroll);
      scene.clear();
    };
  }, []);
  return <div className={css.LineBackground}>
    <svg xmlns='http://www.w3.org/2000/svg' width='1278' height='5874' viewBox='0 0 1278 5874'>
      <AirPlanePath></AirPlanePath>
      <LinePath isGray={true}></LinePath>
      <LinePath isGray={false}></LinePath>
    </svg>
  </div>;
}

export default LineBackground;
