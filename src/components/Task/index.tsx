import { Text, TouchableOpacity, View, Image } from "react-native";
import { useState } from "react";
import TrashIcon from "../../../assets/trash.png";
import CheckTrue from "../../../assets/check-true.png";
import CheckFalse from "../../../assets/check-false.png";
import { styles } from "./styles";

interface Props {
  taskName: string;
  onRemove: () => void;
}

export default function Task({ taskName, onRemove }: Props) {
  const [check, setCheck] = useState<boolean>(false);
  const [lineStyle, setLineStyle] = useState<{}>({ color: "#F2F2F2" });

  function handleCheck() {
    setCheck(!check);

    check
      ? setLineStyle({ color: "#F2F2F2" })
      : setLineStyle({ color: "#808080", textDecorationLine: "line-through" });
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleCheck}>
        {check ? <Image source={CheckTrue} /> : <Image source={CheckFalse} />}
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={lineStyle}>{taskName}</Text>
      </View>

      <View>
        <TouchableOpacity onPress={onRemove}>
          <Image source={TrashIcon} style={styles.imageStyle} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
