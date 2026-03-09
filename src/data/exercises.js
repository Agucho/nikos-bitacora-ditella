import bitacoraDefinition from './bitacora-definition.v1.json';

const DAY_COUNT = 60;

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

export function isDayCompleted(dayNumber, draft) {
  const exercise = getExerciseForDay(dayNumber);
  const variableComplete = isPrimaryExerciseComplete(exercise, draft);

  if (dayNumber <= 10) {
    const situationCount = draft.situations.filter((row) => Object.values(row).some(hasAnyText)).length;
    return hasAnyText(draft.gratitude) && situationCount >= 3 && variableComplete;
  }

  const cognitiveCount = draft.cognitiveWork.filter((row) => Object.values(row).some(hasAnyText)).length;
  return cognitiveCount >= 3 && variableComplete;
}

export { bitacoraDefinition };
export const bonusTracks = bitacoraDefinition.bonus_tracks || [];
