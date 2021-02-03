import { CenterFocusStrong } from "@material-ui/icons";

const style = {
  buttonArea: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    icon: {
      fontSize: 15,
      fontWeight: "bold",
      color: "#000",
      borderWidth: 1,
      padding: 5,
      borderRadius: 5,
      marginRight: 15
    },
    operator: {
      touch: {
        width: 25,
        height: 25,
        borderColor: "#2F7CF5",
        backgroundColor: "#2F7CF5",
        borderWidth: 2,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 10
      },
      text: {
        color: "#F2F4F4",
        fontSize: 18,
        fontWeight: "bold"
      },
      sumAll: {
        width: 60
      },
      textSumAll: {
        fontSize: 13
      }
    },
    clear: {
      touch: {
        width: 50,
        height: 30,
        borderColor: "#575757",
        backgroundColor: "#575757",
        borderWidth: 2,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center"
      },
      text: {
        color: "#F2F4F4",
        fontSize: 13,
        fontWeight: "bold"
      }
    }
  }
};

export default style;
