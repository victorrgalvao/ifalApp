import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    height: 30,
    // width:'100%',
// alignItems:'center'
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
    backgroundColor: "white",
    width: '100%'
  },

  animeCard: {
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    backgroundColor:'white',
   
  },
  animeImage: {
    width: 100,
    height: 150,
    marginBottom: 8,
  },
  starRating: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  star: {
    width: 20,
    height: 20,
    marginRight: 4,
  },
  button: {

    padding: 10,

    marginTop: 20,
    textAlign: 'center',
    backgroundColor: "#DBA506",
    borderRadius: 0,
    width: '80%'
  },
  button1:{
padding:10,
borderRadius:10
  },
  form: {
    width: "100%",

    alignItems: 'center',
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    borderTopLeftRadius: 20,
    borderTopRighttRadius: 20
  }

});

export default styles;
