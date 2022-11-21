import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";

type CurrentInventoryMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type IngredientListMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type RecipeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ShopingCartItemMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerCurrentInventory = {
  readonly id: string;
  readonly price?: number | null;
  readonly quantity?: number | null;
  readonly name?: string | null;
  readonly alternative?: string | null;
  readonly measurement?: string | null;
  readonly onHand?: number | null;
  readonly expiration?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCurrentInventory = {
  readonly id: string;
  readonly price?: number | null;
  readonly quantity?: number | null;
  readonly name?: string | null;
  readonly alternative?: string | null;
  readonly measurement?: string | null;
  readonly onHand?: number | null;
  readonly expiration?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CurrentInventory = LazyLoading extends LazyLoadingDisabled ? EagerCurrentInventory : LazyCurrentInventory

export declare const CurrentInventory: (new (init: ModelInit<CurrentInventory, CurrentInventoryMetaData>) => CurrentInventory) & {
  copyOf(source: CurrentInventory, mutator: (draft: MutableModel<CurrentInventory, CurrentInventoryMetaData>) => MutableModel<CurrentInventory, CurrentInventoryMetaData> | void): CurrentInventory;
}

type EagerIngredientList = {
  readonly id: string;
  readonly shopingCartId?: string | null;
  readonly recipeID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyIngredientList = {
  readonly id: string;
  readonly shopingCartId?: string | null;
  readonly recipeID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type IngredientList = LazyLoading extends LazyLoadingDisabled ? EagerIngredientList : LazyIngredientList

export declare const IngredientList: (new (init: ModelInit<IngredientList, IngredientListMetaData>) => IngredientList) & {
  copyOf(source: IngredientList, mutator: (draft: MutableModel<IngredientList, IngredientListMetaData>) => MutableModel<IngredientList, IngredientListMetaData> | void): IngredientList;
}

type EagerRecipe = {
  readonly id: string;
  readonly recipeName?: string | null;
  readonly servings?: string | null;
  readonly lastCost?: string | null;
  readonly newCost?: string | null;
  readonly IngredientLists?: (IngredientList | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRecipe = {
  readonly id: string;
  readonly recipeName?: string | null;
  readonly servings?: string | null;
  readonly lastCost?: string | null;
  readonly newCost?: string | null;
  readonly IngredientLists: AsyncCollection<IngredientList>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Recipe = LazyLoading extends LazyLoadingDisabled ? EagerRecipe : LazyRecipe

export declare const Recipe: (new (init: ModelInit<Recipe, RecipeMetaData>) => Recipe) & {
  copyOf(source: Recipe, mutator: (draft: MutableModel<Recipe, RecipeMetaData>) => MutableModel<Recipe, RecipeMetaData> | void): Recipe;
}

type EagerShopingCartItem = {
  readonly id: string;
  readonly lastPrice?: number | null;
  readonly newPrice?: number | null;
  readonly quantity?: number | null;
  readonly name?: string | null;
  readonly alternative?: number | null;
  readonly measurement?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyShopingCartItem = {
  readonly id: string;
  readonly lastPrice?: number | null;
  readonly newPrice?: number | null;
  readonly quantity?: number | null;
  readonly name?: string | null;
  readonly alternative?: number | null;
  readonly measurement?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ShopingCartItem = LazyLoading extends LazyLoadingDisabled ? EagerShopingCartItem : LazyShopingCartItem

export declare const ShopingCartItem: (new (init: ModelInit<ShopingCartItem, ShopingCartItemMetaData>) => ShopingCartItem) & {
  copyOf(source: ShopingCartItem, mutator: (draft: MutableModel<ShopingCartItem, ShopingCartItemMetaData>) => MutableModel<ShopingCartItem, ShopingCartItemMetaData> | void): ShopingCartItem;
}