const React = require('react');
const ReactDOMServer = require('react-dom/server');
const serialize      = require('serialize-javascript');

function HTML(props){
  let component = props.component || null;
  let data = {};

  if(!!props.store){
    data = props.store.getState();
  }

  let html =
    <html>
      <head>
      </head>
      <body>
        <div id='content' dangouslySetInnerHTML={{ __html: component }}/>
        <script dangerouslySetInnerHTML={{ __html:`window.__data=${serialize(data)}` }}/>
        <script src='/dist/main.js'/>
      </body>
    </html>

  return html;
}
