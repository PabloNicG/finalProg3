/*import { from } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/entidades/persona';
import { PersonaService } from 'src/app/servicios/persona.service';
import { ActivatedRoute, Router } from '@angular/router';

//import { NumberFormatStyle } from '@angular/common';


@Component({
    selector: 'app-elemento',
    templateUrl: './elemento.component.html',
    styleUrls: ['./elemento.component.css']
})

export class ElementoComponent implements OnInit {
    
    persona: Persona = {
        id: 0,
        nombre: '',
        apellido: '',
        dni: 0,
    }

    constructor(private service: PersonaService, private rutaActiva: ActivatedRoute, private router: Router) {

    }

    ngOnInit() {
        this.rutaActiva.params.subscribe(data => {

            if (data['id'] != '0') {
                this.getOne(data['id']);
            }
        });
    }

    getOne(id: number){

        this.service.getOne(id).subscribe(data => {
            this.persona = data;
    
        })
    }

    save() {
        this.rutaActiva.params.subscribe(data => {
            
            if (data['id'] === '0') {
                this.add();
            } else {

                this.update(data['id']);
            }
        });

    }

    add() {

        this.service.post(this.persona).subscribe(data => {
            this.persona = data;
           //  this.router.navigate(['']);

        });
    }

    update(id:number){
        this.service.put(id,this.persona).subscribe(data =>{
        this.persona = data;
       // this.router.navigate(['']);

        })


    }

}
*/