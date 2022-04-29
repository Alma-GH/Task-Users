import React from 'react';
import BtnFillC from "./UI/BtnFillC";
import imgSort from "../assets/svgs/sort.svg";
import gridCls from "../style/Grid.module.css"
import Row from "./Row";


const GridHead = ({btn1, btn2, btn3}) => {



  return (
    <div className={gridCls.gridHead}>
      <Row>
        <div className={gridCls.id}>
          <BtnFillC name={<div>ID <img src={imgSort} alt=""/></div>} cb={btn1}/>
        </div>

        <div className={gridCls.title}>
          <BtnFillC name={<div>Заголовок <img src={imgSort} alt=""/></div>} cb={btn2}/>
        </div>

        <div className={gridCls.body}>
          <BtnFillC name={<div>Описание <img src={imgSort} alt=""/></div>} cb={btn3}/>
        </div>
      </Row>
    </div>
  );
};

export default GridHead;