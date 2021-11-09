<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero.text-white
        span 1
      h1 Indicadores ambientales
    
    .row
      .col-md-7.mb-4(data-aos="fade-right")
        p Los indicadores están presentes prácticamente en todas las actividades que involucran toma de decisiones, dado que un indicador tiene como objetivo  
          resaltado dar a entender o dar señales o indicios de algo  
          | ; en otras palabras, la información específica que se utiliza diariamente para conocer algo y tomar una decisión es un indicador.
        p.mb-4 Por ejemplo, la presión arterial y la temperatura corporal son indicadores del estado de salud de una persona, y cuando estos indicadores están por fuera de los parámetros regulares, se toma la decisión de visitar o no a un médico. 
        .row.justify-content-center.cajon.color-primario.p-3
          .col-md-2.col-6
            img(src='@/assets/curso/tema1-ico.svg', alt='Icono decorativo')
          .col-md-9
            p.mb-0 La identificación adecuada de los indicadores del entorno es fundamental para una buena toma de decisiones, ya que una interpretación incorrecta de la información puede llevar a tomar decisiones equivocadas. Por ello, es de vital importancia definir que un indicador es una herramienta y no un fin en sí mismo.
      .col-md-5.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema1-img.png', alt='Imagen decorativa')

    p.mb-5(data-aos="fade") En el ámbito ambiental, con el paso del tiempo, se han podido desarrollar diversos indicadores que sirven de guía para:

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-md-10
        figure.mb-5
          img(src='@/assets/curso/tema1-infografia.svg', alt='Texto que describa la imagen')

    .row.justify-content-center(data-aos="fade-down")
      .col-md-10
        .row.justify-content-center.cajon.color-primario.p-4
          .col-md-2.col-6
            img.px-md-3(src='@/assets/curso/tema1-ico2.svg', alt='Icono decorativo')
          .col-md-9
            p.mb-0 Sin embargo, según la Organización para la Cooperación y el Desarrollo Económico OCDE, un indicador ambiental es un parámetro o un valor derivado de parámetros que proporciona información para describir el estado de un fenómeno, ambiente o área, con un significado que va más allá del directamente asociado con el valor del parámetro en sí mismo.

    Separador

    // 1.1
    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1  Funciones y características de los indicadores ambientales




  
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
