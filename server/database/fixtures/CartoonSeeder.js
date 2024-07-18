const AbstractSeeder = require("./AbstractSeeder");

class CartoonSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "cartoon", truncate: true });
  }

  run() {
    const cartoons = [
      {
        img: "/les-tortues-ninja.jpg",
        name: "Les Tortues Ninja",
      },
      {
        img: "/maitres de l'univers.jpg",
        name: "Maitres de l'univers",
      },
      {
        img: "/biker mice.jpg",
        name: "Biker Mice",
      },
      {
        img: "/chevalier-du-zodiaque.jpg",
        name: "Chevalier du Zodiaque",
      },
      {
        img: "/mon_petit_poney_le_film.webp",
        name: "Mon Petit Poney Le Film",
      },
      {
        img: "/power rangers.jpg",
        name: "Power Rangers",
      },
      {
        img: "/sailor moon.jpg",
        name: "Sailor Moon",
      },
      {
        img: "/mask.jpg",
        name: "Mask",
      },
      {
        img: "/gijoe.webp",
        name: "GI Joe",
      },
      {
        img: "/polly pocket.webp",
        name: "Polly Pocket",
      },
      {
        img: "/inspecteur gadget.webp",
        name: "Inspecteur Gadget",
      },
      {
        img: "/dino-riders-ban.jpg",
        name: "Dino Riders",
      },
    ];

    cartoons.forEach((cartoon, index) => {
      const cartoonWithRefName = {
        ...cartoon,
        refName: `cartoon_${index}`,
      };
      this.insert(cartoonWithRefName);
    });
  }
}

module.exports = CartoonSeeder;
