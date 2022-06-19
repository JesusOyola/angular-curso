import { Component} from '@angular/core';
import { Personaje } from "../interfaces/dbz.interface"
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent {


  nuevo: Personaje = {
    nombre: "Maestro Roshi",
    poder: 1000
  }


  constructor() {}

  
  
  
  
  
}
