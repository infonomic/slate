import { Text } from 'slate'

const counter = (node, count = 0) => {
  if (Text.isText(node)) {
    return count + node.text.length
  }

  node.children.map(n => count = counter(n, count))
  
  return count
}

export default counter