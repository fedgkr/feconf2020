import React from "react";
import { SceneItem } from "scenejs";
import css from "./AwesomeCircle.module.scss";
import { useIntersection } from "@utils/hooks/use-intersection";

interface AwesomeCircleProps {
  type: number;
}
export default function AwesomeCircle(props: AwesomeCircleProps) {

  const circleBackgroundRef = React.useRef<HTMLDivElement>();
  const circleRef = React.useRef<HTMLDivElement>();
  const [sceneItem] = React.useState(() => new SceneItem({
    0: {
      "transform": "translate(-35%, -35%) rotate(0deg)",
    },
    20: {
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

  return <div className={css.AwesomeCircle} ref={circleRef}>
    <div className={css.circleBackground} ref={circleBackgroundRef} style={{
      background: firstVisible ? `url("/images/backgrounds/img-gradient-${props.type}.png")` : "none",
      backgroundSize: firstVisible ? "100% 100%" : "",
    }}></div>
  </div>;
}
