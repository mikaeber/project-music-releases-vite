import data from "./data.json";
import "./App.css";
import { AlbumCover } from "./components/AlbumCover";
import { AlbumTitle } from "./components/AlbumTitle";
import { ArtistName } from "./components/ArtistName";

console.log(data);

const albums = data.albums.items;

export const App = () => {
  return (
    <div className="container">
      {albums.map((album) => (
        <div className="album" key={album.id}>
          <AlbumCover image={album.images[0].url} />
          <AlbumTitle title={album.name} url={album.external_urls.spotify} />
          <ArtistName
            names={album.artists.map(artist => artist.name)}
            urls={album.artists.map(artist => artist.external_urls.spotify)}
          />
        </div>
      ))}
    </div>
  );
};
