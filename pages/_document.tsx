import { Html, Head, Main, NextScript } from 'next/document'
import { Navbar } from 'react-bootstrap'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Navbar/>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
