import React from "react";
import styles from "./TodoListItem.module.css";
import { BsCheckCircle } from "react-icons/bs";
import { IoIosRemoveCircleOutline } from "react-icons/io";

interface TodoListItemProps {
  text: string;
  isChecked: boolean;
}

const TodoListItem = (props: TodoListItemProps) => {
  return (
    <>
      <li className={styles.container}>
        <BsCheckCircle
          className={[
            styles.checkIcon,
            `${props.isChecked ? styles.checkedIcon : styles.unCheckedIcon}`,
          ].join(" ")}
        />
        <span>{props.text}</span>
        <IoIosRemoveCircleOutline className={styles.removeIcon} />
      </li>
    </>
  );
};

export default TodoListItem;
