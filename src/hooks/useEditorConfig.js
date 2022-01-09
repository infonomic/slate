import { DefaultElement } from "slate-react";
import Link from '../components/Link'
import Mention from '../components/Mention'

export default function useEditorConfig(editor) {

  editor.isInline = (element) => ["link"].includes(element.type);

  return { renderElement, renderLeaf };
}

function renderElement(props) {
  const { element, children, attributes } = props;
  switch (element.type) {
    case 'mention':
      return <Mention {...props} />
    case "paragraph":
      return <p {...attributes}>{children}</p>;
    case "h1":
      return <h1 {...attributes}>{children}</h1>;
    case "h2":
      return <h2 {...attributes}>{children}</h2>;
    case "h3":
      return <h3 {...attributes}>{children}</h3>;
    case "h4":
      return <h4 {...attributes}>{children}</h4>;
    case "link":
      return <Link {...props} url={element.url} />;
    default:
      // For the default case, we delegate to Slate's default rendering. 
      return <DefaultElement {...props} />;
  }
}

function renderLeaf({ attributes, children, leaf }) {
  let el = <>{children}</>;

  if (leaf.bold) {
    el = <strong>{el}</strong>;
  }

  if (leaf.code) {
    el = <code>{el}</code>;
  }

  if (leaf.italic) {
    el = <em>{el}</em>;
  }

  if (leaf.underline) {
    el = <u>{el}</u>;
  }

  return <span {...attributes}>{el}</span>;
}