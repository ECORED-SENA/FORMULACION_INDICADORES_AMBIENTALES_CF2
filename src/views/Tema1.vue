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

    p(data-aos="fade") Para la elaboración de indicadores ambientales, es necesario definir un marco conceptual donde se concrete qué se quiere monitorear. La selección de dichos indicadores estará determinada por las diferentes escalas en los análisis de las etapas que se requiera hacer seguimiento. 

    p.mb-4(data-aos="fade") Las principales funciones de los indicadores ambientales son: 

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-12
            figure
              img(src='@/assets/curso/tema1-tarj1.png', alt='Texto que describa la imagen')          
        h4.text-center.text-white Llevar al mínimo las medidas o parámetros que se necesitan para realizar una representación de la realidad de la situación.
      .col-md.tarjeta.color-acento-contenido.p-5
        .row.justify-content-center.mb-4
          .col-12
            figure
              img(src='@/assets/curso/tema1-tarj2.png', alt='Texto que describa la imagen')        
        h4.text-center.text-white Facilitar los procesos de comunicación.  

    p(data-aos="fade") Los indicadores ambientales se utilizan a diferentes escalas, tanto a nivel internacional, como nacional, estatal  y regional, cada una para diferentes fines, la mayoría de ellos son usados para determinar el estado del medio ambiente, para evaluar el desempeño de políticas ambientales y también para comunicar los progresos que se han adelantado en cuestión de desarrollo sustentable. 

    p.mb-4(data-aos="fade") Sin embargo, para que estos indicadores puedan cumplir con estas ocupaciones deben tener ciertas características las cuales serán descritas a continuación: 

    .row.justify-content-center(data-aos="fade-down") 
      .col-md-10
        .tarjeta.color-primario-degrade.px-md-5.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-3.col-lg-2
              img.px-md-3(src="@/assets/curso/tema1-cta.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.col-md-9.mb-3.mb-sm-0.text-white
                  h3.mb-1 Características indicadores ambientales
                  p.mb-0.text-small Lo invitamos a conocer las características de los  
                    br
                    | indicadores ambientales en el siguiente anexo.
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/Caracteristicas_indicadores_ambientales.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

    Separador

    // 1.2
    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2  Tipos de indicadores ambientales

    p.mb-4(data-aos="fade") Los indicadores ambientales se pueden clasificar según los datos disponibles. Estos son los tres tipos de indicadores ambientales que existen:




  
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
