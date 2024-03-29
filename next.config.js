const frontmatterPlugin = require('./lib/frontmatter')
const glob = require('./lib/glob')
const withTM = require('next-transpile-modules')(['@ui-pack/react'])

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [frontmatterPlugin]
  }
})

module.exports = withTM(withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  target: 'serverless',
  env: {
    components: glob('./pages/docs/*.mdx'),
    intros: glob('./pages/docs/intro/*.mdx')
  },
  webpack: config => {
    // Fix npm dependencies relying on fs
    config.node = { fs: 'empty'}
    return config
  }
}))
