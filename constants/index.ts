type NavigationItem = {
  route: string;
  label: string;
  icon: string;
};

export const NAVIGATION: NavigationItem[] = [
  { route: "/", label: "Home", icon: "mdi-home" },
  { route: "/tools", label: "All tools", icon: "mdi-shuffle" },
  { route: "/demo", label: "Demo page", icon: "mdi-test-tube" },
];

export const TOOLS: NavigationItem[] = [
  {
    route: "/tools/csv-to-html",
    label: "Csv to html table",
    icon: "mdi-file-excel",
  },
  { route: "/tools/images", label: "Optimize Images", icon: "mdi-test-tube" },
];
