const fs = require("fs");
const nunjucks = require("nunjucks");

const config = JSON.parse(fs.readFileSync("./config.json", "utf-8"));

const copy = JSON.parse(fs.readFileSync(config.archie.output));
const template = fs.readFileSync(config.archie.template, "utf-8");

nunjucks.configure({ autoescape: false });
const output = nunjucks.renderString(template, {
  ...copy,
  config,
  env: process.env.NODE_ENV,
});

fs.writeFileSync("./src/index.html", output);
