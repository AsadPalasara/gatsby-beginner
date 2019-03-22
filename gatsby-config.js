module.exports = {
  siteMetadata: {
    title: `Gatsby Starter`,
    description: `Gatsby using with content full`,
    siteUrl: `https://beginner.netlify.com/`,
    author: `@Asad`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    {
      resolve: "@contentful/gatsby-transformer-contentful-richtext",
    },
    {
      resolve: `gatsby-plugin-sitemap` 
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/avtar.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `9azwjnto5hvn`,
        accessToken: `a4efd28ee7b1bdd7be73b413554e0ac9f0da2554a9d2550a8c488b8749af7eb6`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
