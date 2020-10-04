import { getAlbums, getPhotos, getUsers } from "./api";

import axios from "axios";

jest.mock("axios");

describe("API calls testing", () => {
  it("should return list of albums with length of 2", async () => {
    axios.get.mockResolvedValue({
      data: [
        {
          userId: 1,
          id: 1,
          title: "Album 1",
        },
        {
          userId: 1,
          id: 2,
          title: "Album 2",
        },
      ],
    });

    const data = await getAlbums();
    expect(data.length).toBe(2);
  });
  it("should return list of album in with correct content", async () => {
    axios.get.mockResolvedValue({
      data: [
        {
          userId: 1,
          id: 1,
          title: "Album 1",
        },
        {
          userId: 1,
          id: 2,
          title: "Album 2",
        },
      ],
    });

    const data = await getAlbums();
    expect(data.length).toBe(2);
    expect(data[0].title).toBe("Album 1");
  });

  it("should return list of photos with length of 2", async () => {
    axios.get.mockResolvedValue({
      data: [
        {
          albumId: 1,
          id: 1,
          title: "accusamus beatae ad facilis cum similique qui sunt",
          url: "https://via.placeholder.com/600/92c952",
          thumbnailUrl: "https://via.placeholder.com/150/92c952",
        },
        {
          albumId: 1,
          id: 2,
          title: "reprehenderit est deserunt velit ipsam",
          url: "https://via.placeholder.com/600/771796",
          thumbnailUrl: "https://via.placeholder.com/150/771796",
        },
      ],
    });

    const data = await getPhotos(1);
    expect(data.length).toBe(2);
  });

  it("should return list of photos with albumId of 1", async () => {
    axios.get.mockResolvedValue({
      data: [
        {
          albumId: 1,
          id: 1,
          title: "accusamus beatae ad facilis cum similique qui sunt",
          url: "https://via.placeholder.com/600/92c952",
          thumbnailUrl: "https://via.placeholder.com/150/92c952",
        },
        {
          albumId: 1,
          id: 2,
          title: "reprehenderit est deserunt velit ipsam",
          url: "https://via.placeholder.com/600/771796",
          thumbnailUrl: "https://via.placeholder.com/150/771796",
        },
      ],
    });

    const data = await getPhotos(1);
    expect(data[0].albumId).toBe(1);
  });

  it("should return list of users", async () => {
    axios.get.mockResolvedValue({
      data: [
        {
          id: 1,
          name: "Leanne Graham",
        },
        {
          id: 2,
          name: "Ervin Howell",
        },
      ],
    });

    const data = await getUsers();
    expect(data.length).toBe(2);
  });

  it("should return list of users in with correct content", async () => {
    axios.get.mockResolvedValue({
      data: [
        {
          id: 1,
          name: "Leanne Graham",
        },
        {
          id: 2,
          name: "Ervin Howell",
        },
      ],
    });

    const data = await getUsers();
    expect(data.length).toBe(2);
    expect(data[0].name).toBe("Leanne Graham");
  });
});
