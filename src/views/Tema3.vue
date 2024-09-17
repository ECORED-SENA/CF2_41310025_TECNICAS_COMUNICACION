<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Comunicación verbal y no verbal
    
    .fondo-color-sistema-p.mb-5(data-aos="flip-up")
      .row.align-items-center 
        .col-lg-5
          figure.mb-4.mb-lg-0
            img.mx-auto(src="@/assets/curso/temas/44.png")
        .col-lg-7
          p.mb-0.p-4.pt-0.ps-lg-0.pt-lg-4 La comunicación es el pilar que sostiene la existencia de los grupos sociales, y su eficacia depende del uso adecuado del lenguaje. Este lenguaje puede manifestarse de manera verbal o no verbal, dependiendo del contexto sociocultural, la información que se pretende transmitir y los objetivos que se desean alcanzar.
    
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1 Comunicación no verbal
    
    p.mb-4(data-aos="fade-right") En la comunicación no verbal, las palabras no son necesarias para transmitir un mensaje. A pesar de su falta de verbalización, la comunicación no verbal ha adquirido una importancia creciente en la sociedad actual. Esta forma de comunicación se realiza a través de una amplia gama de signos, que incluyen:

    .fondo-personalizado-1.f6
      .fondo-personalizado-1__contenido.py-5
        .row.align-items-center.justify-content-center 
          .col-lg-3
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/51.png",style="max-width: 306px;")
          .col-lg-7
            SlyderF.slider-personalizado-2(columnas="col-md-6 py-3",data-aos="flip-up")
              .borde-14.bg-white.p-4.sombra-p-2.h-100
                figure.mb-4.mt-2
                  img.mx-auto(src="@/assets/curso/temas/45.svg",style="max-width: 82px;")
                h5.mb-4.text-center Visual
                p.text-center Mensajes que percibimos a través de la vista, como señales de tráfico, semáforos, y faros.
              .borde-14.bg-white.p-4.sombra-p-2.h-100
                figure.mb-4.mt-2
                  img.mx-auto(src="@/assets/curso/temas/46.svg",style="max-width: 82px;")
                h5.mb-4.text-center Gestual
                p.text-center Expresiones físicas, como movimientos corporales y gestos, que acompañan y refuerzan el mensaje hablado.
              .borde-14.bg-white.p-4.sombra-p-2.h-100
                figure.mb-4.mt-2
                  img.mx-auto(src="@/assets/curso/temas/47.svg",style="max-width: 82px;")
                h5.mb-4.text-center Auditiva
                p.text-center Sonidos como gritos, que pueden expresar alegría, dolor o llamados de atención.
              .borde-14.bg-white.p-4.sombra-p-2.h-100
                figure.mb-4.mt-2
                  img.mx-auto(src="@/assets/curso/temas/48.svg",style="max-width: 82px;")
                h5.mb-4.text-center Táctil
                p.text-center Comunicación basada en el contacto físico, como abrazos, besos o un apretón de manos, que transmiten emociones y sentimientos.
              .borde-14.bg-white.p-4.sombra-p-2.h-100
                figure.mb-4.mt-2
                  img.mx-auto(src="@/assets/curso/temas/49.svg",style="max-width: 82px;")
                h5.mb-4.text-center Gustativa
                p.text-center Asociada a los sabores de los alimentos, que pueden evocar recuerdos o estados emocionales.
              .borde-14.bg-white.p-4.sombra-p-2.h-100
                figure.mb-4.mt-2
                  img.mx-auto(src="@/assets/curso/temas/50.svg",style="max-width: 82px;")
                h5.mb-4.text-center Olfativa
                p.text-center Relacionada con los olores, como el perfume, el aroma de la comida, o el olor de una madre para su bebé, que pueden desencadenar respuestas emocionales.
    
    Separador.mt-3

    .fondo-personalizado-1.bottom-1.f1
      .fondo-personalizado-1__contenido.pt-2
        #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade")
          h2 3.2 Comunicación verbal
        
        .fondo-color-sistema-k.p-4.p-lg-0.ps-lg-5.borde-p-1.sombra-p-1.mb-4(data-aos="fade-up")
            .row 
              .col-lg-7.align-content-center
                p.mb-0.py-lg-4 La comunicación verbal es el proceso mediante el cual las personas intercambian información, ideas, pensamientos y sentimientos a través del uso de palabras, ya sea de manera oral o escrita. Esta forma de comunicación se caracteriza por su capacidad para transmitir mensajes complejos y detallados de manera clara y precisa.
              .col-lg-5.order-first.order-lg-last.align-content-center
                figure.mb-4.mb-lg-0
                  img.mx-auto(src="@/assets/curso/temas/53.svg")
        
        .titulo-decorativo.my-5(data-aos="fade-up")
          .cont-figura
            img(src="@/assets/curso/temas/img-tit-dec.svg")
          .cont-text 
            h3 Comunicación oral
            .cont-text__linea
        
        p.mb-4(data-aos="fade-down") Es la forma más común de comunicación verbal, donde se utilizan palabras habladas. Abarca desde conversaciones cotidianas hasta discursos formales. Incluye no solo el contenido de las palabras, sino también aspectos como #[span.fw-bold el tono, la entonación, el ritmo y el volumen], que pueden influir en cómo se interpreta el mensaje.

        .row.align-items-center 
          .col-md-auto(data-aos="fade-right")
            figure.mb-4.mb-md-0
              img.mx-auto(src="@/assets/curso/temas/54.svg",style="max-width: 82px;")
          .col(data-aos="fade-left")
            p.mb-0 Los siguientes elementos son clave en la comunicación oral, ya que no solo transmiten el contenido verbal del mensaje, sino también las emociones y actitudes del hablante, influyendo en cómo el mensaje es percibido por el receptor.
    
    TabsB.tabs-p-1.color-acento-contenido.mt-4(data-aos="flip-up")
      .row.justify-content-center.py-4.py-lg-5(titulo="Tono" :icono="require('@/assets/curso/temas/55.svg')")
        .col-lg-6.mb-4.mb-lg-0
          h4.mb-4 Tono
          p.mb-0 Se refiere a la cualidad emocional o actitudinal de la voz durante la comunicación. Indica emociones como alegría, tristeza, ironía, enfado, entre otras, y puede influir significativamente en la interpretación del mensaje por parte del receptor.
        .col-lg-5
          figure
            img.mx-auto(src="@/assets/curso/temas/56.png",style="max-width: 460px;")
      .row.justify-content-center.py-4.py-lg-5(titulo="Entonación" :icono="require('@/assets/curso/temas/58.svg')")
        .col-lg-6.mb-4.mb-lg-0
          h4.mb-4 Entonación
          p.mb-0 Es la variación en el tono de la voz mientras se habla. Se refiere a los cambios de altura o melodía en la voz, que pueden dar diferentes significados o énfasis a una oración. La entonación puede indicar si una oración es una afirmación, una pregunta, una exclamación, o mostrar el estado emocional del hablante.
        .col-lg-5
          figure
            img.mx-auto(src="@/assets/curso/temas/57.png",style="max-width: 460px;")
      .row.justify-content-center.py-4.py-lg-5(titulo="Ritmo" :icono="require('@/assets/curso/temas/59.svg')")
        .col-lg-6.mb-4.mb-lg-0
          h4.mb-4 Ritmo
          p.mb-0 El ritmo es el patrón de velocidad y pausas con el que se habla. Se refiere a la cadencia o fluidez con la que se pronuncian las palabras y las oraciones. Un ritmo rápido puede transmitir urgencia o entusiasmo, mientras que un ritmo más lento puede sugerir seriedad, reflexión o tristeza.
        .col-lg-5
          figure
            img.mx-auto(src="@/assets/curso/temas/60.png",style="max-width: 460px;")
      .row.justify-content-center.py-4.py-lg-5(titulo="Volumen" :icono="require('@/assets/curso/temas/62.svg')")
        .col-lg-6.mb-4.mb-lg-0
          h4.mb-4 Volumen
          p.mb-0 El volumen se refiere a la intensidad o fuerza con la que se emite la voz. Puede variar desde un susurro hasta un grito y se utiliza para enfatizar partes del discurso o ajustar la comunicación a diferentes contextos. Un volumen alto puede expresar enfado o entusiasmo, mientras que un volumen bajo puede indicar confidencialidad, timidez o tranquilidad.
        .col-lg-5
          figure
            img.mx-auto(src="@/assets/curso/temas/61.png",style="max-width: 460px;")
    
    .titulo-decorativo.my-5(data-aos="fade-down")
      .cont-figura
        img(src="@/assets/curso/temas/img-tit-dec.svg")
      .cont-text 
        h3 Comunicación escrita
        .cont-text__linea
    
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/63.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Esta forma de comunicación verbal utiliza símbolos escritos, como letras y palabras, para transmitir mensajes. Puede manifestarse en diversas formas, como cartas, correos electrónicos, informes, libros, y más. La comunicación escrita permite que el mensaje se preserve a lo largo del tiempo y pueda ser consultada repetidamente, lo que la convierte en una herramienta clave para la documentación y la transmisión de conocimiento.


</template>

<script>
export default {
  name: 'Tema3',
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
