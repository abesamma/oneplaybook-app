module.exports = {
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-material-ui`,
    {
      resolve: `gatsby-plugin-anchor-links`,
      options: {
        duration: 800
      }
    },
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
