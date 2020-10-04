import React, { useState } from "react";
const PhotosComponent = ({ photos }) => {
  const [full, setFull] = useState(null);

  return (
    <div>
      {full && <img className="fullscreen-img" src={full.url} />}
      <ul className="photo-list">
        {photos &&
          photos.map((photo) => (
            <li
              key={photo.id}
              className="photo-item"
              onClick={() => {
                setFull(photo);
              }}
            >
              <img key={photo.id} src={photo.thumbnailUrl} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default PhotosComponent;
