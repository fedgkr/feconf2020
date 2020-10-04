import {motionPresets} from "@motions/presets.motion";

const sponsorMotions = {
  titleContainer: {
    visible: {
      transition: {
        staggerChildren: .12,
      },
    },
  },
  container: {
    visible: {
      transition: {
        delayChildren: .4,
        staggerChildren: .12,
      },
    },
  },
  item: {
    hidden: motionPresets.fadeInUp.before,
    visible: motionPresets.fadeInUp.after,
  },
  circle: {
    hidden: {
      ...motionPresets.fadeInUp.before,
      x: -100,
      y: -200,
      scale: .6,
    },
    visible: {
      ...motionPresets.fadeInUp.after,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        ...motionPresets.fadeInUp.after.transition,
        duration: .3,
      },
    },
  },
  dashedCircle: {
    hidden: {
      ...motionPresets.fadeInUp.before,
      x: -60,
      y: -180,
      scale: .6,
    },
    visible: {
      ...motionPresets.fadeInUp.after,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        ...motionPresets.fadeInUp.after.transition,
        duration: .4,
      },
    },
  },
};

export default sponsorMotions;
