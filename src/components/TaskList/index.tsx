import { View, Text, Image, FlatList } from "react-native";
import { useState } from "react";
import { styles } from "./styles";
import CounterDisplay from "../CounterDisplay";
import Task from "../Task";
import ImageClipboard from "../../../assets/Clipboard.png";

export default function TaskList() {
  const [tasklist, setTasklist] = useState<string[]>([
    "Nome da task1",
    "Nome da task2",
    "Nome da task3",
  ]);

  function handleTaskRemove(item: string) {
    setTasklist(tasklist.filter((task) => task != item));
    console.log("removeu!");
  }

  return (
    <View style={styles.container}>
      <View style={styles.counterContainer}>
        <View style={styles.counterContainerRow}>
          <Text style={styles.taskCreatedText}>Criadas</Text>
          <CounterDisplay value={1} />
        </View>

        <View style={styles.counterContainerRow}>
          <Text style={styles.taskDoneText}>Concluídas</Text>
          <CounterDisplay value={1} />
        </View>
      </View>

      {tasklist.length ? (
        <FlatList
          style={styles.listContainer}
          data={tasklist}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Task
              taskName={item}
              key={item}
              onRemove={() => handleTaskRemove(item)}
            />
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
