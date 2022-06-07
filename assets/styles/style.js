const React = require('react-native');
const { StyleSheet } = React;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
    backgroundColor: 'white',
  },

  input: {
    height: 40,
    borderRadius: 10,
    marginBottom: 12,
    paddingHorizontal: 8,
    backgroundColor: 'lightgray',
  },

  form_lineContainter: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  input_form: {
    flex: 2,
    height: 40,
    borderRadius: 10,
    marginBottom: 12,
    paddingHorizontal: 8,
    backgroundColor: 'lightgray',
  },

  buttonContainer: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    flex: 2,
    padding: 5,
    borderRadius: 10,
    margin: 5,
    backgroundColor: 'green',
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
  },

 
});

export default styles;
