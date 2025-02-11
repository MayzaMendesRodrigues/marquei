import { COLORS, FONT_SIZE } from "../../constants/theme"

export const styles = {
  appointments: {
    backgroundColor: COLORS.white,
    flex: 1,
    padding: 20,
    borderWidth:1,
    borderColor:COLORS.gray4
  
  },

  name: {
    fontSize: FONT_SIZE.md,
    color: COLORS.gray1,
    marginBottom: 2,
  },

speacilty:{
    marginBottom: 4,
    fontSize: FONT_SIZE.sm,
    color: COLORS.gray3
  },
booking: {
    flexDirection: "row"
},

bookingDate: {
    fontSize: FONT_SIZE.md,
    color:COLORS.gray2,
    marginTop:3

},

bookingHours: {
    fontSize: FONT_SIZE.md,
    color:COLORS.gray2,
    marginTop:3

}, 

containerBooking:{
    flex: 1,
    

},

container:{
    flexDirection: "row"
},

containerButton:{
    marginTop: 6
}

  

}
