module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
    'airbnb-typescript'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'typescript-eslint'],
  rules: {
    "import/prefer-default-export": "off",
    "import/no-named-as-default": 0,
    "prefer-object-spread": "off",
    "react/jsx-props-no-spreading": "off",
    "max-len": [2, 100],
    "max-params": [2, 3],
    "object-curly-newline": [
      "error",
      {
        "ObjectExpression": { "consistent": true },
        "ObjectPattern": { "consistent": true },
        "ImportDeclaration": { "consistent": true },
        "ExportDeclaration": { "consistent": true }
      }
    ],
    "@typescript-eslint/no-unused-vars": 2,
    "@typescript-eslint/lines-between-class-members": [
      "error",
      "always",
      {
        "exceptAfterSingleLine": true
      }
    ],
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [".jsx", ".tsx"]
      }
    ],
    "indent": ["error", 2, { "SwitchCase": 1 }],
    "@typescript-eslint/quotes": [
      "error",
      "single",
      {
        "allowTemplateLiterals": true
      }
    ],
    "quotes": ["error", "single"],
    "jsx-quotes": ["error", "prefer-double"],
    "no-underscore-dangle": 0,
    "class-methods-use-this": 0,
    "no-console": 0,
    "@typescript-eslint/no-use-before-define": 0,
    "import/no-cycle": 0,
    "react/function-component-definition": [
      2,
      {
        "namedComponents": "arrow-function",
        "unnamedComponents": "arrow-function"
      }
    ],
    "import/no-extraneous-dependencies": [
      "error",
      {
        "devDependencies": [
          "**/*.stories.*",
          "**/.storybook/**/*.*",
          "test.{ts,tsx}",
          "test-*.{ts,tsx}",
          "**/*{.,_}{test,spec}.{ts,tsx}"
        ],
        "peerDependencies": true
      }
    ]
  },
  parserOpts: {
    "ecmaVersion": "latest",
    "sourceType": "module",
    "project": ["./tsconfig.json"],
    "ecmaFeatures": {
      "jsx": true
    }
  },
}
