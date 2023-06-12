module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'react/react-in-jsx-scope': 0,
    '@typescript-eslint/semi': 0,
    '@typescript-eslint/comma-dangle': 0,
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto'
      }
    ],
     "react/jsx-uses-react": "error",
     "react/jsx-uses-vars": "error"
  },
  "ignorePatterns": ["**/*.css","**/*.scss"]
}
