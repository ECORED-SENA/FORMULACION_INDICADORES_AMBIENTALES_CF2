<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.bloque-fondo-tema2
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero.text-white
        span 2
      h1 Objetivos, metas y variables ambientales


    .row
      .col-md-7.mb-4(data-aos="fade-right")
        p Los objetivos ambientales son aquellos que tienen por finalidad 
          resaltado  mejorar la situación ambiental de alguna actividad, proyecto u obra.  
          |  Se utilizan para disminuir los impactos ambientales que se generen. Deben tener una meta y todas estas deben encontrarse relacionadas con el objetivo previsto.
        p Para alcanzar estos objetivos, se usan las medidas de actuación, las cuales deben ser medibles y cuantificables; por ejemplo, disminuir el uso del agua a 30 metros cúbicos/día. 
        p.cuadrado-texto Dentro de los sistemas de gestión ambiental se deben definir objetivos claros al momento de iniciar el proceso, ya que estos definirán el rumbo de la organización, sus políticas y proyecciones a futuro.
      .col-md-5.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema2-img.png', alt='Imagen decorativa')

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-md-10
        .row.justify-content-center.cajon.color-primario.p-4
          .col-md-2.col-6
            img.px-md-3(src='@/assets/curso/tema2-ico.svg', alt='Icono decorativo')
          .col-md-9
            p.mb-0 Los objetivos ambientales no solo están encaminados a procesos productivos, también se definen en ámbitos sociales y económicos, y dentro de las políticas del gobierno. Estos deben responder a normativas específicas, dentro de las cuales se establecen parámetros de medición y seguimiento a estos objetivos planteados.

    p.mb-4(data-aos="fade") Las variables ambientales pueden ser agrupadas en diferentes áreas temáticas, así:

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-md-10.tarjeta.bg-primario10.py-5.px-4.px-md-5
        h2.text-center Variables ambientales
        LineaTiempoB.color-primario.tema2-linea(:datos="datosLineaTiempoB")

    
    .row
      .col-md-5.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema3-1-img.png', alt='Imagen decorativa')
      .col-md-7.mb-4(data-aos="fade-left")
        p Los estudios de impacto ambiental sirven para 
          resaltado identificar e interpretar los impactos alcanzados
          | y, con estos datos, poder tomar medidas que disminuyan las consecuencias negativas que alguna actividad pueda tener hacia la
          resaltado salud humana y el equilibrio natural
          | Por eso, estos estudios son indispensables para la toma de decisiones oportunas, que prevean las acciones a seguir.
        p.cuadrado-texto Toda la información que se obtiene de ámbitos sociales, económicos y ambientales se transforma en indicadores, que permiten tener un modelo de la realidad y así cuantificar y comunicar de manera asertiva esta información hacia los tomadores de decisiones. Gracias a esto, los indicadores se convierten en una necesidad fundamental hacia el desarrollo sostenible.
      
    
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
    datosLineaTiempoB: [
      {
        titulo: 'Medio físico',
        texto:
          '<ul class="lista-ul--color"><li class="mb-0"><i class="fas fa-check"></i>Clima.</li><li class="mb-0"><i class="fas fa-check"></i>Composición geológica.</li><li class="mb-0"><i class="fas fa-check"></i>Hidrología.</li></ul>',
        icono: require('@/assets/curso/tema2-ico-linea.svg'),
      },
      {
        titulo: 'Medio biológico',
        texto:
          '<ul class="lista-ul--color"><li class="mb-0"><i class="fas fa-check"></i>Flora.</li><li class="mb-0"><i class="fas fa-check"></i>Fauna.</li><li class="mb-0"><i class="fas fa-check"></i>Ecosistemas.</li><li class="mb-0"><i class="fas fa-check"></i>Biodiversidad.</li></ul>',
        icono: require('@/assets/curso/tema2-ico-linea2.svg'),
      },
      {
        titulo: 'Medio económico y sociocultural',
        texto:
          '<ul class="lista-ul--color"><li class="mb-0"><i class="fas fa-check"></i>Usos del territorio.</li><li class="mb-0"><i class="fas fa-check"></i>Educación y cultura.</li><li class="mb-0"><i class="fas fa-check"></i>Infraestructuras.</li><li class="mb-0"><i class="fas fa-check"></i>Economía.</li></ul>',
        icono: require('@/assets/curso/tema2-ico-linea3.svg'),
      },
      {
        titulo: 'Medio perceptual',
        texto:
          '<ul class="lista-ul--color"><li class="mb-0"><i class="fas fa-check"></i>Paisaje.</li><li class="mb-0"><i class="fas fa-check"></i>Formaciones particulares.</li></ul>',
        icono: require('@/assets/curso/tema2-ico-linea4.svg'),
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
