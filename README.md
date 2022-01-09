# Simple Editor with Slate

A 'proof of concept' editor with Slate.

A simplified version of 

- [https://github.com/shalabhvyas/wysiwyg-editor](https://github.com/shalabhvyas/wysiwyg-editor)
- [Building A Rich Text Editor (WYSIWYG)](https://www.smashingmagazine.com/2021/05/building-wysiwyg-editor-javascript-slatejs/)

Hyperlinks are created automatically with 'space after link', and word breaks hyphens are handled correctly for long words and long links. 

@mentions are enabled, and will insert a username at an inline element at the current cursor position.

There is an example HTML serializer.

## Setup

`yarn install`

`yarn start`