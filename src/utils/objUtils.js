module.exports = {
  safeRead: (obj, path) => {
    let value = obj;

    const props = path.split(".");
    for (let index = 0; index < props.length; index += 1) {
      if (props[index] === undefined) break;
      value = value[props[index]];
    }
    return value;
  },
};
