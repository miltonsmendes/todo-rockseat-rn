import { View, Text } from "react-native";
import { styles } from "./styles";
import CounterDisplay from "../CounterDisplay";

export default function TaskList() {
  return (
    <View style={styles.container}>
      <View style={styles.counterContainer}>
        <View style={styles.counterContainerRow}>
          <Text style={styles.taskCreatedText}>Criadas</Text>
          <CounterDisplay value={1} />
        </View>

        <View style={styles.counterContainerRow}>
          <Text style={styles.taskDoneText}>Concluidas</Text>
          <CounterDisplay value={1} />
        </View>
      </View>

      <View style={styles.lineDivisor} />
    </View>
  );
}
