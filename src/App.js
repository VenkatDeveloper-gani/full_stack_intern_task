import React, { useState } from "react";
import "./styles.css";

const ListItemsData = [
  { id: 1, Name: "Shirt 1", Price: 100 },
  { id: 2, Name: "Shirt 2", Price: 120 },
  { id: 3, Name: "Shirt 3", Price: 150 },
  { id: 4, Name: "Shirt 4", Price: 160 },
  { id: 5, Name: "Shirt 5", Price: 170 },
  { id: 6, Name: "Shirt 6", Price: 180 },
  { id: 7, Name: "Trouser 1", Price: 170 },
  { id: 8, Name: "Trouser 2", Price: 190 },
  { id: 9, Name: "Trouser 3", Price: 200 },
  { id: 10, Name: "Trouser 4", Price: 270 }
];

const ListItem = ({ selectedId, onItemClick }) => {
  return (
    <div className="list-item">
      <ul>
        {ListItemsData.map((item) => (
          <li
            key={item.id}
            className={item.id === selectedId ? "active" : ""}
            onClick={() => onItemClick(item.id)}
          >
            {item.Name}
          </li>
        ))}
      </ul>
    </div>
  );
};

const CardItem = ({ id }) => {
  const selectedItem = ListItemsData.find((item) => item.id === id);

  return (
    <div className="card-details">
      <div className="card-box">
        <h2 className="heading-style">{selectedItem.Name}</h2>
        <p className="price-style">Price:Rs. {selectedItem.Price}</p>
        <p className="item-id-style">Item Id: {selectedItem.id}</p>
      </div>
    </div>
  );
};

const App = () => {
  const [selectedId, setSelectedId] = useState(3);

  const handleItemClick = (id) => {
    setSelectedId(id);
  };

  return (
    <div className="app">
      <div className="container">
        <div>
          <h3 className="list-items-container">List of Items :</h3>
          <ListItem selectedId={selectedId} onItemClick={handleItemClick} />
        </div>
        <div>
          <h3 className="card-heading">Card</h3>
          <CardItem id={selectedId} />
        </div>
      </div>
    </div>
  );
};

export default App;
