require('./src/styles/magnific-popup.css')
require('./src/styles/bootstrap.css')
require('./src/styles/fontawesome-all.css')
require('./src/styles/styles.css')

const React = require('react')
const Layout = require('./src/components/layout').default

exports.onRenderBody = ({ setBodyAttributes }, pluginOptions) => {
  setBodyAttributes({
    'data-spy': 'scroll',
    'data-target': '.fixed-top',
  })
}

//Wrap ALL pages with the Layout component (contains Navbar & Footer)
exports.wrapPageElement = ({ element, props }) => {
  //props provide the same kind of data to Layout as a Page element does.
  //(location, data, etc. ) -- no need to pass those.
  return <Layout {...props}>{element}</Layout>
}
