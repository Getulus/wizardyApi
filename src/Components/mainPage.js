import React from "react";
import "./mainPageStyle.css";

const MainPage = (props) => {
  return (
    <React.Fragment>
      <div className="houses">
        <img
          onClick={props.changeBanner.bind(this, "gryffendor")}
          alt="griffendor"
          src={require("/home/getulus/my_project/Advanced/1st week/StreamCheckker/streamchecker/src/static/img/gryffendor.png")}
        />
        <img
          alt="slytherin"
          onClick={props.changeBanner.bind(this, "slytherin")}
          src="https://www.pngkey.com/png/full/226-2269266_slytherin-crest-png-harry-potter-slytherin-logo.png"
        />
        <img
          alt="hufflepuff"
          onClick={props.changeBanner.bind(this, "hufflepuff")}
          src={require("/home/getulus/my_project/Advanced/1st week/StreamCheckker/streamchecker/src/static/img/hufflepuff.png")}
        />

        <img
          alt="ravenclaw"
          onClick={props.changeBanner.bind(this, "ravenclaw")}
          src={require("/home/getulus/my_project/Advanced/1st week/StreamCheckker/streamchecker/src/static/img/ravenclaw.png")}
        />
      </div>
    </React.Fragment>
  );
};

export default MainPage;
