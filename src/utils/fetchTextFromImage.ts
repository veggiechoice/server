/* eslint-disable no-shadow */
import axios from 'axios';
import AppError from '../errors/AppError';

interface ParsedResults {
  ParsedText: string;
}
interface OCR_API_RESULTS {
  ParsedResults: Array<ParsedResults>;
}

async function fetchTextFromImage(url: string) {
  if (process.env.OCR_API_URI) {
    const response = await axios.get(process.env.OCR_API_URI, {
      params: {
        apiKey: process.env.OCR_API_KEY,
        url,
        language: 'por',
      },
    });

    const { ParsedResults } = response.data as OCR_API_RESULTS;

    if (ParsedResults.length <= 0) {
      throw new AppError('Error', 'Error at the OCR process');
    }

    const text: String = ParsedResults[0].ParsedText;

    return text
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(':', '')
      .replace('.', '')
      .toUpperCase()
      .split(/[\s,]+/)
      .filter(el => el.length > 3);
  }

  throw new AppError('NO OCR API FOUND', 'The OCR API_URL is missing in .env ');
}

export { fetchTextFromImage };
