import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  index: number;
  recipe: Recipe;
  constructor(private recipeService: RecipeService,
     private route: ActivatedRoute,
     private router: Router ) { }

  ngOnInit() {
    this.route.params
            .subscribe(( paramas: Params) => {
                this.index = +paramas['id'];
                this.recipe = this.recipeService.getRecipe(this.index);
            });
  }

  addToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onRecipeEdit() {
    this.router.navigate(['edit'], {relativeTo: this.route });
  }

}
