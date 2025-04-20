export function generateBoard(terms) {
  const shuffled = [...terms].sort(() => Math.random() - 0.5);
  const selectedTerms = shuffled.slice(0, 24);
  selectedTerms.splice(12, 0, 'FREE');
  return selectedTerms;
}

export function checkWin(selected) {
  const size = 5;
  const lines = [];

  // Rows
  for (let r = 0; r < size; r++) {
    lines.push(Array.from({ length: size }, (_, i) => r * size + i));
  }

  // Columns
  for (let c = 0; c < size; c++) {
    lines.push(Array.from({ length: size }, (_, i) => i * size + c));
  }

  // Diagonals
  lines.push(Array.from({ length: size }, (_, i) => i * size + i));
  lines.push(Array.from({ length: size }, (_, i) => i * size + (size - 1 - i)));

  return lines.some(line => line.every(index => selected[index]));
}
