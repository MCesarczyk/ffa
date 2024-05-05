/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query DogsGetList {\n  dogs {\n    id\n    name\n    breed\n    price\n    image {\n      id\n      url\n      fileName\n    }\n  }\n}": types.DogsGetListDocument,
    "query ProductGetById($id: ID!) {\n  product(where: {id: $id}) {\n    id\n    name\n    description\n    longDescription\n    price\n    category\n    image {\n      id\n      url\n      fileName\n    }\n    rating\n    rateCount\n  }\n}": types.ProductGetByIdDocument,
    "query ProductsGetList($first: Int, $skip: Int) {\n  products(first: $first, skip: $skip) {\n    id\n    name\n    description\n    price\n    category\n    image {\n      id\n      url\n      fileName\n    }\n  }\n}": types.ProductsGetListDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query DogsGetList {\n  dogs {\n    id\n    name\n    breed\n    price\n    image {\n      id\n      url\n      fileName\n    }\n  }\n}"): typeof import('./graphql').DogsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetById($id: ID!) {\n  product(where: {id: $id}) {\n    id\n    name\n    description\n    longDescription\n    price\n    category\n    image {\n      id\n      url\n      fileName\n    }\n    rating\n    rateCount\n  }\n}"): typeof import('./graphql').ProductGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetList($first: Int, $skip: Int) {\n  products(first: $first, skip: $skip) {\n    id\n    name\n    description\n    price\n    category\n    image {\n      id\n      url\n      fileName\n    }\n  }\n}"): typeof import('./graphql').ProductsGetListDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
