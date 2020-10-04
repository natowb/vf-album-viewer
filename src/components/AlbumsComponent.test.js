import React from "react";
import { shallow } from "enzyme";
import AlbumsComponent from "./AlbumsComponent";

let wrapper;
let onSelect = jest.fn();
beforeEach(() => {
  const albums = [
    { id: 1, userId: 1, title: "Hello World" },
    { id: 2, userId: 1, title: "Hello World 2" },
    { id: 3, userId: 1, title: "Hello World 3" },
  ];
  const users = [{ id: 1, name: "John Doe" }];

  wrapper = shallow(
    <AlbumsComponent albums={albums} users={users} onSelect={onSelect} />
  );
});

describe("Albums Component Testing", () => {
  it("should render list of albums", () => {
    expect(wrapper.find(".album-list")).toHaveLength(1);
    expect(wrapper.find(".album-item")).toHaveLength(3);
  });

  it("should render correct text on album-item", () => {
    expect(wrapper.find(".album-item")).toHaveLength(3);
    expect(
      wrapper.contains(
        <li key="1" className=".album-itemm">
          <p>Hello World</p>
          <span>John Doe</span>
        </li>
      )
    );
  });

  it("should call onSelect when item is clicked", () => {
    wrapper.find(".album-item").at(0).simulate("click");
    expect(onSelect).toHaveBeenCalledTimes(1);
  });
});
