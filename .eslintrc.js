module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react/recommended',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module'
  },
  plugins: ['eslint-plugin-import', 'eslint-plugin-react', '@typescript-eslint'],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    '@typescript-eslint/ban-types': ['off'],
    '@typescript-eslint/explicit-module-boundary-types': ['off'],
    '@typescript-eslint/no-array-constructor': ['off'],
    '@typescript-eslint/no-explicit-any': ['off'],
    '@typescript-eslint/no-inferrable-types': ['off'],
    '@typescript-eslint/no-unnecessary-type-assertion': ['off'],
    '@typescript-eslint/no-unsafe-assignment': ['off'],
    '@typescript-eslint/no-unsafe-call': ['off'],
    '@typescript-eslint/no-unsafe-member-access': ['off'],
    '@typescript-eslint/no-unsafe-return': ['off'],
    '@typescript-eslint/no-unused-vars': ['warn'],
    '@typescript-eslint/no-var-requires': ['off'],
    '@typescript-eslint/restrict-plus-operands': ['off'],
    '@typescript-eslint/restrict-template-expressions': ['off'],
    '@typescript-eslint/unbound-method': ['off'],

    'react/display-name': ['off'],
    'react/jsx-no-literals': ['error'],
    'react/jsx-no-target-blank': ['off'],
    'react/no-children-prop': ['off'],
    'react/no-deprecated': ['warn'],
    'react/prop-types': ['off'],

    'no-case-declarations': ['off'],
    'no-extra-boolean-cast': ['off'],
    'no-self-assign': ['off'],
    'no-useless-escape': ['off'],
    'prefer-const': ['warn'],
    'require-yield': ['off'],
    'sort-imports': ['off']
  }
};
