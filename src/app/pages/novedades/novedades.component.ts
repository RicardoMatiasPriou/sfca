import { Component, HostListener, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-novedades',
  templateUrl: './novedades.component.html',
  styleUrls: ['./novedades.component.css']
})
export class NovedadesComponent implements OnInit {

  constructor( private titulo:Title) {
    titulo.setTitle('Novedades');
   }

  ngOnInit(): void {
    scroll(0, 0)

  }
  navbarfixed:boolean = false;

  @HostListener('window:scroll',['$event']) onscroll(){
    if(window.scrollY > 100)
    {
      this.navbarfixed = true;
    }
    else
    {
      this.navbarfixed = false;
    }
  }

}
