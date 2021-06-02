import { createWorker } from 'tesseract.js';

async function fetchTextFromImage(url: string) {
  const worker = await createWorker({
    // logger: m => console.log(m), // Add logger here
  });
  await worker.load();
  await worker.loadLanguage('eng');
  await worker.initialize('eng');
  const {
    data: { text },
  } = await worker.recognize(url);
  await worker.terminate();

  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(':', '')
    .replace('.', '')
    .toUpperCase()
    .split(/[\s,]+/)
    .filter(el => el.length > 3);
}

export { fetchTextFromImage };
