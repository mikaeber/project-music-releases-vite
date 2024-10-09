import "./Album.css";
import { Icon } from "./Icon.jsx";

export const Album = ({ title, image, artist, titleUrl, artistUrl }) => {
  return (
    <div className="album">
      <div className="album-cover">
        <img src={image} alt={title} />
        <div className="icon-container">
          <Icon icon="Heart" />
          <Icon icon="Play" />
          <Icon icon="Dots" />
        </div>
      </div>
      <h1>
        <a href={titleUrl}>{title}</a>
      </h1>
      <p>
        <a href={artistUrl}>{artist}</a>
      </p>
    </div>
  );
};
