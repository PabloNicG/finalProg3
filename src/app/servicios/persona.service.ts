import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Persona } from '../entidades/persona';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({

    providedIn: 'root'
})

export class PersonaService {

    miUrl: string = 'http://localhost:9001/api/v1/persona/';
    //rutaActiva: any;
   

    constructor(private http: HttpClient) { }

    getAll(): Observable<Persona[]> {
        try{
        return this.http.get<Persona[]>(this.miUrl);
        }catch(excep){
            alert("No hay datos para mostrar");
            console.log(excep);
        }
    }

    getOne(id: number): Observable<Persona> {
        try{
            return this.http.get<Persona>(this.miUrl + id);
        }catch(excep){
            alert("No hay datos para mostrar");
            console.log(excep);
        }
        

    }

    delete(id: number): Observable<any> {
        
        try{
            return this.http.delete(this.miUrl + id);
        }catch(excep){
            alert("El campo seleccionado ha sido removido");
            console.log(excep);
        }
    }

    post(persona: Persona): Observable<Persona> {
        console.log("Servicio Post")
        

        try{
            return this.http.post<Persona>(this.miUrl, persona);
        }catch(excep){
            alert("Los datos ingresados no ha sido guardados");
            console.log(excep);
        }
    }

    put(id: number, persona: Persona): Observable<Persona> {
        
        try{
            return this.http.put<Persona>(this.miUrl + id, persona);
        }catch(excep){
            alert("El campo seleccionado no se ha podido modificar");
            console.log(excep);
        }
    }
}