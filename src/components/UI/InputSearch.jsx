import React from 'react';
import BtnIco from "./BtnIco";
import imgS from "../../assets/svgs/search.svg";
import cls from "../../style/UI/InputSearch.module.css";

const InputSearch = ({prtClass,inputAtt, value, setVal, cb}) => {


  function pressEnter(e){
    if(e.key === "Enter") cb()
  }

  const styles = [cls.searchInput]
  if(prtClass) styles.push(prtClass)

  return (
      <div className={styles.join(" ")}>
        <input {...inputAtt} value={value} onChange={setVal} onKeyDown={pressEnter} />
        <BtnIco prtClass={cls.btn} img={imgS} cb={cb}/>
      </div>
  );
};

export default InputSearch;