import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({ providedIn: 'root'})
export class RecipeService {

  recipeSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();
  constructor() { }

  recipes: Recipe[] = [
    new Recipe('Chicken Lollipops', 'This is simply a test', 'https://foodibase.com/wp-content/uploads/2018/07/Chicken-Lollipop.jpg'),
    new Recipe('kombdi+vade', 'This is simply a test', 'http://justagirlfromaamchimumbai.com/wp-content/uploads/2015/10/1-IMG_0260.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
