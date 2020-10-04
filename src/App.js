import React, { useEffect, useState } from "react";
import "./App.css";
import PhotosComponent from "./components/PhotosComponent";
import AlbumsComponent from "./components/AlbumsComponent";
import { Route, useHistory } from "react-router-dom";
import { getAlbums, getPhotos, getUsers } from "./Api";

function App() {
  const [albums, setAlbums] = useState([]);
  const [users, setUsers] = useState([]);
  const [photos, setPhotos] = useState([]);

  let history = useHistory();
  useEffect(() => {
    const fetchData = async () => {
      let a = await getAlbums();
      setAlbums(a);
      let u = await getUsers();
      setUsers(u);
    };

    fetchData();
  }, []);

  const onAlbumSelect = async (id) => {
    let data = await getPhotos(id);
    setPhotos(data);
    history.push("/photos");
  };

  return (
    <div>
      <Route
        exact
        path="/"
        render={(props) => (
          <AlbumsComponent
            {...props}
            albums={albums}
            users={users}
            onSelect={onAlbumSelect}
          />
        )}
      />
      <Route
        exact
        path="/photos"
        render={(props) => <PhotosComponent {...props} photos={photos} />}
      />
    </div>
  );
}

export default App;
