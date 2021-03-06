import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({ providedIn: 'root'})
export class RecipeService {
  constructor(private shoppingListService: ShoppingListService) { }

  recipes: Recipe[] = [
    new Recipe(
      'Chicken Lollipops',
      'This is simply a test',
      'https://foodibase.com/wp-content/uploads/2018/07/Chicken-Lollipop.jpg',
      [
        new Ingredient('chicken legs', 6),
        new Ingredient('flour ', 1),
        new Ingredient('chilli powder ', 1),
      ]
    ),
    new Recipe('kombdi+vade',
    'This is simply a test',
    'http://justagirlfromaamchimumbai.com/wp-content/uploads/2015/10/1-IMG_0260.jpg',
    [
      new Ingredient('Rice', 3),
      new Ingredient('urad dal', 1),
      new Ingredient('cumin seed', 1),
    ])
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngrdients(ingredients);
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }
}
