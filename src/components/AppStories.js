import React from "react";
import Stories from "react-insta-stories"
import image1 from "../statics/1.png"
import image2 from "../statics/2.png"
import image3 from "../statics/3.png"
import image4 from "../statics/4.png"

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
      url: image1,
      seeMoreCollapsed: () => {
        <span>See Profile</span>
      },
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
      url: image2,
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
        url: image3,
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
      url: image4,
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
];

export default AppStories;