import {motionPresets} from "@motions/presets.motion";

const preRegistrationMotions = {
  titleContainer: {
    visible: {
      transition: {
        staggerChildren: .12,
      },
    },
  },
  circle: {
    hidden: motionPresets.fadeIn.before,
    visible: {
      ...motionPresets.fadeIn.after,
      transition: {
        ...motionPresets.fadeIn.after.transition,
        delay: .35,
        duration: 1.2,
      },
    },
  },
  text: {
    hidden: motionPresets.fadeInUp.before,
    visible: {
      ...motionPresets.fadeInUp.after,
      transition: motionPresets.fadeInUp.after.transition,
    },
  },
  contentContainer: {
    visible: {
      transition: {
        staggerChildren: .25,
      },
    },
  },
  contentText: {
    hidden: motionPresets.fadeInUp.before,
    visible: motionPresets.fadeInUp.after,
  },
  messageList: {
    visible: {
      transition: {
        delayChildren: .7,
        staggerChildren: .17,
      },
    },
  },
  message: {
    hidden: motionPresets.fadeInUp.before,
    visible: motionPresets.fadeInUp.after,
  },
};

export default preRegistrationMotions;
