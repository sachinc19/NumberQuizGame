import React, { useState,useRef,useEffect} from "react";
import{ Button, StyleSheet, View,Text, Alert } from 'react-native';
import Card from "../components/Card";
import NumberContainer from "../components/NumberContainer";

const genrateRandomNumberBetween =(min,max,exclude)=>{
    min =Math.ceil(min);
    max =Math.floor(max);
    const rndNum =Math.floor(Math.random()*(max-min)) +min;
    if(rndNum === exclude){
        return genrateRandomNumberBetween(min,max,exclude);
    }
    else{
        return rndNum;
    }
}
  
const  GameScreen = props=>{
    const [currentGuess,setCurrentGuess]=useState(genrateRandomNumberBetween(1,100,props.userChoice))
   const [rounds,setRounds] =useState(0);
   const currentLow =useRef(1);
   const currentHigh = useRef(100);
   const {userChoice,onGameOver}= props;
  
   useEffect(()=>{
       if(currentGuess === userChoice){
           onGameOver(rounds)
       }
    },[currentGuess,userChoice,onGameOver]
   );

   const nextGuessHandler =direction =>{
       if(
       (direction ==='lower' && currentGuess <props.userChoice)||
       (direction ==='greater' && currentGuess >props.userChoice)
       ){
           Alert.alert('Dont lie','You know that this is wrong',[{text:'Sorry',style:'cancel'}]);
           return
       }
        if(direction ==='lower'){
            currentHigh.current =currentGuess;
        }
        else{
            currentLow.current =currentGuess;
        }
        const nextNumber =genrateRandomNumberBetween(currentLow.current,currentHigh.current,currentGuess);
  setCurrentGuess(nextNumber);
  setRounds(curRound =>curRound+1 );
    };
   
   return(<View style={styles.screen}>
        <Text>Opponents Guess</Text>
        <NumberContainer>{currentGuess}</NumberContainer>
        <Card style={styles.buttonContainer}>
            <Button title='LOWER'onPress={nextGuessHandler.bind(this,'lower')}/>
            <Button title='UPPER'onPress={nextGuessHandler.bind(this,'greater')}/>
        </Card>
    </View>)
}
const styles =StyleSheet.create({
screen:{
    flex:1,
    padding:10,
    alignItems:'center'
},
buttonContainer:{
    flexDirection:'row',
    marginTop :10,
    justifyContent:'space-around',
    width:300,
    maxWidth:'80%'
}
})
export default GameScreen


