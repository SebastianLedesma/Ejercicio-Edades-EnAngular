import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EjercicioEdades';

  edadUno: number = 0;
  edadDos: number = 0;
  promedio: number = 0;
  sumaEdades: number = 0;

  calcular(): void {
    this.sumaEdades = this.edadUno + this.edadDos;
    this.promedio = (this.edadUno + this.edadDos) / 2;
  }

  borrar():void{
    this.edadUno=0;
    this.edadDos=0;
    this.promedio=0;
    this.sumaEdades=0;
  }

}
