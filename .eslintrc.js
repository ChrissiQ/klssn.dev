module.exports = {
  extends: ["@remix-run/eslint-config", "plugin:prettier/recommended"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
    "arrow-body-style": "off", // https://github.com/prettier/eslint-plugin-prettier/issues/65
    "prefer-arrow-callback": "off", // https://github.com/prettier/eslint-plugin-prettier/issues/65
  },
};
