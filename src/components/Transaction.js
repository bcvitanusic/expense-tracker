import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}
      <span>
        <button
          className="delete-btn"
          onClick={() => deleteTransaction(transaction.id)}
        >
          &#10062;
        </button>
        {sign}
        {Math.abs(transaction.amount)}kn
      </span>
    </li>
  );
};
