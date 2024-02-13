import React from "react";
import { IListItem } from "types";
import ListItem from "./item";

interface IProps {
  items: Array<IListItem>;
}

const List = (props: IProps) => {
  const { items } = props;

  return (
    <ul>
      {items?.map((item: IListItem, index) => (
        <ListItem key={index} item={item} />
      ))}
    </ul>
  );
};

export default List;