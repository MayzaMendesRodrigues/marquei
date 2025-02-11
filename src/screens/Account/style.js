import { BORDER_RADIUS, COLORS, FONT_SIZE, FONT_WEIGHTS, SPACING } from "../../constants/theme"

export const styles = {
  container: {
    flex: 1,
    padding: 50,
    justifyContent:'space-between',
    
 },

 container__title: {
  alignItems: "center",
  justifyContent: "center",
  marginTop: 50,

 },

 container__input:{
  flex:2,
  marginTop: 5,
  height: 40,
  fontSize:FONT_SIZE.md,
  justifyContent: "center"
  
},

title: {
  textAlign: 'center',
  fontSize: FONT_SIZE.xl,
  fontWeight: '600',
  color: COLORS.purple,
  alignItems: "center",
  },




  buttonSignUp:{

    marginTop:'auto'
  },

  containerLogo: {
    alignItems: "center"
  },

  containerInput:{
    marginBottom: SPACING.sm,
  },

  socialLoginText:{
    color: COLORS.gray2,
    margin: SPACING.md,
   
   },

   lineContainer: {
    flexDirection: 'row',
    alignItems:"center",
    marginVertical: SPACING.lg
    
   },

   line:{
    flex:1,
    height: 2,
    backgroundColor: COLORS.gray3,
    
   },

   socialIcons:{
    flexDirection:"row",
    justifyContent: "space-evenly"
    
   },

   signupLinkContainer: {
    alignItems: 'center',
    marginTop: SPACING.md,
},
signupText: {
    color: COLORS.gray2,
},
signupLink: {
    color: '#3d3d6b',
    fontWeight: FONT_WEIGHTS.bold,
},

  logo:{
    width:100,
    height: 100
   
  },

};






  

  