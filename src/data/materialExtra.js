const poster = '/material-extra/WhatsApp%20Image%202026-02-11%20at%2023.40.08.jpeg';

const videoFiles = [
  'WhatsApp Video 2026-02-11 at 23.39.48.mp4',
  'WhatsApp Video 2026-02-11 at 23.39.57.mp4',
  'WhatsApp Video 2026-02-11 at 23.40.07.mp4',
  'WhatsApp Video 2026-02-11 at 23.40.16.mp4',
  'WhatsApp Video 2026-02-11 at 23.40.22.mp4',
  'WhatsApp Video 2026-02-11 at 23.40.28.mp4',
  'WhatsApp Video 2026-02-11 at 23.40.29.mp4',
  'WhatsApp Video 2026-02-11 at 23.40.30.mp4'
];

export const materialExtraItems = videoFiles.map((fileName, index) => ({
  id: `video-${index + 1}`,
  title: `Ejercicio de respiración ${index + 1}`,
  fileName,
  storagePath: `material-extra/${fileName}`,
  src: encodeURI(`/material-extra/${fileName}`),
  poster
}));
