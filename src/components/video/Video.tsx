import React from "react";

export type VideoType = {
  type: string,
  url: string,
  views: number
};

export class Video extends React.Component<VideoType> {
  render() {
    return (
      <div className="item item-video">
        <iframe src={this.props.url} frameBorder={0} allow="autoplay; encrypted-media" allowFullScreen></iframe>
        <p className="views">Просмотров: {this.props.views}</p>
      </div>
    )
  }
}
