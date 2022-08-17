import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  constructor( private route:ActivatedRoute) { }
  data={
    id:"",
    titulo:"",
    description:"",
    items:[""],
    img:"h"    }

     datos =[
      {
      id:"Mineria",
      titulo:"Minería",
      description:"",
      items:["Asesoramiento a empresas en solicitudes y mantenimiento de propiedades mineras, contratos mineros, obtención de permisos y habilitaciones en general.","Ley de Inversiones Mineras y sus beneficios, trámites ante Secretaría de Minería de la Nación, Dirección General de Rentas y Dirección General de Recursos Tributarios Energéticos y Mineros.","Due diligence de empresas y propiedades mineras. Opiniones legales.","Asesoramiento a empresas en licitaciones públicas de minería en las Provincias de Salta y Jujuy."],
      img:"https://res.cloudinary.com/ricardo3874/image/upload/q_84/v1658979984/Abogados%20sfc/21_h0gclu.jpg"
    },{
      id:"Hidrocarburos",
      titulo:"Hidrocarburos",
      description:"",
      items:["Asesoramiento a empresas en licitaciones públicas y mantenimiento de áreas de exploración y explotación de hidrocarburos, contratos, obtención de permisos y habilitaciones en la Provincia de Salta.","Trámites ante la Secretaría de Minería y Energía de la Provincia de Salta y ante la Dirección General de Recursos Energéticos y Mineros."],
      img:"https://res.cloudinary.com/ricardo3874/image/upload/q_84/v1658980985/depositphotos_112418502-stock-photo-oil-pump-jack_hoswzl.webp"
    },
    {
      id:"Medioambiente",
      titulo:"Medioambiente-Recursos Hídricos",
      description:"",
      items:["Asesoramiento en el cumplimiento de normativa ambiental. Inscripciones ante el Registro Nacional de Residuos Peligrosos, Registro Nacional de Precursores Químicos, Registro Nacional de Armas, obtención de permisos nacionales, provinciales y municipales requeridos para la construcción y desarrollo de proyectos mineros e hidrocarburíferos.","Solicitud de permiso y concesión de uso de aguas."],
      img:"https://res.cloudinary.com/ricardo3874/image/upload/q_84/v1658979972/Abogados%20sfc/C_hnhrk3.jpg"    },
      {
        id:"Corporativo",
        titulo:"Corporativo",
        description:"",
        items:["Asesoramiento jurídico a empresas en asuntos corporativos. Registración de sociedades extranjeras, constitución y registración de sociedades locales, joint ventures, mantenimiento de sociedades en buen estado legal.","Fusiones y adquisiciones (M&A). Operaciones de inversión, asociación y desinversión corporativa, desde el análisis de riesgos (due diligence), hasta la estructuración jurídica e impositiva, negociación y cierre de contratos.","Contratos civiles, comerciales y laborales.","Asesoramos a nuestros clientes en la resolución de controversias originadas en sus negocios, entre otros, en procesos de cumplimiento de contratos, daños generales, responsabilidad por productos y servicios, acciones societarias, seguros. Los representamos en todas las instancias judiciales y administrativas."],
        img:"https://res.cloudinary.com/ricardo3874/image/upload/q_84/v1659119962/Abogados%20sfc/pexels-pixabay-159832_pl6rye.jpg"    }]
  ngOnInit(): void {
    scroll(0, 0)
    this.route.paramMap.subscribe((params: ParamMap) => {
      scroll(0, 0)
      this.datos.forEach(element => {
        if(element.id == params.get('id')){
          this.data.titulo = element.titulo;
          this.data.description = element.description;
          this.data.items = element.items;
          this.data.img = element.img;
        }
      })
    })





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
