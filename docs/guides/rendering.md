# Client and Server rendering

It's recommended that you use a module loader that supports package aliases
(e.g., webpack), and alias `react-native` to `react-native-web`.

```js
// webpack.config.js

module.exports = {
  // ...other configuration
  resolve: {
    alias: {
      'react-native': 'react-native-web'
    }
  }
}
```

## Client-side rendering

Rendering without using the `AppRegistry`:

```js
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server'

// DOM render
ReactDOM.render(<div />, document.getElementById('react-app'))

// Server render
ReactDOMServer.renderToString(<div />)
ReactDOMServer.renderToStaticMarkup(<div />)
```

Rendering using the `AppRegistry`:

```js
// App.js

import React from 'react'

// component that renders the app
const AppContainer = (props) => { /* ... */ }
export default AppContainer
```

```js
// client.js

import App from './App'
import { AppRegistry } from 'react-native'

// registers the app
AppRegistry.registerComponent('App', () => App)

// mounts and runs the app within the `rootTag` DOM node
AppRegistry.runApplication('App', { initialProps, rootTag: document.getElementById('react-app') })
```

React Native for Web extends `AppRegistry` to provide support for server-side
rendering.

```js
// AppShell.js

import React from 'react'

const AppShell = (html, styleElement) => (
  <html>
    <head>
      <meta charSet="utf-8" />
      <meta content="initial-scale=1,width=device-width" name="viewport" />
      {styleElement}
    </head>
    <body>
      <div id="react-app" dangerouslySetInnerHTML={{ __html: html }} />
    </body>
  </html>
)
export default AppShell
```

```js
// server.js

import App from './App'
import AppShell from './AppShell'
import { AppRegistry } from 'react-native'

// registers the app
AppRegistry.registerComponent('App', () => App)

// prerenders the app
const { html, style, styleElement } = AppRegistry.prerenderApplication('App', { initialProps })

// renders the full-page markup
const renderedApplicationHTML = React.renderToStaticMarkup(<AppShell html={html} styleElement={styleElement} />)
```
