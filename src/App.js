import React, { useState } from 'react'
import Editor from './components/Editor';
import ExampleDocument from './utils/ExampleDocument'
import serialize from './utils/SerializeToHtml'
import './App.css'

function App() {
  const [document, setDocument] = useState(ExampleDocument);

  const handleOnChange = (document) => {
    setDocument(document)
  }

  return (
    <>
      <header>
        Header
      </header>
      <main>
        <p>Editor:</p>
        <div className="editor">
          <Editor document={document} onChange={handleOnChange} />
        </div>
        <p>Serialized HTML:</p>
        <div className="output">
          <div className="content" dangerouslySetInnerHTML={{ __html: serialize({ children: document }) }} />
        </div>
      </main>
    </>
  )
}

export default App