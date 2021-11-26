<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.bloque-fondo-tema3

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
          .col-md-2.col-4.mb-md-0.mb-4
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
          .col-md-2.col-4.mb-md-0.mb-4
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

    .row.justify-content-center.mb-5(data-aos="fade-down") 
      .col-md-10
        TabsA.color-acento-contenido
          .tarjeta.bg-primario15.p-4(titulo="Tipo 1")
            .row
              .col-xl-6.mb-4
                h4 Tipo 1
                p Este tipo de indicador tiene datos que siempre se encuentran disponibles, ya que se obtienen en monitoreos que se realizan permanentemente. 
              .col-xl-6
               figure
                  img(src='@/assets/curso/tema1-tab1.png', alt='Imagen decorativa')
          .tarjeta.bg-primario15.p-4(titulo="Tipo 2")
            .row
              .col-xl-6.mb-4
                h4 Tipo 2
                p Estos están basados en los datos que provienen de monitoreo permanente, pero, a su vez, necesitan información adicional, dado que los datos pueden o no estar totalmente disponibles. 
              .col-xl-6
               figure
                  img(src='@/assets/curso/tema1-tab2.png', alt='Imagen decorativa')    
          .tarjeta.bg-primario15.p-4(titulo="Tipo 3")
            .row
              .col-xl-6.mb-4
                h4 Tipo 3
                p Este tipo de indicadores no tiene una base estadística, ya que son principalmente indicadores conceptuales. 
              .col-xl-6
               figure
                  img(src='@/assets/curso/tema1-tab3.png', alt='Imagen decorativa')              

    p.mb-4(data-aos="fade") A continuación, se presentan algunos ejemplos de indicadores ambientales. Es importante tener presente que en cada segmento pueden surgir nuevas propuestas de indicadores. 

    .tarjeta.color-primario-degrade.text-white.py-5.mb-5
      SlyderA.px-4.px-md-0(data-aos="fade-down")
        .row.justify-content-center.mb-4
          .col-md-5.mb-4.mb-md-0
            h4 Índice de bienestar económico sostenible
            p Este indicador está netamente relacionado con la economía y tiene como propósito reemplazar el Producto Interno Bruto (PIB) como el indicador de bienestar social añadiendo variables como el consumo ajustado y una medida de discrepancia socioeconómica.
          .col-md-5
            figure
              img(src='@/assets/curso/tema1-slider1.png', alt='Índice de bienestar económico sostenible')
        .row.justify-content-center.mb-4
          .col-md-5.mb-4.mb-md-0
            h4 Índice de desarrollo humano
            p Este indicador tiene como finalidad determinar el estado de salud, de educación y de bienes económicos. 
          .col-md-5
            figure
              img(src='@/assets/curso/tema1-slider2.png', alt='Índice de desarrollo humano') 
        .row.justify-content-center.mb-4
          .col-md-5.mb-4.mb-md-0
            h4 Índice de sostenibilidad ambiental
            p.mb-0 Es un instrumento utilizado para evaluar cuáles son las formas de actividad humana que traen repercusiones directas al planeta. 
            p Algunos de los factores que se tienen en cuenta son:
            ul.lista-ul--color.acento-botones
              li.mb-1
                i.fas.fa-check
                | Las emisiones de agentes contaminantes.
              li.mb-1
                i.fas.fa-check
                | El uso de agroquímicos. 
              li.mb-1
                i.fas.fa-check
                | La calidad y el volumen de aguas. 
              li.mb-1
                i.fas.fa-check
                | El crecimiento de la población.
              li.mb-1
                i.fas.fa-check
                | El consumo y la eficiencia energética.       
          .col-md-5
            figure
              img(src='@/assets/curso/tema1-slider3.png', alt='Índice de sostenibilidad ambiental')           
        .row.justify-content-center.mb-4
          .col-md-5.mb-4.mb-md-0
            h4 Índice de desempeño ambiental
            p Este indicador se usa para evaluar el rendimiento ambiental de las políticas que algún país haya implementado en un periodo de tiempo determinado.  
          .col-md-5
            figure
              img(src='@/assets/curso/tema1-slider4.png', alt='Índice de desempeño ambiental')
        .row.justify-content-center.mb-4
          .col-md-5.mb-4.mb-md-0
            h4 Índice global de economía verde
            p Este indicador analizó las inversiones que están realizando los países para tener una economía que sea sostenible con el medio ambiente.  
          .col-md-5
            figure
              img(src='@/assets/curso/tema1-slider5.png', alt='Índice global de economía verde')
        .row.justify-content-center.mb-4
          .col-md-5.mb-4.mb-md-0
            h4 Huella ecológica
            p Este indicador evalúa el impacto ambiental que trae consigo la demanda de recursos naturales por parte del ser humano para satisfacer sus necesidades.  
          .col-md-5
            figure
              img(src='@/assets/curso/tema1-slider6.png', alt='Huella ecológica')
        .row.justify-content-center.mb-4
          .col-md-5.mb-4.mb-md-0
            h4 Huella de carbono
            p Este indicador provee la información sobre la cantidad de gases de efecto invernadero que se produce de forma directa o indirecta. 
          .col-md-5
            figure
              img(src='@/assets/curso/tema1-slider7.png', alt='Huella de carbono')
        .row.justify-content-center.mb-4
          .col-md-5.mb-4.mb-md-0
            h4 Huella hídrica
            p Este indicador es utilizado para cuantificar el uso del agua.  
          .col-md-5
            figure
              img(src='@/assets/curso/tema1-slider8.png', alt='Huella hídrica')                        

    
    
    p.mb-4(data-aos="fade") Los indicadores ambientales son una herramienta básica para analizar y realizar seguimiento a procesos de desarrollo, aunque las estrategias de desarrollo se apliquen a diferentes niveles de sociedad y sus consecuencias también se observen a diversas escalas.

    p.mb-4(data-aos="fade") Es por esto que cada indicador debe buscar satisfacer las necesidades de cada uno de sus usuarios. En el siguiente recurso, se pueden observar los conceptos de indicadores y la interacción entre los mismos. 

    .row.justify-content-center.mb-4(data-aos="fade-down") 
      .col-md-10
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/6_BEn9hczo8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

  
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
