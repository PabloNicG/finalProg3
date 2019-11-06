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

    constructor(private servicio: PersonaService) { }

    ngOnInit() {
        this.getAll();
    }

    getAll(){

        this.servicio.getAll().subscribe((data)=>{
            this.personas = data;
            console.log(this.personas);
        });

    }

    delete(id:number){

        const opcion = confirm('¿Esta seguro que desea eliminar el registro?');
        if (opcion === true) {
            this.servicio.delete(id).subscribe((data)=> {
                console.log(data);
                alert('El registro ha sido eliminado');
                location.reload();
            });
        }
    };

}
