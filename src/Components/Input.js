import React from "react";
import arrow from "../images/icon-arrow.svg";
import error from "../images/icon-error.svg";
import { useState } from "react";

function Input() {
  const [isError, setIsError] = useState(false);

  const [text, setText] = useState("");
  const submitHnadler = (event) => {
    event.preventDefault();
    if (text.includes("@")) {
      return setIsError(false);
    } else {
      return setIsError(true);
    }
  };
  const changeHandler = (e) => {
    setText(e.target.value);
    console.log(text);
  };

  return (
    <form
      onSubmit={submitHnadler}
      className=" w-[100%] md:w-[50%] flex justify-between mb-4  mt-4 relative"
    >
      <input
        onChange={changeHandler}
        type="email"
        placeholder="Email Address"
        className="  border-2 border-Redone rounded-[20px] w-[100%]  px-4 py-2 border-solid placeholder-thirdColor"
      />
      {isError && (
        <img
          src={error}
          className="absolute left-[12rem] top-2 w-[30px] md:left-[20rem]	 "
          alt=""
        />
      )}
      <button className=" bg-gradient-to-r from-thirdColor to-forthColor px-8 absolute py-5 rounded-[25px] left-[14rem] -top-1 md:left-[22rem] ">
        {" "}
        <img src={arrow} alt="" />{" "}
      </button>
    </form>
  );
}

export default Input;
