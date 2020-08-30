import React from "react";
import { SceneItem } from "scenejs";
import css from "./AwesomeCircle.module.scss";
import { useIntersection } from "@utils/hooks/use-intersection";
import { useWindowScroll } from "@utils/hooks/use-window";

interface AwesomeCircleProps {
  size: number;
  index: number;
  offsetInfo?: { height: number, top: number };
}
export default function AwesomeCircle(props: AwesomeCircleProps) {

  const circleBackgroundRef = React.useRef<HTMLDivElement>();
  const circleRef = React.useRef<HTMLDivElement>();
  const [sceneItem] = React.useState(() => new SceneItem({
    0: {
      "transform": "translate(-45%, -45%) rotate(0deg)",
    },
    [16 + props.size * 2]: {
      "transform": "rotate(360deg)",
    },
  }, {
    iterationCount: "infinite",
  }));
  const { visible, firstVisible } = useIntersection(circleRef);

  React.useEffect(() => {
    sceneItem.setElement(circleBackgroundRef.current!);

    return () => {
      sceneItem.clear();
    }
  }, []);

  React.useEffect(() => {
    if (visible && sceneItem.isPaused()) {
      sceneItem.playCSS();
    } else if (!visible && !sceneItem.isPaused()) {
      sceneItem.pause();
    }
  });
  useWindowScroll(({ scroll, height }) => {
    const offsetInfo = props.offsetInfo;
    if (!offsetInfo) {
      return;
    }
    const pos
      = offsetInfo.top + offsetInfo.height / 2
      - (scroll + height / 2);

    const ratio = pos / height * 50;
    circleRef.current!.style.transform = `translateY(${ratio}%)`;
  }, [props.offsetInfo]);

  return <div className={css.AwesomeCircle} ref={circleRef}>
    <div className={css.circleBackground} ref={circleBackgroundRef} style={{
      background: firstVisible ? `url("/images/backgrounds/img-gradient-${props.index}.png")` : "none",
      backgroundSize: firstVisible ? "100% 100%" : "",
    }}></div>
  </div>;
}
