/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateFactory = /* GraphQL */ `subscription OnCreateFactory($filter: ModelSubscriptionFactoryFilterInput) {
  onCreateFactory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateFactorySubscriptionVariables,
  APITypes.OnCreateFactorySubscription
>;
export const onUpdateFactory = /* GraphQL */ `subscription OnUpdateFactory($filter: ModelSubscriptionFactoryFilterInput) {
  onUpdateFactory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateFactorySubscriptionVariables,
  APITypes.OnUpdateFactorySubscription
>;
export const onDeleteFactory = /* GraphQL */ `subscription OnDeleteFactory($filter: ModelSubscriptionFactoryFilterInput) {
  onDeleteFactory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteFactorySubscriptionVariables,
  APITypes.OnDeleteFactorySubscription
>;
export const onCreateCategory = /* GraphQL */ `subscription OnCreateCategory($filter: ModelSubscriptionCategoryFilterInput) {
  onCreateCategory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCategorySubscriptionVariables,
  APITypes.OnCreateCategorySubscription
>;
export const onUpdateCategory = /* GraphQL */ `subscription OnUpdateCategory($filter: ModelSubscriptionCategoryFilterInput) {
  onUpdateCategory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCategorySubscriptionVariables,
  APITypes.OnUpdateCategorySubscription
>;
export const onDeleteCategory = /* GraphQL */ `subscription OnDeleteCategory($filter: ModelSubscriptionCategoryFilterInput) {
  onDeleteCategory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCategorySubscriptionVariables,
  APITypes.OnDeleteCategorySubscription
>;
export const onCreateProduct = /* GraphQL */ `subscription OnCreateProduct($filter: ModelSubscriptionProductFilterInput) {
  onCreateProduct(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateProductSubscriptionVariables,
  APITypes.OnCreateProductSubscription
>;
export const onUpdateProduct = /* GraphQL */ `subscription OnUpdateProduct($filter: ModelSubscriptionProductFilterInput) {
  onUpdateProduct(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateProductSubscriptionVariables,
  APITypes.OnUpdateProductSubscription
>;
export const onDeleteProduct = /* GraphQL */ `subscription OnDeleteProduct($filter: ModelSubscriptionProductFilterInput) {
  onDeleteProduct(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteProductSubscriptionVariables,
  APITypes.OnDeleteProductSubscription
>;
export const onCreatePackage = /* GraphQL */ `subscription OnCreatePackage($filter: ModelSubscriptionPackageFilterInput) {
  onCreatePackage(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreatePackageSubscriptionVariables,
  APITypes.OnCreatePackageSubscription
>;
export const onUpdatePackage = /* GraphQL */ `subscription OnUpdatePackage($filter: ModelSubscriptionPackageFilterInput) {
  onUpdatePackage(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdatePackageSubscriptionVariables,
  APITypes.OnUpdatePackageSubscription
>;
export const onDeletePackage = /* GraphQL */ `subscription OnDeletePackage($filter: ModelSubscriptionPackageFilterInput) {
  onDeletePackage(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeletePackageSubscriptionVariables,
  APITypes.OnDeletePackageSubscription
>;
export const onCreateShipment = /* GraphQL */ `subscription OnCreateShipment($filter: ModelSubscriptionShipmentFilterInput) {
  onCreateShipment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateShipmentSubscriptionVariables,
  APITypes.OnCreateShipmentSubscription
>;
export const onUpdateShipment = /* GraphQL */ `subscription OnUpdateShipment($filter: ModelSubscriptionShipmentFilterInput) {
  onUpdateShipment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateShipmentSubscriptionVariables,
  APITypes.OnUpdateShipmentSubscription
>;
export const onDeleteShipment = /* GraphQL */ `subscription OnDeleteShipment($filter: ModelSubscriptionShipmentFilterInput) {
  onDeleteShipment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteShipmentSubscriptionVariables,
  APITypes.OnDeleteShipmentSubscription
>;
export const onCreatePurchase = /* GraphQL */ `subscription OnCreatePurchase($filter: ModelSubscriptionPurchaseFilterInput) {
  onCreatePurchase(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreatePurchaseSubscriptionVariables,
  APITypes.OnCreatePurchaseSubscription
>;
export const onUpdatePurchase = /* GraphQL */ `subscription OnUpdatePurchase($filter: ModelSubscriptionPurchaseFilterInput) {
  onUpdatePurchase(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdatePurchaseSubscriptionVariables,
  APITypes.OnUpdatePurchaseSubscription
>;
export const onDeletePurchase = /* GraphQL */ `subscription OnDeletePurchase($filter: ModelSubscriptionPurchaseFilterInput) {
  onDeletePurchase(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeletePurchaseSubscriptionVariables,
  APITypes.OnDeletePurchaseSubscription
>;
export const onCreateSalesrep = /* GraphQL */ `subscription OnCreateSalesrep($filter: ModelSubscriptionSalesrepFilterInput) {
  onCreateSalesrep(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateSalesrepSubscriptionVariables,
  APITypes.OnCreateSalesrepSubscription
>;
export const onUpdateSalesrep = /* GraphQL */ `subscription OnUpdateSalesrep($filter: ModelSubscriptionSalesrepFilterInput) {
  onUpdateSalesrep(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateSalesrepSubscriptionVariables,
  APITypes.OnUpdateSalesrepSubscription
>;
export const onDeleteSalesrep = /* GraphQL */ `subscription OnDeleteSalesrep($filter: ModelSubscriptionSalesrepFilterInput) {
  onDeleteSalesrep(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteSalesrepSubscriptionVariables,
  APITypes.OnDeleteSalesrepSubscription
>;
export const onCreateIndustry = /* GraphQL */ `subscription OnCreateIndustry($filter: ModelSubscriptionIndustryFilterInput) {
  onCreateIndustry(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateIndustrySubscriptionVariables,
  APITypes.OnCreateIndustrySubscription
>;
export const onUpdateIndustry = /* GraphQL */ `subscription OnUpdateIndustry($filter: ModelSubscriptionIndustryFilterInput) {
  onUpdateIndustry(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateIndustrySubscriptionVariables,
  APITypes.OnUpdateIndustrySubscription
>;
export const onDeleteIndustry = /* GraphQL */ `subscription OnDeleteIndustry($filter: ModelSubscriptionIndustryFilterInput) {
  onDeleteIndustry(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteIndustrySubscriptionVariables,
  APITypes.OnDeleteIndustrySubscription
>;
export const onCreateAddress = /* GraphQL */ `subscription OnCreateAddress($filter: ModelSubscriptionAddressFilterInput) {
  onCreateAddress(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateAddressSubscriptionVariables,
  APITypes.OnCreateAddressSubscription
>;
export const onUpdateAddress = /* GraphQL */ `subscription OnUpdateAddress($filter: ModelSubscriptionAddressFilterInput) {
  onUpdateAddress(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateAddressSubscriptionVariables,
  APITypes.OnUpdateAddressSubscription
>;
export const onDeleteAddress = /* GraphQL */ `subscription OnDeleteAddress($filter: ModelSubscriptionAddressFilterInput) {
  onDeleteAddress(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteAddressSubscriptionVariables,
  APITypes.OnDeleteAddressSubscription
>;
export const onCreateBank = /* GraphQL */ `subscription OnCreateBank($filter: ModelSubscriptionBankFilterInput) {
  onCreateBank(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateBankSubscriptionVariables,
  APITypes.OnCreateBankSubscription
>;
export const onUpdateBank = /* GraphQL */ `subscription OnUpdateBank($filter: ModelSubscriptionBankFilterInput) {
  onUpdateBank(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateBankSubscriptionVariables,
  APITypes.OnUpdateBankSubscription
>;
export const onDeleteBank = /* GraphQL */ `subscription OnDeleteBank($filter: ModelSubscriptionBankFilterInput) {
  onDeleteBank(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteBankSubscriptionVariables,
  APITypes.OnDeleteBankSubscription
>;
export const onCreateBusiness = /* GraphQL */ `subscription OnCreateBusiness($filter: ModelSubscriptionBusinessFilterInput) {
  onCreateBusiness(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateBusinessSubscriptionVariables,
  APITypes.OnCreateBusinessSubscription
>;
export const onUpdateBusiness = /* GraphQL */ `subscription OnUpdateBusiness($filter: ModelSubscriptionBusinessFilterInput) {
  onUpdateBusiness(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateBusinessSubscriptionVariables,
  APITypes.OnUpdateBusinessSubscription
>;
export const onDeleteBusiness = /* GraphQL */ `subscription OnDeleteBusiness($filter: ModelSubscriptionBusinessFilterInput) {
  onDeleteBusiness(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteBusinessSubscriptionVariables,
  APITypes.OnDeleteBusinessSubscription
>;
export const onCreateBuyer = /* GraphQL */ `subscription OnCreateBuyer($filter: ModelSubscriptionBuyerFilterInput) {
  onCreateBuyer(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateBuyerSubscriptionVariables,
  APITypes.OnCreateBuyerSubscription
>;
export const onUpdateBuyer = /* GraphQL */ `subscription OnUpdateBuyer($filter: ModelSubscriptionBuyerFilterInput) {
  onUpdateBuyer(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateBuyerSubscriptionVariables,
  APITypes.OnUpdateBuyerSubscription
>;
export const onDeleteBuyer = /* GraphQL */ `subscription OnDeleteBuyer($filter: ModelSubscriptionBuyerFilterInput) {
  onDeleteBuyer(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteBuyerSubscriptionVariables,
  APITypes.OnDeleteBuyerSubscription
>;
export const onCreateApplication = /* GraphQL */ `subscription OnCreateApplication(
  $filter: ModelSubscriptionApplicationFilterInput
) {
  onCreateApplication(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateApplicationSubscriptionVariables,
  APITypes.OnCreateApplicationSubscription
>;
export const onUpdateApplication = /* GraphQL */ `subscription OnUpdateApplication(
  $filter: ModelSubscriptionApplicationFilterInput
) {
  onUpdateApplication(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateApplicationSubscriptionVariables,
  APITypes.OnUpdateApplicationSubscription
>;
export const onDeleteApplication = /* GraphQL */ `subscription OnDeleteApplication(
  $filter: ModelSubscriptionApplicationFilterInput
) {
  onDeleteApplication(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteApplicationSubscriptionVariables,
  APITypes.OnDeleteApplicationSubscription
>;
export const onCreateBlurb = /* GraphQL */ `subscription OnCreateBlurb($filter: ModelSubscriptionBlurbFilterInput) {
  onCreateBlurb(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateBlurbSubscriptionVariables,
  APITypes.OnCreateBlurbSubscription
>;
export const onUpdateBlurb = /* GraphQL */ `subscription OnUpdateBlurb($filter: ModelSubscriptionBlurbFilterInput) {
  onUpdateBlurb(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateBlurbSubscriptionVariables,
  APITypes.OnUpdateBlurbSubscription
>;
export const onDeleteBlurb = /* GraphQL */ `subscription OnDeleteBlurb($filter: ModelSubscriptionBlurbFilterInput) {
  onDeleteBlurb(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteBlurbSubscriptionVariables,
  APITypes.OnDeleteBlurbSubscription
>;
export const onCreateProductCategories = /* GraphQL */ `subscription OnCreateProductCategories(
  $filter: ModelSubscriptionProductCategoriesFilterInput
) {
  onCreateProductCategories(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateProductCategoriesSubscriptionVariables,
  APITypes.OnCreateProductCategoriesSubscription
>;
export const onUpdateProductCategories = /* GraphQL */ `subscription OnUpdateProductCategories(
  $filter: ModelSubscriptionProductCategoriesFilterInput
) {
  onUpdateProductCategories(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateProductCategoriesSubscriptionVariables,
  APITypes.OnUpdateProductCategoriesSubscription
>;
export const onDeleteProductCategories = /* GraphQL */ `subscription OnDeleteProductCategories(
  $filter: ModelSubscriptionProductCategoriesFilterInput
) {
  onDeleteProductCategories(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteProductCategoriesSubscriptionVariables,
  APITypes.OnDeleteProductCategoriesSubscription
>;
export const onCreateIndustryCategories = /* GraphQL */ `subscription OnCreateIndustryCategories(
  $filter: ModelSubscriptionIndustryCategoriesFilterInput
) {
  onCreateIndustryCategories(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateIndustryCategoriesSubscriptionVariables,
  APITypes.OnCreateIndustryCategoriesSubscription
>;
export const onUpdateIndustryCategories = /* GraphQL */ `subscription OnUpdateIndustryCategories(
  $filter: ModelSubscriptionIndustryCategoriesFilterInput
) {
  onUpdateIndustryCategories(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateIndustryCategoriesSubscriptionVariables,
  APITypes.OnUpdateIndustryCategoriesSubscription
>;
export const onDeleteIndustryCategories = /* GraphQL */ `subscription OnDeleteIndustryCategories(
  $filter: ModelSubscriptionIndustryCategoriesFilterInput
) {
  onDeleteIndustryCategories(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteIndustryCategoriesSubscriptionVariables,
  APITypes.OnDeleteIndustryCategoriesSubscription
>;
export const onCreateBusinessSalesreps = /* GraphQL */ `subscription OnCreateBusinessSalesreps(
  $filter: ModelSubscriptionBusinessSalesrepsFilterInput
) {
  onCreateBusinessSalesreps(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateBusinessSalesrepsSubscriptionVariables,
  APITypes.OnCreateBusinessSalesrepsSubscription
>;
export const onUpdateBusinessSalesreps = /* GraphQL */ `subscription OnUpdateBusinessSalesreps(
  $filter: ModelSubscriptionBusinessSalesrepsFilterInput
) {
  onUpdateBusinessSalesreps(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateBusinessSalesrepsSubscriptionVariables,
  APITypes.OnUpdateBusinessSalesrepsSubscription
>;
export const onDeleteBusinessSalesreps = /* GraphQL */ `subscription OnDeleteBusinessSalesreps(
  $filter: ModelSubscriptionBusinessSalesrepsFilterInput
) {
  onDeleteBusinessSalesreps(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteBusinessSalesrepsSubscriptionVariables,
  APITypes.OnDeleteBusinessSalesrepsSubscription
>;
export const onCreateBusinessIndustries = /* GraphQL */ `subscription OnCreateBusinessIndustries(
  $filter: ModelSubscriptionBusinessIndustriesFilterInput
) {
  onCreateBusinessIndustries(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateBusinessIndustriesSubscriptionVariables,
  APITypes.OnCreateBusinessIndustriesSubscription
>;
export const onUpdateBusinessIndustries = /* GraphQL */ `subscription OnUpdateBusinessIndustries(
  $filter: ModelSubscriptionBusinessIndustriesFilterInput
) {
  onUpdateBusinessIndustries(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateBusinessIndustriesSubscriptionVariables,
  APITypes.OnUpdateBusinessIndustriesSubscription
>;
export const onDeleteBusinessIndustries = /* GraphQL */ `subscription OnDeleteBusinessIndustries(
  $filter: ModelSubscriptionBusinessIndustriesFilterInput
) {
  onDeleteBusinessIndustries(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteBusinessIndustriesSubscriptionVariables,
  APITypes.OnDeleteBusinessIndustriesSubscription
>;
