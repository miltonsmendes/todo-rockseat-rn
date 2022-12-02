import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { CounterProvider } from "./src/hooks/useCounter";
import { TaskListProvider } from "./src/hooks/useTaskList";
import Home from "./src/screens/Home";

export default function App() {
  return (
    <View style={styles.container}>
      <TaskListProvider>
        <CounterProvider>
          <Home />
        </CounterProvider>
      </TaskListProvider>

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
