<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 La argumentación
    
    .row.align-items-center 
      .col-lg-5(data-aos="fade-right")
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/28.png",style="max-width: 505px;")
      .col-lg-7(data-aos="fade-left")
        p.mb-4 Argumentar es una técnica de comunicación fundamental que tiene como objetivo explicar o expandir diferentes contenidos relacionados, fortaleciendo así la coherencia de las ideas presentadas por un orador o escritor. La argumentación facilita la correspondencia entre diversas ideas, utilizando las reglas del pensamiento crítico para obtener información nueva.

        .fondo-color-sistema-q.p-4.pb-3.pe-3
          figure.mb-4
            img.me-auto(src="@/assets/curso/temas/29.svg",style="max-width: 45px;")
          p.fw-bold.text-center.mb-3 Según Álvarez (2005, p. 23), el propósito principal de los textos argumentativos es legitimar explícitamente la nueva información proporcionada, ya sea a través de datos empíricos, razonamientos, pruebas o datos concretos y verificables.
          figure
            img.ms-auto(src="@/assets/curso/temas/30.svg",style="max-width: 38px;")
    
    .titulo-decorativo.my-5(data-aos="fade-right")
      .cont-figura
        img(src="@/assets/curso/temas/img-tit-dec.svg")
      .cont-text 
        h3 Organización de la argumentación
        .cont-text__linea
    
    p.mb-4(data-aos="fade-up") Existen diversas formas de organizar una argumentación, aunque el orden puede variar según la intención del expositor. Sin embargo, hay elementos clave que deben estar presentes en cualquier argumentación efectiva.

    TabsB.tabs-p-1.color-acento-contenido(data-aos="flip-up")
      .row.justify-content-center.align-items-center.py-4.py-lg-5(titulo="Presentación de la tesis" :icono="require('@/assets/curso/temas/31.svg')")
        .col-lg-6.mb-4.mb-lg-0
          h4.mb-4 Presentación de la tesis
          p.mb-0 Es esencial comenzar con la tesis de manera precisa, siguiendo los principios de brevedad y claridad. Esta es la afirmación central que guiará todo el discurso.
        .col-lg-5
          figure
            img.mx-auto(src="@/assets/curso/temas/32.png",style="max-width: 460px;")
      .row.justify-content-center.align-items-center.py-4.py-lg-5(titulo="Desarrollo del cuerpo argumentativo" :icono="require('@/assets/curso/temas/35.svg')")
        .col-lg-6.mb-4.mb-lg-0
          h4.mb-4 Desarrollo del cuerpo argumentativo
          p.mb-0 El cuerpo de la argumentación debe ser un discurso más extenso que exponga las razones y argumentos que apoyan la tesis. Aquí se presentan las evidencias, ejemplos y razonamientos que fortalecen la afirmación principal.
        .col-lg-5
          figure
            img.mx-auto(src="@/assets/curso/temas/33.png",style="max-width: 460px;")
      .row.justify-content-center.align-items-center.py-4.py-lg-5(titulo="Conclusión" :icono="require('@/assets/curso/temas/36.svg')")
        .col-lg-6.mb-4.mb-lg-0
          h4.mb-4 Conclusión
          p.mb-0 La argumentación debe culminar con una conclusión que reafirme la tesis, cerrando el discurso de manera convincente.
        .col-lg-5
          figure
            img.mx-auto(src="@/assets/curso/temas/34.png",style="max-width: 460px;")
    
    .titulo-decorativo.my-5(data-aos="fade")
      .cont-figura
        img(src="@/assets/curso/temas/img-tit-dec.svg")
      .cont-text 
        h3 Normas para una buena argumentación
        .cont-text__linea
    
    p.mb-4(data-aos="fade-down") Descubran cómo construir argumentos sólidos y persuasivos siguiendo las claves del pensamiento crítico:

    figure(data-aos="zoom-in-up")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/SqlRrZ6Aj18?si=v8jmfLACguVHGzeZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
      figcaption Video. Normas para una buena argumentación
    
    .titulo-decorativo.my-5(data-aos="fade-left")
      .cont-figura
        img(src="@/assets/curso/temas/img-tit-dec.svg")
      .cont-text 
        h3 Tipos de premisas
        .cont-text__linea
    
    p.mb-5(data-aos="fade-up") Existen dos tipos de premisas que sustentan cualquier argumentación: los fundamentos o conclusiones concluyentes y los fundamentos o conclusiones parciales.

    .fondo-personalizado-1.size-full.med.pos-center.f5
      .fondo-personalizado-1__contenido

        h4.titulo-dec-2.py-1.px-3.mb-4(data-aos="fade-right") Fundamentos o conclusiones concluyentes

        .row.align-items-center.mb-2
          .col-lg-8
            p.mb-4(data-aos="fade-up") Estos fundamentos determinan que la verdad de todas las premisas garantiza la verdad de la conclusión.
            .row
              .col-lg-6.mb-4(data-aos="fade-right")
                .fondo-color-primario.borde-23.p-4.h-100
                  .row.align-items-center.h-100
                    .col-lg-4
                      figure.mb-4.mb-lg-0
                        img.mx-auto(src="@/assets/curso/temas/38.svg",style="max-width: 104px;")
                    .col-lg-8
                      h5.mb-4.text-white Tipo de argumento:
                      p.mb-0.text-white Corresponden a los argumentos deductivos.
              .col-lg-6.mb-4(data-aos="fade-left")
                .fondo-color-primario.borde-23.p-4.h-100
                  .row.align-items-center.h-100
                    .col-lg-4
                      figure.mb-4.mb-lg-0
                        img.mx-auto(src="@/assets/curso/temas/39.svg",style="max-width: 104px;")
                    .col-lg-8
                      h5.mb-4.text-white Validez:
                      p.mb-0.text-white Aquellos que cumplen con esta propiedad se consideran válidos; los que no, inválidos.
          .col-lg-4.order-first.order-lg-last
            figure.mb-4.mb-lg-0(data-aos="fade-down")
              img.mx-auto(src="@/assets/curso/temas/37.png",style="max-width: 400px;")
        
        h4.titulo-dec-2.py-1.px-3.mb-4(data-aos="fade") Fundamentos o conclusiones parciales

        p.mb-4(data-aos="fade") Se construyen a partir de premisas que proporcionan solo un apoyo parcial a la conclusión.

        .row.justify-content-center
          .col-lg-4.col-md-6.mb-4(data-aos="flip-up")
            figure.mb-4.mb-md-0
              img.mx-auto(src="@/assets/curso/temas/40.png",style="max-width: 400px;")
          .col-lg-4.col-md-6.mb-4(data-aos="flip-up")
            .borde-23.fondo-color-sistema-q.hover-1.p-4.pt-lg-5.h-100
              figure.mb-4
                img.mx-auto(src="@/assets/curso/temas/41.svg",style="max-width: 98px;")
              h5.text-center.mb-4 Tipo de argumento
              p.mb-0.text-center Estos son los argumentos inductivos, que buscan demostrar una conclusión mediante un apoyo parcial entre una idea (premisa) y otra.
          .col-lg-4.col-md-6.mb-4(data-aos="flip-up")
            .borde-23.fondo-color-sistema-q.hover-1.p-4.pt-lg-5.h-100
              figure.mb-4
                img.mx-auto(src="@/assets/curso/temas/42.svg",style="max-width: 98px;")
              h5.text-center.mb-4 Corrección
              p.mb-0.text-center Cuando se logra la conexión entre premisas y conclusiones, los argumentos se consideran correctos; de lo contrario, si la relación es incorrecta, los argumentos se consideran incorrectos.
    
    p.mb-0(data-aos="fade") La práctica constante y el respeto por las normas de inferencia y las reglas de interacción son esenciales para desarrollar una argumentación efectiva. Con el tiempo, estas habilidades pueden mejorar significativamente, permitiendo una comunicación más clara, coherente y persuasiva.
        

</template>

<script>
export default {
  name: 'Tema2',
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
