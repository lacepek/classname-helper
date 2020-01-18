import { addClass } from "./addClass";

export function createClass(options: Options): string {
  const keys = Object.keys(options);

  return keys.reduce((accumulator, key) => {
    const current = options[key];
    if (current === true) {
      return addClass(accumulator, key);
    }

    return accumulator;
  }, "");
}

type Options = {
  [key: string]: boolean;
};
