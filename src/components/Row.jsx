import React from 'react';
import cls from "./../style/Grid.module.css"

const Row = (props) => {

  return (
    <div className={cls.row}>
      {props.children}
    </div>
  );
};

export default Row;