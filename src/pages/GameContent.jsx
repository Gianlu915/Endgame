import { useState } from "react"
import { clsx } from "clsx"
import { languages } from "../languages"

export function GameContent(){


    const [currentWord, setCurrentWorld] = useState("react");

    const [guessedLetters, setGuessedLetters] = useState([]);
 
    function addGuessedLetter(letter) {
        setGuessedLetters(prevLetters => 
            prevLetters.includes(letter) ? 
                prevLetters : 
                [...prevLetters, letter]
        )
    }

   console.log(guessedLetters)


    const alphabet = "abcdefghijklmnopqrstuvwxyz"

    const keyboardElements = alphabet.split('').map(letter =>{

        const isGuessed = guessedLetters.includes(letter)
        const isCorrect = isGuessed && currentWord.includes(letter)
        const isWrong = isGuessed && !currentWord.includes(letter)
        const className = clsx({
            correct: isCorrect,
            wrong: isWrong
        })

        console.log(className)

        return (
            <button
            className={className}
        onClick={() => addGuessedLetter(letter)}
        key={letter}>
        {letter.toUpperCase()}
          </button>
        )
    }
       
    );

   const languageElements = languages.map(language => {

    const styles = {
        backgroundColor: language.backgroundColor,
        color: language.color
    }
    return (
        <span key={language.name} className="chip" style={styles}>{language.name}</span>
    )
   })

 const letterElements = currentWord.split('').map((letter,index) => (
    <span key={index}>{letter.toUpperCase()}</span>
 ))
   
return (
        <>
            <section className="game-status">
               <h2>You win!</h2>
               <p>Well done! </p>
            </section>

            <section className="language-chips"> 
                {languageElements}
            </section>

            <section className="word">
            {letterElements}
            </section>

            <section className="keyboard">
            {keyboardElements}
            </section>

            <button className="new-game">New game</button>
        </>
    )
}