export type MenuItem = {
  name: string;
  href: string;
  weight: number;
};

export const mainMenu: MenuItem[] = [
  { name: "Home", href: "/", weight: 10 },
  { name: "Notes", href: "/notes", weight: 20 },
  { name: "Work", href: "/work", weight: 25 },
  { name: "About", href: "/about", weight: 30 },
  { name: "Contact", href: "/contact", weight: 40 },
].sort((a, b) => a.weight - b.weight);
