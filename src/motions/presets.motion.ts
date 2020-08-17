import {Transition, Variant} from "framer-motion";

export interface VariantSet {
  before: Variant & { transition: Transition };
  after: Variant & { transition: Transition };
}

export interface Motions {
  fadeIn: VariantSet;
  fadeInUp: VariantSet;
  fadeInRight: VariantSet;
  fadeInLeft: VariantSet;
}

const defaultTransition = {
  type: 'tween',
  duration: .4,
};

const defaultOffset = 40;

export const motionPresets: Motions = {
  fadeIn: {
    before: {
      opacity: 0,
      transition: {
        ...defaultTransition,
      },
    },
    after: {
      opacity: 1,
      transition: {
        ...defaultTransition,
      },
    },
  },
  fadeInUp: {
    before: {
      opacity: 0,
      y: defaultOffset,
      transition: {
        ...defaultTransition,
      },
    },
    after: {
      opacity: 1,
      y: 0,
      transition: {
        ...defaultTransition,
      },
    },
  },
  fadeInRight: {
    before: {
      opacity: 0,
      x: -defaultOffset,
      transition: {
        ...defaultTransition,
      },
    },
    after: {
      opacity: 1,
      x: 0,
      transition: {
        ...defaultTransition,
      },
    },
  },
  fadeInLeft: {
    before: {
      opacity: 0,
      x: defaultOffset,
      transition: {
        ...defaultTransition,
      },
    },
    after: {
      opacity: 1,
      x: 0,
      transition: {
        ...defaultTransition,
      },
    },
  },
};
