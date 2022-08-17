import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponente implements OnInit {
  constructor(private route: ActivatedRoute) {}
  data = {
    id: '',
    nombre: '',
    subnombre: '',
    correo: '',
    img: '',
    EXPERIENCIAS_ACADEMICAS: [{ titulo: '', subtitulo: '', descripcion: [''] }],
    EXPERIENCIAS_LABORAL: [{ titulo: '', subtitulo: '', descripcion: [''] }],
    HABILIDADES: [
      { titulo: '', subtitulo: '', descripcion: [{ text: '', link: '' }] },
    ],
  };

  datos = [
    {
      id: 'Agustín',
      nombre: 'AGUSTÍN SARAVIA FRÍAS',
      subnombre: 'SOCIO',
      img: 'https://res.cloudinary.com/ricardo3874/image/upload/v1659455823/Abogados%20sfc/DSC02497_fuah3p.jpg',
      correo: 'agustin@sfcabogados.com.ar',
      EXPERIENCIAS_ACADEMICAS: [
        {
          titulo:
            'Master of Laws (con distinción). University of Dundee, Center for Energy, Petroleum and Mineral Law & Policy, Dundee, Escocia, United Kingdom.',
          subtitulo: 'Especialización en Derecho Minero.',
          descripcion: [
            'Tesis: “Towards a Sustainable Mine Closure Regime for Transboundry Deposits”.',
            'Enero 2007 – Enero 2008',
          ],
        },
        {
          titulo: 'Universidad Católica Argentina, Buenos Aires, Argentina.',
          subtitulo: 'Curso de Postgrado, Derecho Empresario Económico.',
          descripcion: ['Mayo 2003 – Agosto 2003'],
        },
        {
          titulo: 'Universidad de Buenos Aires, Argentina. Abogado.',
          subtitulo: '',
          descripcion: ['1997 – 2002'],
        },
      ],
      EXPERIENCIAS_LABORAL: [
        {
          titulo: 'Socio de Saravia Frías & Cornejo Abogados.',
          subtitulo: '',
          descripcion: [
            'Asesor de empresas nacionales e internacionales en materias vinculadas al derecho minero, petrolero, ambiental, recursos naturales en general y administrativo. Desde 2.006 hasta el presente',
          ],
        },
        {
          titulo: 'Marval O’Farrell & Mairal, Buenos Aires, Argentina.',
          subtitulo: '',
          descripcion: [
            'Abogado en el área de banking desde Abril de 2003 a Julio de 2006. Participación en reestructuraciones de deuda, emisiones de obligaciones negociables, M&A. Asesoramiento societario a empresas.',
            'Febrero 2002 – Julio 2006',
          ],
        },
        {
          titulo:
            'Secretaría de la Presidencia de la Nación, Buenos Aires, Argentina.',
          subtitulo: '',
          descripcion: [
            'Asistente del Director de Acción Política.',
            'Febrero 2000 – Diciembre de 2001',
          ],
        },
      ],
      HABILIDADES: [
        {
          titulo:
            '"V Seminario Internacional de Litio en la Región de Sudamerica”',
          subtitulo: ' Expositor. 7/04 (2016). ',
          descripcion: [{ text: 'Jujuy, Argentina.', link: '' }],
        },
        {
          titulo: 'Conferencia:',
          subtitulo:
            '“Reunión del Grupo de Expertos Senior sobre el Desarrollo Sustentable del Litio en América Latina: Asuntos Emergentes y Oportunidades”.',
          descripcion: [
            { text: 'Panelista invitado, noviembre 10 -11 (2010),', link: '' },
            { text: 'Santiago de Chile, Chile.', link: '' },
          ],
        },
        {
          titulo: 'Publicaciones',
          subtitulo: 'en el CEPMLP Anual Review (CAR):',
          descripcion: [
            {
              text: 'Transboundary Mine Closure: Integration and Complementation Treaty between Argentina and Chile.',
              link: 'https://www.dundee.ac.uk/cepmlp/gateway/index.php?news=29292',
            },
            {
              text: 'Is the Argentina Legal Mining Framework Capable enough to Attract Foreign Investments? Is There a Need to Amend The Current Mining Legislation?',
              link: 'https://www.dundee.ac.uk/cepmlp/gateway/index.php?news=29299',
            },
            {
              text: 'Libro: “Marco Normativo Minero NOA Argentino” 2021, (edición particular - Fundación Hanaq).',
              link: '',
            },
          ],
        },
        {
          titulo: 'Beca:',
          subtitulo:
            'Rio Tinto/ Foreign and Commonwealth Office, para completar un LL.M en el Center for Energy, Petroleum and Mineral Law & Policy de la Universidad de Dundee, Escocia.',
          descripcion: [],
        },
      ],
    },
    {
      id: 'Santiago',
      nombre: 'Santiago Saravia Frias',
      subnombre: 'SOCIO',
      correo: 'santiago@sfcabogados.com.ar',
      img: 'https://res.cloudinary.com/ricardo3874/image/upload/v1658979596/Abogados%20sfc/DSC02503_z96c7g.jpg',
      EXPERIENCIAS_ACADEMICAS: [
        {
          titulo:
            'Dundee University, Centre for Petroleum, Mineral, Law and Policy -Scotland, UK.',
          subtitulo: ' LL.M Mineral Law and Policy.',
          descripcion: [
            'Trabajo de Graduación: Rio Tinto internship report.',
            'Octubre 1998 – Octubre 1999',
          ],
        },
        {
          titulo: 'Universidad Austral, Buenos Aires, Argentina.',
          subtitulo: 'Maestría en Derecho Administrativo.',
          descripcion: [
            'Tesina: “Federalismo y Región”.',
            'Marzo 1995 – Diciembre 1997',
          ],
        },
        {
          titulo: 'Universidad de Buenos Aires, Argentina.',
          subtitulo: ' Abogado.',
          descripcion: ['Marzo 1990 – Abril 1994'],
        },
      ],
      EXPERIENCIAS_LABORAL: [
        {
          titulo: 'Socio de Saravia Frías & Cornejo Abogados.',
          subtitulo: '',
          descripcion: [
            'Asesor de empresas nacionales e internacionales en materias vinculadas al derecho minero, petrolero, ambiental, recursos naturales en general y administrativo. Desde Marzo 2.003 hasta el presente',
          ],
        },
        {
          titulo: 'Estudio Jurídico Brons & Salas, Buenos Aires, Argentina.',
          subtitulo: '',
          descripcion: [
            'Asesor de empresas nacionales e internacionales en materias vinculadas al derecho administrativo, aduanero y minero. Julio 2000 – Marzo 2003',
          ],
        },
        {
          titulo:
            'Secretaría General de la Presidencia de la Nación, Buenos Aires, Argentina.',
          subtitulo: '',
          descripcion: [
            'Director a cargo de la Dirección General de Acción Política. Mayo 2000 – Julio 2000',
          ],
        },
        {
          titulo:
            'Ministerio de Infraestructura de la Nación, Buenos Aires, Argentina.',
          subtitulo: '',
          descripcion: [
            'Coordinador a cargo del departamento jurídico del ENOHSA (Ente Nacional de Obras Hídricas de Saneamiento). Diciembre 1999 – Mayo 2000',
          ],
        },
        {
          titulo: 'Internship programme at Rio Tinto plc., London, England.',
          subtitulo: '',
          descripcion: [
            'Asesor jurídico de las operaciones de la empresa en Latinoamérica. Julio 1999 – Agosto 1999.  (seleccionado entre los becarios de Rio Tinto)',
          ],
        },
        {
          titulo: 'Gobierno Autónomo de la Ciudad de Buenos Aires, Argentina.',
          subtitulo: '',
          descripcion: [
            'Asesor jurídico del Secretario de Obras y Servicios Públicos en temas vinculados a licitaciones y servicios públicos. Marzo 1998 – Octubre 1998',
          ],
        },
        {
          titulo: 'Reforma Constitucional de la Provincia de Salta, Argentina.',
          subtitulo: '',
          descripcion: [
            'Asesor jurídico en la Comisión de Recursos Naturales y en la Comisión de Finanzas y Organismos de Control. Diciembre 1997 – Marzo 1998',
          ],
        },
        {
          titulo: 'Instituto Nacional de Reaseguros, Buenos Aires, Argentina.',
          subtitulo: '',
          descripcion: [
            'Asesor jurídico del Interventor. Agosto 1996 – Noviembre 1997',
          ],
        },
        {
          titulo: 'Senado de la Nación, Buenos Aires, Argentina.',
          subtitulo: '',
          descripcion: [
            'Asesor del Senador Nacional Fernando de la Rúa. Marzo 1993 – Febrero 1995',
          ],
        },

      ],
      HABILIDADES: [
        {
          titulo: 'Publicación',
          subtitulo:
            ' en el CPMLP Journal de la Universidad de Dundee, Escocia:',
          descripcion: [
            {
              text: '“Are the penalties regulated in the Argentinean Environmental Protection Law enough for discouraging mining companies from carrying out environmental damages activities?”',
              link: '',
            },
            {
              text: '“Responsabilidad del Estado por Error Judicial y Deficiente Administración de Justicia” en el libro: “Estudio sobre la Responsabilidad del Estado en Argentina, Colombia y Mexico”, (ed Universidad Autónoma de Mexico – 2.007).',
              link: 'http://ww7.bibliojuridica.org/',
            },
            {
              text: 'Libro: “Marco Normativo Minero NOA Argentino” 2021, (edición particular - Fundación Hanaq).',
              link: '',
            },
          ],
        },
        {
          titulo: 'Beca:',
          subtitulo:
            ' Rio Tinto/ Foreign and Commonwealth Office, para completar un LL.M en el  CPMLP de la Universidad de Dundee, Escocia.',
          descripcion: [{ text: '', link: '' }],
        },
        {
          titulo: 'Actividades académicas:',
          subtitulo:
            'Profesor adjunto de la materia Derecho de los Recursos Naturales en la Universidad Católica de Salta.Inscripto en el Registro de Consultores en Estudio de Impacto Ambiental y Social dela Provincia de Salta. Nro de Registro 247.LEAD PARAGRAPH.',
          descripcion: [{ text: '', link: '' }],
        },
        { titulo: 'Distinciones:',
        subtitulo: 'Pasantía de tres meses en el sector legal de la empresa Rio Tinto, en la sede central de Londres, al haber obtenido el mejor promedio entre sus becarios en el CPMLP de la Universidad de Dundee.',
        descripcion: []
      },
      ],
    },
    {
      id: 'Consuelo',
      nombre: 'Consuelo Saravia Frias',
      subnombre: 'Asociada',
      correo: 'consuelo@sfcabogados.com.ar',
      img: 'https://res.cloudinary.com/ricardo3874/image/upload/v1658979622/Abogados%20sfc/DSC02475_ptbuea.jpg',
      EXPERIENCIAS_ACADEMICAS: [
        {
          titulo: 'Universidad de Buenos Aires - Facultad de Derecho Ambiental',
          subtitulo: '',
          descripcion: [
            'Abril 2020 - Septiembre 2020',
          ],
        },
        {
          titulo: 'Universidad Austral, Buenos Aires, Argentina.',
          subtitulo: '',
          descripcion: [
            'Universidad de Buenos Aires - Facultad de Derecho Ambiental ',
            'Abril 2020 - Septiembre 2020',
            'Código Civil y Comercial y su impacto en el Derecho Empresario.',
            'Septiembre 2015 – Diciembre 2015.',
          ],
        },
        {
          titulo:
            'Universidad Católica de Salta – Fundación para el Análisis y la Reflexión de la Argentina.',
          subtitulo: '',
          descripcion: [
            'Curso de Postgrado – Derecho Minero, Regulación y Gestión Minera.',
            'Octubre 2012 – Abril 2013.',
          ],
        },
        {
          titulo: 'Universidad de Buenos Aires, Argentina.',
          subtitulo: '',
          descripcion: ['Abogado.', 'Marzo 2005 a Agosto 2011.'],
        },
      ],
      EXPERIENCIAS_LABORAL: [
        {
          titulo: 'Asociada a Saravia Frías & Cornejo Abogados.',
          subtitulo: '',
          descripcion: [
            'Asesor de empresas nacionales e internacionales en materias vinculadas al derecho minero, petrolero, ambiental, recursos naturales en general y administrativo. Desde Septiembre 2011 hasta el presente.',
          ],
        },
        {
          titulo:
            'Estudio Saravia Frías | Mazzinghi Abogados, Buenos Aires, Argentina.',
          subtitulo: '',
          descripcion: [
            'Pasante en el área de derecho corporativo y minero. Marzo 2010 – Agosto 2011.',
          ],
        },
        {
          titulo: 'Freelance, Buenos Aires, Argentina.',
          subtitulo: '',
          descripcion: [
            'Trámites en el Registro de la Propiedad Inmueble, Inspección General de Justicia, Tribunales Judiciales Comerciales y Civiles, Instituto Nacional de la Propiedad Industrial). Marzo 2009 – Marzo 2010.',
          ],
        },
        {
          titulo: 'Estudio De Dios & Goyena Abogados, Buenos Aires, Argentina.',
          subtitulo: '',
          descripcion: ['Pasante sector legal. Marzo 2008 – Diciembre 2008.'],
        },
        {
          titulo: 'Sociedad “Grupo Hatch”, Buenos Aires, Argentina.',
          subtitulo: '',
          descripcion: ['Asistente. Julio 2005 – Diciembre 2005.'],
        },
      ],
      HABILIDADES: [
        {
          titulo: 'Publicación',
          subtitulo: '',
          descripcion: [
            {
              text: 'Libro: “Marco Normativo Minero NOA Argentino” 2021, (edición particular - Fundación Hanaq).',
              link: '',
            },
          ],
        },
      ],
    },
    {
      id: 'Diego',
      nombre: 'Diego Juncosa Cornejo',
      subnombre: 'Asociado',
      correo: 'diego@sfcabogados.com.ar',
      img: 'https://res.cloudinary.com/ricardo3874/image/upload/v1658979582/Abogados%20sfc/DSC02514_jbj4om.jpg',
      EXPERIENCIAS_ACADEMICAS: [
        {
          titulo: 'Seminario de Defensa del Consumidor.',
          subtitulo: 'Universidad Católica de Salta.',
          descripcion: ['2015'],
        },
        {
          titulo: 'Curso de Derecho Probatorio.',
          subtitulo: 'Universidad de Buenos Aires.',
          descripcion: ['Julio 2014'],
        },
        {
          titulo: 'Seminario de Defensa del Consumidor.',
          subtitulo: 'Colegio de Abogados de Salta',
          descripcion: ['2013'],
        },
        {
          titulo: 'Diplomatura en Derecho del Trabajo',
          subtitulo: '',
          descripcion: ['Salta 2020'],
        },
      ],
      EXPERIENCIAS_LABORAL: [
        {
          titulo: 'Asociado a Saravia Frías & Cornejo Abogados.',
          subtitulo: '',
          descripcion: [
            'Asesoramiento y representación de empresas nacionales e internacionales en materias vinculadas al derecho minero, petrolero, ambiental, recursos naturales en general y administrativo.',
          ],
        },
        {
          titulo: 'Estudio Torino & Pereyra Iraola, Salta, Argentina. ',
          subtitulo: '',
          descripcion: ['Abogado Junior.', 'Marzo 2012- Enero 2018'],
        },
        {
          titulo: 'Fundación Microjusticia Argentina .',
          subtitulo: '',
          descripcion: ['Asesoramiento legal.', 'Diciembre 2015 – 2017'],
        },
      ],
      HABILIDADES: [
        {
          titulo: 'Publicación',
          subtitulo: '',
          descripcion: [
            {
              text: 'Libro: “Marco Normativo Minero NOA Argentino” 2021, (edición particular - Fundación Hanaq).',
              link: '',
            },
          ],
        },
      ],
    },
    {
      id: 'Lucas',
      nombre: 'Lucas Cornejo Fossati',
      subnombre: 'SOCIO',
      correo: 'lucas@sfcabogados.com.ar',
      img: 'https://res.cloudinary.com/ricardo3874/image/upload/v1658979589/Abogados%20sfc/DSC02521_i0tewx.jpg',
      EXPERIENCIAS_ACADEMICAS: [
        {
          titulo: 'Universidad Nacional de Tucumán, Argentina.',
          subtitulo: '',
          descripcion: ['Maestría en Derecho Procesal.', '2006 – 2009'],
        },
        {
          titulo: 'Universidad de Buenos Aires, Argentina. ',
          subtitulo: '',
          descripcion: ['Abogado.', '2003'],
        },
      ],
      EXPERIENCIAS_LABORAL: [
        {
          titulo: 'Socio de Saravia Frías & Cornejo Abogados.',
          subtitulo: '',
          descripcion: [
            'Áreas Civil, Comercial y Laboral. Desde 2008 al presente',
          ],
        },
        {
          titulo:
            'Estudio Jurídico “Cornejo Figueroa, Florentín”, Salta, Argentina.',
          subtitulo: '',
          descripcion: ['Abogado áreas Civil, Comercial, Laboral. 2004 – 2008'],
        },
        {
          titulo:
            'Estudio Jurídico “Bulló – Tassi – Estebenet – Lipera – Torassa & Asociados”, Buenos Aires, Argentina.',
          subtitulo: '',
          descripcion: ['Abogado área Seguros. 2003 – 2004'],
        },
        {
          titulo:
            'Juzgado Nacional en lo Comercial Nº 2 – Secretaría Nº 4 – Capital Federal, a cargo del Dr. Juan Roberto Garibotto.',
          subtitulo: '',
          descripcion: ['Meritorio. 2001 – 2003'],
        },
      ],
      HABILIDADES: [
        {
          titulo: 'Curso: ',
          subtitulo:
            '“Seminario Taller Teórico Práctico de Derecho Procesal Civil y Comercial” a cargo de los Dres. Roberto Loutayf Ranea – Nelda Villada Valdez y Viviana María Acuña de Salim.',
          descripcion: [{ text: '2005', link: '' }],
        },
        {
          titulo: 'Beca: ',
          subtitulo:
            'Becario de la Fundación Universitaria Río de la Plata (F.U.R.P.) e integrante del grupo becado que realizó el programa Senior en Canadá (www.furp.org.ar).-',
          descripcion: [{ text: '2000-2001.', link: '' }],
        },
        {
          titulo: 'Actividades académicas:',
          subtitulo:
            'Universidad de Buenos Aires – Ayudante de Cátedra en “Recurso Extraordinario Federal” a cargo del Dr. Néstor Pedro Sagües. 2002',
          descripcion: [
            {
              text: ' “Jornadas de Reforma Política” – Facultad de Derecho – Universidad de Buenos Aires. 2001.',
              link: '',
            },
          ],
        },
        {
          titulo: 'Publicación',
          subtitulo: '',
          descripcion: [
            {
              text: 'Libro: “Marco Normativo Minero NOA Argentino” 2021, (edición particular - Fundación Hanaq).',
              link: '',
            },
          ],
        },
      ],
    },
    {
      id: 'Elisea',
      nombre: 'Elisea Agolio',
      subnombre: 'PARALEGAL',
      correo: 'elisea@sfcabogados.com.ar',
      img: 'https://res.cloudinary.com/ricardo3874/image/upload/v1658979616/Abogados%20sfc/DSC02485_ttxqk2.jpg',
      EXPERIENCIAS_ACADEMICAS: [
        {
          titulo: 'Universidad Católica de Salta, Argentina.',
          subtitulo: 'Abogacía. ',
          descripcion: ['Marzo 2018 hasta el presente'],
        },
        {
          titulo: 'Universidad Minera y Tecnológica de China, Xuxhou, China.',
          subtitulo: 'Curso de Economía China, y Energías Renovables. ',
          descripcion: ['Junio 2022'],
        },
        {
          titulo: 'Universidad Católica de Salta, Argentina.',
          subtitulo:
            'Proyecto de Investigación “Problemáticas ligadas a los aspectos geológicos-mineros, legales y ambientales de los proyectos de litio en salmuera”.',
          descripcion: ['Mayo 2022'],
        },
      ],
      EXPERIENCIAS_LABORAL: [
        {
          titulo: 'Estudio Saravia Frías & Cornejo Abogados.',
          subtitulo: '',
          descripcion: ['Enero 2022 hasta el presente'],
        },
      ],
      HABILIDADES: [],
    },
  ];
  ngOnInit(): void {
    scroll(0, 0);
    this.route.paramMap.subscribe((params: ParamMap) => {
      scroll(0, 0);
      this.datos.forEach((element) => {
        if (element.id == params.get('id')) {
          this.data.nombre = element.nombre;
          this.data.subnombre = element.subnombre;
          this.data.correo = element.correo;
          this.data.EXPERIENCIAS_ACADEMICAS = element.EXPERIENCIAS_ACADEMICAS;
          this.data.EXPERIENCIAS_LABORAL = element.EXPERIENCIAS_LABORAL;
          this.data.HABILIDADES = element.HABILIDADES;
          this.data.img = element.img;
        }
      });
    });
  }
  navbarfixed: boolean = false;

  @HostListener('window:scroll', ['$event']) onscroll() {
    if (window.scrollY > 100) {
      this.navbarfixed = true;
    } else {
      this.navbarfixed = false;
    }
  }
}
