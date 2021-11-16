<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.bloque-fondo-tema3
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero.text-white
        span 3
      h1 Normativa ambiental

    .row
      .col-md-7.mb-4(data-aos="fade-right")
        p En Colombia, se han adoptado figuras jurídicas que establecen acciones para la solución de las problemáticas ambientales que afrontan, todo con el fin de avanzar en conseguir los objetivos que están 
          resaltado encaminados hacia el desarrollo sostenible 
          |  y que utilizan mecanismos tales como la evaluación ambiental para autorizar o sancionar proyectos que incumplan con estas normas ambientales. 
        p.cuadrado-texto La normativa establece las normas, tratados y leyes que funcionan para regular las acciones de la humanidad sobre los componentes biofísicos, con el fin de disminuir los impactos ambientales.
      .col-md-5.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema3-img.png', alt='Imagen decorativa')

    p.mb-4(data-aos="fade") Las normas ambientales se pueden aplicar a cualquier tipo de organización, sin importar el tamaño, la naturaleza o su tipo, ya que los aspectos ambientales están inmersos en cada actuar de la vida cotidiana. Se clasifican de la siguiente manera:

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-primario25")
      .row.justify-content-center(titulo="Protección del ambiente")
        .col-md-2.col-6.mb-4.mb-md-0
          img.px-4(src='@/assets/curso/tema3-acord1.svg', alt='Protección del ambiente')
        .col-md-9
          h5.mb-0 Concepto
          p Son todas aquellas normas que tienen como propósito la prevención, reducción y eliminación de contaminaciones o afectaciones al medio ambiente. 
          h5.mb-0 Factores
          p Se tiene en cuenta el cambio de procesos para prevenir emisiones atmosféricas y, a su vez, controles y mediciones en laboratorios especializados.  
      .row.justify-content-center(titulo="Gestión de aguas residuales")
        .col-md-2.col-6.mb-4.mb-md-0
          img.px-4(src='@/assets/curso/tema3-acord2.svg', alt='Gestión de aguas residuales')
        .col-md-9
          h5.mb-0 Concepto
          p Estas normas están encaminadas a la prevención de la contaminación de aguas superficiales. 
          h5.mb-0 Factores
          p Las redes de transporte de aguas y el tratamiento de sus residuos. 
      .row.justify-content-center(titulo="Gestión de residuos")
        .col-md-2.col-6.mb-4.mb-md-0
          img.px-4(src='@/assets/curso/tema3-acord3.svg', alt='Gestión de residuos')
        .col-md-9
          h5.mb-0 Concepto
          p Se refiere a las actividades que tienen como objetivo prevenir la generación de residuos y así poder disminuir las afectaciones que tiene el ambiente. 
          h5.mb-0 Factores
          p La recolección y transporte de los residuos es clave en este proceso, asimismo, lo es el tratamiento y eliminación de residuos peligrosos.     
      .row.justify-content-center(titulo="Protección y recuperación de suelos, aguas subterráneas y aguas superficiales")
        .col-md-2.col-6.mb-4.mb-md-0
          img.px-4(src='@/assets/curso/tema3-acord4.svg', alt='Protección y recuperación de suelos, aguas subterráneas y aguas superficiales')
        .col-md-9
          h5.mb-0 Concepto
          p Son todas aquellas medidas para prevenir las filtraciones de contaminantes en los suelos y cuerpos de agua. 
          h5.mb-0 Factores
          p Se usan para limpiar el suelo y cuerpos de agua de contaminantes que puedan traer repercusiones en la salud humana.
      .row.justify-content-center(titulo="Atenuación de ruidos y vibraciones")
        .col-md-2.col-6.mb-4.mb-md-0
          img.px-4(src='@/assets/curso/tema3-acord5.svg', alt='Atenuación de ruidos y vibraciones')
        .col-md-9
          h5.mb-0 Concepto
          p Son las medidas que tienden a controlar los ruidos y vibraciones, en su mayoría, generadas por procesos industriales. 
          h5.mb-0 Factores
          p Se realizan modificaciones preventivas de los procesos en la fuente, como es la instalación de sistemas antirruido y vibraciones. 
      .row.justify-content-center(titulo="Protección de la biodiversidad y de los paisajes")
        .col-md-2.col-6.mb-4.mb-md-0
          img.px-4(src='@/assets/curso/tema3-acord6.svg', alt='Protección de la biodiversidad y de los paisajes')
        .col-md-9
          h5.mb-0 Concepto
          p Se refiere a aquellas actividades destinadas a la conservación y rehabilitación de especies de fauna y flora. 
          h5.mb-0 Factores
          p Es la protección y rehabilitación de hábitats y especies que han sido intervenidos. 
      .row.justify-content-center(titulo="Protección contra las radiaciones")
        .col-md-2.col-6.mb-4.mb-md-0
          img.px-4(src='@/assets/curso/tema3-acord7.svg', alt='Protección contra las radiaciones')
        .col-md-9
          h5.mb-0 Concepto
          p Son todas aquellas normas que, mediante mediciones, pretenden reducir las consecuencias negativas que traen consigo las radiaciones. 
          h5.mb-0 Factores
          p Se tienen en cuenta el tratamiento y el transporte que tienen los residuos radiactivos.     

    p.mb-4(data-aos="fade") En Colombia, existe gran cantidad de normas ambientales, como las que se describen a continuación:

    figure.mb-5
      img(src='@/assets/curso/tema3-infografia.svg', alt='Texto que describa la imagen')

    ul.lista-ul--color
      li.mb-0
        i.fas.fa-chevron-right
        h3 Tratados internacionales

    p.mb-4(data-aos="fade") Son acuerdos entre dos o más países, que quedan por escrito, los cuales están regulados por las normas del derecho internacional.

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-md-10.tarjeta.bg-primario10.py-5.px-4.px-md-5
        h2.text-center Tratados internacionales en Colombia
        LineaTiempoB.color-primario(:datos="datosLineaTiempoB")

    
    ul.lista-ul--color
      li.mb-0
        i.fas.fa-chevron-right
        h3 Leyes ambientales

    p.mb-4(data-aos="fade") Corresponden a los principios y normas que buscan la protección, conservación, recuperación del medio ambiente y preservación de los recursos naturales. 

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-md-8.p-0
        .tabla-a.color-acento-contenido.mb-4
          table
            thead
              tr.text-white.naranja
                td(colspan="2") 
                  h3.mb-0 Leyes ambientales en Colombia
              tr.text-white
                th.columna-1 
                  h4.mb-0 Leyes generales
                th 
                  h4.mb-0 Concepto
            tbody
              tr
                td.sub-destacado Ley 23 de 1973
                td.bg-white En la cual se dictan los principios sobre prevención de los contaminantes del agua, suelo y aire.
              tr
                td.sub-destacado Ley 29 de 1992
                td.bg-white Por medio de la cual se adopta el “Protocolo de Montreal relativo a las sustancias agotadoras de la capa de ozono”.
              tr
                td.sub-destacado Ley 99 de 1993
                td.bg-white Por la cual se crea el Ministerio del Medio Ambiente.
              tr
                td.sub-destacado Ley 388 de 1997
                td.bg-white Se define el ordenamiento territorial municipal y distrital.
              tr
                td.sub-destacado Ley 491 de 1999
                td.bg-white Se modifica el Código Penal y se establecen delitos contra los recursos naturales y el medio ambiente.  


    ul.lista-ul--color
      li.mb-0
        i.fas.fa-chevron-right
        h3 Decretos ambientales

    p(data-aos="fade") Tienen como propósito velar por la recuperación, conservación, protección, manejo, uso y aprovechamiento de los recursos naturales renovables de la nación. 

    p.mb-4(data-aos="fade") Destina, como un servicio público, la salud y el saneamiento ambiental.

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-md-8.p-0
        .tabla-a.color-acento-contenido.mb-4
          table
            thead
              tr.text-white.naranja
                td(colspan="2") 
                  h3.mb-0 Decretos ambientales en Colombia
              tr.text-white
                th.columna-1 
                  h4.mb-0 Decreto
                th 
                  h4.mb-0 Concepto
            tbody
              tr
                td.sub-destacado Decreto 283 de 1990
                td.bg-white Hidrocarburos.
              tr
                td.sub-destacado Decreto 1791 de 1996
                td.bg-white Aprovechamiento forestal.
              tr
                td.sub-destacado Decreto 870 de 2017
                td.bg-white Se establece el pago por servicios ambientales.
              tr
                td.sub-destacado Decreto 2820 de 2010
                td.bg-white Se reglamenta el Título VIII de la Ley 99 de 1993 sobre licencias ambientales.



    ul.lista-ul--color
      li.mb-0
        i.fas.fa-chevron-right
        h3 Resoluciones ambientales       

    p.mb-4(data-aos="fade") Son todos los lineamientos que la autoridad requiere para la elaboración y ejecución de los estudios ambientales que deben ser presentados ante las autoridades.

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-md-8.p-0
        .tabla-a.color-acento-contenido.mb-4
          table
            thead
              tr.text-white.naranja
                td(colspan="2") 
                  h3.mb-0 Resoluciones ambientales en Colombia
              tr.text-white
                th.columna-1 
                  h4.mb-0 Resolución
                th 
                  h4.mb-0 Concepto
            tbody
              tr
                td.sub-destacado Resolución 1023 de 2005
                td.bg-white Se adoptan guías ambientales que serán utilizadas como medidas de autogestión. 
              tr
                td.sub-destacado Resolución 2064 de 2010
                td.bg-white En esta se reglamentan las medidas a tomar luego del decomiso de especies de fauna y flora. 
              tr
                td.sub-destacado Resolución 260 de 2011
                td.bg-white En la cual se fijan las tarifas para el cobro de los servicios de evaluación y seguimiento de licencias ambientales. 
              tr
                td.sub-destacado Resolución 689 de 2016
                td.bg-white Se reglamentan los límites máximos de fósforo en jabones. 
              tr
                td.sub-destacado Resolución 2210 de 2018
                td.bg-white Se reglamenta el uso del sello minero ambiental.
              tr
                td.sub-destacado Resolución 1447 de 2018
                td.bg-white Se reglamenta el sistema de monitoreo y evaluación de las acciones de mitigación. 
              tr
                td.sub-destacado Resolución 1561 de 2019
                td.bg-white Se establecen los términos de referencia para la elaboración de estudios de impacto ambiental.        



</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
    datosLineaTiempoB: [
      {
        texto:
          '<ul class="lista-ul--color"><li class="mb-0"><i class="fas fa-check"></i>Convenio de Viena para la protección de la capa de ozono y el Protocolo de Montreal.</li><li class="mb-0"><i class="fas fa-check"></i>Ratificado por Colombia por medio de la Ley 30 de 1990.</li></ul>',
        icono: require('@/assets/curso/tema3-1-ico-linea.svg'),
      },
      {
        texto:
          '<ul class="lista-ul--color"><li class="mb-0"><i class="fas fa-check"></i>Convención de Basilea sobre residuos peligrosos (1989).</li><li class="mb-0"><i class="fas fa-check"></i>Reducir el volumen de residuos para proteger la salud humana y el medio ambiente. Colombia la ratificó mediante la Ley 256 de 1996.</li></ul>',
        icono: require('@/assets/curso/tema3-1-ico-linea2.svg'),
      },
      {
        texto:
          '<ul class="lista-ul--color"><li class="mb-0"><i class="fas fa-check"></i>Convención para la protección de la biodiversidad.</li><li class="mb-0"><i class="fas fa-check"></i>Se estableció en la conferencia de Río de Janeiro en el año 1991 y tiene como principal objetivo la protección de la biodiversidad.</li></ul>',
        icono: require('@/assets/curso/tema3-1-ico-linea3.svg'),
      },
      {
        texto:
          '<ul class="lista-ul--color"><li class="mb-0"><i class="fas fa-check"></i>Convención para el cambio climático. </li><li class="mb-0"><i class="fas fa-check"></i>Busca desarrollar temas frente a la educación, formación, sensibilización y cumplimiento de los compromisos adquiridos. 1994.</li></ul>',
        icono: require('@/assets/curso/tema3-1-ico-linea4.svg'),
      },
    ],
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
