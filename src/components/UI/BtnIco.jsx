import React from 'react';
import cls from "../../style/UI/BtnIco.module.css"

const BtnIco = ({img, cb, prtClass}) => {


  const styles = [cls.btn]
  if(prtClass) styles.push(prtClass)

  return (
    <button className={styles.join(" ")} onClick={cb}>
      <img src={img} alt="ICO"/>
    </button>
  );
};

export default BtnIco;