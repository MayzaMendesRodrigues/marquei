import { COLORS, FONT_SIZE } from "../../constants/theme"

export const styles = {
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
    paddingLeft: 20,
    paddingRight:20,
    justifyContent:"space-between",
    marginBottom: 20
    
  
  },

  theme: {
    selectedDayBackgroundColor: COLORS.blue,
    selectedDayTextColor: COLORS.white,
    todayTextColor: COLORS.red,
    arrowColor: COLORS.blue
  },

  textHours: {
    fontSize: FONT_SIZE.lg, 
    fontWeight: "bold",
    color: COLORS.gray2,
    marginTop:20
  }
}