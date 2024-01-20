/**
 * @type {import('gatsby').GatsbyConfig}
 */
//pathPrefix: "/",
module.exports = {
  siteMetadata: {
    title: `Portfólio`,
    siteUrl: `https://josearmandosilva.github.io`
  },
  plugins: ["gatsby-plugin-postcss", "gatsby-plugin-image", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }]
};