import { useMemo, useCallback } from "react";
import { Editable, Slate, withReact } from "slate-react";
import { createEditor } from "slate";
import useEditorConfig from '../hooks/useEditorConfig'
import { identifyLinksInTextIfAny } from '../utils/EditorUtils'

export default function Editor({ document, onChange }) {
  const editor = useMemo(() => withReact(createEditor()), []);
  const { renderElement, renderLeaf } = useEditorConfig(editor);

  const onChangeLocal = useCallback(
    (document) => {
      onChange(document); 
      identifyLinksInTextIfAny(editor);
    },
    [onChange, editor]
  );

  return (
    <Slate editor={editor} value={document} onChange={onChangeLocal}>
      <Editable renderElement={renderElement} renderLeaf={renderLeaf} />
    </Slate>
  );
}