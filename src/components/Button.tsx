
import React from "react";

type ButtonPropsTypes = {
  callBack: () => void
  nickName: string
}


export const Button = (props:ButtonPropsTypes) => {

  const onClickHandler = () => {
      props.callBack()
  }
  return (
      <button onClick={onClickHandler}>{props.nickName}</button>
  )
}