import { Component } from '@angular/core';
import { Food } from '../shared/models/Food';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../servics/food/food.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.css'
})
export class FoodPageComponent {
  food!:Food;
  constructor(private activatedRoute:ActivatedRoute ,private foodservice:FoodService){
    activatedRoute.params.subscribe((params=>{
      if(params['id'])
        this.food = this.foodservice.getFoodById(params['id'])
    }))
  }

}
