import {motionPresets} from "@motions/presets.motion";

const speakerListMotions = {
  container: {
    visible: {
      transition: {
        staggerChildren: .12,
      },
    },
  },
  title: {
    hidden: motionPresets.fadeInUp.before,
    visible: motionPresets.fadeInUp.after,
  },
  item: {
    hidden: motionPresets.fadeInLeft.before,
    visible: motionPresets.fadeInLeft.after,
  },
};

export default speakerListMotions;
