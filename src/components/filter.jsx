import React from "react";

const Filter = props => {
  const { data, valueProperty, nameProperty, onItemSelect, selectItem } = props;

  return (
    <ul className="filter text-center">
      {data.map(filter => (
        <li
          onClick={() => onItemSelect(filter)}
          key={filter[valueProperty]}
          className={selectItem === filter ? "selected" : ""}
        >
          {filter[nameProperty]}
        </li>
      ))}
    </ul>
  );
};

Filter.defaultProps = {
  valueProperty: "_id",
  nameProperty: "name"
};

export default Filter;
