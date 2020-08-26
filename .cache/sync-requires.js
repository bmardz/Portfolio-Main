const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/brycemardon/Desktop/Portfolio-Main/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/brycemardon/Desktop/Portfolio-Main/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/brycemardon/Desktop/Portfolio-Main/src/pages/index.js"))),
  "component---src-pages-page-2-js": hot(preferDefault(require("/Users/brycemardon/Desktop/Portfolio-Main/src/pages/page-2.js")))
}

