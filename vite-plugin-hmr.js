import { resolve } from "path";
import { existsSync } from "fs";

export default () => ({
  name: 'vite-plugin-hmr',
  enforce: 'post',
  async handleHotUpdate({ file, server }) {
    const config = await import("./config.json");
    const data = config.fetch.filter(
      d => d.id.length > 0
        && d.output.length > 0
        && existsSync(new URL(file.output, import.meta.url))
    ).map(d => resolve(d.output));

    if (data.includes(file)) {
      server.ws.send({
        type: 'full-reload',
        path: '*'
      });
    }
  }
});
