const withTM = require("next-transpile-modules")([
  "@sds/colors",
  "@sds/typography",
]);

module.exports = withTM({
  reactStrictMode: true,
});
