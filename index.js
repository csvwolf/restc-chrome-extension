const content = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>restc</title>
  <link rel="stylesheet" href="https://shadow.elemecdn.com/gh/highlightjs/cdn-release@9.8.0/build/styles/default.min.css">
  <link rel="stylesheet" href="https://shadow.elemecdn.com/gh/codemirror/CodeMirror@5.19.0/lib/codemirror.css"></script>
  <link rel="stylesheet" href="https://shadow.elemecdn.com/gh/codemirror/CodeMirror@5.19.0/theme/material.css"></script>
  <script src="https://shadow.elemecdn.com/npm/jinkela@1.2.18/umd.min.js"></script>
  <script src="https://shadow.elemecdn.com/gh/highlightjs/cdn-release@9.8.0/build/highlight.min.js"></script>
  <script src="https://shadow.elemecdn.com/gh/codemirror/CodeMirror@5.19.0/lib/codemirror.min.js"></script>
  <script src="https://shadow.elemecdn.com/gh/codemirror/CodeMirror@5.19.0/mode/javascript/javascript.min.js"></script>
  <script src="https://shadow.elemecdn.com/gh/codemirror/CodeMirror@5.19.0/addon/display/autorefresh.min.js"></script>
  <script src="https://shadow.elemecdn.com/npm/json-format-safely@1.2.2/index.js"></script>
  <script src="https://shadow.elemecdn.com/npm/content-disposition-attachment@0.1.1/build@module=ContentDispositionAttachment&amp;format=umd!toes5!uglifyjs!index.js"></script>
</head>
<body>
<script src="https://shadow.elemecdn.com/lib/test@0.0.1/body.js"></script>
</body>
</html>

`
chrome.webNavigation.onCommitted.addListener((data) => {
  chrome.tabs.executeScript({
    code: `document.write(\`${content}\`)`
  })
});
