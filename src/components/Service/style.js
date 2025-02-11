import { COLORS, FONT_SIZE } from "../../constants/theme"

export const styles = {

  service: {
    backgroundColor: COLORS.white,
    flex:1,
    padding:12,
    flexDirection: "row",
    borderWidth:1,
    borderColor: COLORS.gray4,
    marginTop: 3,
    marginBottom: 3,
    borderRadius: 10


  },

  containerText :{
    flex: 1
  },

  description: {
    marginTop: 5,
    color: COLORS.gray3,
    fontSize: FONT_SIZE.md

  },

  
  price: {
    marginTop: 3,
    color: COLORS.blue,
    fontSize: FONT_SIZE.sm

  },

 




}