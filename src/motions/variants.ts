export namespace FramerMotions {
  export const fadeIn = {
    initial: 'hidden',
    animate: 'visible',
    variants: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
  };
}
