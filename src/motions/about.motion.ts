import {motionPresets} from "@motions/presets.motion";
import {TargetAndTransition, Variant, Variants} from "framer-motion";

const aboutMotions = {
  titleContainer: {
    visible: {
      transition: {
        staggerChildren: .12,
      },
    },
  },
  title: {
    hidden: {
      ...motionPresets.fadeInUp.before,
      y: '-100%',
    },
    visible: {
      ...motionPresets.fadeInUp.after,
      y: '-100%',
      transition: {
        ...motionPresets.fadeInUp.after.transition,
        duration: .1,
      },
    },
  },
  subText: {
    hidden: {
      ...motionPresets.fadeInUp.before,
      opacity: 1,
      y: '100%',
    },
    visible: {
      ...motionPresets.fadeInUp.after,
      opacity: 1,
      y: '0%',
      transition: motionPresets.fadeInUp.after.transition,
    },
  },
  aboutContainer: {
    visible: {
      transition: {
        delayChildren: .5,
        staggerChildren: .07,
      },
    },
  },
  aboutText: {
    hidden: motionPresets.fadeInUp.before,
    visible: motionPresets.fadeInUp.after,
  },
};

export default aboutMotions;
