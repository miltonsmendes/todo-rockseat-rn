import { View, Text, Image, FlatList } from "react-native";
import { useState, useEffect } from "react";
import { styles } from "./styles";
import CounterDisplay from "../CounterDisplay";
import Task from "../Task";
import ImageClipboard from "../../../assets/Clipboard.png";
import { useCounter } from "../../hooks/useCounter";
import { useTaskList } from "../../hooks/useTaskList";

export default function TaskList() {
  const { taskList } = useTaskList();
  const { counterCreated, setCounterCreated, counterDone, handleCounterDone } =
    useCounter();

  useEffect(() => {
    setCounterCreated(taskList.length);
    handleCounterDone();
  }, [taskList]);

  return (
    <View style={styles.container}>
      <View style={styles.counterContainer}>
        <View style={styles.counterContainerRow}>
          <Text style={styles.taskCreatedText}>Criadas</Text>
          <CounterDisplay value={counterCreated} />
        </View>

        <View style={styles.counterContainerRow}>
          <Text style={styles.taskDoneText}>Concluídas</Text>
          <CounterDisplay value={counterDone} />
        </View>
      </View>

      {taskList && taskList.length ? (
        <FlatList
          style={styles.listContainer}
          data={taskList}
          keyExtractor={(item: object) => item.id}
          renderItem={({ item }) => (
            <Task taskName={item.name} key={item.id} id={item.id} />
          )}
        />
      ) : (
        <View style={styles.listEmptyContainer}>
          <View style={styles.lineDivisor} />
          <Image source={ImageClipboard} style={styles.imageStyle} />
          <Text style={styles.listMessage}>
            Você ainda não tem tarefas cadastradas
          </Text>
          <Text style={styles.listSubMessage}>
            Crie tarefas e organize seus itens a fazer
          </Text>
        </View>
      )}
    </View>
  );
}
