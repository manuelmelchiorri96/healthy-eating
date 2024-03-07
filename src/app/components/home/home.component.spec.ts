import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { HealthyEatingService } from '../../service/healthy-eating.service';
import { of } from 'rxjs';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let healthyEatingServiceSpy: jasmine.SpyObj<HealthyEatingService>;

  beforeEach(waitForAsync(() => {
    const spy = jasmine.createSpyObj('HealthyEatingService', ['getAllFruits']);
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [{ provide: HealthyEatingService, useValue: spy }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    healthyEatingServiceSpy = TestBed.inject(
      HealthyEatingService
    ) as jasmine.SpyObj<HealthyEatingService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should filter fruits by search term', () => {
    const fruits = [
      { name: 'Apple', imageUrl: 'apple.jpeg', description: 'A tasty fruit' },
      { name: 'Banana', imageUrl: 'banana.jpeg', description: 'A yummy fruit' },
    ];
    component.fruits = fruits;
    component.searchTerm = 'banana';
    component.searchFruit();
    expect(component.filteredFruits.length).toEqual(1);
    expect(component.filteredFruits[0].name).toEqual('Banana');
  });

  it('should toggle nutritional info', () => {
    const fruit = {
      name: 'Apple',
      imageUrl: 'apple.jpeg',
      description: 'A tasty fruit',
    };
    component.toggleNutritionalInfo(fruit);
    expect(component.selectedFruit).toEqual(fruit);
    component.toggleNutritionalInfo(fruit);
    expect(component.selectedFruit).toBeNull();
  });
});
