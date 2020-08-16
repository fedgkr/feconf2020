import {motionPresets} from "@motions/presets.motion";

const heroMotions = {
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
      x: -60,
      scale: .8,
    },
    visible: {
      ...motionPresets.fadeInUp.after,
      x: 0,
      scale: 1,
      transition: {
        ...motionPresets.fadeInUp.after.transition,
        delay: .3,
        duration: .65,
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
        duration: .9,
      },
    },
  },
  dashedCircle: {
    hidden: {
      ...motionPresets.fadeInUp.before,
      x: 60,
      y: 180,
      scale: .6,
    },
    visible: {
      ...motionPresets.fadeInUp.after,
      x: 0,
      scale: 1,
      transition: {
        ...motionPresets.fadeInUp.after.transition,
        delay: .6,
        duration: 1.1,
      },
    },
  },
};

export default heroMotions;
