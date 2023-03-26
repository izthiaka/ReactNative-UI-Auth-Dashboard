import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    // marginTop: 10,
        marginBottom: 30,
  },
  logo: {
    marginBottom: 50,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    height: 50,
    width: "100%",
    backgroundColor: "#FAFAFA",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    height: 50,
    width: "100%",
    backgroundColor: "#1877F2",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  forgotPassword: {
    alignSelf: "flex-end",
    marginTop: 10,
  },
  forgotPasswordText: {
    color: "#1877F2",
    fontWeight: "bold",
    // fontSize: 16,
    // color: '#0095f6',
    marginVertical: 16,
  },
    subheading: {
      fontSize: 16,
      textAlign: 'center',
      marginBottom: 20,
    },
      heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      buttonOTP: {
        backgroundColor: '#009688',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
      },
      buttonTextOTP: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
      },
        timer: {
          fontSize: 14,
          color: '#666',
        },
        timerContainer: {
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 20,
              },
              phoneNumber: {
                    fontWeight: 'bold',
                  },
});

export default styles;
