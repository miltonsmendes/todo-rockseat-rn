import { TouchableOpacity, View, Image, TextInput } from "react-native";
import Plus from "../../../assets/plus.png";
import { styles } from "./styles";

export default function InputUser() {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor={"#808080"}
        style={styles.textInput}
      ></TextInput>
      <TouchableOpacity style={styles.buttonContainer}>
        <Image source={Plus} />
      </TouchableOpacity>
    </View>
  );
}
