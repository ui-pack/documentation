const frontmatterPlugin = require('./lib/frontmatter')


const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [frontmatterPlugin]
  }
})
module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  target: 'serverless'
})
