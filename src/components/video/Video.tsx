import React from "react";
import { ItemType } from "../list/List";

export class Video extends React.Component<ItemType> {
  render() {
    return (
      <div className="item item-video">
        <iframe src={this.props.url} frameBorder={0} allow="autoplay; encrypted-media" allowFullScreen></iframe>
        <p className="views">Просмотров: {this.props.views}</p>
      </div>
    )
  };
};
