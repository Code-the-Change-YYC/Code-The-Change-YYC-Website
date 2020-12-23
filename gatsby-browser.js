require('jquery/dist/jquery')
require('@popperjs/core/dist/cjs/popper')
require('bootstrap/dist/js/bootstrap')
require('bootstrap/dist/css/bootstrap.css')
require('@fortawesome/fontawesome-free/css/all.css')
require('./src/styles/styles.css')

const React = require('react')
const Layout = require('./src/components/layout').default

//  Wrap ALL pages with the Layout component (contains Navbar & Footer)
exports.wrapPageElement = ({ element, props }) => {
  //  props provide the same kind of data to Layout as a Page element does.
  //  (location, data, etc. ) -- no need to pass those.
  // eslint-disable-next-line react/jsx-filename-extension
  return <Layout {...props}>{element}</Layout>
}
