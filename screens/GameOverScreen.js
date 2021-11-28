import React from "react";
import { Button, StyleSheet, View,Text} from 'react-native';
const GameOverScreen=props=>{
    return(
        <View style={styles.screen}>
            <Text>Game is Over!</Text>
            <Text>Number of Rounds : {props.roundsNumber}</Text>
            <Text> The Number was :{props.userNumber}</Text>
            <Button title='START NEW GAME' onPress={props.onRestart} />
        </View>
        )
};
const styles =StyleSheet.create({
screen:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
    
}
})

export default GameOverScreen;