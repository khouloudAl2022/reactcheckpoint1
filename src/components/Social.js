import React, { Component } from "react";
import SocialItems from "./SocialItems";
class Social extends Component {
  render() {
    const client = "progra";
    const title = {
      designer: "design",
      programmer: "programming",
    };
    const info = {
      name: "khouloud",
      nikname: "aloui",
    };
    return (
      <div>
        <ul className="list-group">
          <SocialItems
            media="facebook"
            img="https://picsum.photos/id/237/200/300"
          />
          <SocialItems media="insta" />
          <SocialItems media="snapshat" />
        </ul>
        hello {`${info.name} ${info.nikname}`}
        <h1>
          {client === "designer" ? title.designer : title.programmer} is my life
        </h1>
      </div>
    );
  }
}
export default Social;
