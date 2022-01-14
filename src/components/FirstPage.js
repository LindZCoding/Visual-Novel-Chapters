import React from "react";
import { useState } from "react";
import './Story.css'
import axios from "axios";
import { useEffect } from "react";
import apiUrl from '../apiConfig'

const FirstPage = (props) => {

    const [currentWeight, setCurrentWeight] = useState(0)
    let [currentLine, setCurrentLine] = useState(0)
    const [currentBackground, setCurrentBackground] = useState(props.dialogues[currentLine].background)
    const [pausedForChoice, setPausedForChoice] = useState(false)
    const [currentChapter, setCurrentChapter] = useState(props.currentChapter)

    const nextStory = () => {

        let nextChapter
        let threshold = 10

        
            if (currentWeight >= threshold) {
                nextChapter = `${currentChapter+1}a`
            } else {
                nextChapter = `${currentChapter+1}b`
            }
            axios.get(`${apiUrl}/story/${nextChapter}`, {
                headers: {
                    Authorization: `Bearer ${props.user.token}`,
                },
            })
            .then((resp) => {
                console.log('resp for getting dialogues FP', resp.data.story.dialogues)
                props.setDialogues(resp.data.story.dialogues)
                setCurrentWeight(0)
            })
            .catch(err => console.log(err))

    }


   

const continueButton = () => {

    if (currentLine >= props.dialogues.length - 1) {
        nextStory()
    }

    if (!pausedForChoice) {

        let pd = props.dialogues
        let index = currentLine + 2 > pd.length ? 0 : currentLine + 1

        setCurrentLine(index)

        if (props.dialogues[index].choices[0]) {
            setPausedForChoice(true)
            return;
        } else {
            setPausedForChoice(false)


            if (!pd[index].dialogueLine) {
                return;
            }

            if (pd[index].background !== null) {

                setCurrentBackground(pd[index].background)
            }
        }
    }



}


const plusButton = () => {
    if (props.dialogues[currentLine].choices[0]) {
        setCurrentWeight(currentWeight + props.dialogues[currentLine].weight)
        setPausedForChoice(false)
    }
}

const minusButton = () => {
    if (props.dialogues[currentLine].choices[0]) {
        setCurrentWeight(currentWeight - props.dialogues[currentLine].weight)
        setPausedForChoice(false)
    }
}

return (
    <div className="story" onClick={continueButton}>
        <div className="dialogues">
            <div className="dialogue-text">
                {props.dialogues[currentLine].dialogueLine}
            </div>
            <div className="button-choices">
                {
                    (props.dialogues[currentLine].choices[0]) &&
                    <div className="choices">
                        <button className="choice-one" onClick={plusButton}>{props.dialogues[currentLine].choices[0]}</button>
                        <br></br>
                        <button className="choice-two" onClick={minusButton}>{props.dialogues[currentLine].choices[1]}</button>
                    </div>
                }
            </div>
        </div>
        <div className="characters">
            <img className="character-image" src={props.dialogues[currentLine].characterUrl} alt="character-image" />
        </div>
        <div className="background">
            <img className="background-img" src={props.dialogues[currentLine].background} alt="background-image" />
        </div>
    </div >
)

}

export default FirstPage;