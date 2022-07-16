import { configure, renderString } from "nunjucks";
import { existsSync, readFileSync } from "fs";
import { basename } from "path";

export default () => ({
  name: "vite-plugin-transform-nunjucks",
  transformIndexHtml: {
    enforce: "pre",
    async transform(html) {
      const config = await import("./config.json");
      const archie = Object.fromEntries(
        await Promise.all(
          config.fetch.filter(
            aml => !Object.hasOwn(aml, "sheetId")
              && aml.id.length > 0
              && aml.output.length > 0
              && existsSync(new URL(aml.output, import.meta.url))
          ).map(async (aml) =>
            ([basename(aml.output, ".json"), JSON.parse(readFileSync(aml.output))])
          )
        )
      );

      configure({ autoescape: false });
      return renderString(html, { config, env: process.env.NODE_ENV, ...archie });
    }
  }
});
