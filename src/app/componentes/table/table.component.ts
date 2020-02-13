import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from "@angular/core";
import { Persona } from "src/app/entidades/persona";
import { PersonaService } from "src/app/servicios/persona.service";
import { Router } from "@angular/router";

@Component({
    selector: "app-table",
    templateUrl: "./table.component.html",
    styleUrls: ["./table.component.css"]
})
export class TableComponent implements OnInit {
    personas: Persona[] = [];
    id: number;
    update: false;
    formReact: FormGroup;

    constructor(private service: PersonaService, private router: Router, private formBuilder: FormBuilder) { }


    persona: Persona = {
        id: 0,
        nombre: '',
        apellido: '',
        dni: 0
      };



    ngOnInit() {
        this.getAll();

        if(!this.update){this.validatorForm();}
    }

    creationFormUpdate(persona: Persona){

        this.update = true;
        this.formReact.setValue({nombre: persona.nombre, apellido: persona.apellido, dni: persona.dni});//datos que necesito para el form a editar
        this.id = persona.id; //llamo al id de persona

    }

    validatorForm(){
        this.formReact = this.formBuilder.group({nombre: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
        /*Para validar el nombre se necesita el formuReact(FormGroup) que depende del builder, dentro de este se arma el group o grupo de controles de estado
          para nombre voy a necesitar si o si que sea ingresado el campo y como minimo 4 letras de nombre*/
        apellido: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
        //Para apellido exijo lo mismo que para nombre
        dni: ['', Validators.compose([Validators.required, Validators.maxLength(8) ,Validators.minLength(8), Validators.pattern('^[0-9]+$')])]
        //Para el dni requiero un maximo de 8 digitos y un minimo de la misma cantidad (dni Argentina) y con el pattern (control de marcado)
    });
}


    getAll(){

        this.service.getAll().subscribe((data)=>{
            this.personas.length = 0;
            data.forEach((res)=>{ this.personas.push(res)});
            console.log(this.personas); //traza
        });

    }

    deletePers(id:number){

        const opcion = confirm('¿Esta seguro que desea eliminar el registro?');
        if (opcion === true) {
            this.service.delete(id).subscribe((data)=> {
                console.log(data);
                alert('El registro ha sido eliminado');
                //location.reload();
                this.getAll();
            });
        }
    }

    agregarPers (id: number){
        //this.router.navigate();
        //this.router.navigate(['persona/'+ id]);

        
    };

    updatePers(id:number){

        this.router.navigate(['persona/'+id]);
    };

}
