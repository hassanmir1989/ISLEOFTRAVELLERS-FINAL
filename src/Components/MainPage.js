import React from "react";
import Header from "./Header";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap";

const items = [
  {
    src:
      "https://michaelgillettonlinecontent.azurewebsites.net/media/2189/diamondinthewilderness.jpg?anchor=center&mode=crop&width=1920&height=1080&rnd=131921749510000000",
    altText: "Slide 1",
    caption: "Slide 1"
  },
  {
    src:
      "https://preview.redd.it/be4ta0h335c21.jpg?width=1024&auto=webp&s=d6f998e7f23d5ff2c78fd2dd0d01311605e29e54",
    altText: "Slide 2",
    caption: "Slide 2"
  },
  {
    src: "http://i.dawn.com/primary/2015/05/55598ab9ca354.jpg?r=1429446988",
    altText: "Slide 3",
    caption: "Slide 3"
  }
];

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map(item => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <div className="container mt-4">
            <div className="text-center">
              <div className="main-page">
                <img className="img-fluid" src={item.src} alt={item.altText} />
              </div>
            </div>
          </div>
          <CarouselCaption
            captionText={item.caption}
            captionHeader={item.caption}
          />
        </CarouselItem>
      );
    });

    return (
      <div>
        {" "}
        <Header />
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          <CarouselIndicators
            items={items}
            activeIndex={activeIndex}
            onClickHandler={this.goToIndex}
          />
          {slides}
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={this.previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={this.next}
          />
        </Carousel>
        <div className="fixed-bottom" />
      </div>
    );
  }
}

export default MainPage;
