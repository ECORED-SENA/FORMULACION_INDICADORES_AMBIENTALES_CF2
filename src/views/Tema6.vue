<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.bloque-fondo-tema6
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero.text-white
        span 6
      h1 Marco ordenador de indicadores

    .row
      .col-md-7.mb-4(data-aos="fade-right")
        p 
          resaltado El marco ordenador 
          | es una etapa necesaria dentro del proceso de formulación de indicadores ambientales, ya que permite organizarlos y presentarlos de manera lógica. Estos marcos son importantes, ya que se convierten en instrumentos para la comunicación sobre toda la información que contienen los indicadores. 
        p.cuadrado-texto En la actualidad, existen diversos marcos ordenadores para la presentación de indicadores, entre ellos está el 
          resaltado PER
          | , que significa Presión-Estado-Respuesta, el cual fue desarrollado por la Organización para la Cooperación y el Desarrollo Económico OCDE. También está el 
          resaltado marco ordenador por temáticas
          | , el cual es utilizado en Canadá y las Naciones Unidas. En América Latina, se utiliza, generalmente, el ordenador por temáticas, adaptándolo a las necesidades específicas de cada indicador.   
      .col-md-5.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema6-img.png', alt='Imagen decorativa')

    p.mb-4(data-aos="fade") Para el desarrollo del marco ordenador por temática, se debe organizar por 
      resaltado tema y subtemas
      | , de la siguiente manera: 

    .row.justify-content-center
      .col-md-5.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema6-A.svg', alt='Tema A')
      .col-md-5.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema6-B.svg', alt='Tema B')

    p(data-aos="fade") Los temas pueden cambiar, de acuerdo con las necesidades de cada uno. 

    p.mb-4(data-aos="fade") Este es un ejemplo de cómo se puede estructurar un marco ordenador por temática:

    .row
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-secundario.text-center
          .tarjeta-flip__contenedor
            .tarjeta-flip__img
              img.mb-3(src='@/assets/curso/tema6-ico1.svg', alt='Sistema Socioecológico')
              h2.mb-2 Tema A
              h4 Sistema Socioecológico 
            .tarjeta-flip__contenido.bg-tarjeta-flip.p-4
              h5 Indicadores: 
              p.mb-0 Biodiversidad y áreas protegidas
              p.mb-0 Cambio climático
              p.mb-0 Liberación de ozono
              p.mb-0 Lluvias ácidas
              p.mb-0 Huella carbono
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-secundario.text-center(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img
              img.mb-3(src='@/assets/curso/tema6-ico2.svg', alt='Bienestar y salud humana')
              h2.mb-2 Tema B
              h4 Bienestar y salud humana 
            .tarjeta-flip__contenido.bg-tarjeta-flip.p-4
              h5 Indicadores: 
              p.mb-0 Calidad aire
              p.mb-0 Índice de sostenibilidad ambiental
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-secundario.text-center
          .tarjeta-flip__contenedor
            .tarjeta-flip__img
              img.mb-3(src='@/assets/curso/tema6-ico3.svg', alt='Actividades humanas')
              h2.mb-2 Tema C
              h4 Actividades humanas 
            .tarjeta-flip__contenido.bg-tarjeta-flip.p-4
              h5 Indicadores: 
              p.mb-0 Consumo energía
              p.mb-0 Consumo agua
              p.mb-0 Desechos sólidos


</template>

<script>
export default {
  name: 'Tema6',
  data: () => ({
    // variables de vue
    indicadorTarjetaFlip: true,
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
