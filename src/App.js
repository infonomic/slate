import React, { useState } from 'react'
import Editor from './components/Editor';
import ExampleDocument from './utils/ExampleDocument'
import serialize from './utils/SerializeToHtml'
import counter from './utils/Counter'
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
        <div className="editor-panel">
          <p>Editor:</p>
          <div className="editor">
            <Editor document={document} onChange={handleOnChange} />
          </div>
          <div>Character count: { counter({ children: document }) }</div>
        </div>
        <div className="html-panel">
          <p>Serialized HTML:</p>
          <div className="output">
            <div className="content" dangerouslySetInnerHTML={{ __html: serialize({ children: document }) }} />
          </div>
        </div>
      </main>
    </>
  )
}

export default App