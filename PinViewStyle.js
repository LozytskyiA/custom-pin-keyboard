import { StyleSheet } from "react-native"

const style = StyleSheet.create({
  pinView: {
    alignItems: "center",
    width: "100%",
  },
  buttonAreaContainer: {
    alignItems: "center",
    alignContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  buttonContainer: {
    marginBottom: 8,
    width: "33%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonView: {
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#000",
    fontSize: 22,
    fontWeight: "bold",
  },
  inputContainer: {
    flexDirection: "row",
    marginBottom: 4,
    justifyContent: "center",
  },
  inputView: {
    margin: 8,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  inputText: {
    fontSize: 36,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    height: 36,
  },
})
export default style
