// //1st exceries
// const address = {
//   street: "c",
//   city: "a",
//   zipcode: "b",
// };

// function showaddress(address) {
//   for (let key in address) {
//     console.log(key, ":", address[key]);
//   }
// }
// showaddress(address);

//2nd excerise
// // factory function
// function createaddres(street, city, zipcode) {
//   return {
//     street,
//     city,
//     zipcode,
//   };
// }

// const address = createaddres("c", "a", "b");
// console.log(address);
// consturctor function
// function Address(strees

// //3rd excercise
// function areEqual(address1, address2) {
//   return (
//     address1.street === address2.street &&
//     address1.city === address2.city &&
//     address1.zipcode === address2.zipcode
//   );
// }

// function areSame(address1, address2) {
//   return address1 === address2;
// }
// console.log(areEqual(address1, address2));
// console.log(areSame(address1, address2));
// console.log(areSame(address1, address3));

// //4th excerise
// const Post = {
//   title: "a",
//   body: "b",
//   author: "c",
//   views: 10,
//   comments: [
//     { author: "a", body: "b" },
//     { author: "c", body: "d" },
//   ],
//   isLive: true,
// };
// console.log(Post);

// //5th excreise
// function CreatPost(title, body, author) {
//   (this.title = title),
//     (this.body = body),
//     (this.author = author),
//     (this.comments = []),
//     (this.views = 0),
//     (this.isLive = false);
// }
// const post = new CreatPost("a", "b", "c");
// console.log(post);

// //6th excercise
// const priceRang = [
//   { labe: "$", tooltip: "impressive", minperperson: 1, maxperperson: 10 },
//   { labe: "$$", tooltip: "modrate", minperperson: 11, maxperperson: 20 },
//   { labe: "$$$", tooltip: "expensive", minperperson: 21, maxperperson: 50 },
// ];
