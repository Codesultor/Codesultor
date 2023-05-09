/** @type {import("prettier").Config} */
module.exports = {
  pluginSearchDirs: false,
  plugins: [
    require.resolve("prettier-plugin-jsdoc"),
    require.resolve("prettier-plugin-prisma"),
  ],
};
