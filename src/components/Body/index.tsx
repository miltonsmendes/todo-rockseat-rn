import { View, TextInput, TouchableOpacity, Image, Alert } from "react-native";
import { useState } from "react";
import TaskList from "../TaskList";
import Plus from "../../../assets/plus.png";
import { styles } from "./styles";

export default function Body() {
  const [taskName, setTaskName] = useState<string>();
  const [taskList, setTaskList] = useState<string[]>([]);

  function handleAddButton() {
    if (taskName === "") {
      return;
    }
    if (taskList.includes(taskName)) {
      return Alert.alert(
        "Task já existe",
        "Já existe uma task na lista com esse nome"
      );
    }
    setTaskList((prevState) => [...prevState, taskName]);
    setTaskName("");
  }

  function handleTaskRemove(item: string) {
    setTaskList(taskList.filter((task) => task != item));
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

      <TaskList list={taskList} handleTaskRemove={handleTaskRemove} />
    </View>
  );
}
