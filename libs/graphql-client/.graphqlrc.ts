import { loadEnvConfig } from '@next/env';
import type { CodegenConfig } from '@graphql-codegen/cli';

loadEnvConfig(process.cwd());

const config: CodegenConfig = {
  overwrite: true,
  ignoreNoDocuments: true,
  schema: process.env.GRAPHQL_URL,
  documents: "./libs/graphql-client/src/lib/graphql/**/*.graphql",
  generates: {
    "libs/graphql-client/src/lib/gql/": {
      preset: "client",
      plugins: [],
      presetConfig: {
        fragmentMasking: false,
      },
      config: {
        useTypeImports: true,
        enumsAsTypes: true,
        defaultScalarType: "unknown",
        skipTypename: true,
        documentMode: "string",
      }
    }
  }
};

export default config;
