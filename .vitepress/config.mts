import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Gorilla Tag Modding Guide",
  description: "A guide to get up and running with mods for Gorilla Tag!",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Get Started', link: '/docs/get-started' }
    ],

    sidebar: [
      {
        text: 'Preface',
        items: [
          { text: 'Get Started', link: '/docs/get-started' },
          { text: 'Pick Your Poison', link: '/docs/pick-your-poison' }
        ]
      },
      {
        text: 'MelonLoader',
        items: [
          { text: 'Installation (Mod Manager)', link: '/docs/melonloader/modmanager' },
          { text: 'Installation (Manual)', link: '/docs/melonloader/guide' },

        ]
      },
      {
        text: 'Extras',
        items: [
          { text: 'Linux', link: '/docs/extra/linux' },
          { text: 'Locating Your Game', link: '/docs/extra/locating-your-game' }
        ]
      },
      {
        text: 'BepInEx (Deprecated)',
        items: [
          { text: 'Installation (Deprecated)', link: '/docs/bepinex/guide' }
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/xenon-pl/Gorilla-Tag-Modding-Guide' }
    ]
  }
})
