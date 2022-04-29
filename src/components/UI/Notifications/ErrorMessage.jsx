import React from 'react';
import cls from "./../../../style/UI/Notifications/ErrorMessage.module.css"

const ErrorMessage = () => {
  return (
    <div className={cls.err}>
      >>>ERROR
    </div>
  );
};

export default ErrorMessage;