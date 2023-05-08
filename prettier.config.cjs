/** @type {import("prettier").Config} */
module.exports = {
  pluginSearchDirs: false,
  plugins: [
    require.resolve("prettier-plugin-jsdoc"),
    require.resolve("@trivago/prettier-plugin-sort-imports"),
  ],
  importOrder: ["^node:", "<THIRD_PARTY_MODULES>", "^~", "^.", "^/"],
};
