import { createContext, useState, ReactNode, useContext } from "react";
import { useTaskList } from "./useTaskList";

interface CounterProviderProps {
  children: ReactNode;
}

interface CounterContextProps {
  counterCreated: number;
  counterDone: number;
  setCounterCreated: React.Dispatch<React.SetStateAction<number>>;
  handleCounterDone: () => void;
}

export const CounterContext = createContext<CounterContextProps>(
  {} as CounterContextProps
);

export function CounterProvider({ children }: CounterProviderProps) {
  const { taskList } = useTaskList();
  const [counterCreated, setCounterCreated] = useState<number>(0);
  const [counterDone, setCouterDone] = useState<number>(0);

  function handleCounterDone() {
    taskList.length > 0
      ? setCouterDone(taskList.filter((obj) => obj.done === true).length)
      : setCouterDone(0);
  }

  return (
    <CounterContext.Provider
      value={{
        counterCreated,
        setCounterCreated,
        counterDone,
        handleCounterDone,
      }}
    >
      {children}
    </CounterContext.Provider>
  );
}

export function useCounter() {
  const context = useContext(CounterContext);

  return context;
}
