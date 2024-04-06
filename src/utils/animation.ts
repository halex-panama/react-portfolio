export const fadeInLeftVariant = {
  hidden: {
    x: -50,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 1,
    },
  },
};

export const fadeInRightVariant = {
  hidden: {
    x: 50,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 1,
    },
  },
};

export const fadeInTopVariant = {
  hidden: {
    y: -50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 1,
    },
  },
};

export const fadeInBottomVariant = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 1,
    },
  },
};

export const fadeInSkillsVariant = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: (id: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * id,
    },
  }),
};

export const fadeInMenuVariant = {
  initial: {
    opacity: 0,
    x: 50,
  },
  animate: (id: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.2 * id,
    },
  }),
};
