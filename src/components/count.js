import { React, useState } from "react";
import "./count.css";
// const Count = () => {
//   const [count, setCount] = useState(0);

//   const [val, setVal] = useState([])
//   const onIncrease = (e) => {
//     e.preventDefault()

//     setCount(count + 1);
//   };

//   const onDecrease = (e) => {
//     e.preventDefault()

//     count <= 0 ? setCount(0) : setCount(count - 1);
//   };

//   const onAdHandler = (e) => {
//     e.preventDefault()
//     val.push(count)
//   }

//   return (
//     <div>
//       <h3 className="heading">A small Add Count Project</h3>
//       <div className="container">
//         <h3>{count}</h3>
//         <div className="btn_container">
//           <button className="btn" onClick={onIncrease}>
//             +
//           </button>
//           <button className="btn" onClick={onDecrease}>
//             -
//           </button>
//           <button className="btn addBtn" onClick={onAdHandler}>
//             Add
//           </button>
//         </div>
//       </div>
//         <h3 className="value">{val}</h3>
//     </div>
//   );
// };
// export default Count;





const Count = () => {
  const [count, setCount] = useState(0);
  const [val, setVal] = useState([]);

  const onIncrease = () => {
    setCount(count + 1);
  };

  const onDecrease = () => {
    setCount(count <= 0 ? 0 : count - 1);
  };

  const onAddHandler = () => {
    setVal([...val, count]);
    setCount(0)
  };

  const onDeleteHandler = (index) => {
    const updatedArray = val.filter((_, i) => i !== index);
    setVal(updatedArray);
  };

  return (
    <div className="main-container">
      <h3 className="heading">A small Add Count Project</h3>
      <div className="container">
        <h3 className="count-value">{count}</h3>
        <div className="btn_container">
          <button className="btn" onClick={onIncrease}>
            +
          </button>
          <button className="btn" onClick={onDecrease}>
            -
          </button>
          <button className="btn addBtn" onClick={onAddHandler}>
            Add
          </button>
        </div>
      </div>
      <div className="value">
        {val.map((item, index) => (
          <div key={index} className="result-value">
            {item} <button className="delete" onClick={() => onDeleteHandler(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Count;

