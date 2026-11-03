export function getInitials(name: string): string {
  return name
    .split(" ")
    .map((initial) => initial[0])
    .join("");
}
