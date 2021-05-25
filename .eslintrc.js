module.exports = {
  root: true,
  extends: ['airbnb', 'prettier', 'prettier/react', '@react-native-community'],
  plugins: ['prettier'],
  parser: 'babel-eslint',
  rules: {
    'no-var': 'error',
    'no-multi-spaces': 'error',
    'space-in-parens': 'error',
    'no-multiple-empty-lines': 'error',
    'prefer-const': 'error',
    'no-use-before-define': 'error',
    'react/jsx-filename-extension': [1, {extensions: ['.js', '.jsx']}],
    'import/no-cycle': [2, {maxDepth: 1, ignoreExternal: true}],
    semi: ['error', 'never', {beforeStatementContinuationChars: 'always'}],
    'comma-dangle': [
      'error',
      {
        arrays: 'never',
        objects: 'never',
        imports: 'never',
        exports: 'never',
        functions: 'never'
      }
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: false,
        optionalDependencies: false,
        peerDependencies: false
      }
    ],
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        required: {
          some: ['nesting', 'id']
        }
      }
    ],
    'jsx-a11y/label-has-for': [
      'error',
      {
        required: {
          some: ['nesting', 'id']
        }
      }
    ]
  }
}
