const React = require('react')
// const { Helmet } = require('react-helmet')
const Layout = require('./src/components/layout').default

// exports.onRenderBody = ({ setHeadComponents, setHtmlAttributes, setBodyAttributes }) => {
//   const helmet = Helmet.renderStatic()
//   setHtmlAttributes(helmet.htmlAttributes.toComponent())
//   setBodyAttributes(helmet.bodyAttributes.toComponent())
//   setHeadComponents([
//     helmet.title.toComponent(),
//     helmet.link.toComponent(),
//     helmet.meta.toComponent(),
//     helmet.noscript.toComponent(),
//     helmet.script.toComponent(),
//     helmet.style.toComponent(),
//   ])
// }

exports.wrapPageElement = ({ element, props }) => {
  // eslint-disable-next-line react/jsx-filename-extension
  return <Layout {...props}>{element}</Layout>
}
