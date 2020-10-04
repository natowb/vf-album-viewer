import React from "react";

const AlbumsComponent = ({ albums, users, onSelect }) => {
  const getUser = (id) => {
    for (let i = 0; i < users.length; i++) {
      if (users[i].id === id) {
        return users[i];
      }
    }

    return { name: "" };
  };

  return (
    <div>
      {albums && albums.length == 0 && <h1>No Albums Found</h1>}
      <ul className="album-list">
        {albums &&
          users &&
          albums.map((album) => (
            <li
              key={album.id}
              className="album-item"
              onClick={() => {
                onSelect(album.id);
              }}
            >
              <p>{album.title}</p>
              <span>{getUser(album.userId).name}</span>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default AlbumsComponent;
