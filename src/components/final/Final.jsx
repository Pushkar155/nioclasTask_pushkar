import React from 'react'
import "./final.scss";
import {useDataContext} from '../../DataContext';
const Final = () => {
//   const [selectedItems, setSelectedItems] = useState([]);
  const {time,selectedItems,name}=useDataContext();
  console.log(time,selectedItems);

  return (
    <div className='final'>
      <div className="final_up">
        <h1>Nioclass</h1>
      </div>
      <div className="final_down">
        <div className="container">
          <div className="container_up">
            <h4>Thanks you for giving the test</h4>
            <h3>{name}</h3>

          </div>
          <div className="container_middle">
            {
              selectedItems.map((item,index)=>(
                <div className="show">
                  <h4>{item.name}</h4>
                  <h3>{time[index]} sec</h3>
                </div>
                // console.log(index)
              ))
            }
          </div>
          <div className="container_down">
            <h4>Your expected time for giving the test</h4>
            <h3>{(selectedItems.length)*60} sec</h3>
          </div>


        </div>

      </div>

    </div>
  )
}

export default Final