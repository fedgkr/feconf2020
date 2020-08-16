import {motionPresets} from "@motions/presets.motion";
import {Variants} from "framer-motion";

interface HeroMotions {
  logo: Variants;
  text: Variants;
  circle: Variants;
  smallCircle: Variants;
}

const heroMotions: HeroMotions = {
  logo: {
    hidden: motionPresets.fadeInUp.before,
    visible: {
      ...motionPresets.fadeInUp.after,
      transition: {
        ...motionPresets.fadeInUp.after.transition,
        delay: .2,
      },
    },
  },
  text: {
    hidden: motionPresets.fadeInUp.before,
    visible: {
      ...motionPresets.fadeInUp.after,
      transition: {
        ...motionPresets.fadeInUp.after.transition,
        delay: .35,
      },
    },
  },
  circle: {
    hidden: {
      ...motionPresets.fadeInUp.before,
      scale: .8,
    },
    visible: {
      ...motionPresets.fadeInUp.after,
      scale: 1,
      transition: {
        ...motionPresets.fadeInUp.after.transition,
        delay: .5,
        duration: .8,
      },
    },
  },
  smallCircle: {
    hidden: {
      ...motionPresets.fadeInUp.before,
      scale: .8,
    },
    visible: {
      ...motionPresets.fadeInUp.after,
      scale: 1,
      transition: {
        ...motionPresets.fadeInUp.after.transition,
        delay: .6,
        duration: 1.1,
      },
    },
  }
};

export default heroMotions;
