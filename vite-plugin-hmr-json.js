import { resolve } from "path";
import { existsSync } from "fs";

export default () => ({
  name: 'vite-plugin-hmr-json',
  enforce: 'post',
  async handleHotUpdate({ file, server }) {
    const config = await import("./config.json");
    const archie = config.fetch.filter(
      aml => !Object.hasOwn(aml, "sheetId")
        && aml.id.length > 0
        && aml.output.length > 0
        && existsSync(new URL(aml.output, import.meta.url))
    ).map(aml => resolve(aml.output));

    if (archie.includes(file)) {
      server.ws.send({
        type: 'full-reload',
        path: '*'
      });
    }
  }
});
