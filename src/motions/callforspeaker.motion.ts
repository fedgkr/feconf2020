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
  text: {
    hidden: motionPresets.fadeInUp.before,
    visible: motionPresets.fadeInUp.after,
  }
};

export default callForSpeakerMotions;
