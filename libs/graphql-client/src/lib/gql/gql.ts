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
    "mutation CartCreate($total: Int!) {\n  createOrder(data: {total: $total}) {\n    ...Cart\n  }\n}": types.CartCreateDocument,
    "query CartGetById($id: ID!) {\n  order(where: {id: $id}) {\n    ...Cart\n  }\n}": types.CartGetByIdDocument,
    "fragment Cart on Order {\n  id\n  total\n  orderItems {\n    id\n    product {\n      id\n      name\n      price\n    }\n    quantity\n    total\n  }\n}": types.CartFragmentDoc,
    "mutation CartPublish($id: ID!) {\n  publishOrder(where: {id: $id}, to: PUBLISHED) {\n    id\n  }\n}": types.CartPublishDocument,
    "query DogGetById($id: ID!) {\n  dog(where: {id: $id}) {\n    id\n    name\n    breed\n    price\n    image {\n      id\n      url\n      fileName\n    }\n  }\n}": types.DogGetByIdDocument,
    "query DogsGetList($first: Int, $skip: Int) {\n  dogs(first: $first, skip: $skip) {\n    id\n    name\n    breed\n    price\n    image {\n      id\n      url\n      fileName\n    }\n  }\n}": types.DogsGetListDocument,
    "mutation OrderItemCreate($cartId: ID!, $productId: ID!, $total: Int!) {\n  createOrderItem(\n    data: {quantity: 1, total: $total, orderId: {connect: {id: $cartId}}, product: {connect: {id: $productId}}}\n  ) {\n    id\n  }\n}": types.OrderItemCreateDocument,
    "mutation OrderItemPublish($id: ID!) {\n  publishOrderItem(where: {id: $id}, to: PUBLISHED) {\n    id\n  }\n}": types.OrderItemPublishDocument,
    "query ProductGetById($id: ID!) {\n  product(where: {id: $id}) {\n    id\n    name\n    description\n    longDescription\n    price\n    category\n    image {\n      id\n      url\n      fileName\n    }\n    rating\n    rateCount\n  }\n}": types.ProductGetByIdDocument,
    "query ProductsGetList($first: Int, $skip: Int) {\n  products(first: $first, skip: $skip) {\n    id\n    name\n    description\n    price\n    category\n    image {\n      id\n      url\n      fileName\n    }\n  }\n}": types.ProductsGetListDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartCreate($total: Int!) {\n  createOrder(data: {total: $total}) {\n    ...Cart\n  }\n}"): typeof import('./graphql').CartCreateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CartGetById($id: ID!) {\n  order(where: {id: $id}) {\n    ...Cart\n  }\n}"): typeof import('./graphql').CartGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment Cart on Order {\n  id\n  total\n  orderItems {\n    id\n    product {\n      id\n      name\n      price\n    }\n    quantity\n    total\n  }\n}"): typeof import('./graphql').CartFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartPublish($id: ID!) {\n  publishOrder(where: {id: $id}, to: PUBLISHED) {\n    id\n  }\n}"): typeof import('./graphql').CartPublishDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query DogGetById($id: ID!) {\n  dog(where: {id: $id}) {\n    id\n    name\n    breed\n    price\n    image {\n      id\n      url\n      fileName\n    }\n  }\n}"): typeof import('./graphql').DogGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query DogsGetList($first: Int, $skip: Int) {\n  dogs(first: $first, skip: $skip) {\n    id\n    name\n    breed\n    price\n    image {\n      id\n      url\n      fileName\n    }\n  }\n}"): typeof import('./graphql').DogsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation OrderItemCreate($cartId: ID!, $productId: ID!, $total: Int!) {\n  createOrderItem(\n    data: {quantity: 1, total: $total, orderId: {connect: {id: $cartId}}, product: {connect: {id: $productId}}}\n  ) {\n    id\n  }\n}"): typeof import('./graphql').OrderItemCreateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation OrderItemPublish($id: ID!) {\n  publishOrderItem(where: {id: $id}, to: PUBLISHED) {\n    id\n  }\n}"): typeof import('./graphql').OrderItemPublishDocument;
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
