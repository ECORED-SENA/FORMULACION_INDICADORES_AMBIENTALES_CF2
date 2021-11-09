<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-tasks" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-segundo.color-acento-contenido.mb-4(data-aos="fade")
      h2 Cuestionario de selección múltiple
    .row.mb-4.justify-content-center.align-items-center
      .col-6.col-md-4.col-lg-3.mb-4.mb-md-0.mb-lg-5(data-aos="fade-right")
        .tarjeta.tarjeta--gris.h-100.d-flex.align-items-center.p-lg-2
          figure.px-lg-5
            img.px-lg-2.py-lg-4(src="@/assets/curso/act-didactica.svg", alt="Cuestionario de selección múltiple")
      .col-12.col-md-8.col-lg-9.mb-lg-5(data-aos="fade-left")
        .col-lg-6.mb-lg-5.mb-3 
          p Afianzar algunos de los conceptos sobre la formulación de indicadores ambientales.
        .tarjeta.color-primario-degrade.p-2
          .row.justify-content-around.align-items-center            
            .col-sm.mb-3.mb-sm-0.text-white
              p.fw-bold.mb-0.px-lg-2 Seleccione la respuesta correcta.
            .col-auto
              a.boton.boton--b(:href="obtenerLink('/actividades/actividad.html')" target="_blank")
                span Realizar
                i.fas.fa-puzzle-piece

</template>

<script>
export default {
  name: 'Actividad',
}
</script>

<style lang="sass"></style>
