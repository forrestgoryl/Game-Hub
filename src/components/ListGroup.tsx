import { useState } from "react";

function ListGroup() {
  let cities = ["New York", "San Francisco", "Boston", "Seattle", "Anchorage"];
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>List</h1>
      {cities.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {cities.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
            }}
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
