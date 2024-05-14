import { type TypedDocumentString } from "./gql/graphql";
import { type GraphQLResponse } from "./types";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type NextFetchRequestConfig = any;

export const executeGraphql = async <TResult, TVariables>({
  query,
  variables,
  cache,
  headers,
  next,
}: {
  query: TypedDocumentString<TResult, TVariables>,
  variables: TVariables,
  cache?: RequestCache,
  headers?: HeadersInit,
  next?: NextFetchRequestConfig | undefined
} & (TVariables extends { [key: string]: never } ? { variables?: never } : { variables: TVariables })): Promise<TResult> => {
  if (!process.env["GRAPHQL_URL"]) {
    throw TypeError("GRAPHQL_URL is not defined");
  }

  const res = await fetch(process.env["GRAPHQL_URL"], {
    method: "POST",
    body: JSON.stringify({
      query,
      variables,
    }),
    cache,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    next,
    headers: {
      ...headers,
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env["GRAPHQL_TOKEN"]}`,
    },
  });

  const graphqlResponse = (await res.json()) as GraphQLResponse<TResult>;

  if (graphqlResponse.errors) {
    throw TypeError(JSON.stringify(graphqlResponse.errors));
  }

  return graphqlResponse.data;
};
