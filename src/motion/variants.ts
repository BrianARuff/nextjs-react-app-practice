interface variantsInterface {
  active: {
    [key: string]: string | number | {}
  }
  inactive: {
    [key: string]: string | number | {
      transition: {
        [key: string]: string | number | {}
      }
    }
  }
}

export const variants = {
  active: {
    opacity: 1,
    x: ["100vw", "0vw"],
    transition: {
      duration: 0.5,
      type: "spring"
    }
  },
  inactive: {
    opacity: 0,
    x: ["0vw", "-100vw"],
    transition: {
      duration: 0.5
    }
  }
};