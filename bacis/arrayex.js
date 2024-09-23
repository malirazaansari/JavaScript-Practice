//1st ex
// function arrayfromrange(min, max) {
//   let arr = [];
//   for (let i = min; i <= max; i++) {
//     arr.push(i);
//   }
//   return arr;
// }

// console.log(arrayfromrange(1, 15));

//2 ex

// const numbers = [1, 2, 3, 4];
// function move(array, index, offset) {
//   const position = index + offset;
//   if (position >= array.length || position < 0) {
//     console.log("Index out of range");
//     return;
//   }
//   const output = [...array];
//   const val = output.splice(index, 1)[0];
//   output.splice(position, 0, val);
//   return output;
// }

// console.log(move(numbers, 0, 2));

// 3rd ex
const movies = [
  { title: "a", year: 2018, rating: 4.5 },
  { title: "c", year: 2018, rating: 3 },
  { title: "b", year: 2017, rating: 4 },
  { title: "d", year: 2018, rating: 4.5 },
];

const titles = movies
  .filter((m) => m.year === 2018 && m.rating >= 4)
  .sort((a, b) => a.rating - b.rating)
  .reverse()
  .map((m) => m.title);

console.log(titles);
