import { defineConfig } from 'astro/config';
import storyblok from "@storyblok/astro";
import { loadEnv } from 'vite';
const env = loadEnv('', process.cwd(), 'STORYBLOK');

// https://astro.build/config

export default defineConfig({
  integrations: [storyblok({
    accessToken: env.STORYBLOK_TOKEN,
    components: {
      page: 'storyblok/Page',
      blogPost: 'storyblok/BlogPost',
      blogPostList: 'storyblok/BlogPostList',
      contentImage: 'storyblok/ContentImage',
      eyebrow: 'storyblok/Eyebrow',
      contact: 'storyblok/Contact',
    }
  })]
});