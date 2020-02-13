/*import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Persona } from 'src/app/entidades/persona';
import { PersonaService } from 'src/app/servicios/persona.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})


export class ModalComponent implements OnInit {



  //Variables 
  contacto: FormGroup;
  submitted = false;
  titulo = 'Crear Formulario';

  constructor(private service: PersonaService, private rutaActiva: ActivatedRoute, private router: Router, private formBuilder: FormBuilder) { }

  @ViewChild('btnClose',{ static: true }) btnClose: ElementRef;
  @Input() userUid: string;
  

  formularioCreado: FormGroup;
  esNuevo: boolean= true;
  usuarios: Array<Persona> = new Array<Persona>();
  posicionEditar: number = -1;

  ngOnInit() {

    this.crearFormulario();

  }

  crearFormulario(){
    this.formularioCreado= this.formBuilder.group({
      nombre:['', Validators.required],//para que sea requerido
      apellido: ['', Validators.required],//Que el apellido sea valido
      dni: ['', Validators.compose([
        Validators.required, Validators.minLength(8) //un ancho minimo de 8 caracteres
      ])]
    })
    }

    agregar(){
      this.usuarios.push(this.formularioCreado.value as Persona)
      this.formularioCreado.reset()
    }
    
    editar(){
    
      this.usuarios[this.posicionEditar].nombre=this.formularioCreado.value.nombre;
      this.usuarios[this.posicionEditar].apellido=this.formularioCreado.value.apellido;
      this.usuarios[this.posicionEditar].dni=this.formularioCreado.value.dni;
      this.formularioCreado.reset();
      this.esNuevo=true;
      this.posicionEditar=-1;
    
    }
    
    editarUsuario(posicion: number){
      this.formularioCreado.setValue({
        nombre: this.usuarios[posicion].nombre,
        apellido:this.usuarios[posicion].apellido,
        dni: this.usuarios[posicion].dni
      })
      this.posicionEditar= posicion;
      this.esNuevo=false;
    }
    
    eliminarUsuario(posicion: number){
    this.usuarios.splice(posicion,1)
    }
    
  // onSaveProf(profForm: FormGroup): void{
  //   //nuevo libro
  //  //
  //   console.log('profForm.value.id', profForm.value.id);
  //   if(profForm.value.id === null){
  //     //nuevo libro
  //     profForm.value.userUid = this.userUid; //cuando
  //     this.service.post(profForm.value);
  //   }else{
  //     //update  
      
  //   }
    
  //   profForm.reset();//me permite limpiar el formulario
    
  //   this.btnClose.nativeElement.click();
  // }



}
*/