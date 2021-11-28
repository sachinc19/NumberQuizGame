import React, { useState } from "react";
import {
  Alert,
  Button,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Card from "../components/Card";
import Input from "../components/Input";
import Color from "../components/constants/Color";
import NumberContainer from "../components/NumberContainer";
//import BodyText from "../components/BodyText";
const StartGameScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState("");
  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/, ""));
  };
  const comfirmedInputHandler = () => {
    const chooseNumber = parseInt(enteredValue);
    if (isNaN(chooseNumber) || chooseNumber <= 0 || chooseNumber >= 99) {
      Alert.alert(
        "Invalid Number",
        "Number has to be a number between 1 to 99.",
        [{ text: "Ok", style: "Destructive", onPress:resetInputHandler}]
      );
      return;
    }
    setConfirmed(true);
    setSelectedNumber(chooseNumber);
    setEnteredValue("");
    Keyboard.dismiss();
  };
  const resetInputHandler = () => {
    setEnteredValue("");
    setConfirmed(false);
  };
  let confirmedOutput ;
  if(confirmed){
    confirmedOutput =(
<Card style={styles.summaryContainer}>
    <Text> you have selected</Text>
        <NumberContainer >{selectedNumber}</NumberContainer>
        <Button title='START GAME' onPress ={props.onStartGame(selectedNumber)}/>
  
</Card>
    )
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Text style={styles.title}>Start a New Game!</Text>
        <Card style={styles.inputContainer}>
          <Text>Select a Number!</Text>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={numberInputHandler}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <Button
              title="Reset"
              onPress={resetInputHandler}
              color={Color.accent}
            />
            <Button
              title="Confirm"
              onPress={comfirmedInputHandler}
              color={Color.primary}
            />
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );

  <Input
    style={styles.input}
    blurOnSubmit
    autoCapitalize="none"
    autoCorrect={false}
    keyboardType="number-pad"
    maxLength={2}
    onChangeText={numberInputHandler}
    value={enteredValue}
  />;
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 10,
    marginVertical: 10,
  },
  inputContainer: {
    width: 400,
    maxWidth: "80%",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  input: {
    width: 50,
    textAlign: "center",
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: 'center'
  }
});
export default StartGameScreen;
