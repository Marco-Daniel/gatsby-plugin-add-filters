<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  a Gatsby Plugin for adding limit and skip filters
</h1>

## 🚀 Quick start

add to gatsby-config.js

```javascript
module.exports = {
  plugins: [
    // other gatsby plugins
    // ...
    {
      resolve: `gatsby-plugin-add-filters`,
      options: {
        types: [`typeNameContainingNodesField`],
      },
    },
  ],
}
```
