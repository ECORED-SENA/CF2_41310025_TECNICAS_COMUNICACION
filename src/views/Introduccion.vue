<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.align-items-center.mb-4
      .col-lg-9
        p.mb-4(data-aos="fade-right") El componente formativo se enfoca en la comunicación escrita y no verbal, resaltando su papel crucial en el entorno empresarial. Se exploran diferentes tipos de documentos, como cartas, informes, memorandos y actas, cada uno con su estructura y propósito específico. La claridad, organización y precisión en estos documentos son esenciales para garantizar que los mensajes se transmitan de manera efectiva y lleguen a los receptores de forma adecuada.
        .row(data-aos="fade-down")
          .col-lg-6.pe-lg-0
            .fondo-color-primario.h-100.align-content-end
              figure.mb-4.mb-lg-0
                img.mx-auto(src="@/assets/curso/temas/1.svg",style="max-width: 420px;")
          .col-lg-6.ps-lg-0
            .fondo-color-sistema-k.p-4.px-lg-5.h-100.align-content-center
              p.mb-0 La comunicación escrita, se aborda la importancia de la argumentación como una técnica clave para respaldar ideas y decisiones dentro de la empresa. Una argumentación bien estructurada, basada en reglas de inferencia y con un uso adecuado de premisas y conclusiones, es fundamental para lograr coherencia y persuasión en los mensajes. Esto no solo fortalece las posiciones dentro de la organización, sino que también facilita la toma de decisiones informadas.
      .col-lg-3.order-first.order-lg-last
        figure.mb-4.mb-lg-0(data-aos="fade-left")
          img.mx-auto(src="@/assets/curso/temas/2.png",style="max-width: 297px;")
    
    .row.align-items-center
      .col-lg-8
        .fondo-color-sistema-l.borde-14.p-4.pb-lg-5.px-lg-5(data-aos="fade-right")
          .figura-p-1.mb-4
          p.mb-0 Finalmente, el componente subraya la necesidad de comprender y aplicar correctamente las técnicas de comunicación, tanto verbal como no verbal, en el contexto empresarial. Estas habilidades permiten desarrollar un plan de comunicación interno y externo eficaz, lo que a su vez mejora la interacción entre los miembros de la organización y con el entorno exterior. Así, se asegura que los mensajes sean consistentes, claros y alineados con los objetivos estratégicos de la empresa.
      .col-lg-4.order-first.order-lg-last
        figure.mb-4.mb-lg-0(data-aos="fade-left")
          img.mx-auto(src="@/assets/curso/temas/3.svg",style="max-width: 400px;")
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
