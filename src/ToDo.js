import React from 'react';
import './style.css'

const ToDo = ({style}) => {
  let list = ['Belajar Intro React JS', 'Belajar Component React JS', 'Belajar Route React JS'];
  let list2 = list.map ((list3) => {
    return (
      <li>{list3}</li>
    );
  });

return (
  <div className="list">
    {list2}
  </div>
)
};

export default ToDo