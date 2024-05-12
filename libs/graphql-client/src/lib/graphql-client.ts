import { type TypedDocumentString } from "./gql/graphql";
import { type GraphQLResponse } from "./types";


export const executeGraphql = async <TResult, TVariables>(
  query: TypedDocumentString<TResult, TVariables>,
  variables: TVariables,
): Promise<TResult> => {
  if (!process.env["GRAPHQL_URL"]) {
    throw TypeError("GRAPHQL_URL is not defined");
  }

  const res = await fetch(process.env["GRAPHQL_URL"], {
    method: "POST",
    body: JSON.stringify({
      query,
      variables,
    }),
    headers: {
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
