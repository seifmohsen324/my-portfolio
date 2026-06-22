import js from "@eslint/js"
import tseslint from "typescript-eslint"

export default tseslint.config(
  {
    ignores: [".next/**", "node_modules/**", "next-env.d.ts"],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{js,mjs,ts,tsx}"],
    languageOptions: {
      globals: {
        console: "readonly",
        document: "readonly",
        FormData: "readonly",
        HTMLFormElement: "readonly",
        process: "readonly",
        React: "readonly",
        setTimeout: "readonly",
        window: "readonly",
      },
    },
  },
)
