// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { CurrentInventory, IngredientList, Recipe, ShopingCartItem } = initSchema(schema);

export {
  CurrentInventory,
  IngredientList,
  Recipe,
  ShopingCartItem
};