const ExampleDocument = [
  {
    type: "h1",
    children: [{ text: "Heading 1" }],
  },
  {
    type: "h2",
    children: [{ text: "Heading 2" }],
  },
  {
    type: "paragraph",
    children: [
      { text: "Hello World! This is a paragraph inside a sample document followed by a mention --> " },
      {
        type: "mention",
        user: "Dark Ralter",
        children: [
          { text: "" },
        ],
      },
      { text: " Even though we're unlikely to show these initially, we may offer some markdown features that allow... " },
      { text: " Some bold text. ", bold: true, code: true },
      { text: " Italic text. ", italic: true },
      { text: " Bold and underlined text.", bold: true, underline: true },
      { text: " variableFoo ", code: true },
      { text: " Some text before a link. " },
    ],
  },
  {
    type: "paragraph",
    children: [
      { text: "Some text that will contain a long word as well as enough text to test hyphenation of other words in the same paragraph. The following long word: 0x295e26495CEF6F69dFA69911d9D8e4F3bBadB89B "},
      {
        type: "link",
        url: "https://www.google.com",
        children: [
          { text: "Google.com" },
        ],
      },
    ],
  },
  {
    type: "paragraph",
    children: [
      { text: "Another paragraph here with more long text and long words and links. " },
      {
        type: "link",
        url: "https://bscscan.com/address/0x295e26495cef6f69dfa69911d9d8e4f3bbadb89b ",
        children: [
          { text: "https://bscscan.com/address/0x295e26495cef6f69dfa69911d9d8e4f3bbadb89b" },
        ],
      },
      { text: " Some text that will contain a long word as well as enough text to test hyphenation of other words in the same paragraph. The following long word: 0x295e26495CEF6F69dFA69911d9D8e4F3bBadB89B "},
    ],
  },
];

export default ExampleDocument;