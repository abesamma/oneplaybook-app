module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-codebushi`,
      options: {
        tailwindConfig: `tailwind.config.js`
      }
    },
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-favicon`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `OnePlaybook app`,
        short_name: `OnePlaybook`,
        start_url: `/`,
        icon: `src/favicon.png`,
        background_color: `#dd2476`,
        theme_color: `#dd2476`,
        display: `standalone`
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`
  ]
};
