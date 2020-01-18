import { replaceClass } from "./replaceClass";

export function removeClass(classes: string, toBeRemoved: string): string {
  return replaceClass(classes, toBeRemoved, "");
}
