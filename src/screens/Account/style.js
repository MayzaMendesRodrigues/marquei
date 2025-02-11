import { BORDER_RADIUS, COLORS, FONT_SIZE, FONT_WEIGHTS, SPACING } from "../../constants/theme"

export const styles = {
  container: {
    flex: 2,
    padding: 50,
    justifyContent:'space-between'
 },

 container__input:{
  paddingHorizontal:5,
  marginTop: 5,
  height: 40,
  fontSize:FONT_SIZE.md,
  
},


 

  formContainer:{
    flex:2,
    paddingTop:20,
    paddingHorizontal: 20,
    marginHorzontal: 20,
    justifyContent: "center"
  },

title: {
  textAlign: 'center',
  fontSize: FONT_SIZE.xl,
  fontWeight: '600',
  color: COLORS.purple,
  alignItems: "center",
  },

  input:{
    marginBottom: SPACING.sm,
    paddingHorizontal: SPACING.md,
    height: 50,
    borderWidht:1,
    borderRadius: BORDER_RADIUS.sm,
    borderColor:COLORS.gray3,
    backgroundColor: COLORS.gray4,
    
    
  },

  inputText:{
    color: COLORS.gray3,
    fontSize: FONT_SIZE.lg
  },

  buttonSignUp:{

    marginTop: SPACING.md
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






  

  