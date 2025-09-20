import { StatusBar } from 'expo-status-bar';
import {
  Alert, Text, TextInput, TouchableOpacity,
  View, Keyboard, ScrollView
} from 'react-native';
import { useState, useEffect } from 'react';
import styles from './styles';

export default function App() {

  const palavras = [
    { palavra: "banana", dica: "Fruta amarela" },
    { palavra: "computador", dica: "Máquina que processa dados" },
    { palavra: "brasil", dica: "País do futebol" },
    { palavra: "escola", dica: "Lugar de estudo" },
    { palavra: "cachorro", dica: "Melhor amigo do homem" },
    { palavra: "rio", dica: "Curso de água" },
    { palavra: "montanha", dica: "Lugar alto" },
    { palavra: "futebol", dica: "Esporte popular no Brasil" },
    { palavra: "livro", dica: "Contém histórias ou informações" },
    { palavra: "praia", dica: "Areia e mar" },
    { palavra: "carro", dica: "Meio de transporte com quatro rodas" },
    { palavra: "avião", dica: "Veículo que voa" },
    { palavra: "bicicleta", dica: "Transporte de duas rodas" },
    { palavra: "internet", dica: "Rede mundial de computadores" },
    { palavra: "telefone", dica: "Usado para fazer chamadas" },
    { palavra: "abacaxi", dica: "Fruta tropical com casca espinhosa" },
    { palavra: "morango", dica: "Fruta vermelha pequena e doce" },
    { palavra: "girafa", dica: "Animal de pescoço comprido" },
    { palavra: "elefante", dica: "Maior animal terrestre" },
    { palavra: "tigre", dica: "Felino listrado" },
    { palavra: "formiga", dica: "Inseto pequeno e trabalhador" },
    { palavra: "sol", dica: "Estrela do nosso sistema" },
    { palavra: "lua", dica: "Satélite natural da Terra" },
    { palavra: "estrela", dica: "Brilha no céu à noite" },
    { palavra: "galaxia", dica: "Conjunto de bilhões de estrelas" },
    { palavra: "planeta", dica: "Corpo celeste que orbita uma estrela" },
    { palavra: "oceano", dica: "Grande massa de água salgada" },
    { palavra: "chuva", dica: "Água que cai do céu" },
    { palavra: "neve", dica: "Água congelada que cai em flocos" },
    { palavra: "vento", dica: "Ar em movimento" }
  ];

  const [palavraAtual, setPalavraAtual] = useState("");
  const [dica, setDica] = useState("");
  const [letrasCorretas, setLetrasCorretas] = useState([]);
  const [tentativas, setTentativas] = useState(0);
  const [letraDigitada, setLetraDigitada] = useState("");
  const [ultimoIndice, setUltimoIndice] = useState(-1);
  const maxErros = 6;

  useEffect(() => {
    iniciarJogo();
  }, []);

  function iniciarJogo() {
    let indice = Math.floor(Math.random() * palavras.length);

    // evitar repetir a mesma palavra da rodada anterior
    while (indice === ultimoIndice) {
      indice = Math.floor(Math.random() * palavras.length);
    }

    setUltimoIndice(indice);
    setPalavraAtual(palavras[indice].palavra);
    setDica(palavras[indice].dica);
    setLetrasCorretas([]);
    setTentativas(0);
    setLetraDigitada("");
  }

  function verificarLetra() {
    if (letraDigitada === "") {
      Alert.alert("Digite uma letra!");
      return;
    }

    const letra = letraDigitada.toLowerCase();
    setLetraDigitada("");

    if (palavraAtual.includes(letra)) {
      if (!letrasCorretas.includes(letra)) {
        setLetrasCorretas([...letrasCorretas, letra]);
      }
    } else {
      setTentativas(tentativas + 1);
    }
  }

  function palavraOculta() {
    return palavraAtual.split("").map(l =>
      letrasCorretas.includes(l) ? l : "_"
    ).join(" ");
  }

  function jogoFinalizado() {
    const ganhou = palavraAtual.split("").every(l => letrasCorretas.includes(l));
    const perdeu = tentativas >= maxErros;

    if (ganhou) {
      Alert.alert("Parabéns!", "Você ganhou!", [{ text: "Jogar novamente", onPress: () => iniciarJogo() }]);
      return true;
    } else if (perdeu) {
      Alert.alert("Game Over", `Você perdeu! A palavra era: ${palavraAtual}`, [{ text: "Reiniciar", onPress: () => iniciarJogo() }]);
      return true;
    }
    return false;
  }

  useEffect(() => {
    jogoFinalizado();
  }, [letrasCorretas, tentativas]);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>🎮 Jogo da Forca</Text>
      <Text style={styles.dica}>Dica: {dica}</Text>

      <Text style={styles.palavra}>{palavraOculta()}</Text>

      <Text style={styles.erros}>Erros: {tentativas} / {maxErros}</Text>

      <TextInput
        style={styles.caixaTexto}
        placeholder="Digite uma letra"
        value={letraDigitada}
        maxLength={1}
        onChangeText={setLetraDigitada}
      />

      <TouchableOpacity style={styles.botao} onPress={verificarLetra}>
        <Text style={styles.textoBotao}>Verificar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.botao, styles.botaoReiniciar]} onPress={iniciarJogo}>
        <Text style={styles.textoBotao}>Reiniciar</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}
