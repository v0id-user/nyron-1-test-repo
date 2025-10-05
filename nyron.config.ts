import { defineConfig } from "@nyron/cli/config"

export default defineConfig({
  repo: "v0id-user/nyron-1-test-repo",
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