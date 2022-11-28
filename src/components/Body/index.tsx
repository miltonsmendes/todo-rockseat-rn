import { View } from "react-native";
import InputUser from "../InputUser";
import TaskList from "../TaskList";
import { styles } from "./styles";

export default function Body() {
  return (
    <View style={styles.container}>
      <InputUser />
      <TaskList />
    </View>
  );
}
