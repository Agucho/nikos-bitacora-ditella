import fs from 'node:fs';
import path from 'node:path';

const DAY_COUNT = 60;
const definitionPath = path.resolve('src/data/bitacora-definition.v1.json');
const definition = JSON.parse(fs.readFileSync(definitionPath, 'utf8'));

function invariant(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

invariant(definition && typeof definition === 'object', 'Definition must be an object.');
invariant(Array.isArray(definition.days), 'Definition must include a days array.');
invariant(definition.days.length === DAY_COUNT, `Definition must include exactly ${DAY_COUNT} days.`);

const seenDays = new Set();
for (const dayEntry of definition.days) {
  invariant(Number.isInteger(dayEntry.day), 'Each day entry must include an integer "day".');
  invariant(dayEntry.day >= 1 && dayEntry.day <= DAY_COUNT, `Day out of range: ${dayEntry.day}.`);
  invariant(!seenDays.has(dayEntry.day), `Duplicate day found: ${dayEntry.day}.`);
  seenDays.add(dayEntry.day);

  const exercise = dayEntry.primary_exercise;
  invariant(exercise && typeof exercise === 'object', `Day ${dayEntry.day} is missing primary_exercise.`);
  invariant(typeof exercise.title === 'string' && exercise.title.trim(), `Day ${dayEntry.day} is missing exercise title.`);
  invariant(Array.isArray(exercise.fields), `Day ${dayEntry.day} exercise fields must be an array.`);

  for (const field of exercise.fields) {
    invariant(typeof field.id === 'string' && field.id.trim(), `Day ${dayEntry.day} has an invalid field id.`);
    invariant(typeof field.label === 'string' && field.label.trim(), `Day ${dayEntry.day} has an invalid field label.`);
  }

  if (dayEntry.day_definition_text !== null && dayEntry.day_definition_text !== undefined) {
    invariant(typeof dayEntry.day_definition_text === 'string', `Day ${dayEntry.day} day_definition_text must be string/null.`);
  }
}

console.log(`bitacora-definition valid: ${DAY_COUNT} days`);
