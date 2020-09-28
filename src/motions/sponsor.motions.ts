import {motionPresets} from "@motions/presets.motion";

const sponsorMotions = {
  titleContainer: {
    visible: {
      transition: {
        staggerChildren: .12,
      },
    },
  },
  container: {
    visible: {
      transition: {
        delayChildren: .3,
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
