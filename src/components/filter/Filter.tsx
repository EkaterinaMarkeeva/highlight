import React from "react";
import { Video } from "../video/Video";
import { Article } from "../article/Article";
import { Popular } from "../popular/Popular";
import { New } from "../new/New";

export const withFilter = () => (Component: any) => {
  return class extends React.Component {
    componentDidMount() {
      this.filterComponent();
    }

    filterComponent() {
      if (this.props.views > 1000) {
        return <Popular children={<Component {...this.props} />} />;
      }

      if (this.props.views < 100) {
        return <New children={<Component {...this.props} />} />;
      }

      return <Component {...this.props} />;
    }
    
    render() {
      return this.filterComponent();
    }
  }
}

export const FilterVideo = withFilter()(Video);
export const FilterArticle = withFilter()(Article);
