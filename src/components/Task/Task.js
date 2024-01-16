import { useDispatch } from "react-redux";
import { MdClose } from "react-icons/md";
import { deleteTask, toggleCompleted } from "../../redux/operations";
import css from "./Task.module.css";

//* 1. У компоненті Task додаємо код запуску операції видалення завдання 
//* при натисканні на кнопку видалення, 
//* і передаємо їй ідентифікатор.

//* 2. У компоненті Task додаємо код запуску операції зміни 
//* статусу під час кліку по чекбоксу, 
//* і передаємо їй весь об'єкт завдання.

export const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleDlete = () => dispatch(deleteTask(task.id));

  const handleToggle = () => dispatch(toggleCompleted(task));

  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        checked={task.completed}
        onChange={handleToggle}
      />
      <p className={css.text}>{task.text}</p>
      <button className={css.btn} onClick={handleDlete}>
        <MdClose size={24} />
      </button>
    </div>
  );
};
