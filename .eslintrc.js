module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "jsx-quotes": ["error", "prefer-single"]
    },
    "parser": "babel-eslint",
    "env": {
        "browser": true
    }
};