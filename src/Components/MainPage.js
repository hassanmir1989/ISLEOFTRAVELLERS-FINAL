import React from "react";
import Header from "./Header";
import { UncontrolledCarousel } from "reactstrap";

const items = [
  {
    src:
      "https://uploads.codesandbox.io/uploads/user/f0f99db1-36cf-4f81-8ca0-67460635923f/2FGJ-37df1e71-6214-452e-9425-c275b84b8d02.jpg",
    altText: "Slide 1",
    caption: "Slide 1",
    header: "Slide 1 Header",
    height: "100px"
  },
  {
    src: "https://i.ytimg.com/vi/E2VDkU3MfFo/maxresdefault.jpg",
    altText: "Slide 2",
    caption: "Slide 2",
    header: "Slide 2 Header"
  },
  {
    src:
      "https://steemitimages.com/DQmfWComosfpTfngSEL5Kipd7JjfNsPgAi3baPN3xTNeYmJ/20A3KuE.jpg",
    altText: "Slide 3",
    caption: "Slide 3",
    header: "Slide 3 Header"
  }
];
const MainPage = () => (
  <div>
    <Header />
    <UncontrolledCarousel items={items} />
  </div>
);

export default MainPage;
