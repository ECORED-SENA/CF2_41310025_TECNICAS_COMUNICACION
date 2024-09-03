<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Documentos escritos
    
    .fondo-personalizado-1.top-1.f1
      .fondo-personalizado-1__contenido.pb-5
        .row.align-items-center.mb-4
          .col-lg-5
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/4.png",style="max-width: 505px;")
          .col-lg-7
            p.mb-0 Los documentos escritos son el resultado de la comunicación realizada en papel o mediante una computadora. Es uno de los métodos más empleados para entablar una comunicación, en el cual #[span.texto-p-1 el emisor elabora diversos tipos de textos para transmitir su mensaje de la mejor manera posible], con el objetivo de que lleguen al mayor número de receptores de manera óptima y oportuna.
    
        .fondo-color-sistema-k.p-4.p-lg-0.ps-lg-5.borde-p-1.sombra-p-1.mb-4
          .row 
            .col-lg-7.align-content-center
              p.mb-0.py-lg-4 Esta comunicación, establecida entre #[span.fw-bold un emisor y un receptor,] no ocurre de manera inmediata o, en ocasiones, puede que nunca se concrete, lo que permite que el escrito #[span.fw-bold perdure en el tiempo]. Esta es una de las ventajas de este tipo de comunicación, que puede considerarse permanente, ya que no se desvanece ni se olvida como las palabras.
            .col-lg-5.order-first.order-lg-last.align-content-center
              figure.mb-4.mb-lg-0
                img.mx-auto.d-none.d-lg-block(src="@/assets/curso/temas/5.svg")
                img.mx-auto.d-lg-none(src="@/assets/curso/temas/6.svg")

        .row.align-items-center.pb-4
          .col-md-auto
            figure.mb-4.mb-md-0
              img.mx-auto(src="@/assets/curso/temas/7.svg",style="max-width: 82px;")
          .col 
            p.mb-0 En el ámbito empresarial, es importante reconocer la diversidad de formatos que permiten comunicar distintos mensajes según los intereses y condiciones del contexto. Por ello, el conocimiento y la implementación de diversos formatos y estructuras de documentos escritos son esenciales para desarrollar un buen plan de comunicación empresarial.

    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1 Carta
    
    .row.mb-4
      .col-lg-6
        p.mb-4 Un documento con estructura definida se convierte en un medio de comunicación que busca cumplir diversos objetivos comunicativos, como un saludo, una petición, un mensaje de reconocimiento o de afecto, entre otros. Debido a esto, las cartas tienen una estructura que varía según el propósito para el cual se redactan y a quiénes van dirigidas.

        p.mb-0 Antes de escribir una carta, es fundamental considerar el contexto de comunicación y responder las siguientes preguntas:
      .col-lg-6.order-first.order-lg-last
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/8.png",style="max-width: 610px;")

    .row.justify-content-center 
      .col-lg-4.col-md-6.mb-4
        .fondo-color-sistema-m.borde-23.p-4.h-100
          .row.align-items-center.h-100
            .col-lg-5
              figure.mb-4.mb-lg-0
                img.mx-auto(src="@/assets/curso/temas/9.svg")
            .col-lg-7
              p.mb-0.fw-bold ¿A quién va dirigida?
      .col-lg-4.col-md-6.mb-4
        .fondo-color-sistema-m.borde-23.p-4.h-100
          .row.align-items-center.h-100
            .col-lg-5
              figure.mb-4.mb-lg-0
                img.mx-auto(src="@/assets/curso/temas/10.svg")
            .col-lg-7
              p.mb-0.fw-bold ¿Debe el discurso ser formal o se puede emplear un tono más informal?
      .col-lg-4.col-md-6.mb-4
        .fondo-color-sistema-m.borde-23.p-4.h-100
          .row.align-items-center.h-100
            .col-lg-5
              figure.mb-4.mb-lg-0
                img.mx-auto(src="@/assets/curso/temas/11.svg")
            .col-lg-7
              p.mb-0.fw-bold ¿Cuál es el objetivo de la carta? (informar, saludar, expresar sentimientos, persuadir, pedir, protestar).
    
    .row.justify-content-center
      .col-lg-5.pe-lg-0
        .fondo-color-secundario.h-100.p-4.px-md-5.align-content-center
          p.mb-0.text-white.fw-bold Siempre será necesario revisar la claridad del texto, la ortografía y la presentación.
      .col-lg-2.order-first.order-lg-last.ps-lg-0
        .fondo-color-sistema-l.h-100.p-3
          figure
            img.mx-auto(src="@/assets/curso/temas/12.svg",style="max-width: 105px;")

    .titulo-decorativo.my-5
      .cont-figura
        img(src="@/assets/curso/temas/img-tit-dec.svg")
      .cont-text 
        h3 Elementos indispensables en una carta
        .cont-text__linea
    
    p.mb-4 Para redactar una carta, se deben incluir los siguientes elementos:

    .fondo-personalizado-1.size-full.pos-center.f2
      .fondo-personalizado-1__contenido
        .row.justify-content-center.mb-4.align-items-center
          .col-lg-7
            .fondo-color-primario.p-4
              .row.align-items-center 
                .col-lg-6
                  .bg-white.p-4
                    p.mb-4.pt-2.fuente-p-1 00/00/0000 #[span.texto-p-1 (Fecha)]
                    p.mb-4.fuente-p-1 Lorem ipsum, #[span.texto-p-1 (Saludo inicial)]
                    p.mb-4.fuente-p-1 Your rapidograph pens are dried up, the x-acto blades in your bag are rusty, and your mind is dull. Stop clicking your mouse, get messy, go back to the basics and make something original. #[span.texto-p-1 (Cuerpo o núcleo de la información)]
                    p.mb-4.fuente-p-1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. #[span.texto-p-1 (Despedida)]
                    p.mb-0.fuente-p-1 Lorem ipsum, #[span.texto-p-1 (Saludo final)]

                .col-lg-6
                  p.mb-2.p-1.fondo-color-sistema-n.fw-bold Fecha
                  p.mb-2.p-1.fondo-color-sistema-n.fw-bold Saludo inicial
                  p.mb-2.p-1.fondo-color-sistema-n.fw-bold Cuerpo (o núcleo de la información)
                  p.mb-2.p-1.fondo-color-sistema-n.fw-bold Despedida
                  p.mb-2.p-1.fondo-color-sistema-n.fw-bold Saludo final

          .col-lg-3
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/13.png",style="max-width: 296px;")
    
        .fondo-color-sistema-k.p-4.p-lg-0.pe-lg-5.sombra-p-1.mb-4.borde-18
          .row 
            .col-lg-7.align-content-center
              p.mb-4.fw-bold.pt-lg-4 ¿Cómo escribir una carta formal?
              p.mb-0.pb-lg-4 Las cartas formales requieren el uso de un lenguaje apropiado, sin modismos ni expresiones familiares o afectivas. La estructura suele ser relativamente fija, utilizando algunas fórmulas predeterminadas, como "Sr. Director" para comenzar y "le saluda atentamente" para finalizar.
            .col-lg-5.order-first.align-content-center
              figure.mb-4.mb-lg-0
                img.mx-auto.d-none.d-lg-block(src="@/assets/curso/temas/15.svg")
                img.mx-auto.d-lg-none(src="@/assets/curso/temas/16.svg")

    Separador.mt-5

    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2 El informe
    
    .row.align-items-center.mb-4
      .col-md-auto 
        figure.mb-4.mb-md-0
          img.mx-auto(src="@/assets/curso/temas/17.svg",style="max-width: 85px;")
      .col 
        p.mb-0 Este informe tiene como objetivo analizar y documentar los aspectos clave necesarios para el desarrollo exitoso de un proyecto. A través de un enfoque metódico de comunicación, se pretende garantizar que todos los elementos importantes sean cubiertos y comprendidos por los involucrados. Para asegurar la efectividad del informe, es fundamental seguir una guía estructurada que contemple los siguientes aspectos:

    .fondo-personalizado-1.no-tam-full.f3.borde-20.overflow-hidden.mb-4
      .fondo-personalizado-1__contenido.p-4
        SlyderA.slider-personalizado-1.pt-lg-3(tipo="b")
          .row.justify-content-center.align-items-center
            .col-lg-6.mb-4.mb-lg-0
              h4.mb-4.pt-lg-4 Ubicación de elementos visuales
              p.mb-0 Es esencial que fotos, dibujos, diagramas, tablas y gráficos estén ubicados estratégicamente en el informe. Estos elementos deben complementar el texto y estar colocados en puntos específicos donde puedan potenciar la comprensión del contenido. La correcta disposición de estos recursos visuales hará que el informe sea más atractivo y facilite la interpretación de la información presentada.
            .col-lg-5
              figure
                img.mx-auto(src="@/assets/curso/temas/19.png",style="max-width: 460px;")
          .row.justify-content-center.align-items-center
            .col-lg-6.mb-4.mb-lg-0
              h4.mb-4.pt-lg-4 Presentación organizada y clara
              p.mb-0 La organización del informe debe ser lógica y coherente, permitiendo a los lectores seguir el hilo del contenido sin dificultad. Se debe prestar especial atención a la claridad en la redacción, evitando el uso innecesario de jerga técnica que pueda dificultar la comprensión para aquellos que no estén familiarizados con ciertos términos. El uso de vocabulario técnico es válido siempre que se mantenga la claridad del informe y se expliquen los términos cuando sea necesario.
            .col-lg-5
              figure
                img.mx-auto(src="@/assets/curso/temas/20.png",style="max-width: 460px;")
          .row.justify-content-center.align-items-center
            .col-lg-6.mb-4.mb-lg-0
              h4.mb-4.pt-lg-4 Inclusión de datos negativos
              p.mb-0 Un aspecto crucial del informe es la inclusión de datos o resultados que, aunque negativos, pueden ser sumamente valiosos. Estos resultados permiten una evaluación más completa del proyecto y son fundamentales para la planificación de futuros experimentos o mejoras. Incluir estos datos contribuye a una comprensión más profunda de los desafíos y limitaciones del proyecto, y facilita la toma de decisiones informadas para optimizar resultados en etapas posteriores.
            .col-lg-5
              figure
                img.mx-auto(src="@/assets/curso/temas/21.png",style="max-width: 460px;")

    p.mb-0 Este enfoque garantizará que el informe no solo documente los hallazgos, sino que también sirva como una herramienta útil para guiar futuras acciones y mejorar la calidad del proyecto en desarrollo.

    Separador

    #t_1_3.titulo-segundo.color-acento-contenido
      h2 1.3 El memorando

    .fondo-color-sistema-o.p-4.ps-lg-0.mb-4
      .row 
        .col-lg-5
          figure.mb-4.mb-lg-0
            img.mx-auto(src="@/assets/curso/temas/22.svg") 
        .col-lg-7
          p.mb-0 El memorando, derivado del latín #[em memorándum] (que significa "algo que debe recordarse"), es un documento fundamental en el ámbito de la comunicación interna dentro de las organizaciones. Este formato de comunicación escrita se caracteriza por su precisión y claridad, siendo utilizado principalmente para informar, solicitar o recomendar acciones en asuntos que requieren especial atención.
    
    p.mb-4 La estructura del memorando es una de sus características más importantes, ya que debe seguir un formato preestablecido que permita transmitir información de manera eficaz y comprensible. Este formato generalmente incluye los siguientes componentes:

    ImagenInfografica.color-primario
      template(v-slot:imagen)
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/23.svg",style="max-width: 839px;")

      .tarjeta.color-acento-botones.p-3(x="20%" y="20%" numero="1")
        .h5.mb-2 titulo
        p Lorem ipsum dolor Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus

      .tarjeta.color-acento-botones.p-3(x="50%" y="50%" numero="A")
        .h5.mb-2 titulo
        p Lorem ipsum dolor ddasdasd asdasd asdasd a asd sd asdasd sit amet, consectetur adipiscing elit. Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus

      .tarjeta.color-acento-botones.p-3(x="70%" y="70%" numero="B")
        .h5.mb-2 titulo
        p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus

    
    .row.align-items-center
      .col-lg-5
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/24.png",style="max-width: 505px;")
      .col-lg-7
        figure.mb-4
          img.me-auto(src="@/assets/curso/temas/25.svg",style="max-width: 85px;")
        p.mb-0 El memorando es una herramienta clave en la gestión organizacional, ya que permite documentar y comunicar de manera formal y estructurada los aspectos que deben ser considerados en decisiones importantes o en situaciones que revisten cierta gravedad. Su claridad, precisión y capacidad para registrar información crítica hacen del memorando un recurso indispensable en la administración de cualquier entidad.
    
    Separador

    #t_1_4.titulo-segundo.color-acento-contenido
      h2 1.4 El acta

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/26.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El acta es un documento cuyo objetivo es dejar constancia de lo tratado, sucedido y acordado en una junta o reunión. Su extensión puede variar, abarcando desde hojas hasta libros completos destinados a ese propósito. En toda empresa es obligatorio tener constancia de las decisiones o acuerdos tomados por los miembros que la conforman o representan.
        br
        br
        p.mb-0 Un acta debe contener:
        br
        br
        .d-flex.align-items-center.mb-2     
          i.fas.fa-check-circle.c-color-acento-contenido
          span.ms-1 Ciudad, hora y fecha en que se celebra la reunión
        .d-flex.align-items-center.mb-2     
          i.fas.fa-check-circle.c-color-acento-contenido
          span.ms-1 Nombres de los asistentes
        .d-flex.align-items-center.mb-2     
          i.fas.fa-check-circle.c-color-acento-contenido
          span.ms-1 Persona que presidió la reunión y existencia del quórum
        .d-flex.align-items-center.mb-2     
          i.fas.fa-check-circle.c-color-acento-contenido
          span.ms-1 Orden del día
        .d-flex.align-items-center.mb-2     
          i.fas.fa-check-circle.c-color-acento-contenido
          span.ms-1 Acuerdos tomados
        .d-flex.align-items-center.mb-2     
          i.fas.fa-check-circle.c-color-acento-contenido
          span.ms-1 Cierre y firmas de las personas responsables


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
