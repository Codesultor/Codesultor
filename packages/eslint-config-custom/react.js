/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    "./base.js",
    "plugin:jsx-a11y/recommended",
    "plugin:tailwindcss/recommended",
    "prettier",
  ],
  plugins: ["jsx-a11y", "tailwindcss"],
};
