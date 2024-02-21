import React from "react";

export type ArticleType = {
  type: string,
  title: string,
  views: number
};

export class Article extends React.Component<ArticleType> {
  render () {
    return (
      <div className="item item-article">
          <h3><a href="#">{this.props.title}</a></h3>
          <p className="views">Прочтений: {this.props.views}</p>
      </div>
    )
  }
}
