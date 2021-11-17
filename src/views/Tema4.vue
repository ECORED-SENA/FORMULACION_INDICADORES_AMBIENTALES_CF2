<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.bloque-fondo-tema1
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero.text-white
        span 4
      h1 Hoja metodológica de indicadores

    .row
      .col-md-7.mb-4(data-aos="fade-right")
        p 
          resaltado La hoja metodológica 
          |  de cada indicador es una herramienta totalmente necesaria para la construcción de 
          resaltado un sistema de indicadores ambientales
          | . Cuando esta hoja metodológica está finalizada, será como el plano guía para una construcción, que esta vez será intelectual e informativa. 
        p.cuadrado-texto Es por esto que allí se plasman todas las indicaciones técnicas que se deben tener en cuenta para una correcta construcción e interpretación del indicador. La hoja metodológica es un documento técnico que debe ser de fácil comprensión para los usuarios. 
      .col-md-5.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema4-img.png', alt='Imagen decorativa')

    p(data-aos="fade") El diligenciamiento de las hojas metodológicas de los indicadores se debe realizar de manera secuencial, teniendo varias instancias de socialización entre los expertos temáticos, para el análisis y perfeccionamiento del indicador en cada una de sus fases. 

    p(data-aos="fade") Una hoja metodológica está compuesta por diversos aspectos, los cuales deben ser asumidos a cabalidad para la correcta formación del indicador. 

    p.mb-4(data-aos="fade") En la siguiente tabla, se especifican cada uno de estos aspectos: 

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-md-10.p-0
        .tabla-a.color-acento-contenido.mb-4
          table
            thead
              tr.text-white
                th.column-1 
                  h3.mb-0 Aspecto
                th 
                  h3.mb-0 Concepto
            tbody
              tr
                td.sub-destacado Nombre del indicador
                td El nombre debe ser lo más conciso posible, que logre definir exactamente lo que el indicador está mostrando. 
              tr
                td.sub-destacado Descripción corta del indicador
                td Se debe realizar una descripción corta, pero informativa, del indicador; para ello, es necesario el uso de lenguaje simple, que sea de fácil entendimiento para el usuario. 
              tr
                td.sub-destacado Relevancia del indicador 
                td Es necesario especificar la relevancia que tiene el indicador con respecto a la evaluación del medio ambiente y en temas de sostenibilidad. Se deben definir las variables que tiene el indicador y vincularlas con los problemas ambientales que se pueden percibir. 
              tr
                td.sub-destacado Representación gráfica
                td Se debe representar gráficamente el indicador, por medio de esquemas o gráficos que describan la necesidad y los objetivos del mismo. 
              tr
                td.sub-destacado Desafíos y tendencias
                td Se debe elaborar un párrafo donde se plasmen las implicaciones y desafíos que muestra el indicador. 
              tr
                td.sub-destacado Direccionalidad
                td Es necesario definir cuáles son los cambios en el indicador, preparando la interpretación del mismo en el contexto de desarrollo ambiental.
              tr
                td.sub-destacado Alcance
                td Se debe mostrar exactamente cuál es la información específica que va a dar este indicador. 
              tr
                td.sub-destacado Limitaciones
                td Así como se muestra la información que da el indicador, también se debe hacer claridad sobre la información que no hace parte del mismo.
              tr
                td.sub-destacado Cálculo del indicador
                td Se requiere que la unidad de medida del indicador esté previamente estipulada.
              tr
                td.sub-destacado Variables del indicador
                td Todas las variables deben ser definidas en detalle, de tal forma que no haya lugar para otras interpretaciones. 
              tr
                td.sub-destacado Fuente de los datos
                td El origen de los datos debe estar explícitamente descrito en cada una de las variables utilizadas.
              tr
                td.sub-destacado Método captura de datos
                td Se debe especificar cómo se realizó la recolección de los datos. Por ejemplo: encuestas, censos, registros, etc. 
              tr
                td.sub-destacado Vínculo con iniciativas regionales o mundiales
                td Se debe hacer énfasis cuando el indicador haga parte de otras iniciativas, tanto regionales como internacionales.                    


    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-md-10.p-0
        .bloque-texto-a.color-acento-contenido.p-4 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0
              h5.mb-0 Dado que no existen unos procedimientos estandarizados para la conformación de indicadores ambientales, estos son algunos pasos que se pueden tener en cuenta para su desarrollo metodológico:  
            .col-lg-8
              .bloque-texto-a__texto.p-4
                ul.lista-ul--color
                  li.mb-0
                    i.fas.fa-check
                    | Definir con claridad los objetivos y metas del indicador.
                  li.mb-0 
                    i.fas.fa-check
                    | Seleccionar los temas analíticamente.
                  li.mb-0 
                    i.fas.fa-check
                    | Revisar la información nacional e internacional que se tenga sobre el indicador.
                  li.mb-0 
                    i.fas.fa-check
                    | Desarrollar la propuesta con claridad y sencillez.        


    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-md-10
        .row.justify-content-center.cajon.color-primario.p-4
          .col-md-2.col-4.mb-md-0.mb-4
            img.px-md-4(src='@/assets/curso/tema4-ico.svg', alt='Icono decorativo')
          .col-md-9
            p.mb-0 Cabe resaltar que los indicadores ambientales tienen que elaborarse teniendo en cuenta las necesidades y problemáticas específicas de cada territorio, para no correr el riesgo de tener un indicador que esté desligado del contexto local. 


</template>

<script>
export default {
  name: 'Tema4',
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
