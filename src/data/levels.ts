export type Level = {
  id: number;
  pattern: string[];
  answer: string;
  options: string[];
  difficulty: 'easy' | 'medium' | 'hard' | 'challenge';
  hint: string;
};

export const levels: Level[] = [
  // Easy (1-15)
  { id: 1, pattern: ["🔴", "🔵", "🔴", "🔵", "🔴"], answer: "🔵", options: ["🔴", "🔵", "🟢", "🟡"], difficulty: "easy", hint: "Colors are alternating!" },
  { id: 2, pattern: ["🍎", "🍎", "🍌", "🍎", "🍎"], answer: "🍌", options: ["🍎", "🍌", "🍇", "🍉"], difficulty: "easy", hint: "Two apples, then one banana." },
  { id: 3, pattern: ["1", "2", "3", "1", "2"], answer: "3", options: ["1", "2", "3", "4"], difficulty: "easy", hint: "Count 1, 2, 3 and repeat." },
  { id: 4, pattern: ["🐶", "🐱", "🐭", "🐶", "🐱"], answer: "🐭", options: ["🐶", "🐱", "🐭", "🐰"], difficulty: "easy", hint: "Dog, cat, mouse." },
  { id: 5, pattern: ["⭐", "🌙", "⭐", "🌙", "⭐"], answer: "🌙", options: ["⭐", "🌙", "☀️", "☁️"], difficulty: "easy", hint: "Star, then moon." },
  { id: 6, pattern: ["⬆️", "⬇️", "⬆️", "⬇️", "⬆️"], answer: "⬇️", options: ["⬆️", "⬇️", "⬅️", "➡️"], difficulty: "easy", hint: "Up, down, up, down." },
  { id: 7, pattern: ["A", "B", "A", "B", "A"], answer: "B", options: ["A", "B", "C", "D"], difficulty: "easy", hint: "A then B." },
  { id: 8, pattern: ["🚗", "🚕", "🚗", "🚕", "🚗"], answer: "🚕", options: ["🚗", "🚕", "🚙", "🚌"], difficulty: "easy", hint: "Red car, yellow taxi." },
  { id: 9, pattern: ["10", "20", "30", "40"], answer: "50", options: ["45", "50", "60", "100"], difficulty: "easy", hint: "Counting by 10s." },
  { id: 10, pattern: ["🟢", "🟢", "🟡", "🟢", "🟢"], answer: "🟡", options: ["🔴", "🟢", "🔵", "🟡"], difficulty: "easy", hint: "Two greens, one yellow." },
  { id: 11, pattern: ["🌞", "🌞", "🌙", "🌞", "🌞"], answer: "🌙", options: ["🌞", "🌙", "⭐", "☁️"], difficulty: "easy", hint: "Two suns, one moon." },
  { id: 12, pattern: ["1", "1", "2", "1", "1"], answer: "2", options: ["1", "2", "3", "4"], difficulty: "easy", hint: "Two 1s, then a 2." },
  { id: 13, pattern: ["🦋", "🐛", "🦋", "🐛", "🦋"], answer: "🐛", options: ["🦋", "🐛", "🐝", "🐞"], difficulty: "easy", hint: "Butterfly, caterpillar." },
  { id: 14, pattern: ["🟥", "🟦", "🟩", "🟥", "🟦"], answer: "🟩", options: ["🟥", "🟦", "🟩", "🟨"], difficulty: "easy", hint: "Red, blue, green." },
  { id: 15, pattern: ["2", "4", "6", "8"], answer: "10", options: ["9", "10", "11", "12"], difficulty: "easy", hint: "Counting by 2s." },

  // Medium (16-31)
  { id: 16, pattern: ["🔴", "🔴", "🔵", "🔵", "🔴", "🔴"], answer: "🔵", options: ["🔴", "🔵", "🟢", "🟡"], difficulty: "medium", hint: "Two of each color." },
  { id: 17, pattern: ["A", "B", "C", "A", "B", "C", "A"], answer: "B", options: ["A", "B", "C", "D"], difficulty: "medium", hint: "A, B, C repeating." },
  { id: 18, pattern: ["1", "2", "2", "3", "3", "3", "4", "4", "4"], answer: "4", options: ["1", "2", "3", "4"], difficulty: "medium", hint: "The number tells you how many times it appears." },
  { id: 19, pattern: ["⬆️", "➡️", "⬇️", "⬅️", "⬆️"], answer: "➡️", options: ["⬆️", "➡️", "⬇️", "⬅️"], difficulty: "medium", hint: "The arrow is turning clockwise." },
  { id: 20, pattern: ["10", "9", "8", "7", "6"], answer: "5", options: ["3", "4", "5", "6"], difficulty: "medium", hint: "Counting backwards." },
  { id: 21, pattern: ["🍎", "🍌", "🍌", "🍎", "🍌", "🍌", "🍎"], answer: "🍌", options: ["🍎", "🍌", "🍇", "🍉"], difficulty: "medium", hint: "One apple, two bananas." },
  { id: 22, pattern: ["2", "5", "8", "11"], answer: "14", options: ["12", "13", "14", "15"], difficulty: "medium", hint: "Add 3 each time." },
  { id: 23, pattern: ["🌑", "🌒", "🌓", "🌔"], answer: "🌕", options: ["🌑", "🌕", "🌗", "🌙"], difficulty: "medium", hint: "The moon is getting fuller." },
  { id: 24, pattern: ["🔴", "🟩", "🔵", "🔴", "🟩"], answer: "🔵", options: ["🔴", "🟩", "🔵", "🟡"], difficulty: "medium", hint: "Red circle, green square, blue circle." },
  { id: 25, pattern: ["1", "3", "5", "7", "9"], answer: "11", options: ["10", "11", "12", "13"], difficulty: "medium", hint: "Odd numbers." },
  { id: 26, pattern: ["🐶", "🐱", "🐱", "🐭", "🐶", "🐱", "🐱"], answer: "🐭", options: ["🐶", "🐱", "🐭", "🐰"], difficulty: "medium", hint: "Dog, two cats, mouse." },
  { id: 27, pattern: ["A", "C", "E", "G"], answer: "I", options: ["H", "I", "J", "K"], difficulty: "medium", hint: "Skip one letter." },
  { id: 28, pattern: ["🕒", "🕕", "🕘"], answer: "🕛", options: ["🕐", "🕝", "🕛", "🕧"], difficulty: "medium", hint: "Add 3 hours." },
  { id: 29, pattern: ["100", "90", "80", "70"], answer: "60", options: ["50", "60", "70", "80"], difficulty: "medium", hint: "Subtract 10." },
  { id: 30, pattern: ["🟡", "🟡", "🟡", "🟢", "🟢", "🟡", "🟡", "🟡"], answer: "🟢", options: ["🔴", "🟢", "🔵", "🟡"], difficulty: "medium", hint: "Three yellows, two greens." },
  { id: 31, pattern: ["1", "2", "4", "8"], answer: "16", options: ["10", "12", "14", "16"], difficulty: "medium", hint: "Double the number." },

  // Hard (32-55)
  { id: 32, pattern: ["1", "4", "9", "16"], answer: "25", options: ["20", "24", "25", "30"], difficulty: "hard", hint: "1x1, 2x2, 3x3, 4x4..." },
  { id: 33, pattern: ["🔴", "🔺", "🟦", "🔴", "🔺"], answer: "🟦", options: ["🔴", "🔺", "🟦", "🟢"], difficulty: "hard", hint: "Red circle, red triangle, blue square." },
  { id: 34, pattern: ["1", "2", "3", "5", "8"], answer: "13", options: ["10", "11", "12", "13"], difficulty: "hard", hint: "Add the last two numbers together." },
  { id: 35, pattern: ["Z", "Y", "X", "W"], answer: "V", options: ["U", "V", "T", "S"], difficulty: "hard", hint: "Alphabet backwards." },
  { id: 36, pattern: ["1", "2", "4", "7", "11"], answer: "16", options: ["14", "15", "16", "17"], difficulty: "hard", hint: "Add 1, then add 2, then add 3..." },
  { id: 37, pattern: ["♠️", "♣️", "♥️", "♦️", "♠️", "♣️"], answer: "♥️", options: ["♠️", "♣️", "♥️", "♦️"], difficulty: "hard", hint: "Spade, club, heart, diamond." },
  { id: 38, pattern: ["2", "6", "18", "54"], answer: "162", options: ["108", "152", "162", "200"], difficulty: "hard", hint: "Multiply by 3." },
  { id: 39, pattern: ["🌞", "🌍", "🌙", "🌞", "🌍"], answer: "🌙", options: ["🌞", "🌍", "🌙", "⭐"], difficulty: "hard", hint: "Sun, Earth, Moon." },
  { id: 40, pattern: ["20", "17", "14", "11"], answer: "8", options: ["7", "8", "9", "10"], difficulty: "hard", hint: "Subtract 3." },
  { id: 41, pattern: ["🟥", "🔴", "🟦", "🔵", "🟩"], answer: "🟢", options: ["🟩", "🟢", "🟡", "🟨"], difficulty: "hard", hint: "Square, then circle of the same color." },
  { id: 42, pattern: ["1", "8", "27", "64"], answer: "125", options: ["100", "120", "125", "144"], difficulty: "hard", hint: "1x1x1, 2x2x2, 3x3x3..." },
  { id: 43, pattern: ["A", "Z", "B", "Y", "C"], answer: "X", options: ["W", "X", "D", "V"], difficulty: "hard", hint: "A goes with Z, B goes with Y..." },
  { id: 44, pattern: ["10", "100", "1000"], answer: "10000", options: ["2000", "5000", "10000", "100000"], difficulty: "hard", hint: "Add a zero." },
  { id: 45, pattern: ["🕐", "🕝", "🕓", "🕠"], answer: "🕖", options: ["🕕", "🕡", "🕖", "🕢"], difficulty: "hard", hint: "Add 1 hour and 30 minutes." },
  { id: 46, pattern: ["3", "6", "12", "24"], answer: "48", options: ["36", "42", "48", "54"], difficulty: "hard", hint: "Double the number." },
  { id: 47, pattern: ["🔴", "🟢", "🔵", "🟡", "🔴", "🟢", "🔵"], answer: "🟡", options: ["🔴", "🟢", "🔵", "🟡"], difficulty: "hard", hint: "Red, green, blue, yellow." },
  { id: 48, pattern: ["1", "3", "6", "10", "15"], answer: "21", options: ["18", "20", "21", "25"], difficulty: "hard", hint: "Add 2, then 3, then 4, then 5..." },
  { id: 49, pattern: ["⬆️", "↗️", "➡️", "↘️"], answer: "⬇️", options: ["⬇️", "↙️", "⬅️", "↖️"], difficulty: "hard", hint: "Turn slightly clockwise." },
  { id: 50, pattern: ["5", "10", "20", "40"], answer: "80", options: ["60", "70", "80", "100"], difficulty: "hard", hint: "Double it." },
  { id: 51, pattern: ["🟩", "🟡", "🟥", "🟩", "🟡"], answer: "🟥", options: ["🟩", "🟡", "🟥", "🔵"], difficulty: "hard", hint: "Green square, yellow circle, red square." },
  { id: 52, pattern: ["64", "32", "16", "8"], answer: "4", options: ["2", "4", "6", "0"], difficulty: "hard", hint: "Half the number." },
  { id: 53, pattern: ["A", "B", "D", "G", "K"], answer: "P", options: ["N", "O", "P", "Q"], difficulty: "hard", hint: "Skip 0, skip 1, skip 2, skip 3..." },
  { id: 54, pattern: ["🔴", "⭕", "🔴", "⭕", "🔴"], answer: "⭕", options: ["🔴", "⭕", "🔵", "⚪"], difficulty: "hard", hint: "Filled, empty, filled, empty." },
  { id: 55, pattern: ["1", "2", "6", "24"], answer: "120", options: ["48", "72", "100", "120"], difficulty: "hard", hint: "Multiply by 2, then 3, then 4, then 5." }
];

export function generateChallengeLevel(index: number): Level {
  const types = ['add', 'sub', 'mult', 'emoji_rotate', 'emoji_grow'];
  const type = types[Math.floor(Math.random() * types.length)];
  
  let pattern: string[] = [];
  let answer = "";
  let options: string[] = [];
  let hint = "";

  if (type === 'add') {
    const start = Math.floor(Math.random() * 20) + 1;
    const step = Math.floor(Math.random() * 10) + 2;
    pattern = [String(start), String(start + step), String(start + step * 2), String(start + step * 3)];
    answer = String(start + step * 4);
    options = [
      answer,
      String(start + step * 4 + step),
      String(start + step * 4 - 1),
      String(start + step * 4 + step + 1)
    ].sort(() => Math.random() - 0.5);
    hint = `Add ${step} each time.`;
  } else if (type === 'sub') {
    const step = Math.floor(Math.random() * 5) + 2;
    const start = Math.floor(Math.random() * 50) + 30;
    pattern = [String(start), String(start - step), String(start - step * 2), String(start - step * 3)];
    answer = String(start - step * 4);
    options = [
      answer,
      String(start - step * 4 - step),
      String(start - step * 4 + 1),
      String(start - step * 4 - step - 1)
    ].sort(() => Math.random() - 0.5);
    hint = `Subtract ${step} each time.`;
  } else if (type === 'mult') {
    const start = Math.floor(Math.random() * 3) + 2;
    const mult = Math.floor(Math.random() * 3) + 2;
    pattern = [String(start), String(start * mult), String(start * mult * mult)];
    answer = String(start * mult * mult * mult);
    options = [
      answer,
      String(start * mult * mult * mult * mult),
      String(start * mult * mult * mult + mult),
      String(start * mult * mult * mult - 1)
    ].sort(() => Math.random() - 0.5);
    hint = `Multiply by ${mult}.`;
  } else if (type === 'emoji_rotate') {
    const emojis = ["🍎", "🍌", "🍇", "🍉", "🍓", "🍒", "🍕", "🍔", "🍟", "🌭"];
    const picked = emojis.sort(() => Math.random() - 0.5).slice(0, 3);
    pattern = [picked[0], picked[1], picked[2], picked[0], picked[1]];
    answer = picked[2];
    options = [picked[0], picked[1], picked[2], emojis[3]].sort(() => Math.random() - 0.5);
    hint = "Repeating 3 items.";
  } else {
    const emojis = ["🐶", "🐱", "🐭", "🐰", "🦊", "🐻", "🐼", "🐨"];
    const picked = emojis.sort(() => Math.random() - 0.5).slice(0, 2);
    pattern = [picked[0], picked[1], picked[1], picked[0], picked[1], picked[1], picked[1]];
    answer = picked[0];
    options = [picked[0], picked[1], emojis[2], emojis[3]].sort(() => Math.random() - 0.5);
    hint = "The second item keeps growing!";
  }

  return {
    id: 1000 + index,
    pattern,
    answer,
    options,
    difficulty: 'challenge',
    hint
  };
}
