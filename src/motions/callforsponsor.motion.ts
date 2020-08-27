import { motionPresets } from "@motions/presets.motion";

const callForSponsorMotions = {
  titleContainer: {
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  },
  titleText: {
    hidden: motionPresets.fadeInUp.before,
    visible: motionPresets.fadeInUp.after,
  },
  circle1: {
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
  circle2: {
    hidden: {
      opacity: 0,
      rotate: 35,
    },
    visible: {
      opacity: 1,
      rotate: 0,
      transition: {
        type: "tween",
        duration: 0.85,
        when: "afterChildren",
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
        type: "tween",
        duration: 0.7,
      },
    },
  },
  textContainer: {
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  },
  text: {
    hidden: motionPresets.fadeInUp.before,
    visible: motionPresets.fadeInUp.after,
  },
  sponsorContainer: {
    visible: {
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.2,
      },
    },
  },
  sponsorTitle: {
    hidden: motionPresets.fadeInUp.before,
    visible: motionPresets.fadeInUp.after,
  },
  sponsor: {
    hidden: motionPresets.fadeInUp.before,
    visible: motionPresets.fadeInUp.after,
  },
};

export default callForSponsorMotions;
