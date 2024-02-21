import React from "react";
import { FilterVideo, FilterArticle } from "../filter/Filter";

export type ItemType = {
  type: string,
  url?: string,
  title?: string,
  views: number
};

type ListType = { list: ItemType[] };

export class List extends React.Component<ListType> {
  render() {
    return this.props.list.map((item, index) => {
      switch (item.type) {
        case 'video':
          return (
            <FilterVideo {...item} key={index} />
          );

        case 'article':
          return (
            <FilterArticle {...item} key={index} />
          );
      }
    });
  }
};
