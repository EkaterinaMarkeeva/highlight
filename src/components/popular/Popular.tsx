import React from "react";

type PopularType = { children: React.ReactNode };

export class Popular extends React.Component<PopularType> {
  render() {
    return (
      <div className="wrap-item wrap-item-popular">
        <span className="label">Popular!</span>
        {this.props.children}
      </div>
    );
  }
};
