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
    "mutation CartCreate($userName: String!, $userEmail: String!, $total: Int!) {\n  createOrder(data: {userName: $userName, userEmail: $userEmail, total: $total}) {\n    ...Cart\n  }\n}": types.CartCreateDocument,
    "query CartGetByEmail($email: String!) {\n  orders(where: {userEmail: $email}, orderBy: updatedAt_DESC) {\n    ...Cart\n  }\n}": types.CartGetByEmailDocument,
    "query CartGetById($id: ID!) {\n  order(where: {id: $id}) {\n    ...Cart\n  }\n}": types.CartGetByIdDocument,
    "fragment Cart on Order {\n  id\n  userName\n  userEmail\n  updatedAt\n  createdAt\n  total\n  orderItems {\n    id\n    product {\n      id\n      name\n      price\n    }\n    quantity\n    total\n  }\n}": types.CartFragmentDoc,
    "mutation CartPublish($id: ID!) {\n  publishOrder(where: {id: $id}, to: PUBLISHED) {\n    ...Cart\n  }\n}": types.CartPublishDocument,
    "query CategoriesGetList($first: Int, $skip: Int) {\n  categories(first: $first, skip: $skip) {\n    id\n    name\n    slug\n    cover {\n      id\n      fileName\n      url\n    }\n  }\n}": types.CategoriesGetListDocument,
    "query CategoryGetBySlugWithProductsList($categorySlug: String!, $first: Int, $skip: Int) {\n  categories(where: {slug: $categorySlug}) {\n    id\n    name\n    slug\n    description\n    products(first: $first, skip: $skip) {\n      ...ProductListItem\n    }\n  }\n}": types.CategoryGetBySlugWithProductsListDocument,
    "mutation OrderItemCreate($cartId: ID!, $productId: ID!, $total: Int!) {\n  createOrderItem(\n    data: {quantity: 1, total: $total, orderId: {connect: {id: $cartId}}, product: {connect: {id: $productId}}}\n  ) {\n    id\n  }\n}": types.OrderItemCreateDocument,
    "mutation OrderItemDelete($id: ID!) {\n  deleteOrderItem(where: {id: $id}) {\n    id\n  }\n}": types.OrderItemDeleteDocument,
    "mutation OrderItemPublish($id: ID!) {\n  publishOrderItem(where: {id: $id}, to: PUBLISHED) {\n    id\n  }\n}": types.OrderItemPublishDocument,
    "mutation OrderItemUpdateQuantity($id: ID!, $quantity: Int!, $total: Int!) {\n  updateOrderItem(where: {id: $id}, data: {quantity: $quantity, total: $total}) {\n    quantity\n    total\n  }\n}": types.OrderItemUpdateQuantityDocument,
    "query ProductGetById($id: ID!) {\n  product(where: {id: $id}) {\n    id\n    name\n    description\n    longDescription\n    price\n    category {\n      id\n      name\n    }\n    image {\n      id\n      url\n      fileName\n    }\n    rating\n    rateCount\n  }\n}": types.ProductGetByIdDocument,
    "fragment ProductListItem on Product {\n  id\n  name\n  description\n  price\n  category {\n    id\n    name\n  }\n  image {\n    id\n    url\n    fileName\n  }\n}": types.ProductListItemFragmentDoc,
    "query ProductsGetList($first: Int, $skip: Int) {\n  products(first: $first, skip: $skip) {\n    ...ProductListItem\n  }\n}": types.ProductsGetListDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartCreate($userName: String!, $userEmail: String!, $total: Int!) {\n  createOrder(data: {userName: $userName, userEmail: $userEmail, total: $total}) {\n    ...Cart\n  }\n}"): typeof import('./graphql').CartCreateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CartGetByEmail($email: String!) {\n  orders(where: {userEmail: $email}, orderBy: updatedAt_DESC) {\n    ...Cart\n  }\n}"): typeof import('./graphql').CartGetByEmailDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CartGetById($id: ID!) {\n  order(where: {id: $id}) {\n    ...Cart\n  }\n}"): typeof import('./graphql').CartGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment Cart on Order {\n  id\n  userName\n  userEmail\n  updatedAt\n  createdAt\n  total\n  orderItems {\n    id\n    product {\n      id\n      name\n      price\n    }\n    quantity\n    total\n  }\n}"): typeof import('./graphql').CartFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartPublish($id: ID!) {\n  publishOrder(where: {id: $id}, to: PUBLISHED) {\n    ...Cart\n  }\n}"): typeof import('./graphql').CartPublishDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoriesGetList($first: Int, $skip: Int) {\n  categories(first: $first, skip: $skip) {\n    id\n    name\n    slug\n    cover {\n      id\n      fileName\n      url\n    }\n  }\n}"): typeof import('./graphql').CategoriesGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoryGetBySlugWithProductsList($categorySlug: String!, $first: Int, $skip: Int) {\n  categories(where: {slug: $categorySlug}) {\n    id\n    name\n    slug\n    description\n    products(first: $first, skip: $skip) {\n      ...ProductListItem\n    }\n  }\n}"): typeof import('./graphql').CategoryGetBySlugWithProductsListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation OrderItemCreate($cartId: ID!, $productId: ID!, $total: Int!) {\n  createOrderItem(\n    data: {quantity: 1, total: $total, orderId: {connect: {id: $cartId}}, product: {connect: {id: $productId}}}\n  ) {\n    id\n  }\n}"): typeof import('./graphql').OrderItemCreateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation OrderItemDelete($id: ID!) {\n  deleteOrderItem(where: {id: $id}) {\n    id\n  }\n}"): typeof import('./graphql').OrderItemDeleteDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation OrderItemPublish($id: ID!) {\n  publishOrderItem(where: {id: $id}, to: PUBLISHED) {\n    id\n  }\n}"): typeof import('./graphql').OrderItemPublishDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation OrderItemUpdateQuantity($id: ID!, $quantity: Int!, $total: Int!) {\n  updateOrderItem(where: {id: $id}, data: {quantity: $quantity, total: $total}) {\n    quantity\n    total\n  }\n}"): typeof import('./graphql').OrderItemUpdateQuantityDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetById($id: ID!) {\n  product(where: {id: $id}) {\n    id\n    name\n    description\n    longDescription\n    price\n    category {\n      id\n      name\n    }\n    image {\n      id\n      url\n      fileName\n    }\n    rating\n    rateCount\n  }\n}"): typeof import('./graphql').ProductGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductListItem on Product {\n  id\n  name\n  description\n  price\n  category {\n    id\n    name\n  }\n  image {\n    id\n    url\n    fileName\n  }\n}"): typeof import('./graphql').ProductListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetList($first: Int, $skip: Int) {\n  products(first: $first, skip: $skip) {\n    ...ProductListItem\n  }\n}"): typeof import('./graphql').ProductsGetListDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
