module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-codebushi`,
      options: {
        tailwindConfig: `tailwind.config.js`
      }
    },
    `gatsby-plugin-material-ui`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `OnePlaybook app`,
        short_name: `OnePlaybook`,
        description: `Oneplaybook app helps you learn, think and build awesome things with anyone easily.`,
        lang: `en`,
        start_url: `/`,
        background_color: `#dd2476`,
        theme_color: `#dd2476`,
        display: `standalone`,
        icon: `src/assets/icon.png`,
        legacy: `true`
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`
  ]
};
