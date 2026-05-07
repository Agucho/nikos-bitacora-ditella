import bitacoraDefinition from './bitacora-definition.v1.json';

const DAY_COUNT = 60;

export const BONUS_ENTRY_IDS = {
  diario: 'bonus_diario',
  final: 'bonus_final'
};

const bonusExercises = {
  [BONUS_ENTRY_IDS.diario]: {
    title: 'TU DIARIO INTEROCEPTIVO',
    type: 'text',
    fields: [
      {
        id: 'diarioDesafios',
        type: 'textarea',
        label: 'BREVE DESCRIPCIÓN DE LOS DESAFÍOS',
        subtitle: 'Escribí una breve descripción de los desafíos que estás enfrentando, en el área de tu vida que quieras.',
        placeholder: 'Escribilo...'
      },
      {
        id: 'diarioSensacionesOpciones',
        type: 'textarea',
        label: 'SENSACIONES INTERNAS FRENTE A LAS OPCIONES',
        subtitle: 'Describí, de la forma más detallada y precisa posible, las sensaciones internas que sentís mientras contemplás las diferentes opciones que tenés delante frente a ese desafío.\n\nConsiderá una por una las posibilidades que están frente a vos y tomá nota de cómo te sentís al imaginar elegir una por sobre otra.',
        placeholder: 'Escribilo...'
      },
      {
        id: 'diarioEleccionFinal',
        type: 'textarea',
        label: 'ELECCIÓN FINAL',
        subtitle: 'Anotá la elección que finalmente decidiste tomar y describí cualquier otra sensación que surja al tomar esta decisión final.',
        placeholder: 'Escribilo...'
      },
      {
        id: 'diarioPatronCuerpoDecision',
        type: 'textarea',
        label: 'PATRONES ENTRE TU CUERPO Y TUS DECISIONES',
        subtitle: 'Una vez que ya sabés qué sucedió con esa decisión que tomaste, podés volver a tu diario y observar qué te sucedía internamente en el momento en que tomaste esa decisión.\n\nCon el tiempo, quizás puedas dilucidar algún patrón particular entre tu toma de decisiones y tu cuerpo. Por ejemplo: una tensión en tu estómago al contemplar una acción que luego te llevó a una frustración, o una sensación liviana en tu pecho al considerar un enfoque que terminó siendo exitoso.',
        placeholder: 'Escribilo...'
      }
    ]
  },
  [BONUS_ENTRY_IDS.final]: {
    title: 'DESPUÉS DE ESTOS 60 DÍAS',
    type: 'text',
    fields: [
      {
        id: 'queRescatas60Dias',
        type: 'textarea',
        label: 'DESPUÉS DE ESTOS 60 DÍAS, ¿QUÉ RESCATÁS?',
        placeholder: 'Escribilo...'
      }
    ]
  }
};

export function isBonusEntryId(value) {
  return typeof value === 'string' && Object.prototype.hasOwnProperty.call(bonusExercises, value);
}

export const bonusEntryButtons = [
  { id: BONUS_ENTRY_IDS.diario, label: 'DIARIO' },
  { id: BONUS_ENTRY_IDS.final, label: 'FINAL' }
];

function invariant(condition, message) {
  if (!condition) {
    throw new Error(`[bitacora-definition] ${message}`);
  }
}

function validateDefinition(definition) {
  invariant(definition && typeof definition === 'object', 'Definition must be an object.');
  invariant(Array.isArray(definition.days), 'Definition must include a days array.');
  invariant(definition.days.length === DAY_COUNT, `Definition must include exactly ${DAY_COUNT} days.`);

  const seenDays = new Set();
  definition.days.forEach((entry) => {
    invariant(Number.isInteger(entry.day), 'Each day entry must include an integer "day".');
    invariant(entry.day >= 1 && entry.day <= DAY_COUNT, `Day out of range: ${entry.day}.`);
    invariant(!seenDays.has(entry.day), `Duplicate day found: ${entry.day}.`);
    seenDays.add(entry.day);

    const exercise = entry.primary_exercise;
    invariant(exercise && typeof exercise === 'object', `Day ${entry.day} is missing primary_exercise.`);
    invariant(typeof exercise.title === 'string' && exercise.title.trim(), `Day ${entry.day} is missing exercise title.`);
    invariant(Array.isArray(exercise.fields), `Day ${entry.day} exercise fields must be an array.`);
  });
}

validateDefinition(bitacoraDefinition);

const dayMap = new Map(bitacoraDefinition.days.map((entry) => [entry.day, entry]));

const situationPlaceholderByKey = {
  situacion: 'Describe la situación...',
  cuerpo: '¿Qué sentiste en tu cuerpo?',
  pensamientos: '¿Qué pensabas?',
  emociones: '¿Qué emociones experimentaste?'
};

const cognitivePlaceholderByKey = {
  visualizacion: 'Describe la situación...',
  pensamientosNuevos: '¿Qué pensamientos nuevos introduces?',
  intento: '¿Cómo los usaste?',
  cambioEmocion: 'Describe...',
  cambioCuerpo: 'Describe...',
  menosIncomoda: 'Describe...',
  masEficaz: 'Describe...'
};

function withPlaceholder(field, lookup) {
  return {
    ...field,
    placeholder: lookup[field.key] || ''
  };
}

export const situationFields =
  bitacoraDefinition.repeated_blocks.uncomfortable_situations_d1_d10.item_fields
    .map((field) => withPlaceholder(field, situationPlaceholderByKey));

export const cognitiveFields =
  bitacoraDefinition.repeated_blocks.cognitive_work_d11_d60.item_fields
    .map((field) => withPlaceholder(field, cognitivePlaceholderByKey));

export function getDayDefinition(dayNumber) {
  return dayMap.get(dayNumber) || null;
}

export function getDayDefinitionText(dayNumber) {
  return getDayDefinition(dayNumber)?.day_definition_text || '';
}

export function getExerciseForDay(dayNumber) {
  if (isBonusEntryId(dayNumber)) {
    return bonusExercises[dayNumber];
  }

  const dayEntry = getDayDefinition(dayNumber);
  if (!dayEntry) {
    return {
      title: `Reflexion del dia ${dayNumber}`,
      type: 'text',
      fields: [
        { id: 'reflexion', label: 'Escribe tu reflexion del dia', type: 'textarea' }
      ]
    };
  }

  return {
    title: dayEntry.primary_exercise.title,
    type: dayEntry.primary_exercise.type || 'text',
    description: dayEntry.primary_exercise.description,
    footer: dayEntry.primary_exercise.footer,
    intro: dayEntry.intro,
    fields: dayEntry.primary_exercise.fields
  };
}

function hasAnyText(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

function isPrimaryExerciseComplete(exercise, draft) {
  if (exercise.type === 'rating') {
    return true;
  }
  return exercise.fields.some((field) => hasAnyText(draft.variableExercise[field.id]));
}

function draftHasAnyMeaningfulContent(dayNumber, draft) {
  const exercise = getExerciseForDay(dayNumber);
  if (isPrimaryExerciseComplete(exercise, draft)) {
    return true;
  }
  if (hasAnyText(draft.gratitude)) {
    return true;
  }
  if (Array.isArray(draft.situations) && draft.situations.some((row) => Object.values(row || {}).some(hasAnyText))) {
    return true;
  }
  if (Array.isArray(draft.cognitiveWork) && draft.cognitiveWork.some((row) => Object.values(row || {}).some(hasAnyText))) {
    return true;
  }
  return false;
}

export function isDayCompleted(dayNumber, draft) {
  return draftHasAnyMeaningfulContent(dayNumber, draft);
}

export { bitacoraDefinition };
export const bonusTracks = bitacoraDefinition.bonus_tracks || [];
