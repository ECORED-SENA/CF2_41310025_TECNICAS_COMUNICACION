export default {
  global: {
    componenteFormativo: 'Estrategias de comunicación escrita y visual',
    descripcionCurso:
      'El componente formativo aborda la importancia de la comunicación escrita y no verbal en el ámbito empresarial. Se destacan los diversos tipos de documentos escritos, como cartas, informes, memorandos y actas, así como la argumentación eficaz. También se enfatiza la relevancia de entender y aplicar técnicas de comunicación para lograr un plan de comunicación exitoso.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Documentos escritos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Carta',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'El informe',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'El acta',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'La argumentación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Comunicación verbal y no verbal',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Comunicación no verbal',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Comunicación verbal',
            hash: 't_3_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
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
  complementario: [
    {
      tema: 'Documentos escritos',
      referencia:
        'Servicio de Planificación y Mejora de la Docencia (2018).Documentos escritos de calidad. [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ZU6tACNXVdI',
    },
    {
      tema: 'El informe',
      referencia:
        'LA PROFE MÓNICA (2022). CÓMO HACER UN INFORME - pasos y sugerencias - Edutuber La profe Mónica [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=hHMV9wMXZrg',
    },
    {
      tema: 'El acta',
      referencia:
        'Profesora·com (2022).  El Acta | Estructura, Función, Características, Tipos, Ejemplo.  [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Ab3gYuoJP0M',
    },
    {
      tema: 'La argumentación',
      referencia:
        'Universidad Sergio Arboleda.(2019).  Tipos de argumentos - Universidad Sergio Arboleda.  [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=YzC4X4qfE-w',
    },
    {
      tema: 'Comunicación verbal y no verbal',
      referencia:
        'Pont i Amenós, T. (2010). <em>La comunicación no verbal</em>: ( ed.). Editorial UOC.',
      tipo: 'Página 25 - 33',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/57716',
    },
    {
      tema: 'Comunicación no verbal',
      referencia:
        'Rulicki, S. (2014). <em>Comunicación no verbal: cómo la inteligencia emocional se expresa a través de los gestos:</em> ( ed.). Ediciones Granica.',
      tipo: 'Capítulo 1',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/66669',
    },
    {
      tema: 'Comunicación verbal',
      referencia:
        'Lifeder Educación (2021). ¿Qué es la COMUNICACIÓN VERBAL y cuáles son sus CARACTERÍSTICAS? Tipos, no verbal, ejemplos.  [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=q-FTO5tvh6Q',
    },
  ],
  glosario: [
    {
      termino: 'Argumentar',
      significado:
        'defender razonadamente una opinión con el fin de que el destinatario adopte la idea que el emisor sostiene.',
    },
    {
      termino: 'Asertividad',
      significado:
        'forma de expresión consciente, congruente, clara, directa y equilibrada, que consiste en comunicar ideas y sentimientos o defender derechos sin intención de herir o perjudicar a otro.',
    },
    {
      termino: 'Capacidad crítica',
      significado:
        'habilidad individual para obtener conclusiones de un texto o acciones particulares, reflexionando y adoptando una posición neutral, utilizando el conocimiento y la imaginación.',
    },
    {
      termino: 'Competencia',
      significado:
        'conjunto de conocimientos, procedimientos, valores y actitudes integrados en la acción, que permiten al individuo resolver problemas específicos de manera autónoma y flexible.',
    },
    {
      termino: 'Comunicación',
      significado:
        'proceso mediante el cual establecemos contacto con otras personas para transmitir o intercambiar mensajes.',
    },
    {
      termino: 'Diálogo',
      significado:
        'conversación entre dos o más personas, oral o escrita, mediante la cual se intercambia información y se comunican pensamientos, sentimientos y deseos.',
    },
    {
      termino: 'Liderazgo',
      significado:
        'conjunto de habilidades gerenciales o directivas que un individuo posee para influir en un grupo, logrando que trabaje con entusiasmo en el logro de metas y objetivos.',
    },
    {
      termino: 'Habilidades sociales',
      significado:
        'comportamientos eficaces que realiza el ser humano para facilitar la relación con los demás.',
    },
    {
      termino: 'Negociación',
      significado:
        'procedimiento de discusión establecido entre partes en conflicto con el objetivo de llegar a un acuerdo aceptable.',
    },
    {
      termino: 'Publicidad',
      significado:
        'forma de comunicación comercial que busca incrementar el consumo de un producto o servicio a través de los medios de comunicación y de técnicas de propaganda.',
    },
  ],
  referencias: [
    {
      referencia:
        'Álvarez, Alfredo. (2005). Escribir en español. Fondo de Cultura Económica. México: Porrúa.',
      link: '',
    },
    {
      referencia:
        'Cestero, A. (2004). “La comunicación no verbal”, en J. Sánchez Lobato e I. Santos Gargallo (eds.) Vademécum para la formación de profesores. Madrid: SGEL, pp. 593-612.',
      link: '',
    },
    {
      referencia:
        'Cestero, A..et al. (1998). Estudios de comunicación no verbal. Madrid: Edinumen.',
      link: '',
    },
    {
      referencia:
        'Coll, J., Gelabert, M., Y  Martinell, E. (1990). Diccionario de gestos y sus giros más usuales. Madrid: Edelsa.',
      link: '',
    },
    {
      referencia: 'Escandell, V. (2005). La comunicación. Madrid: Grados.',
      link: '',
    },
    {
      referencia:
        'García-Carpintero, M. (1996). Las palabras, las ideas y las cosas. Una presentación de la filosofía del lenguaje. Barcelona: Editorial Ariel.',
      link: '',
    },
    {
      referencia:
        'Gil Juárez, A. & Vitores González, A. (2011). <em>Comunicación y discurso:</em> ( ed.). Editorial UOC.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/33435',
    },
    {
      referencia:
        'Grau Olivares, M. Gordillo León, F. & López Pérez, R. M. (2016). <em>Comportamiento no verbal: más allá de la comunicación y el lenguaje:</em> ( ed.). Difusora Larousse - Ediciones Pirámide.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/115592',
    },
    {
      referencia:
        'Lucas Marín, A. (2012). <em>La nueva comunicación:</em> ( ed.). Editorial Trotta, S.A.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/34391',
    },
    {
      referencia:
        'Tobón, L. (2001). La lingüística del lenguaje. Estudios en torno a los procesos de significar y comunicar. Bogotá: Universidad Pedagógica Nacional.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Blanca Flor Tinoco Torres',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edwin Sneider Velandia Suarez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
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
