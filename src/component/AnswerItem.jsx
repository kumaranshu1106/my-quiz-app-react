import React, { useEffect, useState } from 'react'

const AnswerItem = ({count,answer, idx,correct, setCorrect , selectedId, setSelectedId}) => {
    let borColor="";
    if (selectedId[count] === idx){
            if (answer.isCorrect) {
                borColor="#045a32";
            }else{
                borColor="#a14141";
            }
    }else{
        if (selectedId[count] != null && answer.isCorrect) {
            borColor="#045a32";
        }
    }

    // const [borColor, setBorColor] = useState("");
    // if (selectedId === idx){
    //         if (answer.isCorrect) {
    //             setBorColor("green");
    //         }else{
    //             setBorColor("red");
    //         }
    // }else{
    //     if (selectedId != null && answer.isCorrect) {
    //         setBorColor("green");
    //     }
    // }
    const submitHandler=() =>{
        if (selectedId[count]!=null) return;
        setSelectedId((prev) =>{
            const update = [...prev];
            update[count] = idx;
            return update;
        })
        if (answer.isCorrect) {
            setCorrect(correct+1);
        }
        // console.log("Correct is: ",correct);
    }
  return (
    <button onClick={submitHandler} style={{backgroundColor: borColor}} className='answer-item'>
      <p>{idx+1}.</p>
      <p>{answer.value}</p>
    </button>
  )
}

export default AnswerItem;
