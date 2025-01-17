import { useState } from "react"
import { clsx } from "clsx"
import { languages } from "../languages"

export function GameContent(){


    const [currentWord, setCurrentWorld] = useState("react");

    const [guessedLetters, setGuessedLetters] = useState([]);

    const wrongGuessCount = guessedLetters.filter(letter => !currentWord.includes(letter)).length;

    

    const isGameWon = 
        currentWord.split("").every(letter => guessedLetters.includes(letter))
    const isGameLost = wrongGuessCount >= languages.length - 1
    const isGameOver = isGameWon || isGameLost;
 
    function addGuessedLetter(letter) {
        setGuessedLetters(prevLetters => 
            prevLetters.includes(letter) ? 
                prevLetters : 
                [...prevLetters, letter]
        )
    }
    


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
        disabled={isGameOver}
        key={letter}>
        {letter.toUpperCase()}
    
          </button>
        
        )
    }
       
    );

   const languageElements = languages.map((language,index) => {
    const isLanguageLost  = index < wrongGuessCount

    const styles = {
        backgroundColor: language.backgroundColor,
        color: language.color
    }
   
    return (
        <span key={language.name} className={`chip ${isLanguageLost ? "lost" : ""}`} style={styles}>{language.name}</span>
    )
   })

 const letterElements = currentWord.split('').map((letter,index) => (
    <span key={index}>{guessedLetters.includes(letter) ? letter.toUpperCase() : ""}</span>
 ))
   
return (
        <>
          <section className={clsx("game-status", {
            "game-won": isGameWon,
            "game-lost": isGameLost
            })}>        
            {isGameWon && (
            <>
                <h2>You won!</h2>
                <p>Congratulations! 🎉</p>
            </>
            )}
            {isGameLost && (
            <>
                <h2>You lost!</h2>
                <p>Better luck next time!</p>
            </>
            )}
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

            {isGameLost || isGameWon && <button className="new-game">New game</button>}
        </>
    )
}