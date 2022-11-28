import { View, Text } from "react-native";
import { styles } from "./styles";

interface Props {
  value: number;
}

export default function CounterDisplay({ value }: Props) {
  return (
    <View>
      <View style={styles.counterContainer}>
        <View style={styles.counterContainerRow}>
          <View style={styles.counterDisplay}>
            <Text style={styles.counterDisplayText}>{value}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
