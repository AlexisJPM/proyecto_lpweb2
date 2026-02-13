import { Component, inject, Input } from '@angular/core';
import { UsuarioService } from '../../services/usuario-service';
import { Usuario } from '../../models/usuario';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hero',
  imports: [FormsModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {

  //la informacion que recibe del componente padre
  @Input() titulo!: string;
  @Input() textRuta!: string;
  @Input() textBotton!: string;

  private servicioUsuario = inject(UsuarioService);

  nuevoUsuario: Usuario = {
    name: '',
    email: '',
    phone: '',
  };

  //variable para controlar la etiqueta del boton registro
  //ngOnInit() {
  // }

  //metodo guardar usuario
  guardarUsuario() {
    this.servicioUsuario.postUsuarios(this.nuevoUsuario).subscribe(() => {
      console.log('Usuario guardado con éxito');
      this.resetear();
    });
  };

  ///metodo para limpiuar el formulario
  resetear() {
    this.nuevoUsuario = { name: '', email: '', phone: '' };
  };


}
