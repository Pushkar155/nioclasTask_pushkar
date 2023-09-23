// CustomTable.js
import React from "react";
import { useDataContext } from "../../DataContext";
import "./customtable.scss";
import initialData from "../../data"

const CustomTable = () => {
  const { selectedItems, setSelectedItems } = useDataContext();

  const handleCheckboxChange = (item) => {
    if (selectedItems.includes(item)) {
      // console.log(selectedItems)
      setSelectedItems(selectedItems.filter((selected) => selected !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
      // console.log(selectedItems)
    }
  };

  return (
    <table>
      <tbody>
        {initialData.map((item) => (
          <tr key={item.id} className="df">
            <td className="check">
              <input
                type="checkbox"
                className="custom-checkbox"
                checked={selectedItems.includes(item)}
                onChange={() => handleCheckboxChange(item)}
              />
            </td>
            <td className="name">{item.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CustomTable;
