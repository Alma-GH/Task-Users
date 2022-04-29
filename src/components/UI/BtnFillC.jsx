import React from 'react';
import cls from "./../../style/UI/BtnFillC.module.css"

const BtnFillC = ({name,cb, disabledBtn,prtClass}) => {

  const styles = [cls.btn]
  if(prtClass) styles.push(prtClass)

  return (
    <button className={styles.join(" ")} onClick={cb} disabled={disabledBtn}>
      {name}
    </button>
  );
};

export default BtnFillC;