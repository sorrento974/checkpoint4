// const AbstractSeeder = require("./AbstractSeeder");

// class ToySeeder extends AbstractSeeder {
//   constructor() {
//     // Call the constructor of the parent class (AbstractSeeder) with appropriate options
//     super({ table: "toys", truncate: true });
//   }

//   run() {
//     const toys = [
//       {
//         name: "Leonardo",
//         image: "/leonardo-1988.jpg",
//         manufacturer: "kenner",
//         release_date: 1988,
//         cartoon_id: 1
//       },
//       {
//         name: "Donatello",
//         image:
//           "https://www.lulu-berlu.com/upload/image/teenage-mutant-ninja-turtles---1988---donatello-p-image-262485-grande.jpg",
//         manufacturer: "kenner",
//         release_date: 1988,
//         cartoon_id:1
//       },
//     ];

//     toys.forEach((toy) => {
//       this.insert(toy); // insert into toy(name, image, manufacturer, release_date, cartoon_id) values (?, ?, ?, ?, ?)
//     });
//   }
// }

// // Export the ToySeeder class
// module.exports = ToySeeder;

// const AbstractSeeder = require("./AbstractSeeder");

// class ToySeeder extends AbstractSeeder {
//   constructor() {
//     super({ table: "toys", truncate: true });
//   }

//   async run() {
//     // Insérer des dessins animés (si nécessaire)
//     const cartoons = [
//       { name: "Teenage Mutant Ninja Turtles" },
//       { name: "Transformers" }
//     ];

//     for (let cartoon of cartoons) {
//       const cartoonId = await this.insert(cartoon, "cartoon"); // Insérer dans la table "cartoon"

//       // Insérer des jouets associés à chaque dessin animé
//       if (cartoon.name === "Teenage Mutant Ninja Turtles") {
//         const toys = [
//           {
//             name: "Leonardo",
//             image: "/leonardo-1988.jpg",
//             manufacturer: "Kenner",
//             release_date: "1988",
//             cartoon_id: cartoonId
//           },
//           {
//             name: "Donatello",
//             image: "https://www.example.com/donatello.jpg",
//             manufacturer: "Kenner",
//             release_date: "1988",
//             cartoon_id: cartoonId
//           }
//           // Ajoutez d'autres jouets pour "Teenage Mutant Ninja Turtles" si nécessaire
//         ];

//         // Insérer les jouets dans la table "toys"
//         for (let toy of toys) {
//           await this.insert(toy); // Insérer dans la table "toys"
//         }
//       } else if (cartoon.name === "Transformers") {
//         const toys = [
//           {
//             name: "Optimus Prime",
//             image: "/optimus-prime.jpg",
//             manufacturer: "Hasbro",
//             release_date: "1984",
//             cartoon_id: cartoonId
//           }
//           // Ajoutez d'autres jouets pour "Transformers" si nécessaire
//         ];

//         // Insérer les jouets dans la table "toys"
//         for (let toy of toys) {
//           await this.insert(toy); // Insérer dans la table "toys"
//         }
//       }
//     }
//   }
// }

// module.exports = ToySeeder;
