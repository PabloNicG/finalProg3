import {Base} from './base';
import {Domicilio}from'./domicilio';

export class Persona extends Base{

    nombre: string;
    apellido: string;
    edad: number;
    dni: number;
    domicilio: Domicilio;
}
