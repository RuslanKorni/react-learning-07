// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchTasks } from "../reduxOld/operationsOld";
// import { getTasks } from "../reduxOld/selectorsOld";


// export const App = () => {
//   const dispatch = useDispatch();

//   //! Отримуємо частини стану
//   const { items, isLoading, error } = useSelector(getTasks);

//   //! Викликаємо операцію
//   useEffect(() => {
//     dispatch(fetchTasks());
//   }, [dispatch]);

  
// //? Рендерим розмітку в залежності від значень у стані
//   return (
//     <div>
//       {isLoading && <p>Loading...</p>}
//       {error && <p>{error}</p>}
//       <p>{items.length > 0 && JSON.stringify(items, null, 2)}</p>
//     </div>
//   );
// };
