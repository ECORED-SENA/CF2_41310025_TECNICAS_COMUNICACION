<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    #Actividad                
      <Actividad :cuestionario="cuestionario" />

</template>

<script>
import Actividad from '@/components/actividad/Actividad'
export default {
  name: 'ActividadDidactica',
  components: { Actividad },
  data: () => ({
    cuestionario: {
      tema: 'Comunicación escrita y estructura de informes empresariales',
      titulo: 'Cuestionario',
      introduccion:
        'Evaluar los conceptos clave de la comunicación escrita, la argumentación, y la elaboración de documentos en el contexto empresarial.',
      barajarPreguntas: false,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es uno de los tipos de documentos escritos mencionados en el documento?',
          imagen: require('@/assets/componentes/pregunta_1.svg'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Acta.', esCorrecta: true },
            { id: 'b', texto: 'Informe.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Revista.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Boletín.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: '¿Qué técnica es fundamental para una buena argumentación?',
          imagen: require('@/assets/componentes/pregunta_2.svg'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Reglas de inferencia.', esCorrecta: true },
            { id: 'b', texto: 'Opiniones subjetivas.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Uso de metáforas.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Narración extensa.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: '¿Qué elemento es esencial en una carta formal?',
          imagen: require('@/assets/componentes/pregunta_3.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Uso de modismos.', esCorrecta: false },
            { id: 'b', texto: 'Saludo inicial.', esCorrecta: true },
            {
              id: 'c',
              texto: 'Introducción breve.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Gráficos y tablas.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Qué se recomienda para hacer un informe más atractivo?',
          imagen: require('@/assets/componentes/pregunta_4.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Incluir largas citas textuales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Usar colores llamativos en todo el texto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ubicar adecuadamente fotos y gráficos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Evitar el uso de diagramas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Qué debe garantizar una argumentación bien estructurada?',
          imagen: require('@/assets/componentes/pregunta_1.svg'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Uso de terminología técnica.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Correspondencia entre premisas y conclusión.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Presentación visual impactante.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Lenguaje coloquial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Cuál es uno de los aspectos a considerar antes de escribir una carta?',
          imagen: require('@/assets/componentes/pregunta_2.svg'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'A quién va dirigida.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El tamaño del papel.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El tipo de tinta a usar.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La hora de envío.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: '¿Cuál es una ventaja de la comunicación escrita?',
          imagen: require('@/assets/componentes/pregunta_3.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Es inmediata.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Es permanente.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Es emocionalmente impactante.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Es difícil de organizar.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿Qué es un memorando?',
          imagen: require('@/assets/componentes/pregunta_4.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Un formato de comunicación con estructura precisa.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Un informe semanal de actividades.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Un resumen de un libro.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Una carta informal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: '¿Qué debe incluirse en un acta?',
          imagen: require('@/assets/componentes/pregunta_1.svg'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Acuerdos tomados.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Opiniones subjetivas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Resúmenes de otros documentos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Datos financieros.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué se recomienda hacer con los resultados negativos en un informe?',
          imagen: require('@/assets/componentes/pregunta_2.svg'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Incluirlos para extraer conclusiones.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Omitirlos para mantener el informe positivo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Minimizar su importancia.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Presentarlos en un anexo separado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
  computed: {},
  methods: {},
}
</script>
