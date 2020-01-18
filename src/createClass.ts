export function createClass(options: Options) {
  const keys = Object.keys(options);

  return keys.reduce((accumulator, key) => {
    const current = options[key];
    if (current === true) {
      return `${accumulator} ${key}`;
    }

    return accumulator;
  }, "");
}

type Options = {
  [key: string]: boolean;
};
