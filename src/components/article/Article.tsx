import React from "react";
import { ItemType } from "../list/List";

export class Article extends React.Component<ItemType> {
  render () {
    return (
      <div className="item item-article">
          <h3><a href="#">{this.props.title}</a></h3>
          <p className="views">Прочтений: {this.props.views}</p>
      </div>
    );
  }
};
