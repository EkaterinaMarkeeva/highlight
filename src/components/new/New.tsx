import React from "react";

type NewType = { children: React.ReactNode };

export class New extends React.Component<NewType> {
  render() {
    return (
      <div className="wrap-item wrap-item-new">
        <span className="label">New!</span>
        {this.props.children}
      </div>
    )
  }
}
