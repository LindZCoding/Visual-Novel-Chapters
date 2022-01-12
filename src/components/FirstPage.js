import React from "react";
import { useState } from "react";
import './Story.css'
import axios from "axios";
import { useEffect } from "react";
import apiUrl from '../apiConfig'


const FirstPage = (props) => {

    let [currentLine, setCurrentLine] = useState(localStorage.getItem('storySave') ? localStorage.getItem('storySave') : 0)
    const [choices, setChoices] = useState([])
    const [currentChoice, setCurrentChoice] = useState(null)
    const [currentBackground, setCurrentBackground] = useState(props.dialogues[currentLine].dialogueLine[0].background)
    const [currentWeight, setCurrentWeight] = useState(100)

    // useEffect(() => {
    //     if (!props.user) {
    //         return;
    //     }
    //     axios.get(`${apiUrl}/choices`, {
    //         headers: {
    //             Authorization: `Bearer ${props.user.token}`,
    //         },
    //     })
    //         .then((resp) => {
    //             // console.log('resp for getting choices', resp.data)
    //             setChoices(resp.data)
    //         })
    //         .catch(err => console.log(err))
    // }, [])


    const nextButton = () => {
        let pd = props.dialogues
        let index = currentLine + 2 > pd.length ? 0 : currentLine + 1

        setCurrentLine(index)

        localStorage.setItem('storySave', index)

        if (pd[index].dialogueLine[0].background !== null) {

            setCurrentBackground(pd[index].dialogueLine[0].background)
        }

        if (pd[index].dialogueLine[0].choices === null) {

            setCurrentChoice(null)
        }
    }

    const yesClicked = () => {
        if (props.dialogues[currentLine].dialogueLine[0].choices[0]) {
            setCurrentWeight(currentWeight + props.dialogues[currentLine].dialogueLine[0].weight)
        }
    }

    const noClicked = () => {
        if (props.dialogues[currentLine].dialogueLine[0].choices[1]) {
            setCurrentWeight(currentWeight - props.dialogues[currentLine].dialogueLine[0].weight)
        }
    }


    // const mapChoices = choices.map((choice) => {
    //     // console.log('choice array mapping', choice.choiceLine)
    //     if (currentLine === 2) {
    //         // console.log('choice.choiceline', choice.choiceLine)
    //         return (
    //             choice.choiceLine
    //         )
    //     } else {
    //         return;
    //     }

    // })

    // const choiceClicked = (e) => {
    //     // console.log('choice clicked: ', e.target.value)
    //     console.log('choices arr: ', mapChoices)
    //     if (e.target.value === mapChoices[0]) {
    //         // console.log('current line', mapDialogues[currentLine - 2 ])
    //         setCurrentLine(currentLine + 1)
    //     }

    //     if (e.target.value === mapChoices[1]) {
    //         // console.log('are you clicked and why?')
    //         setCurrentLine(currentLine + 2)
    //     }
    // }

    return (
        <div className="dialogues">
            <div className="story">
                <div className="text">
                    {props.dialogues[currentLine].dialogueLine[0].dialogueLine}
                </div>
                <div className="choices">
                    <button className='yes-button' onClick={yesClicked}>{props.dialogues[currentLine].dialogueLine[0].choices[0]}</button>
                    <br></br>
                    <button className='no-button' onClick={noClicked}>{props.dialogues[currentLine].dialogueLine[0].choices[1]}</button>
                </div>
                <div className="character">
                    <img src={props.dialogues[currentLine].dialogueLine[0].characterUrl} alt="character-image" />
                </div>
                <div className="background-image">
                    <img className="background-img" src={currentBackground} alt="background-image" />
                </div>
            </div>
            <button className="next-button" onClick={() => nextButton()}>Continue</button>
        </div>
    )
}

export default FirstPage;