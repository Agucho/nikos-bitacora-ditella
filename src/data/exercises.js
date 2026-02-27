function createPresenceExercise() {
  return {
    title: 'Presencia y consciencia',
    fields: [
      { id: 'caracteristicaPropia', label: 'Una característica positiva tuya (no repetir)', type: 'textarea' },
      { id: 'caracteristicaOtra', label: 'Una característica positiva de otra persona (no repetir)', type: 'textarea' },
      { id: 'emocionActual', label: 'Emoción actual', type: 'text' },
      { id: 'sensacionesCorporales', label: 'Sensaciones corporales', type: 'textarea' },
      { id: 'respiracion', label: 'Cómo está tu respiración', type: 'text' },
      { id: 'experienciaPresente', label: 'Experiencia del momento presente', type: 'textarea' }
    ]
  };
}

export const variableExercises = {
      1: {
        title: 'Catalogate',
        fields: [
          { id: 'humor', label: 'Estado de humor general' },
          { id: 'familia', label: 'Familia' },
          { id: 'amigos', label: 'Amigos' },
          { id: 'vidaSocial', label: 'Vida social' },
          { id: 'relaciones', label: 'Relaciones' },
          { id: 'trabajo', label: 'Trabajo' },
          { id: 'salud', label: 'Salud' },
          { id: 'estudio', label: 'Estudio' },
          { id: 'ejercicio', label: 'Ejercicio' },
          { id: 'alimentacion', label: 'Alimentación' }
        ],
        type: 'rating'
      },
      2: {
        title: 'Ves que puedo',
        fields: [
          { id: 'situacion', label: '¿Cuándo fue la última vez que pensaste que no podías más y aun así continuaste?', type: 'textarea' }
        ],
        type: 'text'
      },
      3: {
        title: 'Mentalidad de crecimiento',
        fields: [
          { id: 'deberiaSer', label: 'Algo en lo que creías que "deberías ser bueno"', type: 'textarea' },
          { id: 'noSalio', label: 'Algo que no te salió y creíste que era porque "no eras bueno"', type: 'textarea' }
        ],
        type: 'text'
      },
      4: {
        title: 'Crítica y vergüenza',
        fields: [
          { id: 'critica', label: 'Una crítica que te dio vergüenza', type: 'textarea' },
          { id: 'aprendizaje', label: '¿Qué aprendiste?', type: 'textarea' }
        ],
        type: 'text'
      },
      5: {
        title: 'Atención plena',
        fields: [
          { id: 'lugar', label: 'Lugar elegido', type: 'text' },
          { id: 'sentimiento', label: '¿Cómo te sentiste al terminar?', type: 'textarea' }
        ],
        type: 'text'
      },
      6: {
        title: 'Compromiso físico',
        fields: [
          { id: 'compromiso', label: 'Me comprometo a...', type: 'textarea', placeholder: 'Describe la actividad física o deporte' }
        ],
        type: 'text'
      },
      7: {
        title: 'No me salió',
        fields: [
          { id: 'quePaso', label: 'Qué no salió', type: 'textarea' },
          { id: 'queBien', label: 'Qué hiciste bien', type: 'textarea' },
          { id: 'repetir', label: 'Qué repetirías en otros ámbitos', type: 'textarea' }
        ],
        type: 'text'
      },
      8: {
        title: 'Actividades que me hacen bien',
        fields: [
          { id: 'hoy', label: 'Hoy', type: 'textarea' },
          { id: 'semana', label: 'Esta semana', type: 'textarea' },
          { id: 'mes', label: 'Este mes', type: 'textarea' }
        ],
        type: 'text'
      },
      9: {
        title: 'Estrés consciente',
        fields: [
          { id: 'estres', label: '¿Con qué te vas a estresar esta semana?', type: 'textarea' }
        ],
        type: 'text'
      },
      10: {
        title: 'Kit de auto-calma',
        fields: [
          { id: 'kit', label: '¿Qué objetos o recursos elegís para calmarte?', type: 'textarea' }
        ],
        type: 'text'
      },
      // DÍAS 11-20: Regulación emocional y cognitiva
      11: {
        title: 'Detectar pensamientos negativos',
        fields: [
          { id: 'pensamientosNegativos', label: 'Detectar pensamientos negativos', type: 'textarea' },
          { id: 'pensamientosNuevos', label: 'Crear pensamientos nuevos y precisos para cada situación', type: 'textarea' }
        ],
        type: 'text'
      },
      12: {
        title: 'Escaneo corporal',
        fields: [
          { id: 'escaneo', label: 'Escaneo corporal completo', type: 'textarea', placeholder: 'Describe tu experiencia durante el escaneo...' },
          { id: 'sensaciones', label: '¿Qué sentiste durante el ejercicio?', type: 'textarea' }
        ],
        type: 'text'
      },
      13: {
        title: 'Registro de emociones',
        fields: [
          { id: 'placenteras', label: 'Emociones placenteras', type: 'textarea' },
          { id: 'neutras', label: 'Emociones neutras', type: 'textarea' },
          { id: 'displacenteras', label: 'Emociones displacenteras', type: 'textarea' },
          { id: 'planAccion', label: 'Plan de acción', type: 'textarea' }
        ],
        type: 'text'
      },
      14: {
        title: 'Respiración 7/11 y cualidades',
        fields: [
          { id: 'respiracion', label: 'Experiencia con respiración 7/11', type: 'textarea' },
          { id: 'cualidades', label: 'Escribe 5 cualidades positivas tuyas', type: 'textarea', placeholder: '1.\n2.\n3.\n4.\n5.' }
        ],
        type: 'text'
      },
      15: {
        title: 'Perdón y respiración al cuadrado',
        fields: [
          { id: 'perdon', label: 'Perdonar un error del pasado', type: 'textarea' },
          { id: 'respiracion', label: 'Respiración al cuadrado', type: 'textarea' },
          { id: 'experiencia', label: '¿Qué experimentaste?', type: 'textarea' }
        ],
        type: 'text'
      },
      16: {
        title: 'Preocupado vs ocupado',
        fields: [
          { id: 'preocupacion', label: 'Preocupado vs ocupado', type: 'textarea' },
          { id: 'vidaPersonal', label: 'Hacer algo distinto - Vida personal', type: 'textarea' },
          { id: 'vidaProfesional', label: 'Hacer algo distinto - Vida profesional', type: 'textarea' }
        ],
        type: 'text'
      },
      17: {
        title: 'Ejercicio del color',
        fields: [
          { id: 'colorFavorito', label: 'Tu color favorito', type: 'text' },
          { id: 'detecciones', label: 'Detectar tu color favorito durante el día', type: 'textarea', placeholder: 'Anota cada vez que veas tu color...' }
        ],
        type: 'text'
      },
      18: {
        title: 'Si yo puedo...',
        fields: [
          { id: 'frases', label: 'Completar 10 frases: "Si yo puedo ___, entonces puedo ___"', type: 'textarea', placeholder: '1. Si yo puedo..., entonces puedo...\n2. Si yo puedo..., entonces puedo...\n...' }
        ],
        type: 'text'
      },
      19: {
        title: 'Resolver un conflicto',
        fields: [
          { id: 'conflicto', label: 'Describe el conflicto', type: 'textarea' },
          { id: 'soluciones', label: '5 soluciones posibles', type: 'textarea', placeholder: '1.\n2.\n3.\n4.\n5.' },
          { id: 'prosContras', label: 'Pros y contras de cada solución', type: 'textarea' }
        ],
        type: 'text'
      },
      20: {
        title: 'Conociendo mi cuerpo',
        fields: [
          { id: 'bitacora', label: 'Bitácora corporal guiada', type: 'textarea', placeholder: 'Registra las sensaciones en cada parte de tu cuerpo...' }
        ],
        type: 'text'
      },
      // DÍA 21: Interocepción
      21: {
        title: 'Interocepción',
        fields: [
          { id: 'latidos', label: 'Escuchar y registrar latidos del corazón', type: 'textarea', placeholder: 'Describe tu experiencia escuchando tus latidos...' }
        ],
        type: 'text'
      },
      // DÍAS 22-30: Presencia y consciencia (mismas consignas)
      22: { ...createPresenceExercise(), type: 'presence' },
      23: { ...createPresenceExercise(), type: 'presence' },
      24: { ...createPresenceExercise(), type: 'presence' },
      25: { ...createPresenceExercise(), type: 'presence' },
      26: { ...createPresenceExercise(), type: 'presence' },
      27: { ...createPresenceExercise(), type: 'presence' },
      28: { ...createPresenceExercise(), type: 'presence' },
      29: { ...createPresenceExercise(), type: 'presence' },
      30: { ...createPresenceExercise(), type: 'presence' },
      // DÍAS 31-40: Percepción y patrones
      31: {
        title: 'Ponerse cómodo',
        fields: [
          { id: 'postura', label: 'Describe tu postura más cómoda', type: 'textarea' },
          { id: 'sensaciones', label: '¿Qué sientes en tu cuerpo?', type: 'textarea' }
        ],
        type: 'text'
      },
      32: {
        title: 'UFA',
        fields: [
          { id: 'queSalioMal', label: '¿Qué salió mal?', type: 'textarea' },
          { id: 'comoTeSentiste', label: '¿Cómo te sentiste?', type: 'textarea' }
        ],
        type: 'text'
      },
      33: {
        title: 'Tengo / Hago',
        fields: [
          { id: 'nuncaTuve', label: 'Lo que nunca tuviste', type: 'textarea' },
          { id: 'nuncaHice', label: 'Lo que nunca hiciste', type: 'textarea' }
        ],
        type: 'text'
      },
      34: {
        title: 'Frases limitantes',
        fields: [
          { id: 'fraseLimitante', label: 'Una frase limitante que te decís', type: 'textarea' },
          { id: 'evidencias', label: 'Evidencias reales que contradicen esa frase', type: 'textarea' }
        ],
        type: 'text'
      },
      35: {
        title: 'Redescubrir un lugar',
        fields: [
          { id: 'lugar', label: 'Lugar habitual elegido', type: 'text' },
          { id: 'queViste', label: '¿Qué viste diferente?', type: 'textarea' }
        ],
        type: 'text'
      },
      36: {
        title: 'Ejercicio del sabor',
        fields: [
          { id: 'alimento', label: '¿Qué comiste?', type: 'text' },
          { id: 'experiencia', label: 'Describe la experiencia sensorial', type: 'textarea' }
        ],
        type: 'text'
      },
      37: {
        title: 'Chequeo emocional',
        fields: [
          { id: 'manana', label: 'Emoción de la mañana', type: 'text' },
          { id: 'tarde', label: 'Emoción de la tarde', type: 'text' },
          { id: 'noche', label: 'Emoción de la noche', type: 'text' },
          { id: 'reflexion', label: 'Reflexión del día', type: 'textarea' }
        ],
        type: 'text'
      },
      38: {
        title: 'Detección de patrones',
        fields: [
          { id: 'patronDetectado', label: 'Patrón repetido que identificaste', type: 'textarea' },
          { id: 'cuandoOcurre', label: '¿Cuándo ocurre?', type: 'textarea' }
        ],
        type: 'text'
      },
      39: {
        title: 'Cambio consciente',
        fields: [
          { id: 'reaccionAutomatica', label: 'Reacción automática que querés cambiar', type: 'textarea' },
          { id: 'nuevaRespuesta', label: 'Nueva respuesta elegida', type: 'textarea' },
          { id: 'resultado', label: '¿Qué pasó cuando lo intentaste?', type: 'textarea' }
        ],
        type: 'text'
      },
      40: {
        title: 'Integración',
        fields: [
          { id: 'queEntiendo', label: '¿Qué estás entendiendo de vos?', type: 'textarea' },
          { id: 'aprendizajes', label: 'Aprendizajes hasta ahora', type: 'textarea' }
        ],
        type: 'text'
      },
      // DÍAS 41-50: Identidad
      41: {
        title: 'Identidad real vs imagen',
        fields: [
          { id: 'comoMeVeo', label: 'Cómo me veo', type: 'textarea' },
          { id: 'comoMeVenOtros', label: 'Cómo creo que me ven otros', type: 'textarea' },
          { id: 'diferencias', label: 'Diferencias entre ambas', type: 'textarea' }
        ],
        type: 'text'
      },
      42: {
        title: 'Qué ocultás',
        fields: [
          { id: 'queOculto', label: '¿Qué parte de vos ocultás?', type: 'textarea' },
          { id: 'porQue', label: '¿Por qué?', type: 'textarea' }
        ],
        type: 'text'
      },
      43: {
        title: 'Qué te da orgullo',
        fields: [
          { id: 'orgullo', label: '¿De qué estás orgulloso/a?', type: 'textarea' },
          { id: 'porQue', label: '¿Por qué te genera orgullo?', type: 'textarea' }
        ],
        type: 'text'
      },
      44: {
        title: 'Qué evitás',
        fields: [
          { id: 'queEvito', label: '¿Qué situaciones o conversaciones evitás?', type: 'textarea' },
          { id: 'quePassaria', label: '¿Qué pasaría si no las evitaras?', type: 'textarea' }
        ],
        type: 'text'
      },
      45: {
        title: 'Bajo presión',
        fields: [
          { id: 'comoReacciono', label: '¿Cómo reaccionás bajo presión?', type: 'textarea' },
          { id: 'queRevela', label: '¿Qué revela esto de vos?', type: 'textarea' }
        ],
        type: 'text'
      },
      46: {
        title: 'Autenticidad',
        fields: [
          { id: 'cuandoSoyAutentico', label: '¿Cuándo sos más auténtico/a?', type: 'textarea' },
          { id: 'cuandoNo', label: '¿Cuándo no lo sos?', type: 'textarea' }
        ],
        type: 'text'
      },
      47: {
        title: 'Coherencia personal',
        fields: [
          { id: 'valores', label: 'Tus valores principales', type: 'textarea' },
          { id: 'coherencia', label: '¿Tus acciones están alineadas con ellos?', type: 'textarea' }
        ],
        type: 'text'
      },
      48: {
        title: 'Zona de confort',
        fields: [
          { id: 'dentroZona', label: '¿Qué está dentro de tu zona de confort?', type: 'textarea' },
          { id: 'fueraZona', label: '¿Qué te gustaría hacer que está fuera?', type: 'textarea' }
        ],
        type: 'text'
      },
      49: {
        title: 'Relación contigo mismo/a',
        fields: [
          { id: 'comoMeTrato', label: '¿Cómo me trato a mí mismo/a?', type: 'textarea' },
          { id: 'queNecesito', label: '¿Qué necesito de mí?', type: 'textarea' }
        ],
        type: 'text'
      },
      50: {
        title: 'Síntesis de identidad',
        fields: [
          { id: 'quienSoy', label: '¿Quién soy realmente?', type: 'textarea' },
          { id: 'quienQuieroSer', label: '¿Quién quiero ser?', type: 'textarea' }
        ],
        type: 'text'
      },
      // DÍAS 51-60: Integración y cierre
      51: {
        title: 'Aprendizajes clave',
        fields: [
          { id: 'aprendizajes', label: 'Principales aprendizajes hasta ahora', type: 'textarea' }
        ],
        type: 'text'
      },
      52: {
        title: 'Cambios mentales',
        fields: [
          { id: 'cambiosMentales', label: '¿Qué cambió en tu forma de pensar?', type: 'textarea' }
        ],
        type: 'text'
      },
      53: {
        title: 'Cambios corporales',
        fields: [
          { id: 'cambiosCorporales', label: '¿Qué cambió en tu relación con tu cuerpo?', type: 'textarea' }
        ],
        type: 'text'
      },
      54: {
        title: 'Herramientas que funcionaron',
        fields: [
          { id: 'herramientas', label: '¿Qué ejercicios o herramientas te funcionaron mejor?', type: 'textarea' }
        ],
        type: 'text'
      },
      55: {
        title: 'Hábitos a sostener',
        fields: [
          { id: 'habitos', label: '¿Qué hábitos querés sostener?', type: 'textarea' },
          { id: 'como', label: '¿Cómo vas a hacerlo?', type: 'textarea' }
        ],
        type: 'text'
      },
      56: {
        title: 'Desafíos pendientes',
        fields: [
          { id: 'desafios', label: '¿Qué desafíos quedan por delante?', type: 'textarea' }
        ],
        type: 'text'
      },
      57: {
        title: 'Proyección futura',
        fields: [
          { id: 'comoMeVeoFuturo', label: '¿Cómo te ves en 3 meses?', type: 'textarea' },
          { id: 'queHaras', label: '¿Qué harás para llegar ahí?', type: 'textarea' }
        ],
        type: 'text'
      },
      58: {
        title: 'Agradecimientos',
        fields: [
          { id: 'agradecimientos', label: '¿A quién o qué agradecés de este proceso?', type: 'textarea' }
        ],
        type: 'text'
      },
      59: {
        title: 'Preparación para el cierre',
        fields: [
          { id: 'reflexion', label: 'Reflexión final antes del último día', type: 'textarea' }
        ],
        type: 'text'
      },
      60: {
        title: 'Cierre final',
        fields: [
          { id: 'sintesis', label: 'Síntesis del proceso completo', type: 'textarea' },
          { id: 'queTeLlevas', label: '¿Qué te llevás?', type: 'textarea' },
          { id: 'queSigue', label: '¿Qué sigue ahora?', type: 'textarea' }
        ],
        type: 'text'
      }
    };

export function getExerciseForDay(dayNumber) {
  return variableExercises[dayNumber] || {
    title: `Reflexion del dia ${dayNumber}`,
    type: 'text',
    fields: [
      { id: 'reflexion', label: 'Escribe tu reflexion del dia', type: 'textarea' }
    ]
  };
}
