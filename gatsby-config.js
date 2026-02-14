/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
module.exports = {
  siteMetadata: {
    title: `Neublio - knowledge work evolved`,
    description: `Neublio: your integrated knowledge work toolsuite.`,
    siteUrl: `https://neublio.com`
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-plugin-anchor-links`,
      options: {
        duration: 800
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Neublio`,
        description: `Neublio: your integrated knowledge work toolsuite.`,
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
