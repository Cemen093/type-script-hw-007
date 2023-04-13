import { Component } from '@angular/core';

@Component({
  selector: 'app-braking-distance-calculator',
  templateUrl: './braking-distance-calculator.component.html',
  styleUrls: ['./braking-distance-calculator.component.css']
})
export class BrakingDistanceCalculatorComponent {
  starting_speed: number = 0; // начальная скорость
  drag_coefficient: number = 0; // коэффициент торможения
  adhesion_coefficient: number = 0; // коофициент сцепления
  braking_distances: number = 0; // тормозной путь

  calculateBrakingDistance() {
    this.braking_distances = Math.round(((this.drag_coefficient) / (254*this.adhesion_coefficient) * Math.pow(this.starting_speed, 2)) * 100) / 100
  }
}

