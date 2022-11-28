import { View } from "react-native";
import InputUser from "../InputUser";
import { styles } from "./styles";

export default function Body() {
  return (
    <View style={styles.container}>
      <InputUser />
    </View>
  );
}