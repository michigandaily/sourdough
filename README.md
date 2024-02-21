# sourdough

Sourdough is the _starter_ (get it?) for web apps at The Michigan Daily.

It has several useful features:

- [x] React as a dependency by default
- [x] MicroCMS with [ArchieML](http://archieml.org/)
- [x] Data ingest from Google Sheets
- [x] Bundling with [Vite](https://vitejs.dev/)
- [x] Easy deploy to S3 bucket
- [x] Easy deploy to GitHub Pages

## Using this template

Click the green "Use this template" button to create a new instance of the `sourdough` template. Then, clone the new instance and run `pnpm install` to initialize the project.

You can use `pnpm dev` to start a development server and `pnpm build` to build production-ready files into `dist/`.

### Importing images

If you want to import an image with a static name, you can simply import it:

```javascript
import photo from "../assets/photo.jpg";

const Component = () => (
  <img src={photo} alt="Alternative text" />
)
```

If you want to import images with variable names, you'll need to use a [URL constructor](https://developer.mozilla.org/en-US/docs/Web/API/URL) and [`import.meta.url`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import.meta):

```javascript
const Component = ({ image }) => (
  <img src={new URL(image, import.meta.url).href} alt="Alternative text" />
)
```

That said, you'll probably want to be importing images by using a CDN (e.g. Jetpack).

### Fetching from Google Drive

Refer to the [Usage](https://github.com/MichiganDaily/sink#usage) section in the `sink` README for instructions on how to set up `config.json` for fetching files from Google Drive.

You can import a JSON file in JS like this:

```js
import copy from "../data/data.json";
```

You can import a CSV file in JS like this:

```js
import csvfile from "../data/data.csv";
```

We use the `@rollup/plugin-dsv` plugin (which relies on [`d3-dsv`](https://github.com/d3/d3-dsv)) to parse the CSV file into a usable array.

### Deploying to AWS S3

Refer to the [AWS S3 deployment with cache invalidation](https://github.com/MichiganDaily/sink/tree/main#aws-s3-deployment-with-cache-invalidation) section in the `sink` README for instructions on how to set up `config.json` for deploying to AWS S3.

1. Make sure that `base` in `vite.config.js` is routed correctly (it should probably be `config.key` prepended by a `/`).
2. Run `pnpm sink deploy aws`.

### Deploying to GitHub Pages

Refer to the GitHub Actions workflow. Use the manual workflow dispatch.
