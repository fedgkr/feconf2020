import { motionPresets } from "@motions/presets.motion";

const callForSpeakerMotions = {
  titleContainer: {
    visible: {
      transition: {
        staggerChildren: 0.2,
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
      rotate: -30,
    },
    visible: {
      opacity: 1,
      rotate: 0,
      transition: {
        type: "tween",
        duration: 0.7,
      },
    },
  },
  text: {
    hidden: motionPresets.fadeInUp.before,
    visible: motionPresets.fadeInUp.after,
  },
};

export default callForSpeakerMotions;
