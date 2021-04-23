module.exports = {
  plugins: [
    'gatsby-plugin-postcss',
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
        name: `OnePlaybook`,
        description: `Oneplaybook: manage your knowledge and work better with TiddlyWiki.`,
        lang: `en`,
        start_url: `/`,
        background_color: `#fff5f7`,
        theme_color: `#fff5f7`,
        display: `standalone`,
        icon: `src/assets/icon.png`,
        legacy: `true`
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`
  ]
};
