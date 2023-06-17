import type { Config } from "tailwindcss";

import baseConfig from "@packages/tailwind-config";

export default {
  content: ["./src/**/*.tsx", "../../packages/ui/src/**/*.{js,ts,jsx,tsx}"],
  presets: [baseConfig],
} satisfies Config;
