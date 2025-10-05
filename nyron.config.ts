import { defineConfig } from "@nyron/cli/config"

export default defineConfig({
  repo: "owner/repo",
  projects: {
    sdk: {
      tagPrefix: "sdk@",
      path: "packages/sdk",
    },
    service: {
      tagPrefix: "@my-package/service@",
      path: "apps/service",
    },
  },
  autoChangelog: true,
  onPushReminder: true,
})