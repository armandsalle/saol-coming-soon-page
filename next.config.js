const path = require("path")

module.exports = {
  future: {
    webpack5: false,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles"), path.join(__dirname, "public")],
  },
  env: {
    ZAPIER_HOOK: process.env.ZAPIER_HOOK,
  },
}
