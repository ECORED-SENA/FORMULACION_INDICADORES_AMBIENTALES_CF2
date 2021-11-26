<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bloque-fondo-tema1
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero.text-white
        span
          i.fas.fa-info
      h1 Introducción
    
    figure.mb-4
      img(src='@/assets/curso/intro-banner.png', alt='Texto que describa la imagen')

    p.mb-4(data-aos="fade") Es muy importante entender la necesidad del establecimiento de indicadores ambientales que promuevan la prevención de la contaminación y la conservación de los ecosistemas. Se invita a revisar la introducción a este componente.
    
    .row.justify-content-center.mb-4(data-aos="fade-down") 
      .col-md-10
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/5M_8uUMItfg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p.mb-5(data-aos="fade") Para la elaboración de este componente, se abordaron varios autores conocidos en 
      resaltado indicadores ambientales
      | , de quienes se han citado y referenciado conceptos y ejemplos para los fines educativos de esta materia, en el entendido de que el conocimiento es social y, por lo tanto, es para ser usado por quienes necesitan adquirirlo. Se espera que este documento sea útil para todos aquellos, aprendices y lectores en general, que estén interesados en acercarse a asuntos básicos de la 
      resaltado formulación de indicadores ambientales.



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
