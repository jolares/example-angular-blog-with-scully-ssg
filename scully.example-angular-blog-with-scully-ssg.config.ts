import { ScullyConfig } from '@scullyio/scully';


export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "example-angular-blog-with-scully-ssg",
  outDir: './dist/static',
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: "./blog-posts"
      }
    },
  }
};