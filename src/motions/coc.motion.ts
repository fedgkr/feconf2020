const cocMotions = {
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
      y: '100%',
      opacity: 1,
      transition: {
        type: 'tween',
        staggerChildren: .05,
        staggerDirection: -1,
      },
    },
  },
}

export default cocMotions;
