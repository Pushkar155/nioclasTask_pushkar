import { createContext, useContext, useState } from "react";

const DataContext = createContext();

export const useDataContext = () => {
  return useContext(DataContext);
};

export const DataProvider = ({ children }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [name,setName]=useState('');
  const [realdata,setRealdata]=useState([]);
  const [time,setTime] =useState([]);
  const [total,setTotal]=useState(0);

  const handeltimesave=(data)=>{
    setTime(data);
  }

  const handeltotaltime=()=>{
    let sum = 0;

    // Iterate through the array and add each element to the sum
    for (let i = 0; i < time.length; i++) {
      sum += time[i];
    }
    console.log(sum)
    setTotal(sum);
  }

  const handledata = (item) => {
    // console.log("handle data", item);
    setRealdata([...realdata, item]);
    console.log(realdata)
    // setSelectedItems([...selectedItems, item]);
    
  }
  
  const handelName=(event)=>{
    setName(event.target.value);
  }
  return (
    <DataContext.Provider value={{ selectedItems,handeltotaltime, total,time,handeltimesave,setSelectedItems,name,handelName,realdata,handledata}}>
      {children}
    </DataContext.Provider>
  );
};