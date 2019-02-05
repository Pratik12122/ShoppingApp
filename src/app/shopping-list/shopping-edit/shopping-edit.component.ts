import { Component, OnInit, EventEmitter, Output, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') form: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;
  constructor(private shoppingListSerive: ShoppingListService) { }

  ngOnInit() {
    this.subscription
      = this.shoppingListSerive
            .startedEditing
            .subscribe((index: number) => {
                this.editedItemIndex = index;
                this.editMode = true;
                this.editedItem = this.shoppingListSerive.getIngredient(index);
                this.form.setValue({
                  name: this.editedItem.name,
                  amount: this.editedItem.amount
                });
            });
  }

  onAddItem(form: NgForm) {
    const value = form.value;
    const ingredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.shoppingListSerive.updateIngredient(this.editedItemIndex, ingredient);
    } else {
      this.shoppingListSerive.addIngredient(ingredient);
    }
    this.editMode = false;
    form.reset();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onClear() {
    this.form.reset();
    this.editMode = false;
  }

  onDelete() {
    if (this.editMode) {
      this.onClear();
      this.shoppingListSerive.deleteIngredient(this.editedItemIndex);
    }

  }
}
