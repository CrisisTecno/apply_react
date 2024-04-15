/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getFactory = /* GraphQL */ `query GetFactory($id: ID!) {
  getFactory(id: $id) {
    id
    name
    url
    products {
      items {
        id
        name
        msrp
        price
        sku
        description
        status
        media
        item_weight_net
        item_weight_gross
        item_size_width
        item_size_depth
        item_size_height
        package_weight_net
        package_weight_gross
        package_size_width
        package_size_depth
        package_size_height
        items_per_package
        factory_id
        type
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetFactoryQueryVariables,
  APITypes.GetFactoryQuery
>;
export const listFactories = /* GraphQL */ `query ListFactories(
  $filter: ModelFactoryFilterInput
  $limit: Int
  $nextToken: String
) {
  listFactories(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      url
      products {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListFactoriesQueryVariables,
  APITypes.ListFactoriesQuery
>;
export const getCategory = /* GraphQL */ `query GetCategory($id: ID!) {
  getCategory(id: $id) {
    id
    name
    products {
      items {
        id
        categoryId
        productId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    industries {
      items {
        id
        categoryId
        industryId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    type
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCategoryQueryVariables,
  APITypes.GetCategoryQuery
>;
export const listCategories = /* GraphQL */ `query ListCategories(
  $filter: ModelCategoryFilterInput
  $limit: Int
  $nextToken: String
) {
  listCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      products {
        nextToken
        __typename
      }
      industries {
        nextToken
        __typename
      }
      type
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCategoriesQueryVariables,
  APITypes.ListCategoriesQuery
>;
export const getProduct = /* GraphQL */ `query GetProduct($id: ID!) {
  getProduct(id: $id) {
    id
    name
    msrp
    price
    sku
    description
    status
    media
    item_weight_net
    item_weight_gross
    item_size_width
    item_size_depth
    item_size_height
    package_weight_net
    package_weight_gross
    package_size_width
    package_size_depth
    package_size_height
    items_per_package
    categories {
      items {
        id
        categoryId
        productId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    factory_id
    factory {
      id
      name
      url
      products {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    type
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetProductQueryVariables,
  APITypes.GetProductQuery
>;
export const listProducts = /* GraphQL */ `query ListProducts(
  $filter: ModelProductFilterInput
  $limit: Int
  $nextToken: String
) {
  listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      msrp
      price
      sku
      description
      status
      media
      item_weight_net
      item_weight_gross
      item_size_width
      item_size_depth
      item_size_height
      package_weight_net
      package_weight_gross
      package_size_width
      package_size_depth
      package_size_height
      items_per_package
      categories {
        nextToken
        __typename
      }
      factory_id
      factory {
        id
        name
        url
        createdAt
        updatedAt
        __typename
      }
      type
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListProductsQueryVariables,
  APITypes.ListProductsQuery
>;
export const getPackage = /* GraphQL */ `query GetPackage($id: ID!) {
  getPackage(id: $id) {
    id
    product {
      id
      name
      msrp
      price
      sku
      description
      status
      media
      item_weight_net
      item_weight_gross
      item_size_width
      item_size_depth
      item_size_height
      package_weight_net
      package_weight_gross
      package_size_width
      package_size_depth
      package_size_height
      items_per_package
      categories {
        nextToken
        __typename
      }
      factory_id
      factory {
        id
        name
        url
        createdAt
        updatedAt
        __typename
      }
      type
      createdAt
      updatedAt
      __typename
    }
    weight_net
    weight_gross
    size_width
    size_depth
    size_height
    createdAt
    updatedAt
    shipmentPackagesId
    packageProductId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetPackageQueryVariables,
  APITypes.GetPackageQuery
>;
export const listPackages = /* GraphQL */ `query ListPackages(
  $filter: ModelPackageFilterInput
  $limit: Int
  $nextToken: String
) {
  listPackages(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      product {
        id
        name
        msrp
        price
        sku
        description
        status
        media
        item_weight_net
        item_weight_gross
        item_size_width
        item_size_depth
        item_size_height
        package_weight_net
        package_weight_gross
        package_size_width
        package_size_depth
        package_size_height
        items_per_package
        factory_id
        type
        createdAt
        updatedAt
        __typename
      }
      weight_net
      weight_gross
      size_width
      size_depth
      size_height
      createdAt
      updatedAt
      shipmentPackagesId
      packageProductId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPackagesQueryVariables,
  APITypes.ListPackagesQuery
>;
export const getShipment = /* GraphQL */ `query GetShipment($id: ID!) {
  getShipment(id: $id) {
    id
    packages {
      items {
        id
        weight_net
        weight_gross
        size_width
        size_depth
        size_height
        createdAt
        updatedAt
        shipmentPackagesId
        packageProductId
        __typename
      }
      nextToken
      __typename
    }
    departure
    arrival
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetShipmentQueryVariables,
  APITypes.GetShipmentQuery
>;
export const listShipments = /* GraphQL */ `query ListShipments(
  $filter: ModelShipmentFilterInput
  $limit: Int
  $nextToken: String
) {
  listShipments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      packages {
        nextToken
        __typename
      }
      departure
      arrival
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListShipmentsQueryVariables,
  APITypes.ListShipmentsQuery
>;
export const getPurchase = /* GraphQL */ `query GetPurchase($id: ID!) {
  getPurchase(id: $id) {
    id
    business {
      id
      name
      description
      salesreps {
        nextToken
        __typename
      }
      industries {
        nextToken
        __typename
      }
      addresses {
        nextToken
        __typename
      }
      banks {
        nextToken
        __typename
      }
      buyers {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    buyer {
      id
      first_name
      last_name
      user_name
      last_login
      is_owner
      email
      phone
      business_id
      business {
        id
        name
        description
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    purchaseBusinessId
    purchaseBuyerId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetPurchaseQueryVariables,
  APITypes.GetPurchaseQuery
>;
export const listPurchases = /* GraphQL */ `query ListPurchases(
  $filter: ModelPurchaseFilterInput
  $limit: Int
  $nextToken: String
) {
  listPurchases(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      business {
        id
        name
        description
        createdAt
        updatedAt
        __typename
      }
      buyer {
        id
        first_name
        last_name
        user_name
        last_login
        is_owner
        email
        phone
        business_id
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      purchaseBusinessId
      purchaseBuyerId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPurchasesQueryVariables,
  APITypes.ListPurchasesQuery
>;
export const getSalesrep = /* GraphQL */ `query GetSalesrep($id: ID!) {
  getSalesrep(id: $id) {
    id
    name
    title
    email
    phone
    businesses {
      items {
        id
        salesrepId
        businessId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    type
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetSalesrepQueryVariables,
  APITypes.GetSalesrepQuery
>;
export const listSalesreps = /* GraphQL */ `query ListSalesreps(
  $filter: ModelSalesrepFilterInput
  $limit: Int
  $nextToken: String
) {
  listSalesreps(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      title
      email
      phone
      businesses {
        nextToken
        __typename
      }
      type
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSalesrepsQueryVariables,
  APITypes.ListSalesrepsQuery
>;
export const getIndustry = /* GraphQL */ `query GetIndustry($id: ID!) {
  getIndustry(id: $id) {
    id
    name
    description
    businesses {
      items {
        id
        industryId
        businessId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    categories {
      items {
        id
        categoryId
        industryId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetIndustryQueryVariables,
  APITypes.GetIndustryQuery
>;
export const listIndustries = /* GraphQL */ `query ListIndustries(
  $filter: ModelIndustryFilterInput
  $limit: Int
  $nextToken: String
) {
  listIndustries(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      businesses {
        nextToken
        __typename
      }
      categories {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListIndustriesQueryVariables,
  APITypes.ListIndustriesQuery
>;
export const getAddress = /* GraphQL */ `query GetAddress($id: ID!) {
  getAddress(id: $id) {
    id
    street
    city
    state
    postal_code
    country
    is_default
    business_id
    business {
      id
      name
      description
      salesreps {
        nextToken
        __typename
      }
      industries {
        nextToken
        __typename
      }
      addresses {
        nextToken
        __typename
      }
      banks {
        nextToken
        __typename
      }
      buyers {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetAddressQueryVariables,
  APITypes.GetAddressQuery
>;
export const listAddresses = /* GraphQL */ `query ListAddresses(
  $filter: ModelAddressFilterInput
  $limit: Int
  $nextToken: String
) {
  listAddresses(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      street
      city
      state
      postal_code
      country
      is_default
      business_id
      business {
        id
        name
        description
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAddressesQueryVariables,
  APITypes.ListAddressesQuery
>;
export const getBank = /* GraphQL */ `query GetBank($id: ID!) {
  getBank(id: $id) {
    id
    account_name
    account_number
    routing_number
    is_default
    business_id
    business {
      id
      name
      description
      salesreps {
        nextToken
        __typename
      }
      industries {
        nextToken
        __typename
      }
      addresses {
        nextToken
        __typename
      }
      banks {
        nextToken
        __typename
      }
      buyers {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetBankQueryVariables, APITypes.GetBankQuery>;
export const listBanks = /* GraphQL */ `query ListBanks(
  $filter: ModelBankFilterInput
  $limit: Int
  $nextToken: String
) {
  listBanks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      account_name
      account_number
      routing_number
      is_default
      business_id
      business {
        id
        name
        description
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListBanksQueryVariables, APITypes.ListBanksQuery>;
export const getBusiness = /* GraphQL */ `query GetBusiness($id: ID!) {
  getBusiness(id: $id) {
    id
    name
    description
    salesreps {
      items {
        id
        salesrepId
        businessId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    industries {
      items {
        id
        industryId
        businessId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    addresses {
      items {
        id
        street
        city
        state
        postal_code
        country
        is_default
        business_id
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    banks {
      items {
        id
        account_name
        account_number
        routing_number
        is_default
        business_id
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    buyers {
      items {
        id
        first_name
        last_name
        user_name
        last_login
        is_owner
        email
        phone
        business_id
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetBusinessQueryVariables,
  APITypes.GetBusinessQuery
>;
export const listBusinesses = /* GraphQL */ `query ListBusinesses(
  $filter: ModelBusinessFilterInput
  $limit: Int
  $nextToken: String
) {
  listBusinesses(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      salesreps {
        nextToken
        __typename
      }
      industries {
        nextToken
        __typename
      }
      addresses {
        nextToken
        __typename
      }
      banks {
        nextToken
        __typename
      }
      buyers {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListBusinessesQueryVariables,
  APITypes.ListBusinessesQuery
>;
export const getBuyer = /* GraphQL */ `query GetBuyer($id: ID!) {
  getBuyer(id: $id) {
    id
    first_name
    last_name
    user_name
    last_login
    is_owner
    email
    phone
    business_id
    business {
      id
      name
      description
      salesreps {
        nextToken
        __typename
      }
      industries {
        nextToken
        __typename
      }
      addresses {
        nextToken
        __typename
      }
      banks {
        nextToken
        __typename
      }
      buyers {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetBuyerQueryVariables, APITypes.GetBuyerQuery>;
export const listBuyers = /* GraphQL */ `query ListBuyers(
  $filter: ModelBuyerFilterInput
  $limit: Int
  $nextToken: String
) {
  listBuyers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      first_name
      last_name
      user_name
      last_login
      is_owner
      email
      phone
      business_id
      business {
        id
        name
        description
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListBuyersQueryVariables,
  APITypes.ListBuyersQuery
>;
export const getApplication = /* GraphQL */ `query GetApplication($id: ID!) {
  getApplication(id: $id) {
    id
    status
    business_name
    street
    city
    state
    postal_code
    country
    account_name
    account_number
    routing_number
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetApplicationQueryVariables,
  APITypes.GetApplicationQuery
>;
export const listApplications = /* GraphQL */ `query ListApplications(
  $filter: ModelApplicationFilterInput
  $limit: Int
  $nextToken: String
) {
  listApplications(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      status
      business_name
      street
      city
      state
      postal_code
      country
      account_name
      account_number
      routing_number
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListApplicationsQueryVariables,
  APITypes.ListApplicationsQuery
>;
export const getBlurb = /* GraphQL */ `query GetBlurb($id: ID!) {
  getBlurb(id: $id) {
    id
    title
    description
    start_date
    end_date
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetBlurbQueryVariables, APITypes.GetBlurbQuery>;
export const listBlurbs = /* GraphQL */ `query ListBlurbs(
  $filter: ModelBlurbFilterInput
  $limit: Int
  $nextToken: String
) {
  listBlurbs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      description
      start_date
      end_date
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListBlurbsQueryVariables,
  APITypes.ListBlurbsQuery
>;
export const getProductCategories = /* GraphQL */ `query GetProductCategories($id: ID!) {
  getProductCategories(id: $id) {
    id
    categoryId
    productId
    category {
      id
      name
      products {
        nextToken
        __typename
      }
      industries {
        nextToken
        __typename
      }
      type
      createdAt
      updatedAt
      __typename
    }
    product {
      id
      name
      msrp
      price
      sku
      description
      status
      media
      item_weight_net
      item_weight_gross
      item_size_width
      item_size_depth
      item_size_height
      package_weight_net
      package_weight_gross
      package_size_width
      package_size_depth
      package_size_height
      items_per_package
      categories {
        nextToken
        __typename
      }
      factory_id
      factory {
        id
        name
        url
        createdAt
        updatedAt
        __typename
      }
      type
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetProductCategoriesQueryVariables,
  APITypes.GetProductCategoriesQuery
>;
export const listProductCategories = /* GraphQL */ `query ListProductCategories(
  $filter: ModelProductCategoriesFilterInput
  $limit: Int
  $nextToken: String
) {
  listProductCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      categoryId
      productId
      category {
        id
        name
        type
        createdAt
        updatedAt
        __typename
      }
      product {
        id
        name
        msrp
        price
        sku
        description
        status
        media
        item_weight_net
        item_weight_gross
        item_size_width
        item_size_depth
        item_size_height
        package_weight_net
        package_weight_gross
        package_size_width
        package_size_depth
        package_size_height
        items_per_package
        factory_id
        type
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListProductCategoriesQueryVariables,
  APITypes.ListProductCategoriesQuery
>;
export const getIndustryCategories = /* GraphQL */ `query GetIndustryCategories($id: ID!) {
  getIndustryCategories(id: $id) {
    id
    categoryId
    industryId
    category {
      id
      name
      products {
        nextToken
        __typename
      }
      industries {
        nextToken
        __typename
      }
      type
      createdAt
      updatedAt
      __typename
    }
    industry {
      id
      name
      description
      businesses {
        nextToken
        __typename
      }
      categories {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetIndustryCategoriesQueryVariables,
  APITypes.GetIndustryCategoriesQuery
>;
export const listIndustryCategories = /* GraphQL */ `query ListIndustryCategories(
  $filter: ModelIndustryCategoriesFilterInput
  $limit: Int
  $nextToken: String
) {
  listIndustryCategories(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      categoryId
      industryId
      category {
        id
        name
        type
        createdAt
        updatedAt
        __typename
      }
      industry {
        id
        name
        description
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListIndustryCategoriesQueryVariables,
  APITypes.ListIndustryCategoriesQuery
>;
export const getBusinessSalesreps = /* GraphQL */ `query GetBusinessSalesreps($id: ID!) {
  getBusinessSalesreps(id: $id) {
    id
    salesrepId
    businessId
    salesrep {
      id
      name
      title
      email
      phone
      businesses {
        nextToken
        __typename
      }
      type
      createdAt
      updatedAt
      __typename
    }
    business {
      id
      name
      description
      salesreps {
        nextToken
        __typename
      }
      industries {
        nextToken
        __typename
      }
      addresses {
        nextToken
        __typename
      }
      banks {
        nextToken
        __typename
      }
      buyers {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetBusinessSalesrepsQueryVariables,
  APITypes.GetBusinessSalesrepsQuery
>;
export const listBusinessSalesreps = /* GraphQL */ `query ListBusinessSalesreps(
  $filter: ModelBusinessSalesrepsFilterInput
  $limit: Int
  $nextToken: String
) {
  listBusinessSalesreps(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      salesrepId
      businessId
      salesrep {
        id
        name
        title
        email
        phone
        type
        createdAt
        updatedAt
        __typename
      }
      business {
        id
        name
        description
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListBusinessSalesrepsQueryVariables,
  APITypes.ListBusinessSalesrepsQuery
>;
export const getBusinessIndustries = /* GraphQL */ `query GetBusinessIndustries($id: ID!) {
  getBusinessIndustries(id: $id) {
    id
    industryId
    businessId
    industry {
      id
      name
      description
      businesses {
        nextToken
        __typename
      }
      categories {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    business {
      id
      name
      description
      salesreps {
        nextToken
        __typename
      }
      industries {
        nextToken
        __typename
      }
      addresses {
        nextToken
        __typename
      }
      banks {
        nextToken
        __typename
      }
      buyers {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetBusinessIndustriesQueryVariables,
  APITypes.GetBusinessIndustriesQuery
>;
export const listBusinessIndustries = /* GraphQL */ `query ListBusinessIndustries(
  $filter: ModelBusinessIndustriesFilterInput
  $limit: Int
  $nextToken: String
) {
  listBusinessIndustries(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      industryId
      businessId
      industry {
        id
        name
        description
        createdAt
        updatedAt
        __typename
      }
      business {
        id
        name
        description
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListBusinessIndustriesQueryVariables,
  APITypes.ListBusinessIndustriesQuery
>;
export const getCategoryByName = /* GraphQL */ `query GetCategoryByName(
  $name: String!
  $sortDirection: ModelSortDirection
  $filter: ModelCategoryFilterInput
  $limit: Int
  $nextToken: String
) {
  getCategoryByName(
    name: $name
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      products {
        nextToken
        __typename
      }
      industries {
        nextToken
        __typename
      }
      type
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCategoryByNameQueryVariables,
  APITypes.GetCategoryByNameQuery
>;
export const listCategoriesByName = /* GraphQL */ `query ListCategoriesByName(
  $type: String!
  $name: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelCategoryFilterInput
  $limit: Int
  $nextToken: String
) {
  listCategoriesByName(
    type: $type
    name: $name
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      products {
        nextToken
        __typename
      }
      industries {
        nextToken
        __typename
      }
      type
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCategoriesByNameQueryVariables,
  APITypes.ListCategoriesByNameQuery
>;
export const productsByFactory_id = /* GraphQL */ `query ProductsByFactory_id(
  $factory_id: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelProductFilterInput
  $limit: Int
  $nextToken: String
) {
  productsByFactory_id(
    factory_id: $factory_id
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      msrp
      price
      sku
      description
      status
      media
      item_weight_net
      item_weight_gross
      item_size_width
      item_size_depth
      item_size_height
      package_weight_net
      package_weight_gross
      package_size_width
      package_size_depth
      package_size_height
      items_per_package
      categories {
        nextToken
        __typename
      }
      factory_id
      factory {
        id
        name
        url
        createdAt
        updatedAt
        __typename
      }
      type
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ProductsByFactory_idQueryVariables,
  APITypes.ProductsByFactory_idQuery
>;
export const listSalesrepsByName = /* GraphQL */ `query ListSalesrepsByName(
  $type: String!
  $name: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelSalesrepFilterInput
  $limit: Int
  $nextToken: String
) {
  listSalesrepsByName(
    type: $type
    name: $name
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      title
      email
      phone
      businesses {
        nextToken
        __typename
      }
      type
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSalesrepsByNameQueryVariables,
  APITypes.ListSalesrepsByNameQuery
>;
export const addressesByBusiness_id = /* GraphQL */ `query AddressesByBusiness_id(
  $business_id: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelAddressFilterInput
  $limit: Int
  $nextToken: String
) {
  addressesByBusiness_id(
    business_id: $business_id
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      street
      city
      state
      postal_code
      country
      is_default
      business_id
      business {
        id
        name
        description
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.AddressesByBusiness_idQueryVariables,
  APITypes.AddressesByBusiness_idQuery
>;
export const banksByBusiness_id = /* GraphQL */ `query BanksByBusiness_id(
  $business_id: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelBankFilterInput
  $limit: Int
  $nextToken: String
) {
  banksByBusiness_id(
    business_id: $business_id
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      account_name
      account_number
      routing_number
      is_default
      business_id
      business {
        id
        name
        description
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.BanksByBusiness_idQueryVariables,
  APITypes.BanksByBusiness_idQuery
>;
export const buyersByBusiness_id = /* GraphQL */ `query BuyersByBusiness_id(
  $business_id: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelBuyerFilterInput
  $limit: Int
  $nextToken: String
) {
  buyersByBusiness_id(
    business_id: $business_id
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      first_name
      last_name
      user_name
      last_login
      is_owner
      email
      phone
      business_id
      business {
        id
        name
        description
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.BuyersByBusiness_idQueryVariables,
  APITypes.BuyersByBusiness_idQuery
>;
export const productCategoriesByCategoryId = /* GraphQL */ `query ProductCategoriesByCategoryId(
  $categoryId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelProductCategoriesFilterInput
  $limit: Int
  $nextToken: String
) {
  productCategoriesByCategoryId(
    categoryId: $categoryId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      categoryId
      productId
      category {
        id
        name
        type
        createdAt
        updatedAt
        __typename
      }
      product {
        id
        name
        msrp
        price
        sku
        description
        status
        media
        item_weight_net
        item_weight_gross
        item_size_width
        item_size_depth
        item_size_height
        package_weight_net
        package_weight_gross
        package_size_width
        package_size_depth
        package_size_height
        items_per_package
        factory_id
        type
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ProductCategoriesByCategoryIdQueryVariables,
  APITypes.ProductCategoriesByCategoryIdQuery
>;
export const productCategoriesByProductId = /* GraphQL */ `query ProductCategoriesByProductId(
  $productId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelProductCategoriesFilterInput
  $limit: Int
  $nextToken: String
) {
  productCategoriesByProductId(
    productId: $productId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      categoryId
      productId
      category {
        id
        name
        type
        createdAt
        updatedAt
        __typename
      }
      product {
        id
        name
        msrp
        price
        sku
        description
        status
        media
        item_weight_net
        item_weight_gross
        item_size_width
        item_size_depth
        item_size_height
        package_weight_net
        package_weight_gross
        package_size_width
        package_size_depth
        package_size_height
        items_per_package
        factory_id
        type
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ProductCategoriesByProductIdQueryVariables,
  APITypes.ProductCategoriesByProductIdQuery
>;
export const industryCategoriesByCategoryId = /* GraphQL */ `query IndustryCategoriesByCategoryId(
  $categoryId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelIndustryCategoriesFilterInput
  $limit: Int
  $nextToken: String
) {
  industryCategoriesByCategoryId(
    categoryId: $categoryId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      categoryId
      industryId
      category {
        id
        name
        type
        createdAt
        updatedAt
        __typename
      }
      industry {
        id
        name
        description
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.IndustryCategoriesByCategoryIdQueryVariables,
  APITypes.IndustryCategoriesByCategoryIdQuery
>;
export const industryCategoriesByIndustryId = /* GraphQL */ `query IndustryCategoriesByIndustryId(
  $industryId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelIndustryCategoriesFilterInput
  $limit: Int
  $nextToken: String
) {
  industryCategoriesByIndustryId(
    industryId: $industryId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      categoryId
      industryId
      category {
        id
        name
        type
        createdAt
        updatedAt
        __typename
      }
      industry {
        id
        name
        description
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.IndustryCategoriesByIndustryIdQueryVariables,
  APITypes.IndustryCategoriesByIndustryIdQuery
>;
export const businessSalesrepsBySalesrepId = /* GraphQL */ `query BusinessSalesrepsBySalesrepId(
  $salesrepId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelBusinessSalesrepsFilterInput
  $limit: Int
  $nextToken: String
) {
  businessSalesrepsBySalesrepId(
    salesrepId: $salesrepId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      salesrepId
      businessId
      salesrep {
        id
        name
        title
        email
        phone
        type
        createdAt
        updatedAt
        __typename
      }
      business {
        id
        name
        description
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.BusinessSalesrepsBySalesrepIdQueryVariables,
  APITypes.BusinessSalesrepsBySalesrepIdQuery
>;
export const businessSalesrepsByBusinessId = /* GraphQL */ `query BusinessSalesrepsByBusinessId(
  $businessId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelBusinessSalesrepsFilterInput
  $limit: Int
  $nextToken: String
) {
  businessSalesrepsByBusinessId(
    businessId: $businessId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      salesrepId
      businessId
      salesrep {
        id
        name
        title
        email
        phone
        type
        createdAt
        updatedAt
        __typename
      }
      business {
        id
        name
        description
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.BusinessSalesrepsByBusinessIdQueryVariables,
  APITypes.BusinessSalesrepsByBusinessIdQuery
>;
export const businessIndustriesByIndustryId = /* GraphQL */ `query BusinessIndustriesByIndustryId(
  $industryId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelBusinessIndustriesFilterInput
  $limit: Int
  $nextToken: String
) {
  businessIndustriesByIndustryId(
    industryId: $industryId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      industryId
      businessId
      industry {
        id
        name
        description
        createdAt
        updatedAt
        __typename
      }
      business {
        id
        name
        description
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.BusinessIndustriesByIndustryIdQueryVariables,
  APITypes.BusinessIndustriesByIndustryIdQuery
>;
export const businessIndustriesByBusinessId = /* GraphQL */ `query BusinessIndustriesByBusinessId(
  $businessId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelBusinessIndustriesFilterInput
  $limit: Int
  $nextToken: String
) {
  businessIndustriesByBusinessId(
    businessId: $businessId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      industryId
      businessId
      industry {
        id
        name
        description
        createdAt
        updatedAt
        __typename
      }
      business {
        id
        name
        description
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.BusinessIndustriesByBusinessIdQueryVariables,
  APITypes.BusinessIndustriesByBusinessIdQuery
>;
