function embedSocial(d, s, id) {
  var js
  if (d.getElementById(id)) {
    return
  }
  js = d.createElement(s)
  js.id = id
  js.src = "https://embedsocial.com/embedscript/ei.js"
  d.getElementsByTagName("head")[0].appendChild(js)
}
