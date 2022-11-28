import { View, Text, Image } from "react-native";
import Logo from "../../../assets/Logo.png";
import { styles } from "./styles";

export default function Header() {
  return (
    <View style={styles.container}>
      <Image source={Logo} />
    </View>
  );
}
