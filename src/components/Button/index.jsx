import {Text, TouchableOpacity} from 'react-native';
import {styles} from './style';
import { LinearGradient } from 'expo-linear-gradient';

export default function Button(props) {
  return (
    <LinearGradient
      colors={styles.pinkPurple.colors}
      locations={styles.pinkPurple.locations}
      start={styles.pinkPurple.start}
      end={styles.pinkPurple.end}
      style={[styles.gradientContainer, props.theme === 'pinkPurple' && styles.pinkPurple]}>
      <TouchableOpacity
        style={[
          styles.btn,
          props.theme == 'pinkPurple'
            ? styles.pinkPurple.colors
            : styles.primary,
        ]}
        onPress={() => props.onPress()}>
        <Text style={styles.text}>{props.text}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}
