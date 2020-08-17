import {motionPresets} from "@motions/presets.motion";

const callForSpeakerMotions = {
  titleContainer: {
    visible: {
      transition: {
        staggerChildren: .2,
      },
    },
  },
  titleText: {
    hidden: {
      ...motionPresets.fadeInRight.before,
      opacity: 1,
      x: '-100%',
    },
    visible: {
      ...motionPresets.fadeInRight.after,
      x: '0%',
    },
  },
  circle: {
    hidden: {
      opacity: 0,
      rotate: -30,
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
        duration: .85,
      },
    },
  },
  text: {
    hidden: motionPresets.fadeInUp.before,
    visible: motionPresets.fadeInUp.after,
  }
};

export default callForSpeakerMotions;
