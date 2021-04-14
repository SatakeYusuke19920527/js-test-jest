# 手順
1. npm init -y
2. npm install --save-dev typescript jest @types/jest ts-jest
3. package.json
  "scripts": {
    "test": "jest"
  },
  "jest": {
    "moduleFileExtensions": [
      "ts",
      "tsx",
      "js"
    ],
    "transform": {
      "^.+\\.(ts|tsx)$": "ts-jest"
    },
    "globals": {
      "ts-jest": {
        "tsConfigFile": "tsconfig.json"
      }
    },
    "testMatch": [
      "**/__tests__/*.test.+(ts|tsx|js)"
    ]
  }
4. tsconfig.json
   {
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true,
    "sourceMap": true
  },
  "include": [
    "./src/**/*.ts"
  ]
}
5. src配下に__tests__を作成する。
6. __tests__/**.test.ts と名前を設定する。