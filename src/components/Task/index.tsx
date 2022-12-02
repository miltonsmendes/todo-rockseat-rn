import { Text, TouchableOpacity, View, Image } from "react-native";
import { useState } from "react";
import TrashIcon from "../../../assets/trash.png";
import CheckTrue from "../../../assets/check-true.png";
import CheckFalse from "../../../assets/check-false.png";
import { styles } from "./styles";
import { useTaskList } from "../../hooks/useTaskList";

interface Props {
  taskName: string;
  id: string;
}

export default function Task({ taskName, id }: Props) {
  const { removeTask, changeTaskStatus } = useTaskList();
  const [check, setCheck] = useState<boolean>(false);
  const [lineStyle, setLineStyle] = useState<{}>({ color: "#F2F2F2" });

  function handleCheck(id: string) {
    setCheck(!check);
    check
      ? setLineStyle({ color: "#F2F2F2" })
      : setLineStyle({ color: "#808080", textDecorationLine: "line-through" });
    changeTaskStatus(id);
  }

  function onRemove() {
    removeTask(id);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handleCheck(id)}>
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
