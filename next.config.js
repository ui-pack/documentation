const frontmatterPlugin = require('./lib/frontmatter')
const glob = require('./lib/glob')


const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [frontmatterPlugin]
  }
})
module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  target: 'serverless',
  env: {
    components: glob('./pages/docs/*.mdx'),
    intros: glob('./pages/docs/intro/*.mdx')
  }
})
