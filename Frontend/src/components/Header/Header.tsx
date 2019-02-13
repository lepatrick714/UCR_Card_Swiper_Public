import * as React from "react";

export interface IHeaderOwnProps {
  backgroundImage: string;
  subtitles: string[];
}

const getSubTitle = (subtitles: string[]) => {
  return subtitles.map((ele, index) => {
    return (
      <h1 className={"sub-title"} key={index}>
        {ele}
      </h1>
    );
  });
};

export const Header = (props: IHeaderOwnProps) => {
  return (
    // TODO: lepatrick migrate in-line styling to style-component
    <header
      className={"masthead"}
      style={{
        backgroundImage: `url(${props.backgroundImage})`,
        height: "32em"
      }}
    >
      <div className={"overlay"} />
      <div className={"container"}>
        <div className={"row"}>
          <div className={"col-lg-10 col-md-10 mx-auto"}>
            <div className={"site-heading"} style={{ padding: "100px" }}>
              <div className={"middle"}>{getSubTitle(props.subtitles)}</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
