import {motionPresets} from "@motions/presets.motion";

const noticeMotions = {
  titleContainer: {
    visible: {
      transition: {
        staggerChildren: .12,
      },
    },
  },
  titleText: {
    hidden: motionPresets.fadeInUp.before,
    visible: motionPresets.fadeInUp.after,
  },
  circle: {
    hidden: {
      opacity: 0,
      rotate: -40,
    },
    visible: {
      opacity: 1,
      rotate: 0,
      transition: {
        type: 'tween',
        duration: .7,
      },
    },
  },
  dashedCircle: {
    hidden: {
      opacity: 0,
      rotate: -25,
    },
    visible: {
      opacity: 1,
      rotate: 0,
      transition: {
        type: 'tween',
        duration: .7,
      },
    },
  },
  platformContainer: {
    visible: {
      transition: {
        staggerChildren: .12,
      },
    },
  },
  platform: {
    hidden: motionPresets.fadeInRight.before,
    visible: motionPresets.fadeInRight.after,
  },
};

export default noticeMotions;
