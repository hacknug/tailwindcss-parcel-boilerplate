[![Netlify Status](https://api.netlify.com/api/v1/badges/84c04c4b-409f-48a3-8945-19a0741fc1b5/deploy-status)](https://app.netlify.com/sites/tailwindcss-parcel-boilerplate/deploys) [![This project is using Percy.io for visual regression testing.](https://percy.io/static/images/percy-badge.svg)](https://percy.io/nug-oss/tailwindcss-parcel-boilerplate)
# tailwindcss-parcel-boilerplate

This is just a couple lines of code on a bunch of files showing how to use [Parcel](https://parceljs.org/) and [TailwindCSS](https://tailwindcss.com/) together.

Right now it's using `postcss-cli` to watch Tailwind's config file because I couldn't find any other way to make it work. If you know how this should be done, please open an issue to discuss it and/or submit a PR.

## Usage

Clone this repository, run `pnpm install` and you should be ready to go.

- **Development:**
  `pnpm start` will run a development server with hot reloading at <localhost:1234>
- **Production:**
  `pnpm build` will bundle everything up on your `/dist` folder
