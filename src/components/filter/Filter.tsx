import React from "react";
import { Video } from "../video/Video";
import { Article } from "../article/Article";
import { Popular } from "../popular/Popular";
import { New } from "../new/New";

type Props = {
  url?: string;
  title?: string;
  views: number;
};

export const withFilter = <P extends Props>(Component: React.ComponentType<P>) => {
  return class extends React.Component<P> {
    constructor(props: P) {
      super(props);
    }

    componentDidMount() {
      this.filterComponent();
    }

    filterComponent(): React.ReactElement | null  {
      if (this.props.views > 1000) {
        return <Popular><Component {...this.props} /></Popular>;
      }

      if (this.props.views < 100) {
        return <New children={<Component {...this.props} />} />;
      }

      return <Component {...this.props} />;
    }
    
    render(): React.ReactElement | null  {
      return this.filterComponent();
    }
  };
};

export const FilterVideo = withFilter(Video);
export const FilterArticle = withFilter(Article);
