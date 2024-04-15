/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateFactoryInput = {
  id?: string | null,
  name?: string | null,
  url?: string | null,
};

export type ModelFactoryConditionInput = {
  name?: ModelStringInput | null,
  url?: ModelStringInput | null,
  and?: Array< ModelFactoryConditionInput | null > | null,
  or?: Array< ModelFactoryConditionInput | null > | null,
  not?: ModelFactoryConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Factory = {
  __typename: "Factory",
  id: string,
  name?: string | null,
  url?: string | null,
  products?: ModelProductConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelProductConnection = {
  __typename: "ModelProductConnection",
  items:  Array<Product | null >,
  nextToken?: string | null,
};

export type Product = {
  __typename: "Product",
  id: string,
  name?: string | null,
  msrp?: number | null,
  price?: number | null,
  sku?: string | null,
  description?: string | null,
  status?: ProductStatusEnum | null,
  media?: Array< string | null > | null,
  item_weight_net?: number | null,
  item_weight_gross?: number | null,
  item_size_width?: number | null,
  item_size_depth?: number | null,
  item_size_height?: number | null,
  package_weight_net?: number | null,
  package_weight_gross?: number | null,
  package_size_width?: number | null,
  package_size_depth?: number | null,
  package_size_height?: number | null,
  items_per_package?: number | null,
  categories?: ModelProductCategoriesConnection | null,
  factory_id?: string | null,
  factory?: Factory | null,
  type?: string | null,
  createdAt: string,
  updatedAt: string,
};

export enum ProductStatusEnum {
  unavailable = "unavailable",
  available = "available",
}


export type ModelProductCategoriesConnection = {
  __typename: "ModelProductCategoriesConnection",
  items:  Array<ProductCategories | null >,
  nextToken?: string | null,
};

export type ProductCategories = {
  __typename: "ProductCategories",
  id: string,
  categoryId: string,
  productId: string,
  category: Category,
  product: Product,
  createdAt: string,
  updatedAt: string,
};

export type Category = {
  __typename: "Category",
  id: string,
  name: string,
  products?: ModelProductCategoriesConnection | null,
  industries?: ModelIndustryCategoriesConnection | null,
  type?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelIndustryCategoriesConnection = {
  __typename: "ModelIndustryCategoriesConnection",
  items:  Array<IndustryCategories | null >,
  nextToken?: string | null,
};

export type IndustryCategories = {
  __typename: "IndustryCategories",
  id: string,
  categoryId: string,
  industryId: string,
  category: Category,
  industry: Industry,
  createdAt: string,
  updatedAt: string,
};

export type Industry = {
  __typename: "Industry",
  id: string,
  name: string,
  description?: string | null,
  businesses?: ModelBusinessIndustriesConnection | null,
  categories?: ModelIndustryCategoriesConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelBusinessIndustriesConnection = {
  __typename: "ModelBusinessIndustriesConnection",
  items:  Array<BusinessIndustries | null >,
  nextToken?: string | null,
};

export type BusinessIndustries = {
  __typename: "BusinessIndustries",
  id: string,
  industryId: string,
  businessId: string,
  industry: Industry,
  business: Business,
  createdAt: string,
  updatedAt: string,
};

export type Business = {
  __typename: "Business",
  id: string,
  name: string,
  description?: string | null,
  salesreps?: ModelBusinessSalesrepsConnection | null,
  industries?: ModelBusinessIndustriesConnection | null,
  addresses?: ModelAddressConnection | null,
  banks?: ModelBankConnection | null,
  buyers?: ModelBuyerConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelBusinessSalesrepsConnection = {
  __typename: "ModelBusinessSalesrepsConnection",
  items:  Array<BusinessSalesreps | null >,
  nextToken?: string | null,
};

export type BusinessSalesreps = {
  __typename: "BusinessSalesreps",
  id: string,
  salesrepId: string,
  businessId: string,
  salesrep: Salesrep,
  business: Business,
  createdAt: string,
  updatedAt: string,
};

export type Salesrep = {
  __typename: "Salesrep",
  id: string,
  name: string,
  title?: string | null,
  email: string,
  phone: string,
  businesses?: ModelBusinessSalesrepsConnection | null,
  type?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelAddressConnection = {
  __typename: "ModelAddressConnection",
  items:  Array<Address | null >,
  nextToken?: string | null,
};

export type Address = {
  __typename: "Address",
  id: string,
  street: string,
  city: string,
  state: string,
  postal_code: string,
  country: string,
  is_default?: boolean | null,
  business_id?: string | null,
  business?: Business | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelBankConnection = {
  __typename: "ModelBankConnection",
  items:  Array<Bank | null >,
  nextToken?: string | null,
};

export type Bank = {
  __typename: "Bank",
  id: string,
  account_name: string,
  account_number: string,
  routing_number: string,
  is_default?: boolean | null,
  business_id?: string | null,
  business?: Business | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelBuyerConnection = {
  __typename: "ModelBuyerConnection",
  items:  Array<Buyer | null >,
  nextToken?: string | null,
};

export type Buyer = {
  __typename: "Buyer",
  id: string,
  first_name: string,
  last_name: string,
  user_name: string,
  last_login?: string | null,
  is_owner: boolean,
  email: string,
  phone: string,
  business_id?: string | null,
  business?: Business | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateFactoryInput = {
  id: string,
  name?: string | null,
  url?: string | null,
};

export type DeleteFactoryInput = {
  id: string,
};

export type CreateCategoryInput = {
  id?: string | null,
  name: string,
  type?: string | null,
};

export type ModelCategoryConditionInput = {
  name?: ModelStringInput | null,
  type?: ModelStringInput | null,
  and?: Array< ModelCategoryConditionInput | null > | null,
  or?: Array< ModelCategoryConditionInput | null > | null,
  not?: ModelCategoryConditionInput | null,
};

export type UpdateCategoryInput = {
  id: string,
  name?: string | null,
  type?: string | null,
};

export type DeleteCategoryInput = {
  id: string,
};

export type CreateProductInput = {
  id?: string | null,
  name?: string | null,
  msrp?: number | null,
  price?: number | null,
  sku?: string | null,
  description?: string | null,
  status?: ProductStatusEnum | null,
  media?: Array< string | null > | null,
  item_weight_net?: number | null,
  item_weight_gross?: number | null,
  item_size_width?: number | null,
  item_size_depth?: number | null,
  item_size_height?: number | null,
  package_weight_net?: number | null,
  package_weight_gross?: number | null,
  package_size_width?: number | null,
  package_size_depth?: number | null,
  package_size_height?: number | null,
  items_per_package?: number | null,
  factory_id?: string | null,
  type?: string | null,
};

export type ModelProductConditionInput = {
  name?: ModelStringInput | null,
  msrp?: ModelFloatInput | null,
  price?: ModelFloatInput | null,
  sku?: ModelStringInput | null,
  description?: ModelStringInput | null,
  status?: ModelProductStatusEnumInput | null,
  media?: ModelStringInput | null,
  item_weight_net?: ModelFloatInput | null,
  item_weight_gross?: ModelFloatInput | null,
  item_size_width?: ModelFloatInput | null,
  item_size_depth?: ModelFloatInput | null,
  item_size_height?: ModelFloatInput | null,
  package_weight_net?: ModelFloatInput | null,
  package_weight_gross?: ModelFloatInput | null,
  package_size_width?: ModelFloatInput | null,
  package_size_depth?: ModelFloatInput | null,
  package_size_height?: ModelFloatInput | null,
  items_per_package?: ModelIntInput | null,
  factory_id?: ModelIDInput | null,
  type?: ModelStringInput | null,
  and?: Array< ModelProductConditionInput | null > | null,
  or?: Array< ModelProductConditionInput | null > | null,
  not?: ModelProductConditionInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelProductStatusEnumInput = {
  eq?: ProductStatusEnum | null,
  ne?: ProductStatusEnum | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateProductInput = {
  id: string,
  name?: string | null,
  msrp?: number | null,
  price?: number | null,
  sku?: string | null,
  description?: string | null,
  status?: ProductStatusEnum | null,
  media?: Array< string | null > | null,
  item_weight_net?: number | null,
  item_weight_gross?: number | null,
  item_size_width?: number | null,
  item_size_depth?: number | null,
  item_size_height?: number | null,
  package_weight_net?: number | null,
  package_weight_gross?: number | null,
  package_size_width?: number | null,
  package_size_depth?: number | null,
  package_size_height?: number | null,
  items_per_package?: number | null,
  factory_id?: string | null,
  type?: string | null,
};

export type DeleteProductInput = {
  id: string,
};

export type CreatePackageInput = {
  id?: string | null,
  weight_net?: number | null,
  weight_gross?: number | null,
  size_width?: number | null,
  size_depth?: number | null,
  size_height?: number | null,
  shipmentPackagesId?: string | null,
  packageProductId?: string | null,
};

export type ModelPackageConditionInput = {
  weight_net?: ModelFloatInput | null,
  weight_gross?: ModelFloatInput | null,
  size_width?: ModelFloatInput | null,
  size_depth?: ModelFloatInput | null,
  size_height?: ModelFloatInput | null,
  and?: Array< ModelPackageConditionInput | null > | null,
  or?: Array< ModelPackageConditionInput | null > | null,
  not?: ModelPackageConditionInput | null,
  shipmentPackagesId?: ModelIDInput | null,
  packageProductId?: ModelIDInput | null,
};

export type Package = {
  __typename: "Package",
  id: string,
  product?: Product | null,
  weight_net?: number | null,
  weight_gross?: number | null,
  size_width?: number | null,
  size_depth?: number | null,
  size_height?: number | null,
  createdAt: string,
  updatedAt: string,
  shipmentPackagesId?: string | null,
  packageProductId?: string | null,
};

export type UpdatePackageInput = {
  id: string,
  weight_net?: number | null,
  weight_gross?: number | null,
  size_width?: number | null,
  size_depth?: number | null,
  size_height?: number | null,
  shipmentPackagesId?: string | null,
  packageProductId?: string | null,
};

export type DeletePackageInput = {
  id: string,
};

export type CreateShipmentInput = {
  id?: string | null,
  departure?: string | null,
  arrival?: string | null,
};

export type ModelShipmentConditionInput = {
  departure?: ModelStringInput | null,
  arrival?: ModelStringInput | null,
  and?: Array< ModelShipmentConditionInput | null > | null,
  or?: Array< ModelShipmentConditionInput | null > | null,
  not?: ModelShipmentConditionInput | null,
};

export type Shipment = {
  __typename: "Shipment",
  id: string,
  packages?: ModelPackageConnection | null,
  departure?: string | null,
  arrival?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelPackageConnection = {
  __typename: "ModelPackageConnection",
  items:  Array<Package | null >,
  nextToken?: string | null,
};

export type UpdateShipmentInput = {
  id: string,
  departure?: string | null,
  arrival?: string | null,
};

export type DeleteShipmentInput = {
  id: string,
};

export type CreatePurchaseInput = {
  id?: string | null,
  purchaseBusinessId?: string | null,
  purchaseBuyerId?: string | null,
};

export type ModelPurchaseConditionInput = {
  and?: Array< ModelPurchaseConditionInput | null > | null,
  or?: Array< ModelPurchaseConditionInput | null > | null,
  not?: ModelPurchaseConditionInput | null,
  purchaseBusinessId?: ModelIDInput | null,
  purchaseBuyerId?: ModelIDInput | null,
};

export type Purchase = {
  __typename: "Purchase",
  id: string,
  business?: Business | null,
  buyer?: Buyer | null,
  createdAt: string,
  updatedAt: string,
  purchaseBusinessId?: string | null,
  purchaseBuyerId?: string | null,
};

export type UpdatePurchaseInput = {
  id: string,
  purchaseBusinessId?: string | null,
  purchaseBuyerId?: string | null,
};

export type DeletePurchaseInput = {
  id: string,
};

export type CreateSalesrepInput = {
  id?: string | null,
  name: string,
  title?: string | null,
  email: string,
  phone: string,
  type?: string | null,
};

export type ModelSalesrepConditionInput = {
  name?: ModelStringInput | null,
  title?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  type?: ModelStringInput | null,
  and?: Array< ModelSalesrepConditionInput | null > | null,
  or?: Array< ModelSalesrepConditionInput | null > | null,
  not?: ModelSalesrepConditionInput | null,
};

export type UpdateSalesrepInput = {
  id: string,
  name?: string | null,
  title?: string | null,
  email?: string | null,
  phone?: string | null,
  type?: string | null,
};

export type DeleteSalesrepInput = {
  id: string,
};

export type CreateIndustryInput = {
  id?: string | null,
  name: string,
  description?: string | null,
};

export type ModelIndustryConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelIndustryConditionInput | null > | null,
  or?: Array< ModelIndustryConditionInput | null > | null,
  not?: ModelIndustryConditionInput | null,
};

export type UpdateIndustryInput = {
  id: string,
  name?: string | null,
  description?: string | null,
};

export type DeleteIndustryInput = {
  id: string,
};

export type CreateAddressInput = {
  id?: string | null,
  street: string,
  city: string,
  state: string,
  postal_code: string,
  country: string,
  is_default?: boolean | null,
  business_id?: string | null,
};

export type ModelAddressConditionInput = {
  street?: ModelStringInput | null,
  city?: ModelStringInput | null,
  state?: ModelStringInput | null,
  postal_code?: ModelStringInput | null,
  country?: ModelStringInput | null,
  is_default?: ModelBooleanInput | null,
  business_id?: ModelIDInput | null,
  and?: Array< ModelAddressConditionInput | null > | null,
  or?: Array< ModelAddressConditionInput | null > | null,
  not?: ModelAddressConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateAddressInput = {
  id: string,
  street?: string | null,
  city?: string | null,
  state?: string | null,
  postal_code?: string | null,
  country?: string | null,
  is_default?: boolean | null,
  business_id?: string | null,
};

export type DeleteAddressInput = {
  id: string,
};

export type CreateBankInput = {
  id?: string | null,
  account_name: string,
  account_number: string,
  routing_number: string,
  is_default?: boolean | null,
  business_id?: string | null,
};

export type ModelBankConditionInput = {
  account_name?: ModelStringInput | null,
  account_number?: ModelStringInput | null,
  routing_number?: ModelStringInput | null,
  is_default?: ModelBooleanInput | null,
  business_id?: ModelIDInput | null,
  and?: Array< ModelBankConditionInput | null > | null,
  or?: Array< ModelBankConditionInput | null > | null,
  not?: ModelBankConditionInput | null,
};

export type UpdateBankInput = {
  id: string,
  account_name?: string | null,
  account_number?: string | null,
  routing_number?: string | null,
  is_default?: boolean | null,
  business_id?: string | null,
};

export type DeleteBankInput = {
  id: string,
};

export type CreateBusinessInput = {
  id?: string | null,
  name: string,
  description?: string | null,
};

export type ModelBusinessConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelBusinessConditionInput | null > | null,
  or?: Array< ModelBusinessConditionInput | null > | null,
  not?: ModelBusinessConditionInput | null,
};

export type UpdateBusinessInput = {
  id: string,
  name?: string | null,
  description?: string | null,
};

export type DeleteBusinessInput = {
  id: string,
};

export type CreateBuyerInput = {
  id?: string | null,
  first_name: string,
  last_name: string,
  user_name: string,
  last_login?: string | null,
  is_owner: boolean,
  email: string,
  phone: string,
  business_id?: string | null,
};

export type ModelBuyerConditionInput = {
  first_name?: ModelStringInput | null,
  last_name?: ModelStringInput | null,
  user_name?: ModelStringInput | null,
  last_login?: ModelStringInput | null,
  is_owner?: ModelBooleanInput | null,
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  business_id?: ModelIDInput | null,
  and?: Array< ModelBuyerConditionInput | null > | null,
  or?: Array< ModelBuyerConditionInput | null > | null,
  not?: ModelBuyerConditionInput | null,
};

export type UpdateBuyerInput = {
  id: string,
  first_name?: string | null,
  last_name?: string | null,
  user_name?: string | null,
  last_login?: string | null,
  is_owner?: boolean | null,
  email?: string | null,
  phone?: string | null,
  business_id?: string | null,
};

export type DeleteBuyerInput = {
  id: string,
};

export type CreateApplicationInput = {
  id?: string | null,
  status?: string | null,
  business_name: string,
  street: string,
  city: string,
  state: string,
  postal_code: string,
  country: string,
  account_name: string,
  account_number: string,
  routing_number: string,
};

export type ModelApplicationConditionInput = {
  status?: ModelStringInput | null,
  business_name?: ModelStringInput | null,
  street?: ModelStringInput | null,
  city?: ModelStringInput | null,
  state?: ModelStringInput | null,
  postal_code?: ModelStringInput | null,
  country?: ModelStringInput | null,
  account_name?: ModelStringInput | null,
  account_number?: ModelStringInput | null,
  routing_number?: ModelStringInput | null,
  and?: Array< ModelApplicationConditionInput | null > | null,
  or?: Array< ModelApplicationConditionInput | null > | null,
  not?: ModelApplicationConditionInput | null,
};

export type Application = {
  __typename: "Application",
  id: string,
  status?: string | null,
  business_name: string,
  street: string,
  city: string,
  state: string,
  postal_code: string,
  country: string,
  account_name: string,
  account_number: string,
  routing_number: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateApplicationInput = {
  id: string,
  status?: string | null,
  business_name?: string | null,
  street?: string | null,
  city?: string | null,
  state?: string | null,
  postal_code?: string | null,
  country?: string | null,
  account_name?: string | null,
  account_number?: string | null,
  routing_number?: string | null,
};

export type DeleteApplicationInput = {
  id: string,
};

export type CreateBlurbInput = {
  id?: string | null,
  title: string,
  description: string,
  start_date: string,
  end_date: string,
};

export type ModelBlurbConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  start_date?: ModelStringInput | null,
  end_date?: ModelStringInput | null,
  and?: Array< ModelBlurbConditionInput | null > | null,
  or?: Array< ModelBlurbConditionInput | null > | null,
  not?: ModelBlurbConditionInput | null,
};

export type Blurb = {
  __typename: "Blurb",
  id: string,
  title: string,
  description: string,
  start_date: string,
  end_date: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateBlurbInput = {
  id: string,
  title?: string | null,
  description?: string | null,
  start_date?: string | null,
  end_date?: string | null,
};

export type DeleteBlurbInput = {
  id: string,
};

export type CreateProductCategoriesInput = {
  id?: string | null,
  categoryId: string,
  productId: string,
};

export type ModelProductCategoriesConditionInput = {
  categoryId?: ModelIDInput | null,
  productId?: ModelIDInput | null,
  and?: Array< ModelProductCategoriesConditionInput | null > | null,
  or?: Array< ModelProductCategoriesConditionInput | null > | null,
  not?: ModelProductCategoriesConditionInput | null,
};

export type UpdateProductCategoriesInput = {
  id: string,
  categoryId?: string | null,
  productId?: string | null,
};

export type DeleteProductCategoriesInput = {
  id: string,
};

export type CreateIndustryCategoriesInput = {
  id?: string | null,
  categoryId: string,
  industryId: string,
};

export type ModelIndustryCategoriesConditionInput = {
  categoryId?: ModelIDInput | null,
  industryId?: ModelIDInput | null,
  and?: Array< ModelIndustryCategoriesConditionInput | null > | null,
  or?: Array< ModelIndustryCategoriesConditionInput | null > | null,
  not?: ModelIndustryCategoriesConditionInput | null,
};

export type UpdateIndustryCategoriesInput = {
  id: string,
  categoryId?: string | null,
  industryId?: string | null,
};

export type DeleteIndustryCategoriesInput = {
  id: string,
};

export type CreateBusinessSalesrepsInput = {
  id?: string | null,
  salesrepId: string,
  businessId: string,
};

export type ModelBusinessSalesrepsConditionInput = {
  salesrepId?: ModelIDInput | null,
  businessId?: ModelIDInput | null,
  and?: Array< ModelBusinessSalesrepsConditionInput | null > | null,
  or?: Array< ModelBusinessSalesrepsConditionInput | null > | null,
  not?: ModelBusinessSalesrepsConditionInput | null,
};

export type UpdateBusinessSalesrepsInput = {
  id: string,
  salesrepId?: string | null,
  businessId?: string | null,
};

export type DeleteBusinessSalesrepsInput = {
  id: string,
};

export type CreateBusinessIndustriesInput = {
  id?: string | null,
  industryId: string,
  businessId: string,
};

export type ModelBusinessIndustriesConditionInput = {
  industryId?: ModelIDInput | null,
  businessId?: ModelIDInput | null,
  and?: Array< ModelBusinessIndustriesConditionInput | null > | null,
  or?: Array< ModelBusinessIndustriesConditionInput | null > | null,
  not?: ModelBusinessIndustriesConditionInput | null,
};

export type UpdateBusinessIndustriesInput = {
  id: string,
  industryId?: string | null,
  businessId?: string | null,
};

export type DeleteBusinessIndustriesInput = {
  id: string,
};

export type ModelFactoryFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  url?: ModelStringInput | null,
  and?: Array< ModelFactoryFilterInput | null > | null,
  or?: Array< ModelFactoryFilterInput | null > | null,
  not?: ModelFactoryFilterInput | null,
};

export type ModelFactoryConnection = {
  __typename: "ModelFactoryConnection",
  items:  Array<Factory | null >,
  nextToken?: string | null,
};

export type ModelCategoryFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  type?: ModelStringInput | null,
  and?: Array< ModelCategoryFilterInput | null > | null,
  or?: Array< ModelCategoryFilterInput | null > | null,
  not?: ModelCategoryFilterInput | null,
};

export type ModelCategoryConnection = {
  __typename: "ModelCategoryConnection",
  items:  Array<Category | null >,
  nextToken?: string | null,
};

export type ModelProductFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  msrp?: ModelFloatInput | null,
  price?: ModelFloatInput | null,
  sku?: ModelStringInput | null,
  description?: ModelStringInput | null,
  status?: ModelProductStatusEnumInput | null,
  media?: ModelStringInput | null,
  item_weight_net?: ModelFloatInput | null,
  item_weight_gross?: ModelFloatInput | null,
  item_size_width?: ModelFloatInput | null,
  item_size_depth?: ModelFloatInput | null,
  item_size_height?: ModelFloatInput | null,
  package_weight_net?: ModelFloatInput | null,
  package_weight_gross?: ModelFloatInput | null,
  package_size_width?: ModelFloatInput | null,
  package_size_depth?: ModelFloatInput | null,
  package_size_height?: ModelFloatInput | null,
  items_per_package?: ModelIntInput | null,
  factory_id?: ModelIDInput | null,
  type?: ModelStringInput | null,
  and?: Array< ModelProductFilterInput | null > | null,
  or?: Array< ModelProductFilterInput | null > | null,
  not?: ModelProductFilterInput | null,
};

export type ModelPackageFilterInput = {
  id?: ModelIDInput | null,
  weight_net?: ModelFloatInput | null,
  weight_gross?: ModelFloatInput | null,
  size_width?: ModelFloatInput | null,
  size_depth?: ModelFloatInput | null,
  size_height?: ModelFloatInput | null,
  and?: Array< ModelPackageFilterInput | null > | null,
  or?: Array< ModelPackageFilterInput | null > | null,
  not?: ModelPackageFilterInput | null,
  shipmentPackagesId?: ModelIDInput | null,
  packageProductId?: ModelIDInput | null,
};

export type ModelShipmentFilterInput = {
  id?: ModelIDInput | null,
  departure?: ModelStringInput | null,
  arrival?: ModelStringInput | null,
  and?: Array< ModelShipmentFilterInput | null > | null,
  or?: Array< ModelShipmentFilterInput | null > | null,
  not?: ModelShipmentFilterInput | null,
};

export type ModelShipmentConnection = {
  __typename: "ModelShipmentConnection",
  items:  Array<Shipment | null >,
  nextToken?: string | null,
};

export type ModelPurchaseFilterInput = {
  id?: ModelIDInput | null,
  and?: Array< ModelPurchaseFilterInput | null > | null,
  or?: Array< ModelPurchaseFilterInput | null > | null,
  not?: ModelPurchaseFilterInput | null,
  purchaseBusinessId?: ModelIDInput | null,
  purchaseBuyerId?: ModelIDInput | null,
};

export type ModelPurchaseConnection = {
  __typename: "ModelPurchaseConnection",
  items:  Array<Purchase | null >,
  nextToken?: string | null,
};

export type ModelSalesrepFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  title?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  type?: ModelStringInput | null,
  and?: Array< ModelSalesrepFilterInput | null > | null,
  or?: Array< ModelSalesrepFilterInput | null > | null,
  not?: ModelSalesrepFilterInput | null,
};

export type ModelSalesrepConnection = {
  __typename: "ModelSalesrepConnection",
  items:  Array<Salesrep | null >,
  nextToken?: string | null,
};

export type ModelIndustryFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelIndustryFilterInput | null > | null,
  or?: Array< ModelIndustryFilterInput | null > | null,
  not?: ModelIndustryFilterInput | null,
};

export type ModelIndustryConnection = {
  __typename: "ModelIndustryConnection",
  items:  Array<Industry | null >,
  nextToken?: string | null,
};

export type ModelAddressFilterInput = {
  id?: ModelIDInput | null,
  street?: ModelStringInput | null,
  city?: ModelStringInput | null,
  state?: ModelStringInput | null,
  postal_code?: ModelStringInput | null,
  country?: ModelStringInput | null,
  is_default?: ModelBooleanInput | null,
  business_id?: ModelIDInput | null,
  and?: Array< ModelAddressFilterInput | null > | null,
  or?: Array< ModelAddressFilterInput | null > | null,
  not?: ModelAddressFilterInput | null,
};

export type ModelBankFilterInput = {
  id?: ModelIDInput | null,
  account_name?: ModelStringInput | null,
  account_number?: ModelStringInput | null,
  routing_number?: ModelStringInput | null,
  is_default?: ModelBooleanInput | null,
  business_id?: ModelIDInput | null,
  and?: Array< ModelBankFilterInput | null > | null,
  or?: Array< ModelBankFilterInput | null > | null,
  not?: ModelBankFilterInput | null,
};

export type ModelBusinessFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelBusinessFilterInput | null > | null,
  or?: Array< ModelBusinessFilterInput | null > | null,
  not?: ModelBusinessFilterInput | null,
};

export type ModelBusinessConnection = {
  __typename: "ModelBusinessConnection",
  items:  Array<Business | null >,
  nextToken?: string | null,
};

export type ModelBuyerFilterInput = {
  id?: ModelIDInput | null,
  first_name?: ModelStringInput | null,
  last_name?: ModelStringInput | null,
  user_name?: ModelStringInput | null,
  last_login?: ModelStringInput | null,
  is_owner?: ModelBooleanInput | null,
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  business_id?: ModelIDInput | null,
  and?: Array< ModelBuyerFilterInput | null > | null,
  or?: Array< ModelBuyerFilterInput | null > | null,
  not?: ModelBuyerFilterInput | null,
};

export type ModelApplicationFilterInput = {
  id?: ModelIDInput | null,
  status?: ModelStringInput | null,
  business_name?: ModelStringInput | null,
  street?: ModelStringInput | null,
  city?: ModelStringInput | null,
  state?: ModelStringInput | null,
  postal_code?: ModelStringInput | null,
  country?: ModelStringInput | null,
  account_name?: ModelStringInput | null,
  account_number?: ModelStringInput | null,
  routing_number?: ModelStringInput | null,
  and?: Array< ModelApplicationFilterInput | null > | null,
  or?: Array< ModelApplicationFilterInput | null > | null,
  not?: ModelApplicationFilterInput | null,
};

export type ModelApplicationConnection = {
  __typename: "ModelApplicationConnection",
  items:  Array<Application | null >,
  nextToken?: string | null,
};

export type ModelBlurbFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  start_date?: ModelStringInput | null,
  end_date?: ModelStringInput | null,
  and?: Array< ModelBlurbFilterInput | null > | null,
  or?: Array< ModelBlurbFilterInput | null > | null,
  not?: ModelBlurbFilterInput | null,
};

export type ModelBlurbConnection = {
  __typename: "ModelBlurbConnection",
  items:  Array<Blurb | null >,
  nextToken?: string | null,
};

export type ModelProductCategoriesFilterInput = {
  id?: ModelIDInput | null,
  categoryId?: ModelIDInput | null,
  productId?: ModelIDInput | null,
  and?: Array< ModelProductCategoriesFilterInput | null > | null,
  or?: Array< ModelProductCategoriesFilterInput | null > | null,
  not?: ModelProductCategoriesFilterInput | null,
};

export type ModelIndustryCategoriesFilterInput = {
  id?: ModelIDInput | null,
  categoryId?: ModelIDInput | null,
  industryId?: ModelIDInput | null,
  and?: Array< ModelIndustryCategoriesFilterInput | null > | null,
  or?: Array< ModelIndustryCategoriesFilterInput | null > | null,
  not?: ModelIndustryCategoriesFilterInput | null,
};

export type ModelBusinessSalesrepsFilterInput = {
  id?: ModelIDInput | null,
  salesrepId?: ModelIDInput | null,
  businessId?: ModelIDInput | null,
  and?: Array< ModelBusinessSalesrepsFilterInput | null > | null,
  or?: Array< ModelBusinessSalesrepsFilterInput | null > | null,
  not?: ModelBusinessSalesrepsFilterInput | null,
};

export type ModelBusinessIndustriesFilterInput = {
  id?: ModelIDInput | null,
  industryId?: ModelIDInput | null,
  businessId?: ModelIDInput | null,
  and?: Array< ModelBusinessIndustriesFilterInput | null > | null,
  or?: Array< ModelBusinessIndustriesFilterInput | null > | null,
  not?: ModelBusinessIndustriesFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelSubscriptionFactoryFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  url?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionFactoryFilterInput | null > | null,
  or?: Array< ModelSubscriptionFactoryFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionCategoryFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  type?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCategoryFilterInput | null > | null,
  or?: Array< ModelSubscriptionCategoryFilterInput | null > | null,
};

export type ModelSubscriptionProductFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  msrp?: ModelSubscriptionFloatInput | null,
  price?: ModelSubscriptionFloatInput | null,
  sku?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  media?: ModelSubscriptionStringInput | null,
  item_weight_net?: ModelSubscriptionFloatInput | null,
  item_weight_gross?: ModelSubscriptionFloatInput | null,
  item_size_width?: ModelSubscriptionFloatInput | null,
  item_size_depth?: ModelSubscriptionFloatInput | null,
  item_size_height?: ModelSubscriptionFloatInput | null,
  package_weight_net?: ModelSubscriptionFloatInput | null,
  package_weight_gross?: ModelSubscriptionFloatInput | null,
  package_size_width?: ModelSubscriptionFloatInput | null,
  package_size_depth?: ModelSubscriptionFloatInput | null,
  package_size_height?: ModelSubscriptionFloatInput | null,
  items_per_package?: ModelSubscriptionIntInput | null,
  factory_id?: ModelSubscriptionIDInput | null,
  type?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionProductFilterInput | null > | null,
  or?: Array< ModelSubscriptionProductFilterInput | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionPackageFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  weight_net?: ModelSubscriptionFloatInput | null,
  weight_gross?: ModelSubscriptionFloatInput | null,
  size_width?: ModelSubscriptionFloatInput | null,
  size_depth?: ModelSubscriptionFloatInput | null,
  size_height?: ModelSubscriptionFloatInput | null,
  and?: Array< ModelSubscriptionPackageFilterInput | null > | null,
  or?: Array< ModelSubscriptionPackageFilterInput | null > | null,
};

export type ModelSubscriptionShipmentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  departure?: ModelSubscriptionStringInput | null,
  arrival?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionShipmentFilterInput | null > | null,
  or?: Array< ModelSubscriptionShipmentFilterInput | null > | null,
};

export type ModelSubscriptionPurchaseFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionPurchaseFilterInput | null > | null,
  or?: Array< ModelSubscriptionPurchaseFilterInput | null > | null,
};

export type ModelSubscriptionSalesrepFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  title?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  phone?: ModelSubscriptionStringInput | null,
  type?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSalesrepFilterInput | null > | null,
  or?: Array< ModelSubscriptionSalesrepFilterInput | null > | null,
};

export type ModelSubscriptionIndustryFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionIndustryFilterInput | null > | null,
  or?: Array< ModelSubscriptionIndustryFilterInput | null > | null,
};

export type ModelSubscriptionAddressFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  street?: ModelSubscriptionStringInput | null,
  city?: ModelSubscriptionStringInput | null,
  state?: ModelSubscriptionStringInput | null,
  postal_code?: ModelSubscriptionStringInput | null,
  country?: ModelSubscriptionStringInput | null,
  is_default?: ModelSubscriptionBooleanInput | null,
  business_id?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionAddressFilterInput | null > | null,
  or?: Array< ModelSubscriptionAddressFilterInput | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionBankFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  account_name?: ModelSubscriptionStringInput | null,
  account_number?: ModelSubscriptionStringInput | null,
  routing_number?: ModelSubscriptionStringInput | null,
  is_default?: ModelSubscriptionBooleanInput | null,
  business_id?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionBankFilterInput | null > | null,
  or?: Array< ModelSubscriptionBankFilterInput | null > | null,
};

export type ModelSubscriptionBusinessFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionBusinessFilterInput | null > | null,
  or?: Array< ModelSubscriptionBusinessFilterInput | null > | null,
};

export type ModelSubscriptionBuyerFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  first_name?: ModelSubscriptionStringInput | null,
  last_name?: ModelSubscriptionStringInput | null,
  user_name?: ModelSubscriptionStringInput | null,
  last_login?: ModelSubscriptionStringInput | null,
  is_owner?: ModelSubscriptionBooleanInput | null,
  email?: ModelSubscriptionStringInput | null,
  phone?: ModelSubscriptionStringInput | null,
  business_id?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionBuyerFilterInput | null > | null,
  or?: Array< ModelSubscriptionBuyerFilterInput | null > | null,
};

export type ModelSubscriptionApplicationFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  status?: ModelSubscriptionStringInput | null,
  business_name?: ModelSubscriptionStringInput | null,
  street?: ModelSubscriptionStringInput | null,
  city?: ModelSubscriptionStringInput | null,
  state?: ModelSubscriptionStringInput | null,
  postal_code?: ModelSubscriptionStringInput | null,
  country?: ModelSubscriptionStringInput | null,
  account_name?: ModelSubscriptionStringInput | null,
  account_number?: ModelSubscriptionStringInput | null,
  routing_number?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionApplicationFilterInput | null > | null,
  or?: Array< ModelSubscriptionApplicationFilterInput | null > | null,
};

export type ModelSubscriptionBlurbFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  start_date?: ModelSubscriptionStringInput | null,
  end_date?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionBlurbFilterInput | null > | null,
  or?: Array< ModelSubscriptionBlurbFilterInput | null > | null,
};

export type ModelSubscriptionProductCategoriesFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  categoryId?: ModelSubscriptionIDInput | null,
  productId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionProductCategoriesFilterInput | null > | null,
  or?: Array< ModelSubscriptionProductCategoriesFilterInput | null > | null,
};

export type ModelSubscriptionIndustryCategoriesFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  categoryId?: ModelSubscriptionIDInput | null,
  industryId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionIndustryCategoriesFilterInput | null > | null,
  or?: Array< ModelSubscriptionIndustryCategoriesFilterInput | null > | null,
};

export type ModelSubscriptionBusinessSalesrepsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  salesrepId?: ModelSubscriptionIDInput | null,
  businessId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionBusinessSalesrepsFilterInput | null > | null,
  or?: Array< ModelSubscriptionBusinessSalesrepsFilterInput | null > | null,
};

export type ModelSubscriptionBusinessIndustriesFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  industryId?: ModelSubscriptionIDInput | null,
  businessId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionBusinessIndustriesFilterInput | null > | null,
  or?: Array< ModelSubscriptionBusinessIndustriesFilterInput | null > | null,
};

export type CreateFactoryMutationVariables = {
  input: CreateFactoryInput,
  condition?: ModelFactoryConditionInput | null,
};

export type CreateFactoryMutation = {
  createFactory?:  {
    __typename: "Factory",
    id: string,
    name?: string | null,
    url?: string | null,
    products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        name?: string | null,
        msrp?: number | null,
        price?: number | null,
        sku?: string | null,
        description?: string | null,
        status?: ProductStatusEnum | null,
        media?: Array< string | null > | null,
        item_weight_net?: number | null,
        item_weight_gross?: number | null,
        item_size_width?: number | null,
        item_size_depth?: number | null,
        item_size_height?: number | null,
        package_weight_net?: number | null,
        package_weight_gross?: number | null,
        package_size_width?: number | null,
        package_size_depth?: number | null,
        package_size_height?: number | null,
        items_per_package?: number | null,
        factory_id?: string | null,
        type?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateFactoryMutationVariables = {
  input: UpdateFactoryInput,
  condition?: ModelFactoryConditionInput | null,
};

export type UpdateFactoryMutation = {
  updateFactory?:  {
    __typename: "Factory",
    id: string,
    name?: string | null,
    url?: string | null,
    products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        name?: string | null,
        msrp?: number | null,
        price?: number | null,
        sku?: string | null,
        description?: string | null,
        status?: ProductStatusEnum | null,
        media?: Array< string | null > | null,
        item_weight_net?: number | null,
        item_weight_gross?: number | null,
        item_size_width?: number | null,
        item_size_depth?: number | null,
        item_size_height?: number | null,
        package_weight_net?: number | null,
        package_weight_gross?: number | null,
        package_size_width?: number | null,
        package_size_depth?: number | null,
        package_size_height?: number | null,
        items_per_package?: number | null,
        factory_id?: string | null,
        type?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteFactoryMutationVariables = {
  input: DeleteFactoryInput,
  condition?: ModelFactoryConditionInput | null,
};

export type DeleteFactoryMutation = {
  deleteFactory?:  {
    __typename: "Factory",
    id: string,
    name?: string | null,
    url?: string | null,
    products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        name?: string | null,
        msrp?: number | null,
        price?: number | null,
        sku?: string | null,
        description?: string | null,
        status?: ProductStatusEnum | null,
        media?: Array< string | null > | null,
        item_weight_net?: number | null,
        item_weight_gross?: number | null,
        item_size_width?: number | null,
        item_size_depth?: number | null,
        item_size_height?: number | null,
        package_weight_net?: number | null,
        package_weight_gross?: number | null,
        package_size_width?: number | null,
        package_size_depth?: number | null,
        package_size_height?: number | null,
        items_per_package?: number | null,
        factory_id?: string | null,
        type?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCategoryMutationVariables = {
  input: CreateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type CreateCategoryMutation = {
  createCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    products?:  {
      __typename: "ModelProductCategoriesConnection",
      items:  Array< {
        __typename: "ProductCategories",
        id: string,
        categoryId: string,
        productId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    industries?:  {
      __typename: "ModelIndustryCategoriesConnection",
      items:  Array< {
        __typename: "IndustryCategories",
        id: string,
        categoryId: string,
        industryId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    type?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCategoryMutationVariables = {
  input: UpdateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type UpdateCategoryMutation = {
  updateCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    products?:  {
      __typename: "ModelProductCategoriesConnection",
      items:  Array< {
        __typename: "ProductCategories",
        id: string,
        categoryId: string,
        productId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    industries?:  {
      __typename: "ModelIndustryCategoriesConnection",
      items:  Array< {
        __typename: "IndustryCategories",
        id: string,
        categoryId: string,
        industryId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    type?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCategoryMutationVariables = {
  input: DeleteCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type DeleteCategoryMutation = {
  deleteCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    products?:  {
      __typename: "ModelProductCategoriesConnection",
      items:  Array< {
        __typename: "ProductCategories",
        id: string,
        categoryId: string,
        productId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    industries?:  {
      __typename: "ModelIndustryCategoriesConnection",
      items:  Array< {
        __typename: "IndustryCategories",
        id: string,
        categoryId: string,
        industryId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    type?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateProductMutationVariables = {
  input: CreateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type CreateProductMutation = {
  createProduct?:  {
    __typename: "Product",
    id: string,
    name?: string | null,
    msrp?: number | null,
    price?: number | null,
    sku?: string | null,
    description?: string | null,
    status?: ProductStatusEnum | null,
    media?: Array< string | null > | null,
    item_weight_net?: number | null,
    item_weight_gross?: number | null,
    item_size_width?: number | null,
    item_size_depth?: number | null,
    item_size_height?: number | null,
    package_weight_net?: number | null,
    package_weight_gross?: number | null,
    package_size_width?: number | null,
    package_size_depth?: number | null,
    package_size_height?: number | null,
    items_per_package?: number | null,
    categories?:  {
      __typename: "ModelProductCategoriesConnection",
      items:  Array< {
        __typename: "ProductCategories",
        id: string,
        categoryId: string,
        productId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    factory_id?: string | null,
    factory?:  {
      __typename: "Factory",
      id: string,
      name?: string | null,
      url?: string | null,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    type?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProductMutationVariables = {
  input: UpdateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type UpdateProductMutation = {
  updateProduct?:  {
    __typename: "Product",
    id: string,
    name?: string | null,
    msrp?: number | null,
    price?: number | null,
    sku?: string | null,
    description?: string | null,
    status?: ProductStatusEnum | null,
    media?: Array< string | null > | null,
    item_weight_net?: number | null,
    item_weight_gross?: number | null,
    item_size_width?: number | null,
    item_size_depth?: number | null,
    item_size_height?: number | null,
    package_weight_net?: number | null,
    package_weight_gross?: number | null,
    package_size_width?: number | null,
    package_size_depth?: number | null,
    package_size_height?: number | null,
    items_per_package?: number | null,
    categories?:  {
      __typename: "ModelProductCategoriesConnection",
      items:  Array< {
        __typename: "ProductCategories",
        id: string,
        categoryId: string,
        productId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    factory_id?: string | null,
    factory?:  {
      __typename: "Factory",
      id: string,
      name?: string | null,
      url?: string | null,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    type?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProductMutationVariables = {
  input: DeleteProductInput,
  condition?: ModelProductConditionInput | null,
};

export type DeleteProductMutation = {
  deleteProduct?:  {
    __typename: "Product",
    id: string,
    name?: string | null,
    msrp?: number | null,
    price?: number | null,
    sku?: string | null,
    description?: string | null,
    status?: ProductStatusEnum | null,
    media?: Array< string | null > | null,
    item_weight_net?: number | null,
    item_weight_gross?: number | null,
    item_size_width?: number | null,
    item_size_depth?: number | null,
    item_size_height?: number | null,
    package_weight_net?: number | null,
    package_weight_gross?: number | null,
    package_size_width?: number | null,
    package_size_depth?: number | null,
    package_size_height?: number | null,
    items_per_package?: number | null,
    categories?:  {
      __typename: "ModelProductCategoriesConnection",
      items:  Array< {
        __typename: "ProductCategories",
        id: string,
        categoryId: string,
        productId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    factory_id?: string | null,
    factory?:  {
      __typename: "Factory",
      id: string,
      name?: string | null,
      url?: string | null,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    type?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePackageMutationVariables = {
  input: CreatePackageInput,
  condition?: ModelPackageConditionInput | null,
};

export type CreatePackageMutation = {
  createPackage?:  {
    __typename: "Package",
    id: string,
    product?:  {
      __typename: "Product",
      id: string,
      name?: string | null,
      msrp?: number | null,
      price?: number | null,
      sku?: string | null,
      description?: string | null,
      status?: ProductStatusEnum | null,
      media?: Array< string | null > | null,
      item_weight_net?: number | null,
      item_weight_gross?: number | null,
      item_size_width?: number | null,
      item_size_depth?: number | null,
      item_size_height?: number | null,
      package_weight_net?: number | null,
      package_weight_gross?: number | null,
      package_size_width?: number | null,
      package_size_depth?: number | null,
      package_size_height?: number | null,
      items_per_package?: number | null,
      categories?:  {
        __typename: "ModelProductCategoriesConnection",
        nextToken?: string | null,
      } | null,
      factory_id?: string | null,
      factory?:  {
        __typename: "Factory",
        id: string,
        name?: string | null,
        url?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      type?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    weight_net?: number | null,
    weight_gross?: number | null,
    size_width?: number | null,
    size_depth?: number | null,
    size_height?: number | null,
    createdAt: string,
    updatedAt: string,
    shipmentPackagesId?: string | null,
    packageProductId?: string | null,
  } | null,
};

export type UpdatePackageMutationVariables = {
  input: UpdatePackageInput,
  condition?: ModelPackageConditionInput | null,
};

export type UpdatePackageMutation = {
  updatePackage?:  {
    __typename: "Package",
    id: string,
    product?:  {
      __typename: "Product",
      id: string,
      name?: string | null,
      msrp?: number | null,
      price?: number | null,
      sku?: string | null,
      description?: string | null,
      status?: ProductStatusEnum | null,
      media?: Array< string | null > | null,
      item_weight_net?: number | null,
      item_weight_gross?: number | null,
      item_size_width?: number | null,
      item_size_depth?: number | null,
      item_size_height?: number | null,
      package_weight_net?: number | null,
      package_weight_gross?: number | null,
      package_size_width?: number | null,
      package_size_depth?: number | null,
      package_size_height?: number | null,
      items_per_package?: number | null,
      categories?:  {
        __typename: "ModelProductCategoriesConnection",
        nextToken?: string | null,
      } | null,
      factory_id?: string | null,
      factory?:  {
        __typename: "Factory",
        id: string,
        name?: string | null,
        url?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      type?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    weight_net?: number | null,
    weight_gross?: number | null,
    size_width?: number | null,
    size_depth?: number | null,
    size_height?: number | null,
    createdAt: string,
    updatedAt: string,
    shipmentPackagesId?: string | null,
    packageProductId?: string | null,
  } | null,
};

export type DeletePackageMutationVariables = {
  input: DeletePackageInput,
  condition?: ModelPackageConditionInput | null,
};

export type DeletePackageMutation = {
  deletePackage?:  {
    __typename: "Package",
    id: string,
    product?:  {
      __typename: "Product",
      id: string,
      name?: string | null,
      msrp?: number | null,
      price?: number | null,
      sku?: string | null,
      description?: string | null,
      status?: ProductStatusEnum | null,
      media?: Array< string | null > | null,
      item_weight_net?: number | null,
      item_weight_gross?: number | null,
      item_size_width?: number | null,
      item_size_depth?: number | null,
      item_size_height?: number | null,
      package_weight_net?: number | null,
      package_weight_gross?: number | null,
      package_size_width?: number | null,
      package_size_depth?: number | null,
      package_size_height?: number | null,
      items_per_package?: number | null,
      categories?:  {
        __typename: "ModelProductCategoriesConnection",
        nextToken?: string | null,
      } | null,
      factory_id?: string | null,
      factory?:  {
        __typename: "Factory",
        id: string,
        name?: string | null,
        url?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      type?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    weight_net?: number | null,
    weight_gross?: number | null,
    size_width?: number | null,
    size_depth?: number | null,
    size_height?: number | null,
    createdAt: string,
    updatedAt: string,
    shipmentPackagesId?: string | null,
    packageProductId?: string | null,
  } | null,
};

export type CreateShipmentMutationVariables = {
  input: CreateShipmentInput,
  condition?: ModelShipmentConditionInput | null,
};

export type CreateShipmentMutation = {
  createShipment?:  {
    __typename: "Shipment",
    id: string,
    packages?:  {
      __typename: "ModelPackageConnection",
      items:  Array< {
        __typename: "Package",
        id: string,
        weight_net?: number | null,
        weight_gross?: number | null,
        size_width?: number | null,
        size_depth?: number | null,
        size_height?: number | null,
        createdAt: string,
        updatedAt: string,
        shipmentPackagesId?: string | null,
        packageProductId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    departure?: string | null,
    arrival?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateShipmentMutationVariables = {
  input: UpdateShipmentInput,
  condition?: ModelShipmentConditionInput | null,
};

export type UpdateShipmentMutation = {
  updateShipment?:  {
    __typename: "Shipment",
    id: string,
    packages?:  {
      __typename: "ModelPackageConnection",
      items:  Array< {
        __typename: "Package",
        id: string,
        weight_net?: number | null,
        weight_gross?: number | null,
        size_width?: number | null,
        size_depth?: number | null,
        size_height?: number | null,
        createdAt: string,
        updatedAt: string,
        shipmentPackagesId?: string | null,
        packageProductId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    departure?: string | null,
    arrival?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteShipmentMutationVariables = {
  input: DeleteShipmentInput,
  condition?: ModelShipmentConditionInput | null,
};

export type DeleteShipmentMutation = {
  deleteShipment?:  {
    __typename: "Shipment",
    id: string,
    packages?:  {
      __typename: "ModelPackageConnection",
      items:  Array< {
        __typename: "Package",
        id: string,
        weight_net?: number | null,
        weight_gross?: number | null,
        size_width?: number | null,
        size_depth?: number | null,
        size_height?: number | null,
        createdAt: string,
        updatedAt: string,
        shipmentPackagesId?: string | null,
        packageProductId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    departure?: string | null,
    arrival?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePurchaseMutationVariables = {
  input: CreatePurchaseInput,
  condition?: ModelPurchaseConditionInput | null,
};

export type CreatePurchaseMutation = {
  createPurchase?:  {
    __typename: "Purchase",
    id: string,
    business?:  {
      __typename: "Business",
      id: string,
      name: string,
      description?: string | null,
      salesreps?:  {
        __typename: "ModelBusinessSalesrepsConnection",
        nextToken?: string | null,
      } | null,
      industries?:  {
        __typename: "ModelBusinessIndustriesConnection",
        nextToken?: string | null,
      } | null,
      addresses?:  {
        __typename: "ModelAddressConnection",
        nextToken?: string | null,
      } | null,
      banks?:  {
        __typename: "ModelBankConnection",
        nextToken?: string | null,
      } | null,
      buyers?:  {
        __typename: "ModelBuyerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    buyer?:  {
      __typename: "Buyer",
      id: string,
      first_name: string,
      last_name: string,
      user_name: string,
      last_login?: string | null,
      is_owner: boolean,
      email: string,
      phone: string,
      business_id?: string | null,
      business?:  {
        __typename: "Business",
        id: string,
        name: string,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    purchaseBusinessId?: string | null,
    purchaseBuyerId?: string | null,
  } | null,
};

export type UpdatePurchaseMutationVariables = {
  input: UpdatePurchaseInput,
  condition?: ModelPurchaseConditionInput | null,
};

export type UpdatePurchaseMutation = {
  updatePurchase?:  {
    __typename: "Purchase",
    id: string,
    business?:  {
      __typename: "Business",
      id: string,
      name: string,
      description?: string | null,
      salesreps?:  {
        __typename: "ModelBusinessSalesrepsConnection",
        nextToken?: string | null,
      } | null,
      industries?:  {
        __typename: "ModelBusinessIndustriesConnection",
        nextToken?: string | null,
      } | null,
      addresses?:  {
        __typename: "ModelAddressConnection",
        nextToken?: string | null,
      } | null,
      banks?:  {
        __typename: "ModelBankConnection",
        nextToken?: string | null,
      } | null,
      buyers?:  {
        __typename: "ModelBuyerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    buyer?:  {
      __typename: "Buyer",
      id: string,
      first_name: string,
      last_name: string,
      user_name: string,
      last_login?: string | null,
      is_owner: boolean,
      email: string,
      phone: string,
      business_id?: string | null,
      business?:  {
        __typename: "Business",
        id: string,
        name: string,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    purchaseBusinessId?: string | null,
    purchaseBuyerId?: string | null,
  } | null,
};

export type DeletePurchaseMutationVariables = {
  input: DeletePurchaseInput,
  condition?: ModelPurchaseConditionInput | null,
};

export type DeletePurchaseMutation = {
  deletePurchase?:  {
    __typename: "Purchase",
    id: string,
    business?:  {
      __typename: "Business",
      id: string,
      name: string,
      description?: string | null,
      salesreps?:  {
        __typename: "ModelBusinessSalesrepsConnection",
        nextToken?: string | null,
      } | null,
      industries?:  {
        __typename: "ModelBusinessIndustriesConnection",
        nextToken?: string | null,
      } | null,
      addresses?:  {
        __typename: "ModelAddressConnection",
        nextToken?: string | null,
      } | null,
      banks?:  {
        __typename: "ModelBankConnection",
        nextToken?: string | null,
      } | null,
      buyers?:  {
        __typename: "ModelBuyerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    buyer?:  {
      __typename: "Buyer",
      id: string,
      first_name: string,
      last_name: string,
      user_name: string,
      last_login?: string | null,
      is_owner: boolean,
      email: string,
      phone: string,
      business_id?: string | null,
      business?:  {
        __typename: "Business",
        id: string,
        name: string,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    purchaseBusinessId?: string | null,
    purchaseBuyerId?: string | null,
  } | null,
};

export type CreateSalesrepMutationVariables = {
  input: CreateSalesrepInput,
  condition?: ModelSalesrepConditionInput | null,
};

export type CreateSalesrepMutation = {
  createSalesrep?:  {
    __typename: "Salesrep",
    id: string,
    name: string,
    title?: string | null,
    email: string,
    phone: string,
    businesses?:  {
      __typename: "ModelBusinessSalesrepsConnection",
      items:  Array< {
        __typename: "BusinessSalesreps",
        id: string,
        salesrepId: string,
        businessId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    type?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSalesrepMutationVariables = {
  input: UpdateSalesrepInput,
  condition?: ModelSalesrepConditionInput | null,
};

export type UpdateSalesrepMutation = {
  updateSalesrep?:  {
    __typename: "Salesrep",
    id: string,
    name: string,
    title?: string | null,
    email: string,
    phone: string,
    businesses?:  {
      __typename: "ModelBusinessSalesrepsConnection",
      items:  Array< {
        __typename: "BusinessSalesreps",
        id: string,
        salesrepId: string,
        businessId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    type?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSalesrepMutationVariables = {
  input: DeleteSalesrepInput,
  condition?: ModelSalesrepConditionInput | null,
};

export type DeleteSalesrepMutation = {
  deleteSalesrep?:  {
    __typename: "Salesrep",
    id: string,
    name: string,
    title?: string | null,
    email: string,
    phone: string,
    businesses?:  {
      __typename: "ModelBusinessSalesrepsConnection",
      items:  Array< {
        __typename: "BusinessSalesreps",
        id: string,
        salesrepId: string,
        businessId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    type?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateIndustryMutationVariables = {
  input: CreateIndustryInput,
  condition?: ModelIndustryConditionInput | null,
};

export type CreateIndustryMutation = {
  createIndustry?:  {
    __typename: "Industry",
    id: string,
    name: string,
    description?: string | null,
    businesses?:  {
      __typename: "ModelBusinessIndustriesConnection",
      items:  Array< {
        __typename: "BusinessIndustries",
        id: string,
        industryId: string,
        businessId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    categories?:  {
      __typename: "ModelIndustryCategoriesConnection",
      items:  Array< {
        __typename: "IndustryCategories",
        id: string,
        categoryId: string,
        industryId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateIndustryMutationVariables = {
  input: UpdateIndustryInput,
  condition?: ModelIndustryConditionInput | null,
};

export type UpdateIndustryMutation = {
  updateIndustry?:  {
    __typename: "Industry",
    id: string,
    name: string,
    description?: string | null,
    businesses?:  {
      __typename: "ModelBusinessIndustriesConnection",
      items:  Array< {
        __typename: "BusinessIndustries",
        id: string,
        industryId: string,
        businessId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    categories?:  {
      __typename: "ModelIndustryCategoriesConnection",
      items:  Array< {
        __typename: "IndustryCategories",
        id: string,
        categoryId: string,
        industryId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteIndustryMutationVariables = {
  input: DeleteIndustryInput,
  condition?: ModelIndustryConditionInput | null,
};

export type DeleteIndustryMutation = {
  deleteIndustry?:  {
    __typename: "Industry",
    id: string,
    name: string,
    description?: string | null,
    businesses?:  {
      __typename: "ModelBusinessIndustriesConnection",
      items:  Array< {
        __typename: "BusinessIndustries",
        id: string,
        industryId: string,
        businessId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    categories?:  {
      __typename: "ModelIndustryCategoriesConnection",
      items:  Array< {
        __typename: "IndustryCategories",
        id: string,
        categoryId: string,
        industryId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAddressMutationVariables = {
  input: CreateAddressInput,
  condition?: ModelAddressConditionInput | null,
};

export type CreateAddressMutation = {
  createAddress?:  {
    __typename: "Address",
    id: string,
    street: string,
    city: string,
    state: string,
    postal_code: string,
    country: string,
    is_default?: boolean | null,
    business_id?: string | null,
    business?:  {
      __typename: "Business",
      id: string,
      name: string,
      description?: string | null,
      salesreps?:  {
        __typename: "ModelBusinessSalesrepsConnection",
        nextToken?: string | null,
      } | null,
      industries?:  {
        __typename: "ModelBusinessIndustriesConnection",
        nextToken?: string | null,
      } | null,
      addresses?:  {
        __typename: "ModelAddressConnection",
        nextToken?: string | null,
      } | null,
      banks?:  {
        __typename: "ModelBankConnection",
        nextToken?: string | null,
      } | null,
      buyers?:  {
        __typename: "ModelBuyerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAddressMutationVariables = {
  input: UpdateAddressInput,
  condition?: ModelAddressConditionInput | null,
};

export type UpdateAddressMutation = {
  updateAddress?:  {
    __typename: "Address",
    id: string,
    street: string,
    city: string,
    state: string,
    postal_code: string,
    country: string,
    is_default?: boolean | null,
    business_id?: string | null,
    business?:  {
      __typename: "Business",
      id: string,
      name: string,
      description?: string | null,
      salesreps?:  {
        __typename: "ModelBusinessSalesrepsConnection",
        nextToken?: string | null,
      } | null,
      industries?:  {
        __typename: "ModelBusinessIndustriesConnection",
        nextToken?: string | null,
      } | null,
      addresses?:  {
        __typename: "ModelAddressConnection",
        nextToken?: string | null,
      } | null,
      banks?:  {
        __typename: "ModelBankConnection",
        nextToken?: string | null,
      } | null,
      buyers?:  {
        __typename: "ModelBuyerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAddressMutationVariables = {
  input: DeleteAddressInput,
  condition?: ModelAddressConditionInput | null,
};

export type DeleteAddressMutation = {
  deleteAddress?:  {
    __typename: "Address",
    id: string,
    street: string,
    city: string,
    state: string,
    postal_code: string,
    country: string,
    is_default?: boolean | null,
    business_id?: string | null,
    business?:  {
      __typename: "Business",
      id: string,
      name: string,
      description?: string | null,
      salesreps?:  {
        __typename: "ModelBusinessSalesrepsConnection",
        nextToken?: string | null,
      } | null,
      industries?:  {
        __typename: "ModelBusinessIndustriesConnection",
        nextToken?: string | null,
      } | null,
      addresses?:  {
        __typename: "ModelAddressConnection",
        nextToken?: string | null,
      } | null,
      banks?:  {
        __typename: "ModelBankConnection",
        nextToken?: string | null,
      } | null,
      buyers?:  {
        __typename: "ModelBuyerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateBankMutationVariables = {
  input: CreateBankInput,
  condition?: ModelBankConditionInput | null,
};

export type CreateBankMutation = {
  createBank?:  {
    __typename: "Bank",
    id: string,
    account_name: string,
    account_number: string,
    routing_number: string,
    is_default?: boolean | null,
    business_id?: string | null,
    business?:  {
      __typename: "Business",
      id: string,
      name: string,
      description?: string | null,
      salesreps?:  {
        __typename: "ModelBusinessSalesrepsConnection",
        nextToken?: string | null,
      } | null,
      industries?:  {
        __typename: "ModelBusinessIndustriesConnection",
        nextToken?: string | null,
      } | null,
      addresses?:  {
        __typename: "ModelAddressConnection",
        nextToken?: string | null,
      } | null,
      banks?:  {
        __typename: "ModelBankConnection",
        nextToken?: string | null,
      } | null,
      buyers?:  {
        __typename: "ModelBuyerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateBankMutationVariables = {
  input: UpdateBankInput,
  condition?: ModelBankConditionInput | null,
};

export type UpdateBankMutation = {
  updateBank?:  {
    __typename: "Bank",
    id: string,
    account_name: string,
    account_number: string,
    routing_number: string,
    is_default?: boolean | null,
    business_id?: string | null,
    business?:  {
      __typename: "Business",
      id: string,
      name: string,
      description?: string | null,
      salesreps?:  {
        __typename: "ModelBusinessSalesrepsConnection",
        nextToken?: string | null,
      } | null,
      industries?:  {
        __typename: "ModelBusinessIndustriesConnection",
        nextToken?: string | null,
      } | null,
      addresses?:  {
        __typename: "ModelAddressConnection",
        nextToken?: string | null,
      } | null,
      banks?:  {
        __typename: "ModelBankConnection",
        nextToken?: string | null,
      } | null,
      buyers?:  {
        __typename: "ModelBuyerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBankMutationVariables = {
  input: DeleteBankInput,
  condition?: ModelBankConditionInput | null,
};

export type DeleteBankMutation = {
  deleteBank?:  {
    __typename: "Bank",
    id: string,
    account_name: string,
    account_number: string,
    routing_number: string,
    is_default?: boolean | null,
    business_id?: string | null,
    business?:  {
      __typename: "Business",
      id: string,
      name: string,
      description?: string | null,
      salesreps?:  {
        __typename: "ModelBusinessSalesrepsConnection",
        nextToken?: string | null,
      } | null,
      industries?:  {
        __typename: "ModelBusinessIndustriesConnection",
        nextToken?: string | null,
      } | null,
      addresses?:  {
        __typename: "ModelAddressConnection",
        nextToken?: string | null,
      } | null,
      banks?:  {
        __typename: "ModelBankConnection",
        nextToken?: string | null,
      } | null,
      buyers?:  {
        __typename: "ModelBuyerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateBusinessMutationVariables = {
  input: CreateBusinessInput,
  condition?: ModelBusinessConditionInput | null,
};

export type CreateBusinessMutation = {
  createBusiness?:  {
    __typename: "Business",
    id: string,
    name: string,
    description?: string | null,
    salesreps?:  {
      __typename: "ModelBusinessSalesrepsConnection",
      items:  Array< {
        __typename: "BusinessSalesreps",
        id: string,
        salesrepId: string,
        businessId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    industries?:  {
      __typename: "ModelBusinessIndustriesConnection",
      items:  Array< {
        __typename: "BusinessIndustries",
        id: string,
        industryId: string,
        businessId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    addresses?:  {
      __typename: "ModelAddressConnection",
      items:  Array< {
        __typename: "Address",
        id: string,
        street: string,
        city: string,
        state: string,
        postal_code: string,
        country: string,
        is_default?: boolean | null,
        business_id?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    banks?:  {
      __typename: "ModelBankConnection",
      items:  Array< {
        __typename: "Bank",
        id: string,
        account_name: string,
        account_number: string,
        routing_number: string,
        is_default?: boolean | null,
        business_id?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    buyers?:  {
      __typename: "ModelBuyerConnection",
      items:  Array< {
        __typename: "Buyer",
        id: string,
        first_name: string,
        last_name: string,
        user_name: string,
        last_login?: string | null,
        is_owner: boolean,
        email: string,
        phone: string,
        business_id?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateBusinessMutationVariables = {
  input: UpdateBusinessInput,
  condition?: ModelBusinessConditionInput | null,
};

export type UpdateBusinessMutation = {
  updateBusiness?:  {
    __typename: "Business",
    id: string,
    name: string,
    description?: string | null,
    salesreps?:  {
      __typename: "ModelBusinessSalesrepsConnection",
      items:  Array< {
        __typename: "BusinessSalesreps",
        id: string,
        salesrepId: string,
        businessId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    industries?:  {
      __typename: "ModelBusinessIndustriesConnection",
      items:  Array< {
        __typename: "BusinessIndustries",
        id: string,
        industryId: string,
        businessId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    addresses?:  {
      __typename: "ModelAddressConnection",
      items:  Array< {
        __typename: "Address",
        id: string,
        street: string,
        city: string,
        state: string,
        postal_code: string,
        country: string,
        is_default?: boolean | null,
        business_id?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    banks?:  {
      __typename: "ModelBankConnection",
      items:  Array< {
        __typename: "Bank",
        id: string,
        account_name: string,
        account_number: string,
        routing_number: string,
        is_default?: boolean | null,
        business_id?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    buyers?:  {
      __typename: "ModelBuyerConnection",
      items:  Array< {
        __typename: "Buyer",
        id: string,
        first_name: string,
        last_name: string,
        user_name: string,
        last_login?: string | null,
        is_owner: boolean,
        email: string,
        phone: string,
        business_id?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBusinessMutationVariables = {
  input: DeleteBusinessInput,
  condition?: ModelBusinessConditionInput | null,
};

export type DeleteBusinessMutation = {
  deleteBusiness?:  {
    __typename: "Business",
    id: string,
    name: string,
    description?: string | null,
    salesreps?:  {
      __typename: "ModelBusinessSalesrepsConnection",
      items:  Array< {
        __typename: "BusinessSalesreps",
        id: string,
        salesrepId: string,
        businessId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    industries?:  {
      __typename: "ModelBusinessIndustriesConnection",
      items:  Array< {
        __typename: "BusinessIndustries",
        id: string,
        industryId: string,
        businessId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    addresses?:  {
      __typename: "ModelAddressConnection",
      items:  Array< {
        __typename: "Address",
        id: string,
        street: string,
        city: string,
        state: string,
        postal_code: string,
        country: string,
        is_default?: boolean | null,
        business_id?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    banks?:  {
      __typename: "ModelBankConnection",
      items:  Array< {
        __typename: "Bank",
        id: string,
        account_name: string,
        account_number: string,
        routing_number: string,
        is_default?: boolean | null,
        business_id?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    buyers?:  {
      __typename: "ModelBuyerConnection",
      items:  Array< {
        __typename: "Buyer",
        id: string,
        first_name: string,
        last_name: string,
        user_name: string,
        last_login?: string | null,
        is_owner: boolean,
        email: string,
        phone: string,
        business_id?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateBuyerMutationVariables = {
  input: CreateBuyerInput,
  condition?: ModelBuyerConditionInput | null,
};

export type CreateBuyerMutation = {
  createBuyer?:  {
    __typename: "Buyer",
    id: string,
    first_name: string,
    last_name: string,
    user_name: string,
    last_login?: string | null,
    is_owner: boolean,
    email: string,
    phone: string,
    business_id?: string | null,
    business?:  {
      __typename: "Business",
      id: string,
      name: string,
      description?: string | null,
      salesreps?:  {
        __typename: "ModelBusinessSalesrepsConnection",
        nextToken?: string | null,
      } | null,
      industries?:  {
        __typename: "ModelBusinessIndustriesConnection",
        nextToken?: string | null,
      } | null,
      addresses?:  {
        __typename: "ModelAddressConnection",
        nextToken?: string | null,
      } | null,
      banks?:  {
        __typename: "ModelBankConnection",
        nextToken?: string | null,
      } | null,
      buyers?:  {
        __typename: "ModelBuyerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateBuyerMutationVariables = {
  input: UpdateBuyerInput,
  condition?: ModelBuyerConditionInput | null,
};

export type UpdateBuyerMutation = {
  updateBuyer?:  {
    __typename: "Buyer",
    id: string,
    first_name: string,
    last_name: string,
    user_name: string,
    last_login?: string | null,
    is_owner: boolean,
    email: string,
    phone: string,
    business_id?: string | null,
    business?:  {
      __typename: "Business",
      id: string,
      name: string,
      description?: string | null,
      salesreps?:  {
        __typename: "ModelBusinessSalesrepsConnection",
        nextToken?: string | null,
      } | null,
      industries?:  {
        __typename: "ModelBusinessIndustriesConnection",
        nextToken?: string | null,
      } | null,
      addresses?:  {
        __typename: "ModelAddressConnection",
        nextToken?: string | null,
      } | null,
      banks?:  {
        __typename: "ModelBankConnection",
        nextToken?: string | null,
      } | null,
      buyers?:  {
        __typename: "ModelBuyerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBuyerMutationVariables = {
  input: DeleteBuyerInput,
  condition?: ModelBuyerConditionInput | null,
};

export type DeleteBuyerMutation = {
  deleteBuyer?:  {
    __typename: "Buyer",
    id: string,
    first_name: string,
    last_name: string,
    user_name: string,
    last_login?: string | null,
    is_owner: boolean,
    email: string,
    phone: string,
    business_id?: string | null,
    business?:  {
      __typename: "Business",
      id: string,
      name: string,
      description?: string | null,
      salesreps?:  {
        __typename: "ModelBusinessSalesrepsConnection",
        nextToken?: string | null,
      } | null,
      industries?:  {
        __typename: "ModelBusinessIndustriesConnection",
        nextToken?: string | null,
      } | null,
      addresses?:  {
        __typename: "ModelAddressConnection",
        nextToken?: string | null,
      } | null,
      banks?:  {
        __typename: "ModelBankConnection",
        nextToken?: string | null,
      } | null,
      buyers?:  {
        __typename: "ModelBuyerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateApplicationMutationVariables = {
  input: CreateApplicationInput,
  condition?: ModelApplicationConditionInput | null,
};

export type CreateApplicationMutation = {
  createApplication?:  {
    __typename: "Application",
    id: string,
    status?: string | null,
    business_name: string,
    street: string,
    city: string,
    state: string,
    postal_code: string,
    country: string,
    account_name: string,
    account_number: string,
    routing_number: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateApplicationMutationVariables = {
  input: UpdateApplicationInput,
  condition?: ModelApplicationConditionInput | null,
};

export type UpdateApplicationMutation = {
  updateApplication?:  {
    __typename: "Application",
    id: string,
    status?: string | null,
    business_name: string,
    street: string,
    city: string,
    state: string,
    postal_code: string,
    country: string,
    account_name: string,
    account_number: string,
    routing_number: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteApplicationMutationVariables = {
  input: DeleteApplicationInput,
  condition?: ModelApplicationConditionInput | null,
};

export type DeleteApplicationMutation = {
  deleteApplication?:  {
    __typename: "Application",
    id: string,
    status?: string | null,
    business_name: string,
    street: string,
    city: string,
    state: string,
    postal_code: string,
    country: string,
    account_name: string,
    account_number: string,
    routing_number: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateBlurbMutationVariables = {
  input: CreateBlurbInput,
  condition?: ModelBlurbConditionInput | null,
};

export type CreateBlurbMutation = {
  createBlurb?:  {
    __typename: "Blurb",
    id: string,
    title: string,
    description: string,
    start_date: string,
    end_date: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateBlurbMutationVariables = {
  input: UpdateBlurbInput,
  condition?: ModelBlurbConditionInput | null,
};

export type UpdateBlurbMutation = {
  updateBlurb?:  {
    __typename: "Blurb",
    id: string,
    title: string,
    description: string,
    start_date: string,
    end_date: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBlurbMutationVariables = {
  input: DeleteBlurbInput,
  condition?: ModelBlurbConditionInput | null,
};

export type DeleteBlurbMutation = {
  deleteBlurb?:  {
    __typename: "Blurb",
    id: string,
    title: string,
    description: string,
    start_date: string,
    end_date: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateProductCategoriesMutationVariables = {
  input: CreateProductCategoriesInput,
  condition?: ModelProductCategoriesConditionInput | null,
};

export type CreateProductCategoriesMutation = {
  createProductCategories?:  {
    __typename: "ProductCategories",
    id: string,
    categoryId: string,
    productId: string,
    category:  {
      __typename: "Category",
      id: string,
      name: string,
      products?:  {
        __typename: "ModelProductCategoriesConnection",
        nextToken?: string | null,
      } | null,
      industries?:  {
        __typename: "ModelIndustryCategoriesConnection",
        nextToken?: string | null,
      } | null,
      type?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    product:  {
      __typename: "Product",
      id: string,
      name?: string | null,
      msrp?: number | null,
      price?: number | null,
      sku?: string | null,
      description?: string | null,
      status?: ProductStatusEnum | null,
      media?: Array< string | null > | null,
      item_weight_net?: number | null,
      item_weight_gross?: number | null,
      item_size_width?: number | null,
      item_size_depth?: number | null,
      item_size_height?: number | null,
      package_weight_net?: number | null,
      package_weight_gross?: number | null,
      package_size_width?: number | null,
      package_size_depth?: number | null,
      package_size_height?: number | null,
      items_per_package?: number | null,
      categories?:  {
        __typename: "ModelProductCategoriesConnection",
        nextToken?: string | null,
      } | null,
      factory_id?: string | null,
      factory?:  {
        __typename: "Factory",
        id: string,
        name?: string | null,
        url?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      type?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProductCategoriesMutationVariables = {
  input: UpdateProductCategoriesInput,
  condition?: ModelProductCategoriesConditionInput | null,
};

export type UpdateProductCategoriesMutation = {
  updateProductCategories?:  {
    __typename: "ProductCategories",
    id: string,
    categoryId: string,
    productId: string,
    category:  {
      __typename: "Category",
      id: string,
      name: string,
      products?:  {
        __typename: "ModelProductCategoriesConnection",
        nextToken?: string | null,
      } | null,
      industries?:  {
        __typename: "ModelIndustryCategoriesConnection",
        nextToken?: string | null,
      } | null,
      type?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    product:  {
      __typename: "Product",
      id: string,
      name?: string | null,
      msrp?: number | null,
      price?: number | null,
      sku?: string | null,
      description?: string | null,
      status?: ProductStatusEnum | null,
      media?: Array< string | null > | null,
      item_weight_net?: number | null,
      item_weight_gross?: number | null,
      item_size_width?: number | null,
      item_size_depth?: number | null,
      item_size_height?: number | null,
      package_weight_net?: number | null,
      package_weight_gross?: number | null,
      package_size_width?: number | null,
      package_size_depth?: number | null,
      package_size_height?: number | null,
      items_per_package?: number | null,
      categories?:  {
        __typename: "ModelProductCategoriesConnection",
        nextToken?: string | null,
      } | null,
      factory_id?: string | null,
      factory?:  {
        __typename: "Factory",
        id: string,
        name?: string | null,
        url?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      type?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProductCategoriesMutationVariables = {
  input: DeleteProductCategoriesInput,
  condition?: ModelProductCategoriesConditionInput | null,
};

export type DeleteProductCategoriesMutation = {
  deleteProductCategories?:  {
    __typename: "ProductCategories",
    id: string,
    categoryId: string,
    productId: string,
    category:  {
      __typename: "Category",
      id: string,
      name: string,
      products?:  {
        __typename: "ModelProductCategoriesConnection",
        nextToken?: string | null,
      } | null,
      industries?:  {
        __typename: "ModelIndustryCategoriesConnection",
        nextToken?: string | null,
      } | null,
      type?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    product:  {
      __typename: "Product",
      id: string,
      name?: string | null,
      msrp?: number | null,
      price?: number | null,
      sku?: string | null,
      description?: string | null,
      status?: ProductStatusEnum | null,
      media?: Array< string | null > | null,
      item_weight_net?: number | null,
      item_weight_gross?: number | null,
      item_size_width?: number | null,
      item_size_depth?: number | null,
      item_size_height?: number | null,
      package_weight_net?: number | null,
      package_weight_gross?: number | null,
      package_size_width?: number | null,
      package_size_depth?: number | null,
      package_size_height?: number | null,
      items_per_package?: number | null,
      categories?:  {
        __typename: "ModelProductCategoriesConnection",
        nextToken?: string | null,
      } | null,
      factory_id?: string | null,
      factory?:  {
        __typename: "Factory",
        id: string,
        name?: string | null,
        url?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      type?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateIndustryCategoriesMutationVariables = {
  input: CreateIndustryCategoriesInput,
  condition?: ModelIndustryCategoriesConditionInput | null,
};

export type CreateIndustryCategoriesMutation = {
  createIndustryCategories?:  {
    __typename: "IndustryCategories",
    id: string,
    categoryId: string,
    industryId: string,
    category:  {
      __typename: "Category",
      id: string,
      name: string,
      products?:  {
        __typename: "ModelProductCategoriesConnection",
        nextToken?: string | null,
      } | null,
      industries?:  {
        __typename: "ModelIndustryCategoriesConnection",
        nextToken?: string | null,
      } | null,
      type?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    industry:  {
      __typename: "Industry",
      id: string,
      name: string,
      description?: string | null,
      businesses?:  {
        __typename: "ModelBusinessIndustriesConnection",
        nextToken?: string | null,
      } | null,
      categories?:  {
        __typename: "ModelIndustryCategoriesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateIndustryCategoriesMutationVariables = {
  input: UpdateIndustryCategoriesInput,
  condition?: ModelIndustryCategoriesConditionInput | null,
};

export type UpdateIndustryCategoriesMutation = {
  updateIndustryCategories?:  {
    __typename: "IndustryCategories",
    id: string,
    categoryId: string,
    industryId: string,
    category:  {
      __typename: "Category",
      id: string,
      name: string,
      products?:  {
        __typename: "ModelProductCategoriesConnection",
        nextToken?: string | null,
      } | null,
      industries?:  {
        __typename: "ModelIndustryCategoriesConnection",
        nextToken?: string | null,
      } | null,
      type?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    industry:  {
      __typename: "Industry",
      id: string,
      name: string,
      description?: string | null,
      businesses?:  {
        __typename: "ModelBusinessIndustriesConnection",
        nextToken?: string | null,
      } | null,
      categories?:  {
        __typename: "ModelIndustryCategoriesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteIndustryCategoriesMutationVariables = {
  input: DeleteIndustryCategoriesInput,
  condition?: ModelIndustryCategoriesConditionInput | null,
};

export type DeleteIndustryCategoriesMutation = {
  deleteIndustryCategories?:  {
    __typename: "IndustryCategories",
    id: string,
    categoryId: string,
    industryId: string,
    category:  {
      __typename: "Category",
      id: string,
      name: string,
      products?:  {
        __typename: "ModelProductCategoriesConnection",
        nextToken?: string | null,
      } | null,
      industries?:  {
        __typename: "ModelIndustryCategoriesConnection",
        nextToken?: string | null,
      } | null,
      type?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    industry:  {
      __typename: "Industry",
      id: string,
      name: string,
      description?: string | null,
      businesses?:  {
        __typename: "ModelBusinessIndustriesConnection",
        nextToken?: string | null,
      } | null,
      categories?:  {
        __typename: "ModelIndustryCategoriesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateBusinessSalesrepsMutationVariables = {
  input: CreateBusinessSalesrepsInput,
  condition?: ModelBusinessSalesrepsConditionInput | null,
};

export type CreateBusinessSalesrepsMutation = {
  createBusinessSalesreps?:  {
    __typename: "BusinessSalesreps",
    id: string,
    salesrepId: string,
    businessId: string,
    salesrep:  {
      __typename: "Salesrep",
      id: string,
      name: string,
      title?: string | null,
      email: string,
      phone: string,
      businesses?:  {
        __typename: "ModelBusinessSalesrepsConnection",
        nextToken?: string | null,
      } | null,
      type?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    business:  {
      __typename: "Business",
      id: string,
      name: string,
      description?: string | null,
      salesreps?:  {
        __typename: "ModelBusinessSalesrepsConnection",
        nextToken?: string | null,
      } | null,
      industries?:  {
        __typename: "ModelBusinessIndustriesConnection",
        nextToken?: string | null,
      } | null,
      addresses?:  {
        __typename: "ModelAddressConnection",
        nextToken?: string | null,
      } | null,
      banks?:  {
        __typename: "ModelBankConnection",
        nextToken?: string | null,
      } | null,
      buyers?:  {
        __typename: "ModelBuyerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateBusinessSalesrepsMutationVariables = {
  input: UpdateBusinessSalesrepsInput,
  condition?: ModelBusinessSalesrepsConditionInput | null,
};

export type UpdateBusinessSalesrepsMutation = {
  updateBusinessSalesreps?:  {
    __typename: "BusinessSalesreps",
    id: string,
    salesrepId: string,
    businessId: string,
    salesrep:  {
      __typename: "Salesrep",
      id: string,
      name: string,
      title?: string | null,
      email: string,
      phone: string,
      businesses?:  {
        __typename: "ModelBusinessSalesrepsConnection",
        nextToken?: string | null,
      } | null,
      type?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    business:  {
      __typename: "Business",
      id: string,
      name: string,
      description?: string | null,
      salesreps?:  {
        __typename: "ModelBusinessSalesrepsConnection",
        nextToken?: string | null,
      } | null,
      industries?:  {
        __typename: "ModelBusinessIndustriesConnection",
        nextToken?: string | null,
      } | null,
      addresses?:  {
        __typename: "ModelAddressConnection",
        nextToken?: string | null,
      } | null,
      banks?:  {
        __typename: "ModelBankConnection",
        nextToken?: string | null,
      } | null,
      buyers?:  {
        __typename: "ModelBuyerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBusinessSalesrepsMutationVariables = {
  input: DeleteBusinessSalesrepsInput,
  condition?: ModelBusinessSalesrepsConditionInput | null,
};

export type DeleteBusinessSalesrepsMutation = {
  deleteBusinessSalesreps?:  {
    __typename: "BusinessSalesreps",
    id: string,
    salesrepId: string,
    businessId: string,
    salesrep:  {
      __typename: "Salesrep",
      id: string,
      name: string,
      title?: string | null,
      email: string,
      phone: string,
      businesses?:  {
        __typename: "ModelBusinessSalesrepsConnection",
        nextToken?: string | null,
      } | null,
      type?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    business:  {
      __typename: "Business",
      id: string,
      name: string,
      description?: string | null,
      salesreps?:  {
        __typename: "ModelBusinessSalesrepsConnection",
        nextToken?: string | null,
      } | null,
      industries?:  {
        __typename: "ModelBusinessIndustriesConnection",
        nextToken?: string | null,
      } | null,
      addresses?:  {
        __typename: "ModelAddressConnection",
        nextToken?: string | null,
      } | null,
      banks?:  {
        __typename: "ModelBankConnection",
        nextToken?: string | null,
      } | null,
      buyers?:  {
        __typename: "ModelBuyerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateBusinessIndustriesMutationVariables = {
  input: CreateBusinessIndustriesInput,
  condition?: ModelBusinessIndustriesConditionInput | null,
};

export type CreateBusinessIndustriesMutation = {
  createBusinessIndustries?:  {
    __typename: "BusinessIndustries",
    id: string,
    industryId: string,
    businessId: string,
    industry:  {
      __typename: "Industry",
      id: string,
      name: string,
      description?: string | null,
      businesses?:  {
        __typename: "ModelBusinessIndustriesConnection",
        nextToken?: string | null,
      } | null,
      categories?:  {
        __typename: "ModelIndustryCategoriesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    business:  {
      __typename: "Business",
      id: string,
      name: string,
      description?: string | null,
      salesreps?:  {
        __typename: "ModelBusinessSalesrepsConnection",
        nextToken?: string | null,
      } | null,
      industries?:  {
        __typename: "ModelBusinessIndustriesConnection",
        nextToken?: string | null,
      } | null,
      addresses?:  {
        __typename: "ModelAddressConnection",
        nextToken?: string | null,
      } | null,
      banks?:  {
        __typename: "ModelBankConnection",
        nextToken?: string | null,
      } | null,
      buyers?:  {
        __typename: "ModelBuyerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateBusinessIndustriesMutationVariables = {
  input: UpdateBusinessIndustriesInput,
  condition?: ModelBusinessIndustriesConditionInput | null,
};

export type UpdateBusinessIndustriesMutation = {
  updateBusinessIndustries?:  {
    __typename: "BusinessIndustries",
    id: string,
    industryId: string,
    businessId: string,
    industry:  {
      __typename: "Industry",
      id: string,
      name: string,
      description?: string | null,
      businesses?:  {
        __typename: "ModelBusinessIndustriesConnection",
        nextToken?: string | null,
      } | null,
      categories?:  {
        __typename: "ModelIndustryCategoriesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    business:  {
      __typename: "Business",
      id: string,
      name: string,
      description?: string | null,
      salesreps?:  {
        __typename: "ModelBusinessSalesrepsConnection",
        nextToken?: string | null,
      } | null,
      industries?:  {
        __typename: "ModelBusinessIndustriesConnection",
        nextToken?: string | null,
      } | null,
      addresses?:  {
        __typename: "ModelAddressConnection",
        nextToken?: string | null,
      } | null,
      banks?:  {
        __typename: "ModelBankConnection",
        nextToken?: string | null,
      } | null,
      buyers?:  {
        __typename: "ModelBuyerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBusinessIndustriesMutationVariables = {
  input: DeleteBusinessIndustriesInput,
  condition?: ModelBusinessIndustriesConditionInput | null,
};

export type DeleteBusinessIndustriesMutation = {
  deleteBusinessIndustries?:  {
    __typename: "BusinessIndustries",
    id: string,
    industryId: string,
    businessId: string,
    industry:  {
      __typename: "Industry",
      id: string,
      name: string,
      description?: string | null,
      businesses?:  {
        __typename: "ModelBusinessIndustriesConnection",
        nextToken?: string | null,
      } | null,
      categories?:  {
        __typename: "ModelIndustryCategoriesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    business:  {
      __typename: "Business",
      id: string,
      name: string,
      description?: string | null,
      salesreps?:  {
        __typename: "ModelBusinessSalesrepsConnection",
        nextToken?: string | null,
      } | null,
      industries?:  {
        __typename: "ModelBusinessIndustriesConnection",
        nextToken?: string | null,
      } | null,
      addresses?:  {
        __typename: "ModelAddressConnection",
        nextToken?: string | null,
      } | null,
      banks?:  {
        __typename: "ModelBankConnection",
        nextToken?: string | null,
      } | null,
      buyers?:  {
        __typename: "ModelBuyerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetFactoryQueryVariables = {
  id: string,
};

export type GetFactoryQuery = {
  getFactory?:  {
    __typename: "Factory",
    id: string,
    name?: string | null,
    url?: string | null,
    products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        name?: string | null,
        msrp?: number | null,
        price?: number | null,
        sku?: string | null,
        description?: string | null,
        status?: ProductStatusEnum | null,
        media?: Array< string | null > | null,
        item_weight_net?: number | null,
        item_weight_gross?: number | null,
        item_size_width?: number | null,
        item_size_depth?: number | null,
        item_size_height?: number | null,
        package_weight_net?: number | null,
        package_weight_gross?: number | null,
        package_size_width?: number | null,
        package_size_depth?: number | null,
        package_size_height?: number | null,
        items_per_package?: number | null,
        factory_id?: string | null,
        type?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListFactoriesQueryVariables = {
  filter?: ModelFactoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFactoriesQuery = {
  listFactories?:  {
    __typename: "ModelFactoryConnection",
    items:  Array< {
      __typename: "Factory",
      id: string,
      name?: string | null,
      url?: string | null,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCategoryQueryVariables = {
  id: string,
};

export type GetCategoryQuery = {
  getCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    products?:  {
      __typename: "ModelProductCategoriesConnection",
      items:  Array< {
        __typename: "ProductCategories",
        id: string,
        categoryId: string,
        productId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    industries?:  {
      __typename: "ModelIndustryCategoriesConnection",
      items:  Array< {
        __typename: "IndustryCategories",
        id: string,
        categoryId: string,
        industryId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    type?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCategoriesQueryVariables = {
  filter?: ModelCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCategoriesQuery = {
  listCategories?:  {
    __typename: "ModelCategoryConnection",
    items:  Array< {
      __typename: "Category",
      id: string,
      name: string,
      products?:  {
        __typename: "ModelProductCategoriesConnection",
        nextToken?: string | null,
      } | null,
      industries?:  {
        __typename: "ModelIndustryCategoriesConnection",
        nextToken?: string | null,
      } | null,
      type?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetProductQueryVariables = {
  id: string,
};

export type GetProductQuery = {
  getProduct?:  {
    __typename: "Product",
    id: string,
    name?: string | null,
    msrp?: number | null,
    price?: number | null,
    sku?: string | null,
    description?: string | null,
    status?: ProductStatusEnum | null,
    media?: Array< string | null > | null,
    item_weight_net?: number | null,
    item_weight_gross?: number | null,
    item_size_width?: number | null,
    item_size_depth?: number | null,
    item_size_height?: number | null,
    package_weight_net?: number | null,
    package_weight_gross?: number | null,
    package_size_width?: number | null,
    package_size_depth?: number | null,
    package_size_height?: number | null,
    items_per_package?: number | null,
    categories?:  {
      __typename: "ModelProductCategoriesConnection",
      items:  Array< {
        __typename: "ProductCategories",
        id: string,
        categoryId: string,
        productId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    factory_id?: string | null,
    factory?:  {
      __typename: "Factory",
      id: string,
      name?: string | null,
      url?: string | null,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    type?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProductsQueryVariables = {
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductsQuery = {
  listProducts?:  {
    __typename: "ModelProductConnection",
    items:  Array< {
      __typename: "Product",
      id: string,
      name?: string | null,
      msrp?: number | null,
      price?: number | null,
      sku?: string | null,
      description?: string | null,
      status?: ProductStatusEnum | null,
      media?: Array< string | null > | null,
      item_weight_net?: number | null,
      item_weight_gross?: number | null,
      item_size_width?: number | null,
      item_size_depth?: number | null,
      item_size_height?: number | null,
      package_weight_net?: number | null,
      package_weight_gross?: number | null,
      package_size_width?: number | null,
      package_size_depth?: number | null,
      package_size_height?: number | null,
      items_per_package?: number | null,
      categories?:  {
        __typename: "ModelProductCategoriesConnection",
        nextToken?: string | null,
      } | null,
      factory_id?: string | null,
      factory?:  {
        __typename: "Factory",
        id: string,
        name?: string | null,
        url?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      type?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPackageQueryVariables = {
  id: string,
};

export type GetPackageQuery = {
  getPackage?:  {
    __typename: "Package",
    id: string,
    product?:  {
      __typename: "Product",
      id: string,
      name?: string | null,
      msrp?: number | null,
      price?: number | null,
      sku?: string | null,
      description?: string | null,
      status?: ProductStatusEnum | null,
      media?: Array< string | null > | null,
      item_weight_net?: number | null,
      item_weight_gross?: number | null,
      item_size_width?: number | null,
      item_size_depth?: number | null,
      item_size_height?: number | null,
      package_weight_net?: number | null,
      package_weight_gross?: number | null,
      package_size_width?: number | null,
      package_size_depth?: number | null,
      package_size_height?: number | null,
      items_per_package?: number | null,
      categories?:  {
        __typename: "ModelProductCategoriesConnection",
        nextToken?: string | null,
      } | null,
      factory_id?: string | null,
      factory?:  {
        __typename: "Factory",
        id: string,
        name?: string | null,
        url?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      type?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    weight_net?: number | null,
    weight_gross?: number | null,
    size_width?: number | null,
    size_depth?: number | null,
    size_height?: number | null,
    createdAt: string,
    updatedAt: string,
    shipmentPackagesId?: string | null,
    packageProductId?: string | null,
  } | null,
};

export type ListPackagesQueryVariables = {
  filter?: ModelPackageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPackagesQuery = {
  listPackages?:  {
    __typename: "ModelPackageConnection",
    items:  Array< {
      __typename: "Package",
      id: string,
      product?:  {
        __typename: "Product",
        id: string,
        name?: string | null,
        msrp?: number | null,
        price?: number | null,
        sku?: string | null,
        description?: string | null,
        status?: ProductStatusEnum | null,
        media?: Array< string | null > | null,
        item_weight_net?: number | null,
        item_weight_gross?: number | null,
        item_size_width?: number | null,
        item_size_depth?: number | null,
        item_size_height?: number | null,
        package_weight_net?: number | null,
        package_weight_gross?: number | null,
        package_size_width?: number | null,
        package_size_depth?: number | null,
        package_size_height?: number | null,
        items_per_package?: number | null,
        factory_id?: string | null,
        type?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      weight_net?: number | null,
      weight_gross?: number | null,
      size_width?: number | null,
      size_depth?: number | null,
      size_height?: number | null,
      createdAt: string,
      updatedAt: string,
      shipmentPackagesId?: string | null,
      packageProductId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetShipmentQueryVariables = {
  id: string,
};

export type GetShipmentQuery = {
  getShipment?:  {
    __typename: "Shipment",
    id: string,
    packages?:  {
      __typename: "ModelPackageConnection",
      items:  Array< {
        __typename: "Package",
        id: string,
        weight_net?: number | null,
        weight_gross?: number | null,
        size_width?: number | null,
        size_depth?: number | null,
        size_height?: number | null,
        createdAt: string,
        updatedAt: string,
        shipmentPackagesId?: string | null,
        packageProductId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    departure?: string | null,
    arrival?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListShipmentsQueryVariables = {
  filter?: ModelShipmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListShipmentsQuery = {
  listShipments?:  {
    __typename: "ModelShipmentConnection",
    items:  Array< {
      __typename: "Shipment",
      id: string,
      packages?:  {
        __typename: "ModelPackageConnection",
        nextToken?: string | null,
      } | null,
      departure?: string | null,
      arrival?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPurchaseQueryVariables = {
  id: string,
};

export type GetPurchaseQuery = {
  getPurchase?:  {
    __typename: "Purchase",
    id: string,
    business?:  {
      __typename: "Business",
      id: string,
      name: string,
      description?: string | null,
      salesreps?:  {
        __typename: "ModelBusinessSalesrepsConnection",
        nextToken?: string | null,
      } | null,
      industries?:  {
        __typename: "ModelBusinessIndustriesConnection",
        nextToken?: string | null,
      } | null,
      addresses?:  {
        __typename: "ModelAddressConnection",
        nextToken?: string | null,
      } | null,
      banks?:  {
        __typename: "ModelBankConnection",
        nextToken?: string | null,
      } | null,
      buyers?:  {
        __typename: "ModelBuyerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    buyer?:  {
      __typename: "Buyer",
      id: string,
      first_name: string,
      last_name: string,
      user_name: string,
      last_login?: string | null,
      is_owner: boolean,
      email: string,
      phone: string,
      business_id?: string | null,
      business?:  {
        __typename: "Business",
        id: string,
        name: string,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    purchaseBusinessId?: string | null,
    purchaseBuyerId?: string | null,
  } | null,
};

export type ListPurchasesQueryVariables = {
  filter?: ModelPurchaseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPurchasesQuery = {
  listPurchases?:  {
    __typename: "ModelPurchaseConnection",
    items:  Array< {
      __typename: "Purchase",
      id: string,
      business?:  {
        __typename: "Business",
        id: string,
        name: string,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      buyer?:  {
        __typename: "Buyer",
        id: string,
        first_name: string,
        last_name: string,
        user_name: string,
        last_login?: string | null,
        is_owner: boolean,
        email: string,
        phone: string,
        business_id?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      purchaseBusinessId?: string | null,
      purchaseBuyerId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSalesrepQueryVariables = {
  id: string,
};

export type GetSalesrepQuery = {
  getSalesrep?:  {
    __typename: "Salesrep",
    id: string,
    name: string,
    title?: string | null,
    email: string,
    phone: string,
    businesses?:  {
      __typename: "ModelBusinessSalesrepsConnection",
      items:  Array< {
        __typename: "BusinessSalesreps",
        id: string,
        salesrepId: string,
        businessId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    type?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSalesrepsQueryVariables = {
  filter?: ModelSalesrepFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSalesrepsQuery = {
  listSalesreps?:  {
    __typename: "ModelSalesrepConnection",
    items:  Array< {
      __typename: "Salesrep",
      id: string,
      name: string,
      title?: string | null,
      email: string,
      phone: string,
      businesses?:  {
        __typename: "ModelBusinessSalesrepsConnection",
        nextToken?: string | null,
      } | null,
      type?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetIndustryQueryVariables = {
  id: string,
};

export type GetIndustryQuery = {
  getIndustry?:  {
    __typename: "Industry",
    id: string,
    name: string,
    description?: string | null,
    businesses?:  {
      __typename: "ModelBusinessIndustriesConnection",
      items:  Array< {
        __typename: "BusinessIndustries",
        id: string,
        industryId: string,
        businessId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    categories?:  {
      __typename: "ModelIndustryCategoriesConnection",
      items:  Array< {
        __typename: "IndustryCategories",
        id: string,
        categoryId: string,
        industryId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListIndustriesQueryVariables = {
  filter?: ModelIndustryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListIndustriesQuery = {
  listIndustries?:  {
    __typename: "ModelIndustryConnection",
    items:  Array< {
      __typename: "Industry",
      id: string,
      name: string,
      description?: string | null,
      businesses?:  {
        __typename: "ModelBusinessIndustriesConnection",
        nextToken?: string | null,
      } | null,
      categories?:  {
        __typename: "ModelIndustryCategoriesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAddressQueryVariables = {
  id: string,
};

export type GetAddressQuery = {
  getAddress?:  {
    __typename: "Address",
    id: string,
    street: string,
    city: string,
    state: string,
    postal_code: string,
    country: string,
    is_default?: boolean | null,
    business_id?: string | null,
    business?:  {
      __typename: "Business",
      id: string,
      name: string,
      description?: string | null,
      salesreps?:  {
        __typename: "ModelBusinessSalesrepsConnection",
        nextToken?: string | null,
      } | null,
      industries?:  {
        __typename: "ModelBusinessIndustriesConnection",
        nextToken?: string | null,
      } | null,
      addresses?:  {
        __typename: "ModelAddressConnection",
        nextToken?: string | null,
      } | null,
      banks?:  {
        __typename: "ModelBankConnection",
        nextToken?: string | null,
      } | null,
      buyers?:  {
        __typename: "ModelBuyerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAddressesQueryVariables = {
  filter?: ModelAddressFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAddressesQuery = {
  listAddresses?:  {
    __typename: "ModelAddressConnection",
    items:  Array< {
      __typename: "Address",
      id: string,
      street: string,
      city: string,
      state: string,
      postal_code: string,
      country: string,
      is_default?: boolean | null,
      business_id?: string | null,
      business?:  {
        __typename: "Business",
        id: string,
        name: string,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetBankQueryVariables = {
  id: string,
};

export type GetBankQuery = {
  getBank?:  {
    __typename: "Bank",
    id: string,
    account_name: string,
    account_number: string,
    routing_number: string,
    is_default?: boolean | null,
    business_id?: string | null,
    business?:  {
      __typename: "Business",
      id: string,
      name: string,
      description?: string | null,
      salesreps?:  {
        __typename: "ModelBusinessSalesrepsConnection",
        nextToken?: string | null,
      } | null,
      industries?:  {
        __typename: "ModelBusinessIndustriesConnection",
        nextToken?: string | null,
      } | null,
      addresses?:  {
        __typename: "ModelAddressConnection",
        nextToken?: string | null,
      } | null,
      banks?:  {
        __typename: "ModelBankConnection",
        nextToken?: string | null,
      } | null,
      buyers?:  {
        __typename: "ModelBuyerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListBanksQueryVariables = {
  filter?: ModelBankFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBanksQuery = {
  listBanks?:  {
    __typename: "ModelBankConnection",
    items:  Array< {
      __typename: "Bank",
      id: string,
      account_name: string,
      account_number: string,
      routing_number: string,
      is_default?: boolean | null,
      business_id?: string | null,
      business?:  {
        __typename: "Business",
        id: string,
        name: string,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetBusinessQueryVariables = {
  id: string,
};

export type GetBusinessQuery = {
  getBusiness?:  {
    __typename: "Business",
    id: string,
    name: string,
    description?: string | null,
    salesreps?:  {
      __typename: "ModelBusinessSalesrepsConnection",
      items:  Array< {
        __typename: "BusinessSalesreps",
        id: string,
        salesrepId: string,
        businessId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    industries?:  {
      __typename: "ModelBusinessIndustriesConnection",
      items:  Array< {
        __typename: "BusinessIndustries",
        id: string,
        industryId: string,
        businessId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    addresses?:  {
      __typename: "ModelAddressConnection",
      items:  Array< {
        __typename: "Address",
        id: string,
        street: string,
        city: string,
        state: string,
        postal_code: string,
        country: string,
        is_default?: boolean | null,
        business_id?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    banks?:  {
      __typename: "ModelBankConnection",
      items:  Array< {
        __typename: "Bank",
        id: string,
        account_name: string,
        account_number: string,
        routing_number: string,
        is_default?: boolean | null,
        business_id?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    buyers?:  {
      __typename: "ModelBuyerConnection",
      items:  Array< {
        __typename: "Buyer",
        id: string,
        first_name: string,
        last_name: string,
        user_name: string,
        last_login?: string | null,
        is_owner: boolean,
        email: string,
        phone: string,
        business_id?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListBusinessesQueryVariables = {
  filter?: ModelBusinessFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBusinessesQuery = {
  listBusinesses?:  {
    __typename: "ModelBusinessConnection",
    items:  Array< {
      __typename: "Business",
      id: string,
      name: string,
      description?: string | null,
      salesreps?:  {
        __typename: "ModelBusinessSalesrepsConnection",
        nextToken?: string | null,
      } | null,
      industries?:  {
        __typename: "ModelBusinessIndustriesConnection",
        nextToken?: string | null,
      } | null,
      addresses?:  {
        __typename: "ModelAddressConnection",
        nextToken?: string | null,
      } | null,
      banks?:  {
        __typename: "ModelBankConnection",
        nextToken?: string | null,
      } | null,
      buyers?:  {
        __typename: "ModelBuyerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetBuyerQueryVariables = {
  id: string,
};

export type GetBuyerQuery = {
  getBuyer?:  {
    __typename: "Buyer",
    id: string,
    first_name: string,
    last_name: string,
    user_name: string,
    last_login?: string | null,
    is_owner: boolean,
    email: string,
    phone: string,
    business_id?: string | null,
    business?:  {
      __typename: "Business",
      id: string,
      name: string,
      description?: string | null,
      salesreps?:  {
        __typename: "ModelBusinessSalesrepsConnection",
        nextToken?: string | null,
      } | null,
      industries?:  {
        __typename: "ModelBusinessIndustriesConnection",
        nextToken?: string | null,
      } | null,
      addresses?:  {
        __typename: "ModelAddressConnection",
        nextToken?: string | null,
      } | null,
      banks?:  {
        __typename: "ModelBankConnection",
        nextToken?: string | null,
      } | null,
      buyers?:  {
        __typename: "ModelBuyerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListBuyersQueryVariables = {
  filter?: ModelBuyerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBuyersQuery = {
  listBuyers?:  {
    __typename: "ModelBuyerConnection",
    items:  Array< {
      __typename: "Buyer",
      id: string,
      first_name: string,
      last_name: string,
      user_name: string,
      last_login?: string | null,
      is_owner: boolean,
      email: string,
      phone: string,
      business_id?: string | null,
      business?:  {
        __typename: "Business",
        id: string,
        name: string,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetApplicationQueryVariables = {
  id: string,
};

export type GetApplicationQuery = {
  getApplication?:  {
    __typename: "Application",
    id: string,
    status?: string | null,
    business_name: string,
    street: string,
    city: string,
    state: string,
    postal_code: string,
    country: string,
    account_name: string,
    account_number: string,
    routing_number: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListApplicationsQueryVariables = {
  filter?: ModelApplicationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListApplicationsQuery = {
  listApplications?:  {
    __typename: "ModelApplicationConnection",
    items:  Array< {
      __typename: "Application",
      id: string,
      status?: string | null,
      business_name: string,
      street: string,
      city: string,
      state: string,
      postal_code: string,
      country: string,
      account_name: string,
      account_number: string,
      routing_number: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetBlurbQueryVariables = {
  id: string,
};

export type GetBlurbQuery = {
  getBlurb?:  {
    __typename: "Blurb",
    id: string,
    title: string,
    description: string,
    start_date: string,
    end_date: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListBlurbsQueryVariables = {
  filter?: ModelBlurbFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBlurbsQuery = {
  listBlurbs?:  {
    __typename: "ModelBlurbConnection",
    items:  Array< {
      __typename: "Blurb",
      id: string,
      title: string,
      description: string,
      start_date: string,
      end_date: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetProductCategoriesQueryVariables = {
  id: string,
};

export type GetProductCategoriesQuery = {
  getProductCategories?:  {
    __typename: "ProductCategories",
    id: string,
    categoryId: string,
    productId: string,
    category:  {
      __typename: "Category",
      id: string,
      name: string,
      products?:  {
        __typename: "ModelProductCategoriesConnection",
        nextToken?: string | null,
      } | null,
      industries?:  {
        __typename: "ModelIndustryCategoriesConnection",
        nextToken?: string | null,
      } | null,
      type?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    product:  {
      __typename: "Product",
      id: string,
      name?: string | null,
      msrp?: number | null,
      price?: number | null,
      sku?: string | null,
      description?: string | null,
      status?: ProductStatusEnum | null,
      media?: Array< string | null > | null,
      item_weight_net?: number | null,
      item_weight_gross?: number | null,
      item_size_width?: number | null,
      item_size_depth?: number | null,
      item_size_height?: number | null,
      package_weight_net?: number | null,
      package_weight_gross?: number | null,
      package_size_width?: number | null,
      package_size_depth?: number | null,
      package_size_height?: number | null,
      items_per_package?: number | null,
      categories?:  {
        __typename: "ModelProductCategoriesConnection",
        nextToken?: string | null,
      } | null,
      factory_id?: string | null,
      factory?:  {
        __typename: "Factory",
        id: string,
        name?: string | null,
        url?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      type?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProductCategoriesQueryVariables = {
  filter?: ModelProductCategoriesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductCategoriesQuery = {
  listProductCategories?:  {
    __typename: "ModelProductCategoriesConnection",
    items:  Array< {
      __typename: "ProductCategories",
      id: string,
      categoryId: string,
      productId: string,
      category:  {
        __typename: "Category",
        id: string,
        name: string,
        type?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      product:  {
        __typename: "Product",
        id: string,
        name?: string | null,
        msrp?: number | null,
        price?: number | null,
        sku?: string | null,
        description?: string | null,
        status?: ProductStatusEnum | null,
        media?: Array< string | null > | null,
        item_weight_net?: number | null,
        item_weight_gross?: number | null,
        item_size_width?: number | null,
        item_size_depth?: number | null,
        item_size_height?: number | null,
        package_weight_net?: number | null,
        package_weight_gross?: number | null,
        package_size_width?: number | null,
        package_size_depth?: number | null,
        package_size_height?: number | null,
        items_per_package?: number | null,
        factory_id?: string | null,
        type?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetIndustryCategoriesQueryVariables = {
  id: string,
};

export type GetIndustryCategoriesQuery = {
  getIndustryCategories?:  {
    __typename: "IndustryCategories",
    id: string,
    categoryId: string,
    industryId: string,
    category:  {
      __typename: "Category",
      id: string,
      name: string,
      products?:  {
        __typename: "ModelProductCategoriesConnection",
        nextToken?: string | null,
      } | null,
      industries?:  {
        __typename: "ModelIndustryCategoriesConnection",
        nextToken?: string | null,
      } | null,
      type?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    industry:  {
      __typename: "Industry",
      id: string,
      name: string,
      description?: string | null,
      businesses?:  {
        __typename: "ModelBusinessIndustriesConnection",
        nextToken?: string | null,
      } | null,
      categories?:  {
        __typename: "ModelIndustryCategoriesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListIndustryCategoriesQueryVariables = {
  filter?: ModelIndustryCategoriesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListIndustryCategoriesQuery = {
  listIndustryCategories?:  {
    __typename: "ModelIndustryCategoriesConnection",
    items:  Array< {
      __typename: "IndustryCategories",
      id: string,
      categoryId: string,
      industryId: string,
      category:  {
        __typename: "Category",
        id: string,
        name: string,
        type?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      industry:  {
        __typename: "Industry",
        id: string,
        name: string,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetBusinessSalesrepsQueryVariables = {
  id: string,
};

export type GetBusinessSalesrepsQuery = {
  getBusinessSalesreps?:  {
    __typename: "BusinessSalesreps",
    id: string,
    salesrepId: string,
    businessId: string,
    salesrep:  {
      __typename: "Salesrep",
      id: string,
      name: string,
      title?: string | null,
      email: string,
      phone: string,
      businesses?:  {
        __typename: "ModelBusinessSalesrepsConnection",
        nextToken?: string | null,
      } | null,
      type?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    business:  {
      __typename: "Business",
      id: string,
      name: string,
      description?: string | null,
      salesreps?:  {
        __typename: "ModelBusinessSalesrepsConnection",
        nextToken?: string | null,
      } | null,
      industries?:  {
        __typename: "ModelBusinessIndustriesConnection",
        nextToken?: string | null,
      } | null,
      addresses?:  {
        __typename: "ModelAddressConnection",
        nextToken?: string | null,
      } | null,
      banks?:  {
        __typename: "ModelBankConnection",
        nextToken?: string | null,
      } | null,
      buyers?:  {
        __typename: "ModelBuyerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListBusinessSalesrepsQueryVariables = {
  filter?: ModelBusinessSalesrepsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBusinessSalesrepsQuery = {
  listBusinessSalesreps?:  {
    __typename: "ModelBusinessSalesrepsConnection",
    items:  Array< {
      __typename: "BusinessSalesreps",
      id: string,
      salesrepId: string,
      businessId: string,
      salesrep:  {
        __typename: "Salesrep",
        id: string,
        name: string,
        title?: string | null,
        email: string,
        phone: string,
        type?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      business:  {
        __typename: "Business",
        id: string,
        name: string,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetBusinessIndustriesQueryVariables = {
  id: string,
};

export type GetBusinessIndustriesQuery = {
  getBusinessIndustries?:  {
    __typename: "BusinessIndustries",
    id: string,
    industryId: string,
    businessId: string,
    industry:  {
      __typename: "Industry",
      id: string,
      name: string,
      description?: string | null,
      businesses?:  {
        __typename: "ModelBusinessIndustriesConnection",
        nextToken?: string | null,
      } | null,
      categories?:  {
        __typename: "ModelIndustryCategoriesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    business:  {
      __typename: "Business",
      id: string,
      name: string,
      description?: string | null,
      salesreps?:  {
        __typename: "ModelBusinessSalesrepsConnection",
        nextToken?: string | null,
      } | null,
      industries?:  {
        __typename: "ModelBusinessIndustriesConnection",
        nextToken?: string | null,
      } | null,
      addresses?:  {
        __typename: "ModelAddressConnection",
        nextToken?: string | null,
      } | null,
      banks?:  {
        __typename: "ModelBankConnection",
        nextToken?: string | null,
      } | null,
      buyers?:  {
        __typename: "ModelBuyerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListBusinessIndustriesQueryVariables = {
  filter?: ModelBusinessIndustriesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBusinessIndustriesQuery = {
  listBusinessIndustries?:  {
    __typename: "ModelBusinessIndustriesConnection",
    items:  Array< {
      __typename: "BusinessIndustries",
      id: string,
      industryId: string,
      businessId: string,
      industry:  {
        __typename: "Industry",
        id: string,
        name: string,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      business:  {
        __typename: "Business",
        id: string,
        name: string,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCategoryByNameQueryVariables = {
  name: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GetCategoryByNameQuery = {
  getCategoryByName?:  {
    __typename: "ModelCategoryConnection",
    items:  Array< {
      __typename: "Category",
      id: string,
      name: string,
      products?:  {
        __typename: "ModelProductCategoriesConnection",
        nextToken?: string | null,
      } | null,
      industries?:  {
        __typename: "ModelIndustryCategoriesConnection",
        nextToken?: string | null,
      } | null,
      type?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListCategoriesByNameQueryVariables = {
  type: string,
  name?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCategoriesByNameQuery = {
  listCategoriesByName?:  {
    __typename: "ModelCategoryConnection",
    items:  Array< {
      __typename: "Category",
      id: string,
      name: string,
      products?:  {
        __typename: "ModelProductCategoriesConnection",
        nextToken?: string | null,
      } | null,
      industries?:  {
        __typename: "ModelIndustryCategoriesConnection",
        nextToken?: string | null,
      } | null,
      type?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ProductsByFactory_idQueryVariables = {
  factory_id: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ProductsByFactory_idQuery = {
  productsByFactory_id?:  {
    __typename: "ModelProductConnection",
    items:  Array< {
      __typename: "Product",
      id: string,
      name?: string | null,
      msrp?: number | null,
      price?: number | null,
      sku?: string | null,
      description?: string | null,
      status?: ProductStatusEnum | null,
      media?: Array< string | null > | null,
      item_weight_net?: number | null,
      item_weight_gross?: number | null,
      item_size_width?: number | null,
      item_size_depth?: number | null,
      item_size_height?: number | null,
      package_weight_net?: number | null,
      package_weight_gross?: number | null,
      package_size_width?: number | null,
      package_size_depth?: number | null,
      package_size_height?: number | null,
      items_per_package?: number | null,
      categories?:  {
        __typename: "ModelProductCategoriesConnection",
        nextToken?: string | null,
      } | null,
      factory_id?: string | null,
      factory?:  {
        __typename: "Factory",
        id: string,
        name?: string | null,
        url?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      type?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListSalesrepsByNameQueryVariables = {
  type: string,
  name?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSalesrepFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSalesrepsByNameQuery = {
  listSalesrepsByName?:  {
    __typename: "ModelSalesrepConnection",
    items:  Array< {
      __typename: "Salesrep",
      id: string,
      name: string,
      title?: string | null,
      email: string,
      phone: string,
      businesses?:  {
        __typename: "ModelBusinessSalesrepsConnection",
        nextToken?: string | null,
      } | null,
      type?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type AddressesByBusiness_idQueryVariables = {
  business_id: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAddressFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AddressesByBusiness_idQuery = {
  addressesByBusiness_id?:  {
    __typename: "ModelAddressConnection",
    items:  Array< {
      __typename: "Address",
      id: string,
      street: string,
      city: string,
      state: string,
      postal_code: string,
      country: string,
      is_default?: boolean | null,
      business_id?: string | null,
      business?:  {
        __typename: "Business",
        id: string,
        name: string,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type BanksByBusiness_idQueryVariables = {
  business_id: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelBankFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type BanksByBusiness_idQuery = {
  banksByBusiness_id?:  {
    __typename: "ModelBankConnection",
    items:  Array< {
      __typename: "Bank",
      id: string,
      account_name: string,
      account_number: string,
      routing_number: string,
      is_default?: boolean | null,
      business_id?: string | null,
      business?:  {
        __typename: "Business",
        id: string,
        name: string,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type BuyersByBusiness_idQueryVariables = {
  business_id: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelBuyerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type BuyersByBusiness_idQuery = {
  buyersByBusiness_id?:  {
    __typename: "ModelBuyerConnection",
    items:  Array< {
      __typename: "Buyer",
      id: string,
      first_name: string,
      last_name: string,
      user_name: string,
      last_login?: string | null,
      is_owner: boolean,
      email: string,
      phone: string,
      business_id?: string | null,
      business?:  {
        __typename: "Business",
        id: string,
        name: string,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ProductCategoriesByCategoryIdQueryVariables = {
  categoryId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProductCategoriesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ProductCategoriesByCategoryIdQuery = {
  productCategoriesByCategoryId?:  {
    __typename: "ModelProductCategoriesConnection",
    items:  Array< {
      __typename: "ProductCategories",
      id: string,
      categoryId: string,
      productId: string,
      category:  {
        __typename: "Category",
        id: string,
        name: string,
        type?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      product:  {
        __typename: "Product",
        id: string,
        name?: string | null,
        msrp?: number | null,
        price?: number | null,
        sku?: string | null,
        description?: string | null,
        status?: ProductStatusEnum | null,
        media?: Array< string | null > | null,
        item_weight_net?: number | null,
        item_weight_gross?: number | null,
        item_size_width?: number | null,
        item_size_depth?: number | null,
        item_size_height?: number | null,
        package_weight_net?: number | null,
        package_weight_gross?: number | null,
        package_size_width?: number | null,
        package_size_depth?: number | null,
        package_size_height?: number | null,
        items_per_package?: number | null,
        factory_id?: string | null,
        type?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ProductCategoriesByProductIdQueryVariables = {
  productId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProductCategoriesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ProductCategoriesByProductIdQuery = {
  productCategoriesByProductId?:  {
    __typename: "ModelProductCategoriesConnection",
    items:  Array< {
      __typename: "ProductCategories",
      id: string,
      categoryId: string,
      productId: string,
      category:  {
        __typename: "Category",
        id: string,
        name: string,
        type?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      product:  {
        __typename: "Product",
        id: string,
        name?: string | null,
        msrp?: number | null,
        price?: number | null,
        sku?: string | null,
        description?: string | null,
        status?: ProductStatusEnum | null,
        media?: Array< string | null > | null,
        item_weight_net?: number | null,
        item_weight_gross?: number | null,
        item_size_width?: number | null,
        item_size_depth?: number | null,
        item_size_height?: number | null,
        package_weight_net?: number | null,
        package_weight_gross?: number | null,
        package_size_width?: number | null,
        package_size_depth?: number | null,
        package_size_height?: number | null,
        items_per_package?: number | null,
        factory_id?: string | null,
        type?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type IndustryCategoriesByCategoryIdQueryVariables = {
  categoryId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelIndustryCategoriesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type IndustryCategoriesByCategoryIdQuery = {
  industryCategoriesByCategoryId?:  {
    __typename: "ModelIndustryCategoriesConnection",
    items:  Array< {
      __typename: "IndustryCategories",
      id: string,
      categoryId: string,
      industryId: string,
      category:  {
        __typename: "Category",
        id: string,
        name: string,
        type?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      industry:  {
        __typename: "Industry",
        id: string,
        name: string,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type IndustryCategoriesByIndustryIdQueryVariables = {
  industryId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelIndustryCategoriesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type IndustryCategoriesByIndustryIdQuery = {
  industryCategoriesByIndustryId?:  {
    __typename: "ModelIndustryCategoriesConnection",
    items:  Array< {
      __typename: "IndustryCategories",
      id: string,
      categoryId: string,
      industryId: string,
      category:  {
        __typename: "Category",
        id: string,
        name: string,
        type?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      industry:  {
        __typename: "Industry",
        id: string,
        name: string,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type BusinessSalesrepsBySalesrepIdQueryVariables = {
  salesrepId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelBusinessSalesrepsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type BusinessSalesrepsBySalesrepIdQuery = {
  businessSalesrepsBySalesrepId?:  {
    __typename: "ModelBusinessSalesrepsConnection",
    items:  Array< {
      __typename: "BusinessSalesreps",
      id: string,
      salesrepId: string,
      businessId: string,
      salesrep:  {
        __typename: "Salesrep",
        id: string,
        name: string,
        title?: string | null,
        email: string,
        phone: string,
        type?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      business:  {
        __typename: "Business",
        id: string,
        name: string,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type BusinessSalesrepsByBusinessIdQueryVariables = {
  businessId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelBusinessSalesrepsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type BusinessSalesrepsByBusinessIdQuery = {
  businessSalesrepsByBusinessId?:  {
    __typename: "ModelBusinessSalesrepsConnection",
    items:  Array< {
      __typename: "BusinessSalesreps",
      id: string,
      salesrepId: string,
      businessId: string,
      salesrep:  {
        __typename: "Salesrep",
        id: string,
        name: string,
        title?: string | null,
        email: string,
        phone: string,
        type?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      business:  {
        __typename: "Business",
        id: string,
        name: string,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type BusinessIndustriesByIndustryIdQueryVariables = {
  industryId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelBusinessIndustriesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type BusinessIndustriesByIndustryIdQuery = {
  businessIndustriesByIndustryId?:  {
    __typename: "ModelBusinessIndustriesConnection",
    items:  Array< {
      __typename: "BusinessIndustries",
      id: string,
      industryId: string,
      businessId: string,
      industry:  {
        __typename: "Industry",
        id: string,
        name: string,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      business:  {
        __typename: "Business",
        id: string,
        name: string,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type BusinessIndustriesByBusinessIdQueryVariables = {
  businessId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelBusinessIndustriesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type BusinessIndustriesByBusinessIdQuery = {
  businessIndustriesByBusinessId?:  {
    __typename: "ModelBusinessIndustriesConnection",
    items:  Array< {
      __typename: "BusinessIndustries",
      id: string,
      industryId: string,
      businessId: string,
      industry:  {
        __typename: "Industry",
        id: string,
        name: string,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      business:  {
        __typename: "Business",
        id: string,
        name: string,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateFactorySubscriptionVariables = {
  filter?: ModelSubscriptionFactoryFilterInput | null,
};

export type OnCreateFactorySubscription = {
  onCreateFactory?:  {
    __typename: "Factory",
    id: string,
    name?: string | null,
    url?: string | null,
    products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        name?: string | null,
        msrp?: number | null,
        price?: number | null,
        sku?: string | null,
        description?: string | null,
        status?: ProductStatusEnum | null,
        media?: Array< string | null > | null,
        item_weight_net?: number | null,
        item_weight_gross?: number | null,
        item_size_width?: number | null,
        item_size_depth?: number | null,
        item_size_height?: number | null,
        package_weight_net?: number | null,
        package_weight_gross?: number | null,
        package_size_width?: number | null,
        package_size_depth?: number | null,
        package_size_height?: number | null,
        items_per_package?: number | null,
        factory_id?: string | null,
        type?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateFactorySubscriptionVariables = {
  filter?: ModelSubscriptionFactoryFilterInput | null,
};

export type OnUpdateFactorySubscription = {
  onUpdateFactory?:  {
    __typename: "Factory",
    id: string,
    name?: string | null,
    url?: string | null,
    products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        name?: string | null,
        msrp?: number | null,
        price?: number | null,
        sku?: string | null,
        description?: string | null,
        status?: ProductStatusEnum | null,
        media?: Array< string | null > | null,
        item_weight_net?: number | null,
        item_weight_gross?: number | null,
        item_size_width?: number | null,
        item_size_depth?: number | null,
        item_size_height?: number | null,
        package_weight_net?: number | null,
        package_weight_gross?: number | null,
        package_size_width?: number | null,
        package_size_depth?: number | null,
        package_size_height?: number | null,
        items_per_package?: number | null,
        factory_id?: string | null,
        type?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteFactorySubscriptionVariables = {
  filter?: ModelSubscriptionFactoryFilterInput | null,
};

export type OnDeleteFactorySubscription = {
  onDeleteFactory?:  {
    __typename: "Factory",
    id: string,
    name?: string | null,
    url?: string | null,
    products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        name?: string | null,
        msrp?: number | null,
        price?: number | null,
        sku?: string | null,
        description?: string | null,
        status?: ProductStatusEnum | null,
        media?: Array< string | null > | null,
        item_weight_net?: number | null,
        item_weight_gross?: number | null,
        item_size_width?: number | null,
        item_size_depth?: number | null,
        item_size_height?: number | null,
        package_weight_net?: number | null,
        package_weight_gross?: number | null,
        package_size_width?: number | null,
        package_size_depth?: number | null,
        package_size_height?: number | null,
        items_per_package?: number | null,
        factory_id?: string | null,
        type?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCategorySubscriptionVariables = {
  filter?: ModelSubscriptionCategoryFilterInput | null,
};

export type OnCreateCategorySubscription = {
  onCreateCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    products?:  {
      __typename: "ModelProductCategoriesConnection",
      items:  Array< {
        __typename: "ProductCategories",
        id: string,
        categoryId: string,
        productId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    industries?:  {
      __typename: "ModelIndustryCategoriesConnection",
      items:  Array< {
        __typename: "IndustryCategories",
        id: string,
        categoryId: string,
        industryId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    type?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCategorySubscriptionVariables = {
  filter?: ModelSubscriptionCategoryFilterInput | null,
};

export type OnUpdateCategorySubscription = {
  onUpdateCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    products?:  {
      __typename: "ModelProductCategoriesConnection",
      items:  Array< {
        __typename: "ProductCategories",
        id: string,
        categoryId: string,
        productId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    industries?:  {
      __typename: "ModelIndustryCategoriesConnection",
      items:  Array< {
        __typename: "IndustryCategories",
        id: string,
        categoryId: string,
        industryId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    type?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCategorySubscriptionVariables = {
  filter?: ModelSubscriptionCategoryFilterInput | null,
};

export type OnDeleteCategorySubscription = {
  onDeleteCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    products?:  {
      __typename: "ModelProductCategoriesConnection",
      items:  Array< {
        __typename: "ProductCategories",
        id: string,
        categoryId: string,
        productId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    industries?:  {
      __typename: "ModelIndustryCategoriesConnection",
      items:  Array< {
        __typename: "IndustryCategories",
        id: string,
        categoryId: string,
        industryId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    type?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateProductSubscriptionVariables = {
  filter?: ModelSubscriptionProductFilterInput | null,
};

export type OnCreateProductSubscription = {
  onCreateProduct?:  {
    __typename: "Product",
    id: string,
    name?: string | null,
    msrp?: number | null,
    price?: number | null,
    sku?: string | null,
    description?: string | null,
    status?: ProductStatusEnum | null,
    media?: Array< string | null > | null,
    item_weight_net?: number | null,
    item_weight_gross?: number | null,
    item_size_width?: number | null,
    item_size_depth?: number | null,
    item_size_height?: number | null,
    package_weight_net?: number | null,
    package_weight_gross?: number | null,
    package_size_width?: number | null,
    package_size_depth?: number | null,
    package_size_height?: number | null,
    items_per_package?: number | null,
    categories?:  {
      __typename: "ModelProductCategoriesConnection",
      items:  Array< {
        __typename: "ProductCategories",
        id: string,
        categoryId: string,
        productId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    factory_id?: string | null,
    factory?:  {
      __typename: "Factory",
      id: string,
      name?: string | null,
      url?: string | null,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    type?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProductSubscriptionVariables = {
  filter?: ModelSubscriptionProductFilterInput | null,
};

export type OnUpdateProductSubscription = {
  onUpdateProduct?:  {
    __typename: "Product",
    id: string,
    name?: string | null,
    msrp?: number | null,
    price?: number | null,
    sku?: string | null,
    description?: string | null,
    status?: ProductStatusEnum | null,
    media?: Array< string | null > | null,
    item_weight_net?: number | null,
    item_weight_gross?: number | null,
    item_size_width?: number | null,
    item_size_depth?: number | null,
    item_size_height?: number | null,
    package_weight_net?: number | null,
    package_weight_gross?: number | null,
    package_size_width?: number | null,
    package_size_depth?: number | null,
    package_size_height?: number | null,
    items_per_package?: number | null,
    categories?:  {
      __typename: "ModelProductCategoriesConnection",
      items:  Array< {
        __typename: "ProductCategories",
        id: string,
        categoryId: string,
        productId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    factory_id?: string | null,
    factory?:  {
      __typename: "Factory",
      id: string,
      name?: string | null,
      url?: string | null,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    type?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProductSubscriptionVariables = {
  filter?: ModelSubscriptionProductFilterInput | null,
};

export type OnDeleteProductSubscription = {
  onDeleteProduct?:  {
    __typename: "Product",
    id: string,
    name?: string | null,
    msrp?: number | null,
    price?: number | null,
    sku?: string | null,
    description?: string | null,
    status?: ProductStatusEnum | null,
    media?: Array< string | null > | null,
    item_weight_net?: number | null,
    item_weight_gross?: number | null,
    item_size_width?: number | null,
    item_size_depth?: number | null,
    item_size_height?: number | null,
    package_weight_net?: number | null,
    package_weight_gross?: number | null,
    package_size_width?: number | null,
    package_size_depth?: number | null,
    package_size_height?: number | null,
    items_per_package?: number | null,
    categories?:  {
      __typename: "ModelProductCategoriesConnection",
      items:  Array< {
        __typename: "ProductCategories",
        id: string,
        categoryId: string,
        productId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    factory_id?: string | null,
    factory?:  {
      __typename: "Factory",
      id: string,
      name?: string | null,
      url?: string | null,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    type?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePackageSubscriptionVariables = {
  filter?: ModelSubscriptionPackageFilterInput | null,
};

export type OnCreatePackageSubscription = {
  onCreatePackage?:  {
    __typename: "Package",
    id: string,
    product?:  {
      __typename: "Product",
      id: string,
      name?: string | null,
      msrp?: number | null,
      price?: number | null,
      sku?: string | null,
      description?: string | null,
      status?: ProductStatusEnum | null,
      media?: Array< string | null > | null,
      item_weight_net?: number | null,
      item_weight_gross?: number | null,
      item_size_width?: number | null,
      item_size_depth?: number | null,
      item_size_height?: number | null,
      package_weight_net?: number | null,
      package_weight_gross?: number | null,
      package_size_width?: number | null,
      package_size_depth?: number | null,
      package_size_height?: number | null,
      items_per_package?: number | null,
      categories?:  {
        __typename: "ModelProductCategoriesConnection",
        nextToken?: string | null,
      } | null,
      factory_id?: string | null,
      factory?:  {
        __typename: "Factory",
        id: string,
        name?: string | null,
        url?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      type?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    weight_net?: number | null,
    weight_gross?: number | null,
    size_width?: number | null,
    size_depth?: number | null,
    size_height?: number | null,
    createdAt: string,
    updatedAt: string,
    shipmentPackagesId?: string | null,
    packageProductId?: string | null,
  } | null,
};

export type OnUpdatePackageSubscriptionVariables = {
  filter?: ModelSubscriptionPackageFilterInput | null,
};

export type OnUpdatePackageSubscription = {
  onUpdatePackage?:  {
    __typename: "Package",
    id: string,
    product?:  {
      __typename: "Product",
      id: string,
      name?: string | null,
      msrp?: number | null,
      price?: number | null,
      sku?: string | null,
      description?: string | null,
      status?: ProductStatusEnum | null,
      media?: Array< string | null > | null,
      item_weight_net?: number | null,
      item_weight_gross?: number | null,
      item_size_width?: number | null,
      item_size_depth?: number | null,
      item_size_height?: number | null,
      package_weight_net?: number | null,
      package_weight_gross?: number | null,
      package_size_width?: number | null,
      package_size_depth?: number | null,
      package_size_height?: number | null,
      items_per_package?: number | null,
      categories?:  {
        __typename: "ModelProductCategoriesConnection",
        nextToken?: string | null,
      } | null,
      factory_id?: string | null,
      factory?:  {
        __typename: "Factory",
        id: string,
        name?: string | null,
        url?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      type?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    weight_net?: number | null,
    weight_gross?: number | null,
    size_width?: number | null,
    size_depth?: number | null,
    size_height?: number | null,
    createdAt: string,
    updatedAt: string,
    shipmentPackagesId?: string | null,
    packageProductId?: string | null,
  } | null,
};

export type OnDeletePackageSubscriptionVariables = {
  filter?: ModelSubscriptionPackageFilterInput | null,
};

export type OnDeletePackageSubscription = {
  onDeletePackage?:  {
    __typename: "Package",
    id: string,
    product?:  {
      __typename: "Product",
      id: string,
      name?: string | null,
      msrp?: number | null,
      price?: number | null,
      sku?: string | null,
      description?: string | null,
      status?: ProductStatusEnum | null,
      media?: Array< string | null > | null,
      item_weight_net?: number | null,
      item_weight_gross?: number | null,
      item_size_width?: number | null,
      item_size_depth?: number | null,
      item_size_height?: number | null,
      package_weight_net?: number | null,
      package_weight_gross?: number | null,
      package_size_width?: number | null,
      package_size_depth?: number | null,
      package_size_height?: number | null,
      items_per_package?: number | null,
      categories?:  {
        __typename: "ModelProductCategoriesConnection",
        nextToken?: string | null,
      } | null,
      factory_id?: string | null,
      factory?:  {
        __typename: "Factory",
        id: string,
        name?: string | null,
        url?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      type?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    weight_net?: number | null,
    weight_gross?: number | null,
    size_width?: number | null,
    size_depth?: number | null,
    size_height?: number | null,
    createdAt: string,
    updatedAt: string,
    shipmentPackagesId?: string | null,
    packageProductId?: string | null,
  } | null,
};

export type OnCreateShipmentSubscriptionVariables = {
  filter?: ModelSubscriptionShipmentFilterInput | null,
};

export type OnCreateShipmentSubscription = {
  onCreateShipment?:  {
    __typename: "Shipment",
    id: string,
    packages?:  {
      __typename: "ModelPackageConnection",
      items:  Array< {
        __typename: "Package",
        id: string,
        weight_net?: number | null,
        weight_gross?: number | null,
        size_width?: number | null,
        size_depth?: number | null,
        size_height?: number | null,
        createdAt: string,
        updatedAt: string,
        shipmentPackagesId?: string | null,
        packageProductId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    departure?: string | null,
    arrival?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateShipmentSubscriptionVariables = {
  filter?: ModelSubscriptionShipmentFilterInput | null,
};

export type OnUpdateShipmentSubscription = {
  onUpdateShipment?:  {
    __typename: "Shipment",
    id: string,
    packages?:  {
      __typename: "ModelPackageConnection",
      items:  Array< {
        __typename: "Package",
        id: string,
        weight_net?: number | null,
        weight_gross?: number | null,
        size_width?: number | null,
        size_depth?: number | null,
        size_height?: number | null,
        createdAt: string,
        updatedAt: string,
        shipmentPackagesId?: string | null,
        packageProductId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    departure?: string | null,
    arrival?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteShipmentSubscriptionVariables = {
  filter?: ModelSubscriptionShipmentFilterInput | null,
};

export type OnDeleteShipmentSubscription = {
  onDeleteShipment?:  {
    __typename: "Shipment",
    id: string,
    packages?:  {
      __typename: "ModelPackageConnection",
      items:  Array< {
        __typename: "Package",
        id: string,
        weight_net?: number | null,
        weight_gross?: number | null,
        size_width?: number | null,
        size_depth?: number | null,
        size_height?: number | null,
        createdAt: string,
        updatedAt: string,
        shipmentPackagesId?: string | null,
        packageProductId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    departure?: string | null,
    arrival?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePurchaseSubscriptionVariables = {
  filter?: ModelSubscriptionPurchaseFilterInput | null,
};

export type OnCreatePurchaseSubscription = {
  onCreatePurchase?:  {
    __typename: "Purchase",
    id: string,
    business?:  {
      __typename: "Business",
      id: string,
      name: string,
      description?: string | null,
      salesreps?:  {
        __typename: "ModelBusinessSalesrepsConnection",
        nextToken?: string | null,
      } | null,
      industries?:  {
        __typename: "ModelBusinessIndustriesConnection",
        nextToken?: string | null,
      } | null,
      addresses?:  {
        __typename: "ModelAddressConnection",
        nextToken?: string | null,
      } | null,
      banks?:  {
        __typename: "ModelBankConnection",
        nextToken?: string | null,
      } | null,
      buyers?:  {
        __typename: "ModelBuyerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    buyer?:  {
      __typename: "Buyer",
      id: string,
      first_name: string,
      last_name: string,
      user_name: string,
      last_login?: string | null,
      is_owner: boolean,
      email: string,
      phone: string,
      business_id?: string | null,
      business?:  {
        __typename: "Business",
        id: string,
        name: string,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    purchaseBusinessId?: string | null,
    purchaseBuyerId?: string | null,
  } | null,
};

export type OnUpdatePurchaseSubscriptionVariables = {
  filter?: ModelSubscriptionPurchaseFilterInput | null,
};

export type OnUpdatePurchaseSubscription = {
  onUpdatePurchase?:  {
    __typename: "Purchase",
    id: string,
    business?:  {
      __typename: "Business",
      id: string,
      name: string,
      description?: string | null,
      salesreps?:  {
        __typename: "ModelBusinessSalesrepsConnection",
        nextToken?: string | null,
      } | null,
      industries?:  {
        __typename: "ModelBusinessIndustriesConnection",
        nextToken?: string | null,
      } | null,
      addresses?:  {
        __typename: "ModelAddressConnection",
        nextToken?: string | null,
      } | null,
      banks?:  {
        __typename: "ModelBankConnection",
        nextToken?: string | null,
      } | null,
      buyers?:  {
        __typename: "ModelBuyerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    buyer?:  {
      __typename: "Buyer",
      id: string,
      first_name: string,
      last_name: string,
      user_name: string,
      last_login?: string | null,
      is_owner: boolean,
      email: string,
      phone: string,
      business_id?: string | null,
      business?:  {
        __typename: "Business",
        id: string,
        name: string,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    purchaseBusinessId?: string | null,
    purchaseBuyerId?: string | null,
  } | null,
};

export type OnDeletePurchaseSubscriptionVariables = {
  filter?: ModelSubscriptionPurchaseFilterInput | null,
};

export type OnDeletePurchaseSubscription = {
  onDeletePurchase?:  {
    __typename: "Purchase",
    id: string,
    business?:  {
      __typename: "Business",
      id: string,
      name: string,
      description?: string | null,
      salesreps?:  {
        __typename: "ModelBusinessSalesrepsConnection",
        nextToken?: string | null,
      } | null,
      industries?:  {
        __typename: "ModelBusinessIndustriesConnection",
        nextToken?: string | null,
      } | null,
      addresses?:  {
        __typename: "ModelAddressConnection",
        nextToken?: string | null,
      } | null,
      banks?:  {
        __typename: "ModelBankConnection",
        nextToken?: string | null,
      } | null,
      buyers?:  {
        __typename: "ModelBuyerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    buyer?:  {
      __typename: "Buyer",
      id: string,
      first_name: string,
      last_name: string,
      user_name: string,
      last_login?: string | null,
      is_owner: boolean,
      email: string,
      phone: string,
      business_id?: string | null,
      business?:  {
        __typename: "Business",
        id: string,
        name: string,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    purchaseBusinessId?: string | null,
    purchaseBuyerId?: string | null,
  } | null,
};

export type OnCreateSalesrepSubscriptionVariables = {
  filter?: ModelSubscriptionSalesrepFilterInput | null,
};

export type OnCreateSalesrepSubscription = {
  onCreateSalesrep?:  {
    __typename: "Salesrep",
    id: string,
    name: string,
    title?: string | null,
    email: string,
    phone: string,
    businesses?:  {
      __typename: "ModelBusinessSalesrepsConnection",
      items:  Array< {
        __typename: "BusinessSalesreps",
        id: string,
        salesrepId: string,
        businessId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    type?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSalesrepSubscriptionVariables = {
  filter?: ModelSubscriptionSalesrepFilterInput | null,
};

export type OnUpdateSalesrepSubscription = {
  onUpdateSalesrep?:  {
    __typename: "Salesrep",
    id: string,
    name: string,
    title?: string | null,
    email: string,
    phone: string,
    businesses?:  {
      __typename: "ModelBusinessSalesrepsConnection",
      items:  Array< {
        __typename: "BusinessSalesreps",
        id: string,
        salesrepId: string,
        businessId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    type?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSalesrepSubscriptionVariables = {
  filter?: ModelSubscriptionSalesrepFilterInput | null,
};

export type OnDeleteSalesrepSubscription = {
  onDeleteSalesrep?:  {
    __typename: "Salesrep",
    id: string,
    name: string,
    title?: string | null,
    email: string,
    phone: string,
    businesses?:  {
      __typename: "ModelBusinessSalesrepsConnection",
      items:  Array< {
        __typename: "BusinessSalesreps",
        id: string,
        salesrepId: string,
        businessId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    type?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateIndustrySubscriptionVariables = {
  filter?: ModelSubscriptionIndustryFilterInput | null,
};

export type OnCreateIndustrySubscription = {
  onCreateIndustry?:  {
    __typename: "Industry",
    id: string,
    name: string,
    description?: string | null,
    businesses?:  {
      __typename: "ModelBusinessIndustriesConnection",
      items:  Array< {
        __typename: "BusinessIndustries",
        id: string,
        industryId: string,
        businessId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    categories?:  {
      __typename: "ModelIndustryCategoriesConnection",
      items:  Array< {
        __typename: "IndustryCategories",
        id: string,
        categoryId: string,
        industryId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateIndustrySubscriptionVariables = {
  filter?: ModelSubscriptionIndustryFilterInput | null,
};

export type OnUpdateIndustrySubscription = {
  onUpdateIndustry?:  {
    __typename: "Industry",
    id: string,
    name: string,
    description?: string | null,
    businesses?:  {
      __typename: "ModelBusinessIndustriesConnection",
      items:  Array< {
        __typename: "BusinessIndustries",
        id: string,
        industryId: string,
        businessId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    categories?:  {
      __typename: "ModelIndustryCategoriesConnection",
      items:  Array< {
        __typename: "IndustryCategories",
        id: string,
        categoryId: string,
        industryId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteIndustrySubscriptionVariables = {
  filter?: ModelSubscriptionIndustryFilterInput | null,
};

export type OnDeleteIndustrySubscription = {
  onDeleteIndustry?:  {
    __typename: "Industry",
    id: string,
    name: string,
    description?: string | null,
    businesses?:  {
      __typename: "ModelBusinessIndustriesConnection",
      items:  Array< {
        __typename: "BusinessIndustries",
        id: string,
        industryId: string,
        businessId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    categories?:  {
      __typename: "ModelIndustryCategoriesConnection",
      items:  Array< {
        __typename: "IndustryCategories",
        id: string,
        categoryId: string,
        industryId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAddressSubscriptionVariables = {
  filter?: ModelSubscriptionAddressFilterInput | null,
};

export type OnCreateAddressSubscription = {
  onCreateAddress?:  {
    __typename: "Address",
    id: string,
    street: string,
    city: string,
    state: string,
    postal_code: string,
    country: string,
    is_default?: boolean | null,
    business_id?: string | null,
    business?:  {
      __typename: "Business",
      id: string,
      name: string,
      description?: string | null,
      salesreps?:  {
        __typename: "ModelBusinessSalesrepsConnection",
        nextToken?: string | null,
      } | null,
      industries?:  {
        __typename: "ModelBusinessIndustriesConnection",
        nextToken?: string | null,
      } | null,
      addresses?:  {
        __typename: "ModelAddressConnection",
        nextToken?: string | null,
      } | null,
      banks?:  {
        __typename: "ModelBankConnection",
        nextToken?: string | null,
      } | null,
      buyers?:  {
        __typename: "ModelBuyerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAddressSubscriptionVariables = {
  filter?: ModelSubscriptionAddressFilterInput | null,
};

export type OnUpdateAddressSubscription = {
  onUpdateAddress?:  {
    __typename: "Address",
    id: string,
    street: string,
    city: string,
    state: string,
    postal_code: string,
    country: string,
    is_default?: boolean | null,
    business_id?: string | null,
    business?:  {
      __typename: "Business",
      id: string,
      name: string,
      description?: string | null,
      salesreps?:  {
        __typename: "ModelBusinessSalesrepsConnection",
        nextToken?: string | null,
      } | null,
      industries?:  {
        __typename: "ModelBusinessIndustriesConnection",
        nextToken?: string | null,
      } | null,
      addresses?:  {
        __typename: "ModelAddressConnection",
        nextToken?: string | null,
      } | null,
      banks?:  {
        __typename: "ModelBankConnection",
        nextToken?: string | null,
      } | null,
      buyers?:  {
        __typename: "ModelBuyerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAddressSubscriptionVariables = {
  filter?: ModelSubscriptionAddressFilterInput | null,
};

export type OnDeleteAddressSubscription = {
  onDeleteAddress?:  {
    __typename: "Address",
    id: string,
    street: string,
    city: string,
    state: string,
    postal_code: string,
    country: string,
    is_default?: boolean | null,
    business_id?: string | null,
    business?:  {
      __typename: "Business",
      id: string,
      name: string,
      description?: string | null,
      salesreps?:  {
        __typename: "ModelBusinessSalesrepsConnection",
        nextToken?: string | null,
      } | null,
      industries?:  {
        __typename: "ModelBusinessIndustriesConnection",
        nextToken?: string | null,
      } | null,
      addresses?:  {
        __typename: "ModelAddressConnection",
        nextToken?: string | null,
      } | null,
      banks?:  {
        __typename: "ModelBankConnection",
        nextToken?: string | null,
      } | null,
      buyers?:  {
        __typename: "ModelBuyerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateBankSubscriptionVariables = {
  filter?: ModelSubscriptionBankFilterInput | null,
};

export type OnCreateBankSubscription = {
  onCreateBank?:  {
    __typename: "Bank",
    id: string,
    account_name: string,
    account_number: string,
    routing_number: string,
    is_default?: boolean | null,
    business_id?: string | null,
    business?:  {
      __typename: "Business",
      id: string,
      name: string,
      description?: string | null,
      salesreps?:  {
        __typename: "ModelBusinessSalesrepsConnection",
        nextToken?: string | null,
      } | null,
      industries?:  {
        __typename: "ModelBusinessIndustriesConnection",
        nextToken?: string | null,
      } | null,
      addresses?:  {
        __typename: "ModelAddressConnection",
        nextToken?: string | null,
      } | null,
      banks?:  {
        __typename: "ModelBankConnection",
        nextToken?: string | null,
      } | null,
      buyers?:  {
        __typename: "ModelBuyerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateBankSubscriptionVariables = {
  filter?: ModelSubscriptionBankFilterInput | null,
};

export type OnUpdateBankSubscription = {
  onUpdateBank?:  {
    __typename: "Bank",
    id: string,
    account_name: string,
    account_number: string,
    routing_number: string,
    is_default?: boolean | null,
    business_id?: string | null,
    business?:  {
      __typename: "Business",
      id: string,
      name: string,
      description?: string | null,
      salesreps?:  {
        __typename: "ModelBusinessSalesrepsConnection",
        nextToken?: string | null,
      } | null,
      industries?:  {
        __typename: "ModelBusinessIndustriesConnection",
        nextToken?: string | null,
      } | null,
      addresses?:  {
        __typename: "ModelAddressConnection",
        nextToken?: string | null,
      } | null,
      banks?:  {
        __typename: "ModelBankConnection",
        nextToken?: string | null,
      } | null,
      buyers?:  {
        __typename: "ModelBuyerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteBankSubscriptionVariables = {
  filter?: ModelSubscriptionBankFilterInput | null,
};

export type OnDeleteBankSubscription = {
  onDeleteBank?:  {
    __typename: "Bank",
    id: string,
    account_name: string,
    account_number: string,
    routing_number: string,
    is_default?: boolean | null,
    business_id?: string | null,
    business?:  {
      __typename: "Business",
      id: string,
      name: string,
      description?: string | null,
      salesreps?:  {
        __typename: "ModelBusinessSalesrepsConnection",
        nextToken?: string | null,
      } | null,
      industries?:  {
        __typename: "ModelBusinessIndustriesConnection",
        nextToken?: string | null,
      } | null,
      addresses?:  {
        __typename: "ModelAddressConnection",
        nextToken?: string | null,
      } | null,
      banks?:  {
        __typename: "ModelBankConnection",
        nextToken?: string | null,
      } | null,
      buyers?:  {
        __typename: "ModelBuyerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateBusinessSubscriptionVariables = {
  filter?: ModelSubscriptionBusinessFilterInput | null,
};

export type OnCreateBusinessSubscription = {
  onCreateBusiness?:  {
    __typename: "Business",
    id: string,
    name: string,
    description?: string | null,
    salesreps?:  {
      __typename: "ModelBusinessSalesrepsConnection",
      items:  Array< {
        __typename: "BusinessSalesreps",
        id: string,
        salesrepId: string,
        businessId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    industries?:  {
      __typename: "ModelBusinessIndustriesConnection",
      items:  Array< {
        __typename: "BusinessIndustries",
        id: string,
        industryId: string,
        businessId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    addresses?:  {
      __typename: "ModelAddressConnection",
      items:  Array< {
        __typename: "Address",
        id: string,
        street: string,
        city: string,
        state: string,
        postal_code: string,
        country: string,
        is_default?: boolean | null,
        business_id?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    banks?:  {
      __typename: "ModelBankConnection",
      items:  Array< {
        __typename: "Bank",
        id: string,
        account_name: string,
        account_number: string,
        routing_number: string,
        is_default?: boolean | null,
        business_id?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    buyers?:  {
      __typename: "ModelBuyerConnection",
      items:  Array< {
        __typename: "Buyer",
        id: string,
        first_name: string,
        last_name: string,
        user_name: string,
        last_login?: string | null,
        is_owner: boolean,
        email: string,
        phone: string,
        business_id?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateBusinessSubscriptionVariables = {
  filter?: ModelSubscriptionBusinessFilterInput | null,
};

export type OnUpdateBusinessSubscription = {
  onUpdateBusiness?:  {
    __typename: "Business",
    id: string,
    name: string,
    description?: string | null,
    salesreps?:  {
      __typename: "ModelBusinessSalesrepsConnection",
      items:  Array< {
        __typename: "BusinessSalesreps",
        id: string,
        salesrepId: string,
        businessId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    industries?:  {
      __typename: "ModelBusinessIndustriesConnection",
      items:  Array< {
        __typename: "BusinessIndustries",
        id: string,
        industryId: string,
        businessId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    addresses?:  {
      __typename: "ModelAddressConnection",
      items:  Array< {
        __typename: "Address",
        id: string,
        street: string,
        city: string,
        state: string,
        postal_code: string,
        country: string,
        is_default?: boolean | null,
        business_id?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    banks?:  {
      __typename: "ModelBankConnection",
      items:  Array< {
        __typename: "Bank",
        id: string,
        account_name: string,
        account_number: string,
        routing_number: string,
        is_default?: boolean | null,
        business_id?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    buyers?:  {
      __typename: "ModelBuyerConnection",
      items:  Array< {
        __typename: "Buyer",
        id: string,
        first_name: string,
        last_name: string,
        user_name: string,
        last_login?: string | null,
        is_owner: boolean,
        email: string,
        phone: string,
        business_id?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteBusinessSubscriptionVariables = {
  filter?: ModelSubscriptionBusinessFilterInput | null,
};

export type OnDeleteBusinessSubscription = {
  onDeleteBusiness?:  {
    __typename: "Business",
    id: string,
    name: string,
    description?: string | null,
    salesreps?:  {
      __typename: "ModelBusinessSalesrepsConnection",
      items:  Array< {
        __typename: "BusinessSalesreps",
        id: string,
        salesrepId: string,
        businessId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    industries?:  {
      __typename: "ModelBusinessIndustriesConnection",
      items:  Array< {
        __typename: "BusinessIndustries",
        id: string,
        industryId: string,
        businessId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    addresses?:  {
      __typename: "ModelAddressConnection",
      items:  Array< {
        __typename: "Address",
        id: string,
        street: string,
        city: string,
        state: string,
        postal_code: string,
        country: string,
        is_default?: boolean | null,
        business_id?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    banks?:  {
      __typename: "ModelBankConnection",
      items:  Array< {
        __typename: "Bank",
        id: string,
        account_name: string,
        account_number: string,
        routing_number: string,
        is_default?: boolean | null,
        business_id?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    buyers?:  {
      __typename: "ModelBuyerConnection",
      items:  Array< {
        __typename: "Buyer",
        id: string,
        first_name: string,
        last_name: string,
        user_name: string,
        last_login?: string | null,
        is_owner: boolean,
        email: string,
        phone: string,
        business_id?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateBuyerSubscriptionVariables = {
  filter?: ModelSubscriptionBuyerFilterInput | null,
};

export type OnCreateBuyerSubscription = {
  onCreateBuyer?:  {
    __typename: "Buyer",
    id: string,
    first_name: string,
    last_name: string,
    user_name: string,
    last_login?: string | null,
    is_owner: boolean,
    email: string,
    phone: string,
    business_id?: string | null,
    business?:  {
      __typename: "Business",
      id: string,
      name: string,
      description?: string | null,
      salesreps?:  {
        __typename: "ModelBusinessSalesrepsConnection",
        nextToken?: string | null,
      } | null,
      industries?:  {
        __typename: "ModelBusinessIndustriesConnection",
        nextToken?: string | null,
      } | null,
      addresses?:  {
        __typename: "ModelAddressConnection",
        nextToken?: string | null,
      } | null,
      banks?:  {
        __typename: "ModelBankConnection",
        nextToken?: string | null,
      } | null,
      buyers?:  {
        __typename: "ModelBuyerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateBuyerSubscriptionVariables = {
  filter?: ModelSubscriptionBuyerFilterInput | null,
};

export type OnUpdateBuyerSubscription = {
  onUpdateBuyer?:  {
    __typename: "Buyer",
    id: string,
    first_name: string,
    last_name: string,
    user_name: string,
    last_login?: string | null,
    is_owner: boolean,
    email: string,
    phone: string,
    business_id?: string | null,
    business?:  {
      __typename: "Business",
      id: string,
      name: string,
      description?: string | null,
      salesreps?:  {
        __typename: "ModelBusinessSalesrepsConnection",
        nextToken?: string | null,
      } | null,
      industries?:  {
        __typename: "ModelBusinessIndustriesConnection",
        nextToken?: string | null,
      } | null,
      addresses?:  {
        __typename: "ModelAddressConnection",
        nextToken?: string | null,
      } | null,
      banks?:  {
        __typename: "ModelBankConnection",
        nextToken?: string | null,
      } | null,
      buyers?:  {
        __typename: "ModelBuyerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteBuyerSubscriptionVariables = {
  filter?: ModelSubscriptionBuyerFilterInput | null,
};

export type OnDeleteBuyerSubscription = {
  onDeleteBuyer?:  {
    __typename: "Buyer",
    id: string,
    first_name: string,
    last_name: string,
    user_name: string,
    last_login?: string | null,
    is_owner: boolean,
    email: string,
    phone: string,
    business_id?: string | null,
    business?:  {
      __typename: "Business",
      id: string,
      name: string,
      description?: string | null,
      salesreps?:  {
        __typename: "ModelBusinessSalesrepsConnection",
        nextToken?: string | null,
      } | null,
      industries?:  {
        __typename: "ModelBusinessIndustriesConnection",
        nextToken?: string | null,
      } | null,
      addresses?:  {
        __typename: "ModelAddressConnection",
        nextToken?: string | null,
      } | null,
      banks?:  {
        __typename: "ModelBankConnection",
        nextToken?: string | null,
      } | null,
      buyers?:  {
        __typename: "ModelBuyerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateApplicationSubscriptionVariables = {
  filter?: ModelSubscriptionApplicationFilterInput | null,
};

export type OnCreateApplicationSubscription = {
  onCreateApplication?:  {
    __typename: "Application",
    id: string,
    status?: string | null,
    business_name: string,
    street: string,
    city: string,
    state: string,
    postal_code: string,
    country: string,
    account_name: string,
    account_number: string,
    routing_number: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateApplicationSubscriptionVariables = {
  filter?: ModelSubscriptionApplicationFilterInput | null,
};

export type OnUpdateApplicationSubscription = {
  onUpdateApplication?:  {
    __typename: "Application",
    id: string,
    status?: string | null,
    business_name: string,
    street: string,
    city: string,
    state: string,
    postal_code: string,
    country: string,
    account_name: string,
    account_number: string,
    routing_number: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteApplicationSubscriptionVariables = {
  filter?: ModelSubscriptionApplicationFilterInput | null,
};

export type OnDeleteApplicationSubscription = {
  onDeleteApplication?:  {
    __typename: "Application",
    id: string,
    status?: string | null,
    business_name: string,
    street: string,
    city: string,
    state: string,
    postal_code: string,
    country: string,
    account_name: string,
    account_number: string,
    routing_number: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateBlurbSubscriptionVariables = {
  filter?: ModelSubscriptionBlurbFilterInput | null,
};

export type OnCreateBlurbSubscription = {
  onCreateBlurb?:  {
    __typename: "Blurb",
    id: string,
    title: string,
    description: string,
    start_date: string,
    end_date: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateBlurbSubscriptionVariables = {
  filter?: ModelSubscriptionBlurbFilterInput | null,
};

export type OnUpdateBlurbSubscription = {
  onUpdateBlurb?:  {
    __typename: "Blurb",
    id: string,
    title: string,
    description: string,
    start_date: string,
    end_date: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteBlurbSubscriptionVariables = {
  filter?: ModelSubscriptionBlurbFilterInput | null,
};

export type OnDeleteBlurbSubscription = {
  onDeleteBlurb?:  {
    __typename: "Blurb",
    id: string,
    title: string,
    description: string,
    start_date: string,
    end_date: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateProductCategoriesSubscriptionVariables = {
  filter?: ModelSubscriptionProductCategoriesFilterInput | null,
};

export type OnCreateProductCategoriesSubscription = {
  onCreateProductCategories?:  {
    __typename: "ProductCategories",
    id: string,
    categoryId: string,
    productId: string,
    category:  {
      __typename: "Category",
      id: string,
      name: string,
      products?:  {
        __typename: "ModelProductCategoriesConnection",
        nextToken?: string | null,
      } | null,
      industries?:  {
        __typename: "ModelIndustryCategoriesConnection",
        nextToken?: string | null,
      } | null,
      type?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    product:  {
      __typename: "Product",
      id: string,
      name?: string | null,
      msrp?: number | null,
      price?: number | null,
      sku?: string | null,
      description?: string | null,
      status?: ProductStatusEnum | null,
      media?: Array< string | null > | null,
      item_weight_net?: number | null,
      item_weight_gross?: number | null,
      item_size_width?: number | null,
      item_size_depth?: number | null,
      item_size_height?: number | null,
      package_weight_net?: number | null,
      package_weight_gross?: number | null,
      package_size_width?: number | null,
      package_size_depth?: number | null,
      package_size_height?: number | null,
      items_per_package?: number | null,
      categories?:  {
        __typename: "ModelProductCategoriesConnection",
        nextToken?: string | null,
      } | null,
      factory_id?: string | null,
      factory?:  {
        __typename: "Factory",
        id: string,
        name?: string | null,
        url?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      type?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProductCategoriesSubscriptionVariables = {
  filter?: ModelSubscriptionProductCategoriesFilterInput | null,
};

export type OnUpdateProductCategoriesSubscription = {
  onUpdateProductCategories?:  {
    __typename: "ProductCategories",
    id: string,
    categoryId: string,
    productId: string,
    category:  {
      __typename: "Category",
      id: string,
      name: string,
      products?:  {
        __typename: "ModelProductCategoriesConnection",
        nextToken?: string | null,
      } | null,
      industries?:  {
        __typename: "ModelIndustryCategoriesConnection",
        nextToken?: string | null,
      } | null,
      type?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    product:  {
      __typename: "Product",
      id: string,
      name?: string | null,
      msrp?: number | null,
      price?: number | null,
      sku?: string | null,
      description?: string | null,
      status?: ProductStatusEnum | null,
      media?: Array< string | null > | null,
      item_weight_net?: number | null,
      item_weight_gross?: number | null,
      item_size_width?: number | null,
      item_size_depth?: number | null,
      item_size_height?: number | null,
      package_weight_net?: number | null,
      package_weight_gross?: number | null,
      package_size_width?: number | null,
      package_size_depth?: number | null,
      package_size_height?: number | null,
      items_per_package?: number | null,
      categories?:  {
        __typename: "ModelProductCategoriesConnection",
        nextToken?: string | null,
      } | null,
      factory_id?: string | null,
      factory?:  {
        __typename: "Factory",
        id: string,
        name?: string | null,
        url?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      type?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProductCategoriesSubscriptionVariables = {
  filter?: ModelSubscriptionProductCategoriesFilterInput | null,
};

export type OnDeleteProductCategoriesSubscription = {
  onDeleteProductCategories?:  {
    __typename: "ProductCategories",
    id: string,
    categoryId: string,
    productId: string,
    category:  {
      __typename: "Category",
      id: string,
      name: string,
      products?:  {
        __typename: "ModelProductCategoriesConnection",
        nextToken?: string | null,
      } | null,
      industries?:  {
        __typename: "ModelIndustryCategoriesConnection",
        nextToken?: string | null,
      } | null,
      type?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    product:  {
      __typename: "Product",
      id: string,
      name?: string | null,
      msrp?: number | null,
      price?: number | null,
      sku?: string | null,
      description?: string | null,
      status?: ProductStatusEnum | null,
      media?: Array< string | null > | null,
      item_weight_net?: number | null,
      item_weight_gross?: number | null,
      item_size_width?: number | null,
      item_size_depth?: number | null,
      item_size_height?: number | null,
      package_weight_net?: number | null,
      package_weight_gross?: number | null,
      package_size_width?: number | null,
      package_size_depth?: number | null,
      package_size_height?: number | null,
      items_per_package?: number | null,
      categories?:  {
        __typename: "ModelProductCategoriesConnection",
        nextToken?: string | null,
      } | null,
      factory_id?: string | null,
      factory?:  {
        __typename: "Factory",
        id: string,
        name?: string | null,
        url?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      type?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateIndustryCategoriesSubscriptionVariables = {
  filter?: ModelSubscriptionIndustryCategoriesFilterInput | null,
};

export type OnCreateIndustryCategoriesSubscription = {
  onCreateIndustryCategories?:  {
    __typename: "IndustryCategories",
    id: string,
    categoryId: string,
    industryId: string,
    category:  {
      __typename: "Category",
      id: string,
      name: string,
      products?:  {
        __typename: "ModelProductCategoriesConnection",
        nextToken?: string | null,
      } | null,
      industries?:  {
        __typename: "ModelIndustryCategoriesConnection",
        nextToken?: string | null,
      } | null,
      type?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    industry:  {
      __typename: "Industry",
      id: string,
      name: string,
      description?: string | null,
      businesses?:  {
        __typename: "ModelBusinessIndustriesConnection",
        nextToken?: string | null,
      } | null,
      categories?:  {
        __typename: "ModelIndustryCategoriesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateIndustryCategoriesSubscriptionVariables = {
  filter?: ModelSubscriptionIndustryCategoriesFilterInput | null,
};

export type OnUpdateIndustryCategoriesSubscription = {
  onUpdateIndustryCategories?:  {
    __typename: "IndustryCategories",
    id: string,
    categoryId: string,
    industryId: string,
    category:  {
      __typename: "Category",
      id: string,
      name: string,
      products?:  {
        __typename: "ModelProductCategoriesConnection",
        nextToken?: string | null,
      } | null,
      industries?:  {
        __typename: "ModelIndustryCategoriesConnection",
        nextToken?: string | null,
      } | null,
      type?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    industry:  {
      __typename: "Industry",
      id: string,
      name: string,
      description?: string | null,
      businesses?:  {
        __typename: "ModelBusinessIndustriesConnection",
        nextToken?: string | null,
      } | null,
      categories?:  {
        __typename: "ModelIndustryCategoriesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteIndustryCategoriesSubscriptionVariables = {
  filter?: ModelSubscriptionIndustryCategoriesFilterInput | null,
};

export type OnDeleteIndustryCategoriesSubscription = {
  onDeleteIndustryCategories?:  {
    __typename: "IndustryCategories",
    id: string,
    categoryId: string,
    industryId: string,
    category:  {
      __typename: "Category",
      id: string,
      name: string,
      products?:  {
        __typename: "ModelProductCategoriesConnection",
        nextToken?: string | null,
      } | null,
      industries?:  {
        __typename: "ModelIndustryCategoriesConnection",
        nextToken?: string | null,
      } | null,
      type?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    industry:  {
      __typename: "Industry",
      id: string,
      name: string,
      description?: string | null,
      businesses?:  {
        __typename: "ModelBusinessIndustriesConnection",
        nextToken?: string | null,
      } | null,
      categories?:  {
        __typename: "ModelIndustryCategoriesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateBusinessSalesrepsSubscriptionVariables = {
  filter?: ModelSubscriptionBusinessSalesrepsFilterInput | null,
};

export type OnCreateBusinessSalesrepsSubscription = {
  onCreateBusinessSalesreps?:  {
    __typename: "BusinessSalesreps",
    id: string,
    salesrepId: string,
    businessId: string,
    salesrep:  {
      __typename: "Salesrep",
      id: string,
      name: string,
      title?: string | null,
      email: string,
      phone: string,
      businesses?:  {
        __typename: "ModelBusinessSalesrepsConnection",
        nextToken?: string | null,
      } | null,
      type?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    business:  {
      __typename: "Business",
      id: string,
      name: string,
      description?: string | null,
      salesreps?:  {
        __typename: "ModelBusinessSalesrepsConnection",
        nextToken?: string | null,
      } | null,
      industries?:  {
        __typename: "ModelBusinessIndustriesConnection",
        nextToken?: string | null,
      } | null,
      addresses?:  {
        __typename: "ModelAddressConnection",
        nextToken?: string | null,
      } | null,
      banks?:  {
        __typename: "ModelBankConnection",
        nextToken?: string | null,
      } | null,
      buyers?:  {
        __typename: "ModelBuyerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateBusinessSalesrepsSubscriptionVariables = {
  filter?: ModelSubscriptionBusinessSalesrepsFilterInput | null,
};

export type OnUpdateBusinessSalesrepsSubscription = {
  onUpdateBusinessSalesreps?:  {
    __typename: "BusinessSalesreps",
    id: string,
    salesrepId: string,
    businessId: string,
    salesrep:  {
      __typename: "Salesrep",
      id: string,
      name: string,
      title?: string | null,
      email: string,
      phone: string,
      businesses?:  {
        __typename: "ModelBusinessSalesrepsConnection",
        nextToken?: string | null,
      } | null,
      type?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    business:  {
      __typename: "Business",
      id: string,
      name: string,
      description?: string | null,
      salesreps?:  {
        __typename: "ModelBusinessSalesrepsConnection",
        nextToken?: string | null,
      } | null,
      industries?:  {
        __typename: "ModelBusinessIndustriesConnection",
        nextToken?: string | null,
      } | null,
      addresses?:  {
        __typename: "ModelAddressConnection",
        nextToken?: string | null,
      } | null,
      banks?:  {
        __typename: "ModelBankConnection",
        nextToken?: string | null,
      } | null,
      buyers?:  {
        __typename: "ModelBuyerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteBusinessSalesrepsSubscriptionVariables = {
  filter?: ModelSubscriptionBusinessSalesrepsFilterInput | null,
};

export type OnDeleteBusinessSalesrepsSubscription = {
  onDeleteBusinessSalesreps?:  {
    __typename: "BusinessSalesreps",
    id: string,
    salesrepId: string,
    businessId: string,
    salesrep:  {
      __typename: "Salesrep",
      id: string,
      name: string,
      title?: string | null,
      email: string,
      phone: string,
      businesses?:  {
        __typename: "ModelBusinessSalesrepsConnection",
        nextToken?: string | null,
      } | null,
      type?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    business:  {
      __typename: "Business",
      id: string,
      name: string,
      description?: string | null,
      salesreps?:  {
        __typename: "ModelBusinessSalesrepsConnection",
        nextToken?: string | null,
      } | null,
      industries?:  {
        __typename: "ModelBusinessIndustriesConnection",
        nextToken?: string | null,
      } | null,
      addresses?:  {
        __typename: "ModelAddressConnection",
        nextToken?: string | null,
      } | null,
      banks?:  {
        __typename: "ModelBankConnection",
        nextToken?: string | null,
      } | null,
      buyers?:  {
        __typename: "ModelBuyerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateBusinessIndustriesSubscriptionVariables = {
  filter?: ModelSubscriptionBusinessIndustriesFilterInput | null,
};

export type OnCreateBusinessIndustriesSubscription = {
  onCreateBusinessIndustries?:  {
    __typename: "BusinessIndustries",
    id: string,
    industryId: string,
    businessId: string,
    industry:  {
      __typename: "Industry",
      id: string,
      name: string,
      description?: string | null,
      businesses?:  {
        __typename: "ModelBusinessIndustriesConnection",
        nextToken?: string | null,
      } | null,
      categories?:  {
        __typename: "ModelIndustryCategoriesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    business:  {
      __typename: "Business",
      id: string,
      name: string,
      description?: string | null,
      salesreps?:  {
        __typename: "ModelBusinessSalesrepsConnection",
        nextToken?: string | null,
      } | null,
      industries?:  {
        __typename: "ModelBusinessIndustriesConnection",
        nextToken?: string | null,
      } | null,
      addresses?:  {
        __typename: "ModelAddressConnection",
        nextToken?: string | null,
      } | null,
      banks?:  {
        __typename: "ModelBankConnection",
        nextToken?: string | null,
      } | null,
      buyers?:  {
        __typename: "ModelBuyerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateBusinessIndustriesSubscriptionVariables = {
  filter?: ModelSubscriptionBusinessIndustriesFilterInput | null,
};

export type OnUpdateBusinessIndustriesSubscription = {
  onUpdateBusinessIndustries?:  {
    __typename: "BusinessIndustries",
    id: string,
    industryId: string,
    businessId: string,
    industry:  {
      __typename: "Industry",
      id: string,
      name: string,
      description?: string | null,
      businesses?:  {
        __typename: "ModelBusinessIndustriesConnection",
        nextToken?: string | null,
      } | null,
      categories?:  {
        __typename: "ModelIndustryCategoriesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    business:  {
      __typename: "Business",
      id: string,
      name: string,
      description?: string | null,
      salesreps?:  {
        __typename: "ModelBusinessSalesrepsConnection",
        nextToken?: string | null,
      } | null,
      industries?:  {
        __typename: "ModelBusinessIndustriesConnection",
        nextToken?: string | null,
      } | null,
      addresses?:  {
        __typename: "ModelAddressConnection",
        nextToken?: string | null,
      } | null,
      banks?:  {
        __typename: "ModelBankConnection",
        nextToken?: string | null,
      } | null,
      buyers?:  {
        __typename: "ModelBuyerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteBusinessIndustriesSubscriptionVariables = {
  filter?: ModelSubscriptionBusinessIndustriesFilterInput | null,
};

export type OnDeleteBusinessIndustriesSubscription = {
  onDeleteBusinessIndustries?:  {
    __typename: "BusinessIndustries",
    id: string,
    industryId: string,
    businessId: string,
    industry:  {
      __typename: "Industry",
      id: string,
      name: string,
      description?: string | null,
      businesses?:  {
        __typename: "ModelBusinessIndustriesConnection",
        nextToken?: string | null,
      } | null,
      categories?:  {
        __typename: "ModelIndustryCategoriesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    business:  {
      __typename: "Business",
      id: string,
      name: string,
      description?: string | null,
      salesreps?:  {
        __typename: "ModelBusinessSalesrepsConnection",
        nextToken?: string | null,
      } | null,
      industries?:  {
        __typename: "ModelBusinessIndustriesConnection",
        nextToken?: string | null,
      } | null,
      addresses?:  {
        __typename: "ModelAddressConnection",
        nextToken?: string | null,
      } | null,
      banks?:  {
        __typename: "ModelBankConnection",
        nextToken?: string | null,
      } | null,
      buyers?:  {
        __typename: "ModelBuyerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};
