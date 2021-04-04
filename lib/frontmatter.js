const matter = require('gray-matter')
const stringifyObject = require('stringify-object')

// module.exports = async function (src) {
//   const callback = this.async()
//   const { content, data } = matter(src)
//
//   const code = `
//   export const frontMatter = ${stringifyObject(data)}
//   ${content}
//   `
//   return callback(null, code)
// }

/*
 * Inspired by:
 * https://gist.github.com/sudkumar/70834062f9243558846249f2c2f98902
*/
module.exports = () => (tree, file) => {
  const { content, data } = matter(file.contents)

  // Remove frontmatter after converting it into JS object on line 60
  if (tree.children[0].type === 'thematicBreak') {
    const firstHeadingIndex = tree.children.findIndex(t => t.type === 'heading')
    if (firstHeadingIndex !== -1) {
      tree.children.splice(0, firstHeadingIndex + 1)
    }
  }

  // Frontmatter removed now let's insert JSX needed by docs
  tree.children.unshift({
    type: 'import',
    value: `
    import Documentation from 'templates/documentation'
    import Note from 'components/note'
    import PropList from 'components/prop-list'
    `
  },{
    type: 'jsx',
    value: `
    <Documentation
      title={frontMatter.title}
      author={frontMatter.author}
      sourcePage={frontMatter.sourcePage}
      lastUpdated={frontMatter.lastUpdated}
    >
    
    `
  })  

  // Close documentation container
  tree.children.push({
    type: 'jsx',
    value: `

    </Documentation>
    `
  })

  // Convert frontmatter to JS object
  tree.children.push({
    type: 'export',
    value: `
    export const frontMatter = ${stringifyObject(data)}
    `
  })

}
