import "./Link.css";

export default function Link({ element, attributes, children }) {
  // TODO - test for internal vs external domain, and even in
  // here in the editor render, include rel="noopener noreferrer"
  // attribute.
  return (
    <a href={element.url} {...attributes} className={"link"}>
      {children}
    </a>
  );
}
