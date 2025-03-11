import { defineConfig } from "@extkit/core";
import { chrome } from "@extkit/chrome";

export default defineConfig({
  browsers: [
    chrome({
      manifest: {
        manifest_version: 3,
        name: "Easy Example",
        version: "0.1.0",
      },
    }),
  ],
});
