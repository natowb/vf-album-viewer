import React from "react";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import App from "./App";
import AlbumsComponent from "./components/AlbumsComponent";
import PhotosComponent from "./components/PhotosComponent";

describe("Test App Routing ", () => {
  it("/ path should show AlbumsComponent and hide PhotosComponent", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );
    expect(wrapper.find(AlbumsComponent)).toHaveLength(1);
    expect(wrapper.find(PhotosComponent)).toHaveLength(0);
  });

  it("/photos path should show PhotosComponent and hide AlbumsComponent", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/photos"]}>
        <App />
      </MemoryRouter>
    );
    expect(wrapper.find(PhotosComponent)).toHaveLength(1);
    expect(wrapper.find(AlbumsComponent)).toHaveLength(0);
  });
});
