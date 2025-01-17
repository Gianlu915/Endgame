import { useState } from "react"
import { languages } from "../languages"

export function GameContent(){

    const [currentWord, setCurrentWorld] = useState("react");

    const alphabet = "abcdefghijklmnopqrstuvwxyz"

    const keyboardElements = alphabet.split('').map(letter => (
        <button key={letter}>{letter.toUpperCase()}</button>
    ));

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