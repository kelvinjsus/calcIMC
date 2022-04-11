import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    paddingTop: 36,
    flex: 1,
    backgroundColor: '#f3f3f3',
    alignItems: 'center',
    // justifyContent: 'center'
  },
  title: {
    paddingBottom: 30,
    fontSize: 40,
    fontWeight: '600',
    color: '#000'
  },
  input: {
    marginTop: 16,
    width: '70%',
    height: 60,
    fontSize: 30,
    borderColor: '#0060df',
    borderWidth: 3,
    borderRadius: 6,
    textAlign: 'center'
  },
  result: {
    marginTop: 30,
    fontSize: 28,
    fontWeight: '500',
    color: '#0060df'
  },
});