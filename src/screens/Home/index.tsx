import { View } from "react-native";
import Header from "../../components/Header";
import Body from "../../components/Body";
import { styles } from "./styles";

export default function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <Body />
    </View>
  );
}
