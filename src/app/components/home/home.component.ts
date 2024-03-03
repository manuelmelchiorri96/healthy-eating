import { Component } from '@angular/core';
import { HealthyEatingService } from '../../service/healthy-eating.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  fruits!: any[];
  searchTerm: string = '';
  filteredFruits!: any[];

  constructor(private healthyEatingService: HealthyEatingService) {}

  ngOnInit(): void {
    this.healthyEatingService.getAllFruits().subscribe({
      next: (data: any) => {
        this.fruits = data;
        console.log(this.fruits);
        console.log(data);
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
