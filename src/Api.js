const axios = require("axios");

export const getAlbums = async () => {
  let res = await axios.get("https://jsonplaceholder.typicode.com/albums");

  return res.data;
};

export const getUsers = async () => {
  let res = await axios.get("https://jsonplaceholder.typicode.com/users");
  return res.data;
};

export const getPhotos = async (id) => {
  let res = await axios.get(
    `https://jsonplaceholder.typicode.com/album/${id}/photos`
  );
  return res.data;
};
