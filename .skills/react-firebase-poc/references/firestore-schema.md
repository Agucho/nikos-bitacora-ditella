# Firestore Schema (Demo/Pilot)

## Collections

`users/{uid}`
- `name` string
- `email` string
- `startDate` ISO string
- `updatedAt` timestamp

`users/{uid}/emotions/{dateKey}`
- `dateKey` string (`YYYY-MM-DD`)
- `pleasure` number (1-10)
- `energy` number (1-10)
- `updatedAt` timestamp

`users/{uid}/journal/{day}`
- `day` number (1-60)
- `completed` boolean
- `data` map
- `updatedAt` timestamp

`users/{uid}/meta/progress`
- `completedCount` number
- `latestCompletedDay` number
- `streak` number
- `updatedAt` timestamp

## Rules Model

- Client reads own docs.
- Client writes denied in rules.
- Callable Functions perform writes.
- Storage media under `material-extra/*` is readable by authenticated users.
