module.exports = {
  testPathIgnorePatterns: ['/node_modules/','/dist/'],
  moduleFileExtensions: [
    "js",
    "ts",
    "vue",
    "tsx"
  ],
  moduleNameMapper:{
    "^@/(.*)$":"<rootDir>/src/$1"
  },
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  transform: {
    '^.+\\.vue$': 'vue-jest'
  }
}
