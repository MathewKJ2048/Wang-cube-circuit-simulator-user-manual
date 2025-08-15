import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "User Manual",
  description: "Wang cube circuit simulator user manual",
  // Source directory
  srcDir: './manual',
  
  // Build output directory
  outDir: './dist',
  
  // Base URL (adjust for deployment)
  base: '/Wang-cube-circuit-simulator-user-manual/',


  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
   

    sidebar: [
      {
        items: [
          { text: 'Introduction', link: '/introduction'},
          { text: 'Tile Types', link: '/tile-types'},
          { text: 'Picker', link: '/picker'},
          { text: 'Tile Editor', link: '/tile-editor'},
          { text: 'Editor', link: '/editing'},
          { text: 'View', link: '/view'},
          { text: 'Simulation', link: '/simulation'},
          { text: 'Load/Save', link: '/load-save'},
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          // { text: '', link: ''},
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/MathewKJ2048/Wang-cube-circuit-simulator' }
    ]
  }
})
