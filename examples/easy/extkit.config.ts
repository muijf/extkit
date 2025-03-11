import { defineConfig } from "@extkit/core";
import { chrome } from "@extkit/chrome";
import { react } from "@extkit/react";
import { tailwind } from "@extkit/tailwind";

export default defineConfig(({ mode: _mode }) => ({
  browsers: [
    chrome({
      manifest: {
        manifest_version: 3,
        name: "Easy Example",
        version: "0.1.0",
      },
    }),
  ],
  plugins: [react({}), tailwind({})],
}));
