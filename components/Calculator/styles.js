const FONT_SIZE = 15;

const styles = {
  calculatorContainer: {
    flex: 1,
    width: "100%"
  },
  buttonArea: {
    flex: 1.5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonArea1: {
    flex: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 10
  },
  buttonArea2: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 10
  },
  button: {
    clear: {
      touch: {
        backgroundColor: "#A9DFBF",
        width: 150,
        height: 30,
        borderColor: "#A9DFBF",
        borderWidth: 2,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center"
      },
      text: {
        color: "#F2F4F4",
        fontSize: 20,
        fontWeight: "bold"
      }
    },
    info: {
      touch: {
        backgroundColor: "#fff",
        width: 30,
        height: 30,
        borderColor: "#736E6D",
        borderWidth: 2,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center"
      },
      text: {
        color: "#736E6D",
        fontSize: 20,
        fontWeight: "bold"
      }
    }
  },
  contentArea: {
    flex: 15,
    flexDirection: "row"
  },
  textArea: {
    flex: 2,
    paddingTop: 20,
    paddingLeft: 20
  },
  resultArea: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: 20,
    paddingRight: 20
  },
  textInput: {
    width: "100%",
    height: "100%",
    fontSize: FONT_SIZE,
    fontWeight: "bold",
    textAlign: "left",
    textAlignVertical: "top"
  }
};

export default styles;
