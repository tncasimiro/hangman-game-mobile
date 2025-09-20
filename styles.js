import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  dica: {
    fontSize: 18,
    marginBottom: 15,
    fontStyle: 'italic',
  },
  palavra: {
    fontSize: 30,
    fontWeight: 'bold',
    letterSpacing: 5,
    marginBottom: 20,
  },
  erros: {
    fontSize: 16,
    marginBottom: 20,
    color: 'red',
  },
  caixaTexto: {
    borderWidth: 1,
    borderColor: '#333',
    padding: 10,
    fontSize: 20,
    width: 100,
    textAlign: 'center',
    marginBottom: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  botao: {
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 10,
    marginTop: 10,
    width: 150,
    alignItems: 'center',
  },
  botaoReiniciar: {
    backgroundColor: '#FF3B30',
  },
  textoBotao: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
