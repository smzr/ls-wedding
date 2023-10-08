import { defineConfig } from 'astro/config';
import storyblok from '@storyblok/astro';
import { loadEnv } from 'vite';
import netlify from '@astrojs/netlify/functions';
const env = loadEnv('', process.cwd(), 'STORYBLOK');



// https://astro.build/config
export default defineConfig({
  integrations: [storyblok({
    accessToken:
        import.meta.env.VITE_ENVIRONMENT  ===  'preview'
        ?  env.STORYBLOK_PREVIEW_TOKEN : env.STORYBLOK_PUBLIC_TOKEN,
    bridge:  import.meta.env.VITE_ENVIRONMENT  ===  'preview'  ? true :  false,
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
  output: 'server',
  adapter: netlify(),
  site: 'https://lukeandsam.netlify.app'
});