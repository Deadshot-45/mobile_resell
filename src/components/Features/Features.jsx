import React from "react";
import FeaturesBox from "./FeaturesBox";

const Features = () => {
  let style = {
    backgroundColor: "#f0f0f0",
  };
  return (
    <div
      className="w-full flex gap-6 px-5 py-10"
      style={{ backgroundColor: style.backgroundColor }}
    >
      {" "}
      <FeaturesBox
        icon={"fa-gear"}
        text={
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour"
        }
        head={"Easy To Customize"}
      />
      <FeaturesBox
        icon={"fa-heart"}
        text={
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour"
        }
        head={"User Friendly"}
      />
      <FeaturesBox
        icon={"fa-clock"}
        text={
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour"
        }
        head={"24/7 Support"}
      />
    </div>
  );
};

export default Features;
