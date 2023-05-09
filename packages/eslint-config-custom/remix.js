/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["./react.js"],
  plugins: ["no-relative-import-paths"],
  rules: {
    "no-relative-import-paths/no-relative-import-paths": [
      "error",
      { allowSameFolder: true, rootDir: "app", prefix: "~" },
    ],
  },
};
