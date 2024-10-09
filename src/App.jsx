import data from "./data.json";
import { Album } from "./components/Album";
import "./App.css";

console.log(data);

const albums = data.albums.items;

export const App = () => {
  return (
    <div className="container">
      {albums.map((album) => (
        <Album
          key={album.id}
          title={album.name}
          image={album.images[0].url}
          artist={album.artists[0].name}
          artistUrl={album.artists[0].external_urls.spotify}
          titleUrl={album.external_urls.spotify}
        />
      ))}
    </div>
  );
};
