import React from 'react';
import cls from "./../../../style/UI/Notifications/Loader.module.css"

const Loader = ({prtClass}) => {

  let spin = cls.spinnerBox
  let circBorder = cls.circleBorder
  let circCore = cls.circleCore


  return (
    <div className={prtClass}>
      <div className={spin}>
        <div className={circBorder}>
          <div className={circCore}/>
        </div>
      </div>
    </div>

  );
};

export default Loader;