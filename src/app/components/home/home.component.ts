import { Component, OnInit } from '@angular/core';
import { HealthyEatingService } from '../../service/healthy-eating.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  fruits: any[] = [];
  searchTerm: string = '';
  filteredFruits: any[] = [];
  selectedFruit: any | null = null;

  constructor(private healthyEatingService: HealthyEatingService) {}

  ngOnInit(): void {
    this.healthyEatingService.getAllFruits().subscribe({
      next: (data: any) => {
        this.fruits = data.map((fruit: any) => ({
          ...fruit,
          imageUrl: `../assets/${fruit.name.toLowerCase()}.jpeg`,
        }));
        this.filteredFruits = this.fruits;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  searchFruit() {
    this.filteredFruits = this.fruits.filter((fruit) =>
      fruit.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  toggleNutritionalInfo(fruit: any) {
    this.selectedFruit = this.selectedFruit === fruit ? null : fruit;
  }
}
