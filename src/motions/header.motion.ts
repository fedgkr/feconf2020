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
        type: 'spring',
        delay: .3,
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
}

export default headerMotions;
