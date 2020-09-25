import {motionPresets} from "@motions/presets.motion";

const sessionsMotions = {
  container: {
    visible: {
      transition: {
        staggerChildren: .17,
      },
    },
  },
  title: {
    hidden: motionPresets.fadeInUp.before,
    visible: motionPresets.fadeInUp.after,
  },
  item: {

  },
};

export default sessionsMotions;
