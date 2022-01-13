import React from "react";
import { useState } from "react";
import './Story.css'
import axios from "axios";
import { useEffect } from "react";
import apiUrl from '../apiConfig'


// const FirstPage = (props) => {

//     let [currentLine, setCurrentLine] = useState(0)
//     const [choices, setChoices] = useState([])
//     const [currentChoice, setCurrentChoice] = useState(null)
//     const [currentBackground, setCurrentBackground] = useState(props.dialogues[currentLine].chapterOne[0].background)
//     const [currentWeight, setCurrentWeight] = useState(100)

//     // useEffect(() => {
//     //     if (!props.user) {
//     //         return;
//     //     }
//     //     axios.get(`${apiUrl}/choices`, {
//     //         headers: {
//     //             Authorization: `Bearer ${props.user.token}`,
//     //         },
//     //     })
//     //         .then((resp) => {
//     //             // console.log('resp for getting choices', resp.data)
//     //             setChoices(resp.data)
//     //         })
//     //         .catch(err => console.log(err))
//     // }, [])

//     const nextButton = () => {
//         let pd = props.dialogues
//         let index = currentLine + 2 > pd.length ? 0 : currentLine + 1

//         setCurrentLine(index)

//         // localStorage.setItem('storySave', index)

//         if (!pd[index].chapterOne[0].dialogueLine) {
//             return;
//         }

//         if (pd[index].chapterOne[0].background !== null) {

//             setCurrentBackground(pd[index].chapterOne[0].background)
//         }

//         if (pd[index].chapterOne[0].choices === null) {
//             setCurrentChoice(null)
//         }


//     }

//     const yesClicked = () => {
//         if (props.dialogues[currentLine].chapterOne[0].choices[0]) {
//             setCurrentWeight(currentWeight + props.dialogues[currentLine].chapterOne[0].weight)
//         }
//     }

//     const noClicked = () => {
//         if (props.dialogues[currentLine].chapterOne[0].choices[1]) {
//             setCurrentWeight(currentWeight - props.dialogues[currentLine].chapterOne[0].weight)
//         }
//     }


//     // const mapChoices = choices.map((choice) => {
//     //     // console.log('choice array mapping', choice.choiceLine)
//     //     if (currentLine === 2) {
//     //         // console.log('choice.choiceline', choice.choiceLine)
//     //         return (
//     //             choice.choiceLine
//     //         )
//     //     } else {
//     //         return;
//     //     }

//     // })

//     // const choiceClicked = (e) => {
//     //     // console.log('choice clicked: ', e.target.value)
//     //     console.log('choices arr: ', mapChoices)
//     //     if (e.target.value === mapChoices[0]) {
//     //         // console.log('current line', mapDialogues[currentLine - 2 ])
//     //         setCurrentLine(currentLine + 1)
//     //     }

//     //     if (e.target.value === mapChoices[1]) {
//     //         // console.log('are you clicked and why?')
//     //         setCurrentLine(currentLine + 2)
//     //     }
//     // }

//     return (
//         <div className="dialogues">
//             <div className="story">
//                 <div className="text">
//                     {props.dialogues[currentLine].chapterOne[0].dialogueLine}
//                 </div>
//                 <div className="choices">
//                     <button className='yes-button' onClick={yesClicked}>{props.dialogues[currentLine].chapterOne[0].choices[0]}</button>
//                     <br></br>
//                     <button className='no-button' onClick={noClicked}>{props.dialogues[currentLine].chapterOne[0].choices[1]}</button>
//                 </div>
//                 <div className="character">
//                     <img src={props.dialogues[currentLine].chapterOne[0].characterUrl} alt="character-image" />
//                 </div>
//                 <div className="background-image">
//                     <img className="background-img" src={currentBackground} alt="background-image" />
//                 </div>
//             </div>
//             <button className="next-button" onClick={() => nextButton()}>Continue</button>
//         </div>
//     )
// }

// export default FirstPage;

const FirstPage = (props) => {

    const [currentWeight, setCurrentWeight] = useState(0)
    let [currentLine, setCurrentLine] = useState(0)
    const [currentBackground, setCurrentBackground] = useState(props.dialogues[currentLine].background)
    const [pausedForChoice, setPausedForChoice] = useState(false)

    // useEffect(() => {
    //     if(!user) {
    //         return;
    //     } 
    //     axios.get(`${apiUrl}/dialogues/${currentChapter}`, {
    //         headers: {
    //             Authorization: `Bearer ${props.user.token}`,
    //         },
    //     })
    //     .then((resp) => {
    //         console.log('resp for getting dialogues', resp)

    //     })
    //     .catch(err => console.log(err))
    // }, [])

    const continueButton = () => {

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

        // if (pd[index].chapterOne[0].choices === null) {
        //     setCurrentChoice(null)
        // }
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
        <div classname="story" onClick={continueButton}>
            <div className="dialogues">
                <div className="button-text">
                    {props.dialogues[currentLine].dialogueLine}
                </div>
                <div className="button-choice">
                    {
                        (props.dialogues[currentLine].choices[0]) &&
                        <div className="choices">
                            <button classname="choiceButtonOne" onClick={plusButton}>{props.dialogues[currentLine].choices[0]}</button>
                            <br></br>
                            <button onClick={minusButton}>{props.dialogues[currentLine].choices[1]}</button>
                        </div>
                    }
                </div>
            </div>
            <div className="character">
                <img className="character-img" src={props.dialogues[currentLine].characterUrl} alt="character-image" />
            </div>
            <div className="background">
                <img className="background-img" src={props.dialogues[currentLine].background} alt="background-image" />
            </div>
        </div >
    )

}

export default FirstPage;