import { Component, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DronService } from '../../services/dron-service';
import { Dron } from '../../models/drones';

@Component({
  selector: 'app-creacion-dron',
  imports: [FormsModule],
  templateUrl: './creacion-dron.html',
  styleUrl: './creacion-dron.css',
})
export class CreacionDron {

  private servicioDron = inject(DronService);

  @Input() listaDrones: Dron[] = []; // Recibe los drones del padre
  @Input() soloActualizar: boolean = false;

  
  modoEdicion = false;

  nuevoDron: Dron = {
    modelo: '',
    serie: '',
    tipo: '',
    b1: '',
    b2: '',
    b3: '',
    peso: 0,
    automina: 0,
    observaciones: '',
    estado:true,
  };

  ngOnInit() {
    //Carga los drones existentes para el selector
    this.servicioDron.getDrones().subscribe(data => this.listaDrones = data);
  }

  cargarDronParaEditar(event: any) {
    const id = event.target.value;
    const seleccionado = this.listaDrones.find(d => d.id === id);
    if (seleccionado) {
      this.nuevoDron = { ...seleccionado };
      this.modoEdicion = true;
    }
  }

  guardarDron() {
    if (this.modoEdicion && this.nuevoDron.id) {
      // Llamamos al método PUT/PATCH del servicio
      this.servicioDron.updateDron(this.nuevoDron.id, this.nuevoDron).subscribe(() => {
        alert('Dron actualizado con éxito');
        this.limpiar();
      });
    } else {
      // Lógica de post normal
      this.servicioDron.postDrones(this.nuevoDron).subscribe(() => {
        alert('Dron creado con éxito');
        this.limpiar();
      });
    }
  }

  limpiar() {
    this.nuevoDron = {
      modelo: '',
      serie: '',
      tipo: '',
      b1: '',
      b2: '',
      b3: '',
      peso: 0,
      automina: 0,
      observaciones: '',
    };
    this.modoEdicion = false;
  };

}
