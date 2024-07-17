const AbstractSeeder = require("./AbstractSeeder");

class ToySeeder extends AbstractSeeder {
  constructor() {
    // Call the constructor of the parent class (AbstractSeeder) with appropriate options
    super({ table: "toys", truncate: true });
  }

  run() {
    const toys = [
      {
        name: "Leonardo",
        image: "/leonardo-1988.jpg",
        manufacturer: "kenner",
        release_date: 1988,
        // cartoon_id: ???
      },
      {
        name: "Donatello",
        image:
          "https://www.lulu-berlu.com/upload/image/teenage-mutant-ninja-turtles---1988---donatello-p-image-262485-grande.jpg",
        manufacturer: "kenner",
        release_date: 1988,
        // cartoon_id: ???
      },
    ];

    toys.forEach((toy) => {
      this.insert(toy); // insert into toy(name, image, manufacturer, release_date, cartoon_id) values (?, ?, ?, ?, ?)
    });
  }
}

// Export the ToySeeder class
module.exports = ToySeeder;
