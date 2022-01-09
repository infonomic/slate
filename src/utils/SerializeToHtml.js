import escapeHtml from 'escape-html'
import { Text } from 'slate'

const serialize = node => {
  if (Text.isText(node)) {
    let string = escapeHtml(node.text)
    if (node.bold) {
      string = `<strong>${string}</strong>`
    }
    return string
  }

  const children = node.children.map(n => serialize(n)).join('')

  switch (node.type) {
    case "h1":
      return `<h1>${children}</h1>`;
    case "h2":
      return `<h2>${children}</h2>`;
    case "h3":
      return `<h3>${children}</h3>`;
    case "h4":
      return `<h4>${children}</h4>`;
    case 'quote':
      return `<blockquote><p>${children}</p></blockquote>`
    case 'paragraph':
      return `<p><span>${children}</span></p>`
    case 'mention':
      return `<span>${children}</span>`
    case 'link':
      // TODO - test for internal vs external domain, and 
      // include rel="noopener noreferrer" attribute for external
      // domains only
      return `<a href="${escapeHtml(node.url)}" rel="noopener noreferrer">${children}</a>`
    default:
      return children
  }
}

export default serialize