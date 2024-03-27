// Replace your-framework with the framework you are using (e.g., react-webpack5, vue3-vite)
import type { StorybookConfig } from "@storybook/react";

const config: StorybookConfig = {
  // Required
  framework: "@storybook/react",
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  // Optional
  addons: ["@storybook/addon-essentials"],
  docs: {
    autodocs: "tag",
  },
  staticDirs: ["../public"],
};

export default config;
