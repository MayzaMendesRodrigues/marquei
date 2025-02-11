import { Dimensions } from "react-native"
import { BORDER_RADIUS, COLORS, FONT_WEIGHTS } from "../../constants/theme"
import { height } from "@fortawesome/free-brands-svg-icons/fa42Group"
import { overlay } from "react-native-paper"

const deviceWidth = Math.round(Dimensions.get('window').width)


export const styles = {
    cardContainer: {
        marginBottom: 30,
    },

    container: {
        flex:1,
        alignItems: 'center',
        borderRadius: BORDER_RADIUS.md,
        overflow:'hidden',
        margin: 15,
        shadowColor: '#000',
        shadowOpacity: 15,
        elevation: 5,
        shadowRadius:4,
        backgroundColor: COLORS.white,
        shadowOffset: { width: 0, height: 2 },

    }, 

    text: {
        fontWeight: FONT_WEIGHTS.bold,
        fontSize: 14,
        margin: 10,
       
        
    }, 
    cardImage: {
        width:'100%',
        resizeMode:'cover',

    }
}