import { BORDER_RADIUS, FONT_WEIGHTS } from "../../constants/theme"

export const styles = {

  cardContainer: {
    marginTop: 10,
    paddingHorizontal: 10,
    backgroundColor: "yellow",

},

container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: BORDER_RADIUS.md,
    marginTop: 15,
    shadowColor: '#000',
    shadowOpacity: 15,
    elevation: 5,
    shadowRadius:4,
    backgroundColor: "red",
    shadowOffset: { width: 0, height: 4 } 

}, 

text: {
    fontWeight: FONT_WEIGHTS.bold,
    fontSize: 14,
   
}
}
