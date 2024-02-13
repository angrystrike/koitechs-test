import React from "react";
import { IListItem } from "types";

interface IProps {
  item: IListItem;
}

const ListItem = (props: IProps) => {
  const { item } = props;

  const generate = (data: IListItem) => {
    if (data.url) {
      return (
        <a target="_blank" href={data.url} className="text-blue-500 hover:text-blue-700">
          {data.label ? data.label + ': ' : ''}{data.value}
        </a>
      );
    }

    return <span>{data.label ? data.label + ': ' : ''}{data.value}</span>;
  };

  return (
    <li className="text-lg">{generate(item)}</li>
  );
};

export default ListItem;