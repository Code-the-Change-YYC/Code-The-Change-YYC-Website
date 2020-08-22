require('./src/styles/magnific-popup.css')
require('./src/styles/bootstrap.css')
require('./src/styles/fontawesome-all.css')
require('./src/styles/styles.css')

const React = require('react')
const Layout = require('./src/components/layout').default

//Wrap ALL pages with the Layout component (contains Navbar & Footer)
exports.wrapPageElement = ({ element, props }) => {
  //props provide the same kind of data to Layout as a Page element does.
  //(location, data, etc. ) -- no need to pass those.
  return <Layout {...props}>{element}</Layout>
}

// Browser only. Used in development due to React Helmet not being able to load <script>
// tags in the order they are declared. (React Helmet issue, not me!)

const addScript = (url) => {
  const script = document.createElement('script')
  script.src = url
  script.async = true
  document.body.appendChild(script)
}
exports.onClientEntry = () => {
  window.onload = () => {
    addScript('https://code.jquery.com/jquery-3.5.1.min.js')
  }
}
