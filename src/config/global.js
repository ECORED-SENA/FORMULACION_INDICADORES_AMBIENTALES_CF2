export default {
  global: {
    componenteFormativo: 'Indicadores ambientales',
    descripcionCurso:
      'En este componente, se abordan temas generales de indicadores ambientales, junto con las especificaciones técnicas para poder elaborarlos adecuadamente. ',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Indicadores ambientales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo:
              'Funciones y características de los indicadores ambientales',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Tipos de indicadores ambientales',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Objetivos, metas y variables ambientales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Normativa ambiental',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Hoja metodológica de indicadores',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Criterios de elegibilidad',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Marco ordenador de indicadores',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Olmos, A., Casallas, Y. y Castro, D. (2018). Guía para el Diseño y Construcción de Indicadores de Impactos Internalizables en el marco del Licenciamiento Ambiental en Colombia. Autoridad Nacional de Licencias Ambientales [ANLA].',
      link:
        'https://www.anla.gov.co/documentos/normativa/manuales_guias/30_11_2018_indicadores_de_impactos_internalizables_enviado.pdf',
    },
    {
      referencia:
        'Quiroga, R. (2009). Guía metodológica para desarrollar indicadores ambientales y de desarrollo sostenible en países de América Latina y el Caribe. CEPAL.',
      link:
        'https://repositorio.cepal.org/bitstream/handle/11362/5502/1/S0900307_es.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Desarrollo sostenible',
      significado:
        'Se entiende como el desarrollo que provee las necesidades del presente sin comprometer la capacidad de las generaciones futuras. ',
    },
    {
      termino: 'Elegibilidad',
      significado:
        'Es la capacidad de elegir un atributo por medio de la comparación entre ellos.',
    },
    {
      termino: 'Indicador ambiental',
      significado:
        'Es un parámetro o valor derivado de parámetros que proporciona información para describir el estado de un fenómeno, ambiente o área, con un significado que va más allá del directamente asociado con el valor del parámetro en sí mismo.',
    },
    {
      termino: 'Normativa ambiental',
      significado:
        'La normativa ambiental es el conjunto de objetivos, principios, criterios y orientaciones generales para la protección del medio ambiente. También se encarga de imponer los castigos pertinentes para las personas u organizaciones que no cumplan con estas disposiciones y que afecten el medio ambiente.',
    },
    {
      termino: 'Sustentabilidad',
      significado:
        'Se entiende como la habilidad de lograr una prosperidad económica en el tiempo sin dejar de proteger los sistemas naturales del planeta.',
    },
  ],
  complementario: [
    {
      texto:
        'Medina, E. [Universidad ISO]. (2020, 10 septiembre). INDICADORES AMBIENTALES ISO 14001 versión 2015 Sistema de Gestión Ambiental Qué son Tipos [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=WIY6RcJy9uE',
    },
    {
      texto:
        'AESA Infraestructura y Minería. (2021, 13 agosto). Indicadores Ambientales [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Z4_OUw-Vdz4',
    },
    {
      texto:
        'Soria, C. (2016, 14 febrero). QUÉ ES DESARROLLO SUSTENTABLE Y SOSTENIBLE [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=KqDbkrSXsx8',
    },
    {
      texto:
        'Olmos, A., Casallas, Y. y Castro, D. (2018). Guía para el Diseño y Construcción de Indicadores de Impactos Internalizables en el marco del Licenciamiento Ambiental en Colombia. Autoridad Nacional de Licencias Ambientales [ANLA]. ',
      tipo: 'PDF',
      link:
        'https://www.anla.gov.co/documentos/normativa/manuales_guias/30_11_2018_indicadores_de_impactos_internalizables_enviado.pdf',
    },
    {
      texto:
        'Quiroga, R. (2009). Guía metodológica para desarrollar indicadores ambientales y de desarrollo sostenible en países de América Latina y el Caribe. CEPAL.',
      tipo: 'PDF',
      link:
        'https://repositorio.cepal.org/bitstream/handle/11362/5502/1/S0900307_es.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Víctor Julián Ardila',
        cargo: 'Instructor',
        centro: 'Centro Agropecuario La Granja <br>Regional Tolima',
      },
      {
        nombre: 'Adriana López',
        cargo: 'Diseñadora Instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica <br>Regional Distrito Capital',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Revisora metodológica y pedagógica',
        centro: 'Centro de Diseño y Metrología <br>Regional Distrito Capital',
      },
      {
        nombre: 'Darío González',
        cargo: 'Corrección de estilo',
        centro: 'Centro Agropecuario La Granja <br>Regional Tolima',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios <br>Regional Tolima',
      },
      {
        nombre: 'Juan Carlos Tapias Rueda',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Andrea Paola Botello De la Rosa',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Andres Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: ' ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Magdi Khalifah Gamboa',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios <br>Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
