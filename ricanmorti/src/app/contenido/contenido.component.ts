import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent implements OnInit {

  articulos:any = null;
  arrayArticulos:Array<any> = new Array();
  arrayPersonajes:Array<any> = new Array();

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://rickandmortyapi.com/api/character/').subscribe(
      result => {
        this.articulos = result;
        // this.arrayArticulos = this.arrayArticulos.data;
        this.arrayArticulos = Object.keys(this.articulos).map(key => ({type: key, value: this.articulos[key]}));
        this.arrayPersonajes = this.arrayArticulos[1].value;
        console.log("Arraypersonajes: " + this.arrayPersonajes);
        console.log(this.arrayArticulos[1].value[0].name);
        //console.log(this.articulos);
        //console.log(this.articulos);
      },
      error => {
        console.log('problemas');
      }

    )
  }

  // Hace el GET y consigue el array de datos
  conseguirDatosImagenes(){
    // Pilla seis objetos al azar y pinta su contenido

  }

  // Hace un math.random y pinta según el random
  pintarDatosImagenes(){

  }

}
