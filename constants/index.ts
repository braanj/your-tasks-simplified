type NavigationItem = {
  route: string;
  label: string;
  icon: string;
};

export const NAVIGATION: NavigationItem[] = [
  { route: "/", label: "Home", icon: "mdi-home" },
  { route: "/tools", label: "All tools", icon: "mdi-shuffle" },
];

export const TOOLS: NavigationItem[] = [
  {
    route: "/tools/csv-to-html",
    label: "Convert csv to html table",
    icon: "mdi-file-excel",
  },
  {
    route: "/tools/images",
    label: "Convert images to webp",
    icon: "mdi-test-tube",
  },
];
