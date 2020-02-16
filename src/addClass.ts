export function addClass(classes: string, ...toBeAdded: string[] | null | undefined): string {
  if (!toBeAdded) {
    return classes;
  }

  return `${classes} ${toBeAdded
    .join(' ')
    .trim()
    .replace(/  +/g, ' ')}`;
}
