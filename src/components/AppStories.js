import React from "react";
import Stories from "react-insta-stories"

function AppStories() {
    return (
        <Stories
            width='100vw'
            loop={true}
            defaultInterval={2000}
            stories={stories2}
            storyContainerStyles={{ overflow: "hidden", maxHeight: "calc(100vh - 112px)" }}
        />
    )
}

const stories2 = [
    {
      url: "https://picsum.photos/1080/1920?a",
      seeMore: ({ close }) => (
        <div
          style={{
            width: "100%",
            height: "100%",
            background: "white",
          }}
        >
          <h2>Just checking the see more feature.</h2>
          <p style={{ textDecoration: "underline" }} onClick={close}>
            Go on, close this popup.
          </p>
        </div>
      ),
    },
    {
      url: "https://picsum.photos/1080/1920?b",
      seeMore: ({ close }) => (
        <div
          style={{
            width: "100%",
            height: "100%",
            background: "white",
          }}
        >
          <h2 style={{margin:0}} >Just checking the see more feature.</h2>
          <p style={{ textDecoration: "underline" }} onClick={close}>
            Go on, close this popup.
          </p>
        </div>
      ),
    },
    {
        url: "https://picsum.photos/1080/1920?c",
        seeMore: ({ close }) => (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    background: "white",
                }}
            >
                <h2>Just checking the see more feature.</h2>
                <p style={{ textDecoration: "underline" }} onClick={close}>
                    Go on, close this popup.
                </p>
            </div>
        ),
    },
    {
      url: "https://picsum.photos/1080/1920?d",
      seeMore: ({ close }) => (
        <div
          style={{
            width: "100%",
            height: "100%",
            background: "white",
          }}
        >
          <h2>Just checking the see more feature.</h2>
          <p style={{ textDecoration: "underline" }} onClick={close}>
            Go on, close this popup.
          </p>
        </div>
      ),
    },
];

export default AppStories;