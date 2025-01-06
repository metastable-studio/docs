import * as path from "node:path";
import { defineConfig } from "rspress/config";

export default defineConfig({
  root: path.join(__dirname, "docs"),
  title: "Metastable Docs",
  icon: "/favicon.png",
  logo: {
    light: "/logo_light_mode.svg",
    dark: "/logo_dark_mode.svg",
  },
  themeConfig: {
    socialLinks: [
      {
        icon: "discord",
        mode: "link",
        content: "https://discord.gg/Sf9zKaXzXe",
      },
      {
        icon: "github",
        mode: "link",
        content: "https://github.com/metastable-studio/docs",
      },
    ],
  },
});
