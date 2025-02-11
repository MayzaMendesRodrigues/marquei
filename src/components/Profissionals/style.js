import { COLORS, FONT_SIZE } from "../../constants/theme"

export const styles = {

  profissionals: {
    backgroundColor: COLORS.white,
    flex:1,
    padding:8,
    flexDirection: "row",
    borderWidth:1,
    borderColor: COLORS.gray4,
    marginTop: 3,
    marginBottom: 3,
    borderRadius: 10


  },

  iconProfissionals: {
    margin: 8
  },

 

  textDoctorProfissionals:{
    fontSize: FONT_SIZE.md,
    color: COLORS.gray1,
    height: 100,
    marginTop:5
  
   
  },

  textSpecialtyProfissionals:{
    fontSize: FONT_SIZE.sm,
    color:COLORS.gray3
   
  }



}