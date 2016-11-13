const generateLayout= (isStatic) => {
    return {
      x: 0,
      y: 0,
      w: 4,
      h: 2,
      i: "key",
      static: isStatic
    };
};

export {
    generateLayout
};
