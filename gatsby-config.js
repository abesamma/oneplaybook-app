module.exports = {
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-anchor-links`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `OnePlaybook`,
        description: `Wiki notebook workspaces for managing knowledge better. Powered by TiddlyWiki.`,
        lang: `en`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: `src/assets/icon.png`,
        legacy: `true`
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`
  ]
};
