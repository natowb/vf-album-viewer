import React from "react";
import { shallow } from "enzyme";
import PhotosComponent from "./PhotosComponent";

let wrapper;
beforeEach(() => {
  const photos = [
    {
      id: 1,
      url: "https://via.placeholder.com/",
      thumbnailUrl: "https://via.placeholder.com/150/92c952",
    },
    {
      id: 2,
      url: "https://via.placeholder.com/600/771796",
      thumbnailUrl: "https://via.placeholder.com/150/771796",
    },
  ];
  wrapper = shallow(<PhotosComponent photos={photos} />);
});

describe("PhotosComponent Testing", () => {
  it("should render list of photos", () => {
    expect(wrapper.find(".photo-list")).toHaveLength(1);
    expect(wrapper.find(".photo-item")).toHaveLength(2);
  });

  it("should render thumbnail from photo object", () => {
    expect(wrapper.find(".photo-item")).toHaveLength(2);
    expect(
      wrapper.contains(
        <img
          src="https://via.placeholder.com/150/92c952"
          className="photo-item-img"
        />
      )
    );
  });

  it("should render fullscreen image when photo is clicked", () => {
    expect(wrapper.find(".photo-item")).toHaveLength(2);
    expect(wrapper.find(".fullscreen-img")).toHaveLength(0);
    wrapper.find(".photo-item").at(0).simulate("click");
    expect(wrapper.find(".fullscreen-img")).toHaveLength(1);
  });
});
