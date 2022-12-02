import { View, TextInput, TouchableOpacity, Image } from "react-native";
import { useState } from "react";
import TaskList from "../TaskList";
import Plus from "../../../assets/plus.png";
import { styles } from "./styles";
import { useTaskList } from "../../hooks/useTaskList";

export default function Body() {
  const { addTask, removeTask } = useTaskList();
  const [taskName, setTaskName] = useState<string>();

  function handleAddButton() {
    taskName && addTask(taskName);
    setTaskName("");
  }

  function handleTaskRemove(item: string) {
    removeTask(item);
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <TextInput
          style={styles.textInput}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor={"#808080"}
          onChangeText={setTaskName}
          value={taskName}
        ></TextInput>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={handleAddButton}
        >
          <Image source={Plus} />
        </TouchableOpacity>
      </View>

      <TaskList handleTaskRemove={handleTaskRemove} />
    </View>
  );
}
