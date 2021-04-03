const glob = require('glob')

module.exports = (globString) => {
  return glob.sync(globString).map(file => {
    const match = file.match(/[\w-]+(?=\.mdx$)/)
    if(match) return match[0]
  }).filter(Boolean)
}