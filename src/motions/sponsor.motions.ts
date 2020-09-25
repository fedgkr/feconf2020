import {motionPresets} from "@motions/presets.motion";

const sponsorMotions = {
  container: {
    visible: {
      transition: {
        staggerChildren: .12,
      },
    },
  },
  item: {
    hidden: motionPresets.fadeInUp.before,
    visible: motionPresets.fadeInUp.after,
  },
};

export default sponsorMotions;
