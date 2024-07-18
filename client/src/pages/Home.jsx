import "../styles/Home.css";
import { Link, useLoaderData } from "react-router-dom";

function HomePage() {
  const cartoons = useLoaderData();
  const artUrl = import.meta.env.VITE_API_URL;
  return (
    <ul>
      <li>
        <img
          className="img-banniere"
          src="./src/assets/images/banniere.jpg"
          alt="banniere site remember"
        />
        <img
          className="ecriture"
          src="./src/assets/images/ecriture.png"
          alt="ecriture"
        />
      </li>
      <li className="parent">
        {cartoons.map((cartoon) => (
          <article key={cartoon.id} className="cartoon-card">
            <img
              className="img"
              src={`${artUrl}/${cartoon.img}`}
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
