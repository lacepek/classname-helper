export function replaceClass(
  classes: string,
  toBeReplaced: string,
  newClass: string
): string {
  return classes.replace(toBeReplaced, newClass);
}
