import { height, width } from "@fortawesome/free-brands-svg-icons/fa42Group"
import { BORDER_RADIUS, COLORS, FONT_SIZE } from "../../constants/theme"

export const styles = {

container:{
    flex: 1,
    padding: 20,
    marginBottom: 5,
    backgroundColor:COLORS.white
    
},



label:{
    fontSize: FONT_SIZE.md,
    color:COLORS.gray1,
    marginBottom: 5,
    width:100
},
input:{
    flex: 1, 
    backgroundColor: '#fff',
    borderRadius: 8,
    borderColor: '#ddd',
    borderWidth: 1,
    paddingHorizontal: 10,
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    marginBottom: 15
   




}

  

}