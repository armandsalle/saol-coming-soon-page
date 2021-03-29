const path = require("path")

module.exports = {
  future: {
    webpack5: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles"), path.join(__dirname, "public")],
  },
}
