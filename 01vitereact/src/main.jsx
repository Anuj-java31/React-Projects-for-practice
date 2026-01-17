import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

function MyApp() {
  return (
    <h1>Anuj Singh</h1>
  )
}
// const reactElement = {
//     type: 'a',
//     props: {
//         href: "www.google.com",
//         target: "_blank"
//     },
//     children: "Click here to go to google"
// }
// we can't render above element because of sysntactic limitations of react

const anotherElement = (
  <a href='www.google.com' target='blank'> Click Here</a>
)
const children= "Google"
const reactElement = React.createElement(
  'a',
  {href: 'www.google.com',target: 'blank'},
  'This link is for ',
  children
)

createRoot(document.getElementById('root')).render(
    reactElement
)
