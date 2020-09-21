const headerMotions = {
  menu: {
    open: {
      y: '0%',
      opacity: 1,
      transition: {
        type: 'tween',
        staggerChildren: .07,
        delayChildren: .15,
      },
    },
    closed: {
      y: '-100%',
      opacity: 1,
      transition: {
        type: 'tween',
        delay: .18,
        staggerChildren: .05,
        staggerDirection: -1,
      },
    },
  },
  menuItem: {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      }
    },
    closed: {
      y: -50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  },
  barLeft: {
    open: { y: [0, 6, 6], rotate: [0, 0, -45], transition: { duration: .3 } },
    close: { y: [6, 6, 0], rotate:  [-45, 0, 0], transition: { duration: .3 } },
  },
  barRight: {
    open: { y: [0, -6, -6], rotate: [0, 0, 45], transition: { duration: .3 } },
    close: { y: [-6, -6, 0], rotate:  [45, 0, 0], transition: { duration: .3 } },
  },
}

export default headerMotions;
