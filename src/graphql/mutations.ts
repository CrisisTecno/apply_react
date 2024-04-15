/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createFactory = /* GraphQL */ `mutation CreateFactory(
  $input: CreateFactoryInput!
  $condition: ModelFactoryConditionInput
) {
  createFactory(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateFactoryMutationVariables,
  APITypes.CreateFactoryMutation
>;
export const updateFactory = /* GraphQL */ `mutation UpdateFactory(
  $input: UpdateFactoryInput!
  $condition: ModelFactoryConditionInput
) {
  updateFactory(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateFactoryMutationVariables,
  APITypes.UpdateFactoryMutation
>;
export const deleteFactory = /* GraphQL */ `mutation DeleteFactory(
  $input: DeleteFactoryInput!
  $condition: ModelFactoryConditionInput
) {
  deleteFactory(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteFactoryMutationVariables,
  APITypes.DeleteFactoryMutation
>;
export const createCategory = /* GraphQL */ `mutation CreateCategory(
  $input: CreateCategoryInput!
  $condition: ModelCategoryConditionInput
) {
  createCategory(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateCategoryMutationVariables,
  APITypes.CreateCategoryMutation
>;
export const updateCategory = /* GraphQL */ `mutation UpdateCategory(
  $input: UpdateCategoryInput!
  $condition: ModelCategoryConditionInput
) {
  updateCategory(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateCategoryMutationVariables,
  APITypes.UpdateCategoryMutation
>;
export const deleteCategory = /* GraphQL */ `mutation DeleteCategory(
  $input: DeleteCategoryInput!
  $condition: ModelCategoryConditionInput
) {
  deleteCategory(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteCategoryMutationVariables,
  APITypes.DeleteCategoryMutation
>;
export const createProduct = /* GraphQL */ `mutation CreateProduct(
  $input: CreateProductInput!
  $condition: ModelProductConditionInput
) {
  createProduct(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateProductMutationVariables,
  APITypes.CreateProductMutation
>;
export const updateProduct = /* GraphQL */ `mutation UpdateProduct(
  $input: UpdateProductInput!
  $condition: ModelProductConditionInput
) {
  updateProduct(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateProductMutationVariables,
  APITypes.UpdateProductMutation
>;
export const deleteProduct = /* GraphQL */ `mutation DeleteProduct(
  $input: DeleteProductInput!
  $condition: ModelProductConditionInput
) {
  deleteProduct(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteProductMutationVariables,
  APITypes.DeleteProductMutation
>;
export const createPackage = /* GraphQL */ `mutation CreatePackage(
  $input: CreatePackageInput!
  $condition: ModelPackageConditionInput
) {
  createPackage(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreatePackageMutationVariables,
  APITypes.CreatePackageMutation
>;
export const updatePackage = /* GraphQL */ `mutation UpdatePackage(
  $input: UpdatePackageInput!
  $condition: ModelPackageConditionInput
) {
  updatePackage(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdatePackageMutationVariables,
  APITypes.UpdatePackageMutation
>;
export const deletePackage = /* GraphQL */ `mutation DeletePackage(
  $input: DeletePackageInput!
  $condition: ModelPackageConditionInput
) {
  deletePackage(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeletePackageMutationVariables,
  APITypes.DeletePackageMutation
>;
export const createShipment = /* GraphQL */ `mutation CreateShipment(
  $input: CreateShipmentInput!
  $condition: ModelShipmentConditionInput
) {
  createShipment(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateShipmentMutationVariables,
  APITypes.CreateShipmentMutation
>;
export const updateShipment = /* GraphQL */ `mutation UpdateShipment(
  $input: UpdateShipmentInput!
  $condition: ModelShipmentConditionInput
) {
  updateShipment(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateShipmentMutationVariables,
  APITypes.UpdateShipmentMutation
>;
export const deleteShipment = /* GraphQL */ `mutation DeleteShipment(
  $input: DeleteShipmentInput!
  $condition: ModelShipmentConditionInput
) {
  deleteShipment(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteShipmentMutationVariables,
  APITypes.DeleteShipmentMutation
>;
export const createPurchase = /* GraphQL */ `mutation CreatePurchase(
  $input: CreatePurchaseInput!
  $condition: ModelPurchaseConditionInput
) {
  createPurchase(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreatePurchaseMutationVariables,
  APITypes.CreatePurchaseMutation
>;
export const updatePurchase = /* GraphQL */ `mutation UpdatePurchase(
  $input: UpdatePurchaseInput!
  $condition: ModelPurchaseConditionInput
) {
  updatePurchase(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdatePurchaseMutationVariables,
  APITypes.UpdatePurchaseMutation
>;
export const deletePurchase = /* GraphQL */ `mutation DeletePurchase(
  $input: DeletePurchaseInput!
  $condition: ModelPurchaseConditionInput
) {
  deletePurchase(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeletePurchaseMutationVariables,
  APITypes.DeletePurchaseMutation
>;
export const createSalesrep = /* GraphQL */ `mutation CreateSalesrep(
  $input: CreateSalesrepInput!
  $condition: ModelSalesrepConditionInput
) {
  createSalesrep(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateSalesrepMutationVariables,
  APITypes.CreateSalesrepMutation
>;
export const updateSalesrep = /* GraphQL */ `mutation UpdateSalesrep(
  $input: UpdateSalesrepInput!
  $condition: ModelSalesrepConditionInput
) {
  updateSalesrep(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateSalesrepMutationVariables,
  APITypes.UpdateSalesrepMutation
>;
export const deleteSalesrep = /* GraphQL */ `mutation DeleteSalesrep(
  $input: DeleteSalesrepInput!
  $condition: ModelSalesrepConditionInput
) {
  deleteSalesrep(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteSalesrepMutationVariables,
  APITypes.DeleteSalesrepMutation
>;
export const createIndustry = /* GraphQL */ `mutation CreateIndustry(
  $input: CreateIndustryInput!
  $condition: ModelIndustryConditionInput
) {
  createIndustry(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateIndustryMutationVariables,
  APITypes.CreateIndustryMutation
>;
export const updateIndustry = /* GraphQL */ `mutation UpdateIndustry(
  $input: UpdateIndustryInput!
  $condition: ModelIndustryConditionInput
) {
  updateIndustry(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateIndustryMutationVariables,
  APITypes.UpdateIndustryMutation
>;
export const deleteIndustry = /* GraphQL */ `mutation DeleteIndustry(
  $input: DeleteIndustryInput!
  $condition: ModelIndustryConditionInput
) {
  deleteIndustry(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteIndustryMutationVariables,
  APITypes.DeleteIndustryMutation
>;
export const createAddress = /* GraphQL */ `mutation CreateAddress(
  $input: CreateAddressInput!
  $condition: ModelAddressConditionInput
) {
  createAddress(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateAddressMutationVariables,
  APITypes.CreateAddressMutation
>;
export const updateAddress = /* GraphQL */ `mutation UpdateAddress(
  $input: UpdateAddressInput!
  $condition: ModelAddressConditionInput
) {
  updateAddress(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateAddressMutationVariables,
  APITypes.UpdateAddressMutation
>;
export const deleteAddress = /* GraphQL */ `mutation DeleteAddress(
  $input: DeleteAddressInput!
  $condition: ModelAddressConditionInput
) {
  deleteAddress(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteAddressMutationVariables,
  APITypes.DeleteAddressMutation
>;
export const createBank = /* GraphQL */ `mutation CreateBank(
  $input: CreateBankInput!
  $condition: ModelBankConditionInput
) {
  createBank(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateBankMutationVariables,
  APITypes.CreateBankMutation
>;
export const updateBank = /* GraphQL */ `mutation UpdateBank(
  $input: UpdateBankInput!
  $condition: ModelBankConditionInput
) {
  updateBank(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateBankMutationVariables,
  APITypes.UpdateBankMutation
>;
export const deleteBank = /* GraphQL */ `mutation DeleteBank(
  $input: DeleteBankInput!
  $condition: ModelBankConditionInput
) {
  deleteBank(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteBankMutationVariables,
  APITypes.DeleteBankMutation
>;
export const createBusiness = /* GraphQL */ `mutation CreateBusiness(
  $input: CreateBusinessInput!
  $condition: ModelBusinessConditionInput
) {
  createBusiness(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateBusinessMutationVariables,
  APITypes.CreateBusinessMutation
>;
export const updateBusiness = /* GraphQL */ `mutation UpdateBusiness(
  $input: UpdateBusinessInput!
  $condition: ModelBusinessConditionInput
) {
  updateBusiness(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateBusinessMutationVariables,
  APITypes.UpdateBusinessMutation
>;
export const deleteBusiness = /* GraphQL */ `mutation DeleteBusiness(
  $input: DeleteBusinessInput!
  $condition: ModelBusinessConditionInput
) {
  deleteBusiness(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteBusinessMutationVariables,
  APITypes.DeleteBusinessMutation
>;
export const createBuyer = /* GraphQL */ `mutation CreateBuyer(
  $input: CreateBuyerInput!
  $condition: ModelBuyerConditionInput
) {
  createBuyer(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateBuyerMutationVariables,
  APITypes.CreateBuyerMutation
>;
export const updateBuyer = /* GraphQL */ `mutation UpdateBuyer(
  $input: UpdateBuyerInput!
  $condition: ModelBuyerConditionInput
) {
  updateBuyer(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateBuyerMutationVariables,
  APITypes.UpdateBuyerMutation
>;
export const deleteBuyer = /* GraphQL */ `mutation DeleteBuyer(
  $input: DeleteBuyerInput!
  $condition: ModelBuyerConditionInput
) {
  deleteBuyer(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteBuyerMutationVariables,
  APITypes.DeleteBuyerMutation
>;
export const createApplication = /* GraphQL */ `mutation CreateApplication(
  $input: CreateApplicationInput!
  $condition: ModelApplicationConditionInput
) {
  createApplication(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateApplicationMutationVariables,
  APITypes.CreateApplicationMutation
>;
export const updateApplication = /* GraphQL */ `mutation UpdateApplication(
  $input: UpdateApplicationInput!
  $condition: ModelApplicationConditionInput
) {
  updateApplication(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateApplicationMutationVariables,
  APITypes.UpdateApplicationMutation
>;
export const deleteApplication = /* GraphQL */ `mutation DeleteApplication(
  $input: DeleteApplicationInput!
  $condition: ModelApplicationConditionInput
) {
  deleteApplication(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteApplicationMutationVariables,
  APITypes.DeleteApplicationMutation
>;
export const createBlurb = /* GraphQL */ `mutation CreateBlurb(
  $input: CreateBlurbInput!
  $condition: ModelBlurbConditionInput
) {
  createBlurb(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateBlurbMutationVariables,
  APITypes.CreateBlurbMutation
>;
export const updateBlurb = /* GraphQL */ `mutation UpdateBlurb(
  $input: UpdateBlurbInput!
  $condition: ModelBlurbConditionInput
) {
  updateBlurb(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateBlurbMutationVariables,
  APITypes.UpdateBlurbMutation
>;
export const deleteBlurb = /* GraphQL */ `mutation DeleteBlurb(
  $input: DeleteBlurbInput!
  $condition: ModelBlurbConditionInput
) {
  deleteBlurb(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteBlurbMutationVariables,
  APITypes.DeleteBlurbMutation
>;
export const createProductCategories = /* GraphQL */ `mutation CreateProductCategories(
  $input: CreateProductCategoriesInput!
  $condition: ModelProductCategoriesConditionInput
) {
  createProductCategories(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateProductCategoriesMutationVariables,
  APITypes.CreateProductCategoriesMutation
>;
export const updateProductCategories = /* GraphQL */ `mutation UpdateProductCategories(
  $input: UpdateProductCategoriesInput!
  $condition: ModelProductCategoriesConditionInput
) {
  updateProductCategories(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateProductCategoriesMutationVariables,
  APITypes.UpdateProductCategoriesMutation
>;
export const deleteProductCategories = /* GraphQL */ `mutation DeleteProductCategories(
  $input: DeleteProductCategoriesInput!
  $condition: ModelProductCategoriesConditionInput
) {
  deleteProductCategories(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteProductCategoriesMutationVariables,
  APITypes.DeleteProductCategoriesMutation
>;
export const createIndustryCategories = /* GraphQL */ `mutation CreateIndustryCategories(
  $input: CreateIndustryCategoriesInput!
  $condition: ModelIndustryCategoriesConditionInput
) {
  createIndustryCategories(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateIndustryCategoriesMutationVariables,
  APITypes.CreateIndustryCategoriesMutation
>;
export const updateIndustryCategories = /* GraphQL */ `mutation UpdateIndustryCategories(
  $input: UpdateIndustryCategoriesInput!
  $condition: ModelIndustryCategoriesConditionInput
) {
  updateIndustryCategories(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateIndustryCategoriesMutationVariables,
  APITypes.UpdateIndustryCategoriesMutation
>;
export const deleteIndustryCategories = /* GraphQL */ `mutation DeleteIndustryCategories(
  $input: DeleteIndustryCategoriesInput!
  $condition: ModelIndustryCategoriesConditionInput
) {
  deleteIndustryCategories(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteIndustryCategoriesMutationVariables,
  APITypes.DeleteIndustryCategoriesMutation
>;
export const createBusinessSalesreps = /* GraphQL */ `mutation CreateBusinessSalesreps(
  $input: CreateBusinessSalesrepsInput!
  $condition: ModelBusinessSalesrepsConditionInput
) {
  createBusinessSalesreps(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateBusinessSalesrepsMutationVariables,
  APITypes.CreateBusinessSalesrepsMutation
>;
export const updateBusinessSalesreps = /* GraphQL */ `mutation UpdateBusinessSalesreps(
  $input: UpdateBusinessSalesrepsInput!
  $condition: ModelBusinessSalesrepsConditionInput
) {
  updateBusinessSalesreps(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateBusinessSalesrepsMutationVariables,
  APITypes.UpdateBusinessSalesrepsMutation
>;
export const deleteBusinessSalesreps = /* GraphQL */ `mutation DeleteBusinessSalesreps(
  $input: DeleteBusinessSalesrepsInput!
  $condition: ModelBusinessSalesrepsConditionInput
) {
  deleteBusinessSalesreps(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteBusinessSalesrepsMutationVariables,
  APITypes.DeleteBusinessSalesrepsMutation
>;
export const createBusinessIndustries = /* GraphQL */ `mutation CreateBusinessIndustries(
  $input: CreateBusinessIndustriesInput!
  $condition: ModelBusinessIndustriesConditionInput
) {
  createBusinessIndustries(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateBusinessIndustriesMutationVariables,
  APITypes.CreateBusinessIndustriesMutation
>;
export const updateBusinessIndustries = /* GraphQL */ `mutation UpdateBusinessIndustries(
  $input: UpdateBusinessIndustriesInput!
  $condition: ModelBusinessIndustriesConditionInput
) {
  updateBusinessIndustries(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateBusinessIndustriesMutationVariables,
  APITypes.UpdateBusinessIndustriesMutation
>;
export const deleteBusinessIndustries = /* GraphQL */ `mutation DeleteBusinessIndustries(
  $input: DeleteBusinessIndustriesInput!
  $condition: ModelBusinessIndustriesConditionInput
) {
  deleteBusinessIndustries(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteBusinessIndustriesMutationVariables,
  APITypes.DeleteBusinessIndustriesMutation
>;
