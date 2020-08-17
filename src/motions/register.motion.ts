import {motionPresets} from "@motions/presets.motion";

const registerMotions = {
  container: {
    visible: {
      transition: {
        staggerChildren: .12,
      },
    },
  },
  text: {
    hidden: motionPresets.fadeInUp.before,
    visible: motionPresets.fadeInUp.after,
  },
  circle: {
    hidden: motionPresets.fadeIn.before,
    visible: {
      ...motionPresets.fadeIn.after,
      transition: {
        ...motionPresets.fadeIn.after.transition,
        duration: 1,
      }
    },
  },
};

export default registerMotions;
