import { styles } from "./style";
import logo from '../../../assets/marquei.png'
import { View, Image } from "react-native";


export default function Logo({width=100, height=50}) {
    return (
      <View style={styles.container}>
          <Image 
                source={logo}
                style={{
                  width:width,
                  height:height,
                 
                }}
                />
      </View>
    );
  }