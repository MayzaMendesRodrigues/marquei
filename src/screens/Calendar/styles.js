import { COLORS, FONT_SIZE, FONT_WEIGHTS } from "../../constants/theme"

export const styles = {
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
    padding: 20,
    justifyContent:"flex-end"
  
  },

  textPrincipal: {
    fontSize: FONT_SIZE.xl,
    color: COLORS.purple,
    fontweight: "800", 
    flex: 1,
    justifyContent: "center",
    textAlign: "center"
    

  },

  text:{
    fontSize: FONT_SIZE.md,
    margin: 15,
    justifyContent: "center",
    textAlign: "center"

  },

  containerInput:{
    marginBottom: 15,
  },

  logo:{
    width:100,
    height: 100
   
  },

  input:{
    backgroundColor: COLORS.gray5,
    padding: 10,
    borderRadius: 6,
  },

  footer:{
  alignItems:"center",
   justifyContent: "flex-end"
  },

  footerLink: {
    color: COLORS.blue
  }

}
