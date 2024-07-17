import "../styles/Home.css";
import { Link } from "react-router-dom";

function HomePage() {
  const cartoons = [
    {
      id: 1,
      name: "Les Tortues Ninja",
      image: "./src/assets/images/les-tortues-ninja.jpg",
      className: "img",
    },
    {
      id: 2,
      name: "Maîtres de l'univers",
      image: "./src/assets/images/maitres de l'univers.jpg",
      className: "img",
    },
    {
      id: 3,
      name: "Biker Mice",
      image: "./src/assets/images/biker mice.jpg",
      className: "img",
    },
    {
      id: 4,
      name: "Mon Petit Poney",
      image: "./src/assets/images/mon_petit_poney_le_film.webp",
      className: "img",
    },
    {
      id: 5,
      name: "Power Rangers",
      image: "./src/assets/images/power rangers.jpg",
      className: "img",
    },
    {
      id: 6,
      name: "Sailor Moon",
      image: "./src/assets/images/sailor moon.jpg",
      className: "img",
    },
    {
      id: 7,
      name: "MASK",
      image: "./src/assets/images/mask.jpg",
      className: "img",
    },
    {
      id: 8,
      name: "G.I. Joe",
      image: "./src/assets/images/gijoe.webp",
      className: "img",
    },
    {
      id: 9,
      name: "Polly Pocket",
      image: "./src/assets/images/polly pocket.webp",
      className: "img",
    },
    {
      id: 10,
      name: "Inspecteur Gadget",
      image: "./src/assets/images/inspecteur gadget.webp",
      className: "img",
    },
    {
      id: 11,
      name: "Dino-Riders",
      image: "./src/assets/images/dino-riders-ban.jpg",
      className: "img",
    },
  ];

  return (
    <ul>
      <li>
        <img
          className="img-banniere"
          src="./src/assets/images/banniere-2-2000x1200.jpg"
          alt="banniere site remember"
        />
      </li>
      <li className="parent">
        {cartoons.map((cartoon) => (
          <article key={cartoon.id} className="cartoon-card">
            <img
              className={cartoon.className}
              src={cartoon.image}
              alt={cartoon.name}
            />
            <p>{cartoon.name}</p>
            <Link to={`/toys/${cartoon.id}`}>
              <button
                aria-label="voir les jouets"
                type="button"
                className="view-toys-button"
              >
                Voir les jouets
              </button>
            </Link>
          </article>
        ))}
      </li>
    </ul>
  );
}

export default HomePage;
