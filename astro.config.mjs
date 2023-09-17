import { defineConfig } from 'astro/config';
import storyblok from "@storyblok/astro";
import { loadEnv } from 'vite';
import netlify from "@astrojs/netlify/functions";
const env = loadEnv('', process.cwd(), 'STORYBLOK');



// https://astro.build/config
export default defineConfig({
  integrations: [storyblok({
    accessToken: env.STORYBLOK_TOKEN,
    components: {
      page: 'storyblok/Page',
      contentImage: 'storyblok/ContentImage',
      heroStandard: 'storyblok/HeroStandard',
      heroFront: 'storyblok/HeroFront',
      heroImage: 'storyblok/HeroImage',
      whereWhen: 'storyblok/WhereWhen',
      rsvpPartial: 'storyblok/RsvpPartial',
      imageBannerCTA: 'storyblok/ImageBannerCTA',
      backgroundImage: 'storyblok/BackgroundImage',
      content: 'storyblok/Content',
      contentTwoColumn: 'storyblok/ContentTwoColumn',
      contentThreeColumn: 'storyblok/ContentThreeColumn',
      gallery: 'storyblok/Gallery',
      updateList: 'storyblok/UpdateList',
      update: 'storyblok/Update',
      contactForm: 'storyblok/ContactForm',
      attendee: 'storyblok/Attendee',
      attendeeList: 'storyblok/AttendeeList'
    }
  })],
  output: "hybrid",
  adapter: netlify(),
  site: 'https://lukeandsam.netlify.app'
});