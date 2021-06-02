import { NonVeganKeyWords } from './non-vegan-keywords';

function verifyVeganFromText(text: Array<string>) {
  const isVegan = NonVeganKeyWords.some(el => text.includes(el));

  return !isVegan;
}

export { verifyVeganFromText };
