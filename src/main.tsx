import './assets/main.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App.tsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <HashRouter>
//       <App />
//     </HashRouter>
//   </React.StrictMode>,
// )

kintone.events.on('mobile.portal.show', (event) => {
  ReactDOM.createRoot(kintone.mobile.portal.getContentSpaceElement()!).render(
    <React.StrictMode>
      <HashRouter>
        <App />
      </HashRouter>
    </React.StrictMode>,
  )
  return event
})
// const event = new Event("load");
// // @ts-ignore
// cybozu.eventTarget.dispatchEvent(event);