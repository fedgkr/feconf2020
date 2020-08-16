import {Transition, Variant} from "framer-motion";

export interface VariantSet {
  before: Variant & { transition: Transition };
  after: Variant & { transition: Transition };
}

export interface Motions {
  fadeInUp: VariantSet;
}

const defaultTransition = {
  type: 'tween',
  duration: .4,
};

export const motionPresets: Motions = {
  fadeInUp: {
    before: {
      opacity: 0,
      y: 40,
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
  }
};
