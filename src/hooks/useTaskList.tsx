import { createContext, useState, ReactNode, useContext } from "react";
import { Alert } from "react-native";
import uuid from "react-native-uuid";

interface TaskListProviderProps {
  children: ReactNode;
}

interface TaskListContextProps {
  taskList: object[];
  removeTask: (item: string) => void;
  addTask: (taskName: string) => void;
  changeTaskStatus: (id: string) => void;
}

export const TaskListContext = createContext<TaskListContextProps>(
  {} as TaskListContextProps
);

export function TaskListProvider({ children }: TaskListProviderProps) {
  const [taskList, setTaskList] = useState<object[]>([]);

  function removeTask(item: string) {
    setTaskList(taskList.filter((obj) => obj.id != item));
  }

  function addTask(taskName: string) {
    if (taskList.find((obj) => obj.name === taskName)) {
      return Alert.alert(
        "Task já existe",
        "Já existe uma task na lista com esse nome"
      );
    }

    setTaskList((prevState) => [
      ...prevState,
      { id: uuid.v4(), name: taskName, done: false },
    ]);
  }

  function changeTaskStatus(id: string) {
    const task = taskList.find((obj) => obj.id === id);
    setTaskList((currentList) =>
      currentList.map((obj) => {
        if (obj.id === id) {
          return { ...obj, done: !task.done };
        }
        return obj;
      })
    );
  }

  return (
    <TaskListContext.Provider
      value={{ taskList, removeTask, addTask, changeTaskStatus }}
    >
      {children}
    </TaskListContext.Provider>
  );
}

export function useTaskList() {
  const context = useContext(TaskListContext);

  return context;
}
