<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 A continuación, se presenta una síntesis de la temática estudiada en el componente formativo.

    .row.justify-content-center
      .col-lg-10.mb-5
        .fondo-color-sistema-j.p-4.borde-20
          figure
            img(src="@/assets/curso/temas/sintesis.svg", alt="Síntesis que representa las claves de la comunicación empresarial y la estructura de informes. Incluye tipos de comunicación empresarial como la escrita, destacando documentos como cartas, informes, memorandos y actas, junto con técnicas de organización, claridad y argumentación. También abarca la comunicación no verbal, dividida en gestual, visual y auditiva. Además, se presentan los elementos clave para la estructura del informe, como la ubicación de gráficos, la presentación organizada y la inclusión de datos negativos, así como los objetivos de los informes, que buscan un atractivo visual, comprensión clara y fomento del aprendizaje y mejora continua.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
