<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.bloque-fondo-tema5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero.text-white
        span 5
      h1 Criterios de elegibilidad 

    p.mb-4(data-aos="fade") Una vez que se tiene un conjunto de indicadores con sus hojas metodológicas previamente revisadas y analizadas, se realiza una selección de aquellos que sean de mayor relevancia y estén estructurados de mejor manera. Para realizar esta valoración de relevancia y de calidad técnica de cada uno de los indicadores, es necesario tener en cuenta los criterios que se describirán a continuación: 

    .row.mb-4.mb-md-5(data-aos="fade-down")
      .col-lg-4.mb-3.mb-md-0
        .tarjeta.tarjeta-foto-hover
          .tarjeta-foto-hover__img: img(src='@/assets/curso/tema5-tarj1.png')
          .tarjeta-foto-hover__titulo.bg-acento-contenido.d-flex.justify-content-center.align-items-center.p-2
            h4.text-center.mb-0 Criterios de relevancia
          .tarjeta-foto-hover__tarjeta.bg-acento-contenido95.d-flex.align-items-center.justify-content-center
            .p-4.text-center
              h4 Criterios de relevancia
              p.mb-0 Se debe definir con pertinencia cuáles son los problemas o decisiones para los que se piensa utilizar los indicadores. Es necesario relacionar las metas y los objetivos con la normatividad ambiental.
      .col-lg-4.mb-3.mb-md-0
        .tarjeta.tarjeta-foto-hover(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          .tarjeta-foto-hover__img: img(src='@/assets/curso/tema5-tarj2.png')
          .tarjeta-foto-hover__titulo.bg-acento-contenido.d-flex.justify-content-center.align-items-center.p-2
            h4.text-center.mb-0 Criterios de viabilidad estadística
          .tarjeta-foto-hover__tarjeta.bg-acento-contenido95.d-flex.align-items-center.justify-content-center
            .p-4.text-center
              h4 Criterios de viabilidad estadística
              p.mb-0 Es necesario contar con la disponibilidad de información estadística de calidad, que le dé fortaleza al indicador, basándose en términos de referencia internacionales o locales, pero que contenga la información de manera clara y precisa, obteniendo así una medición concisa con el paso del tiempo. 
      .col-lg-4.mb-3.mb-md-0
        .tarjeta.tarjeta-foto-hover
          .tarjeta-foto-hover__img: img(src='@/assets/curso/tema5-tarj3.png')
          .tarjeta-foto-hover__titulo.bg-acento-contenido.d-flex.justify-content-center.align-items-center.p-2
            h4.text-center.mb-0 Criterios formales
          .tarjeta-foto-hover__tarjeta.bg-acento-contenido95.d-flex.align-items-center.justify-content-center
            .p-4.text-center
              h4 Criterios formales
              p.mb-0 La hoja metodológica debe tener consistencia para que cada uno de sus objetivos estén alineados en la misma dirección, asimismo, se deben tener presentes, dentro de la hoja metodológica, los gráficos utilizados en la elaboración del indicador. 

    .row.justify-content-center(data-aos="fade-down")
      .col-md-10
        .row.justify-content-center.cajon.color-primario.p-4.mb-4
          .col-md-2.col-4.mb-md-0.mb-4
            img.px-md-3(src='@/assets/curso/tema5-ico.svg', alt='Icono decorativo')
          .col-md-9
            p.mb-0 Se recomienda realizar un control exhaustivo al cumplimiento de todos los criterios que previamente fueron escogidos para cada uno de los indicadores propuestos, ya que, para ser aceptado, el indicador debe poder cumplir con todos estos criterios; al momento de la selección, si el indicador incumple con alguno, no podrá ser aceptado.


</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
    mostrarIndicador: true,
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
