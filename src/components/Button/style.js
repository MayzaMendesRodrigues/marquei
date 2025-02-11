import { COLORS, FONT_SIZE, COLOR_GRADIENTE } from "../../constants/theme"

export const styles = {
  pinkPurple: {
    colors: ['#F5B7CA', '#A83F98', '#81017F'],
    locations: [0, 0.7, 1],
    start: { x: 0, y: 0 }, 
    end: { x: 1, y: 1 },


  }, 
  gradientContainer: {
    borderRadius: 50,
    width: '100%',
    padding: 2, 
   },

  btn:{
    color: COLOR_GRADIENTE.pinkPurple,
    borderRadius:50,
    width:'100%',
    padding: 12,
  },



  danger:{
    backgroundColor:COLORS.red
  },

  text: {
    color:'white',
    fontSize: FONT_SIZE.md,
    textAlign: 'center',
  }
}
