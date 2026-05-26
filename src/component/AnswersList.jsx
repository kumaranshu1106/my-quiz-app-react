import React, { useState } from 'react'
import AnswerItem from './AnswerItem'

const AnswersList = ({count, answers,correct, setCorrect, selectedId, setSelectedId}) => {
  return (
    <div className='answer-list'>
      {
        answers.map((answer,idx) =>{
            return <AnswerItem count={count} selectedId = {selectedId} setSelectedId={setSelectedId} correct={correct} setCorrect={setCorrect} key={idx} answer={answer} idx={idx} /> 
        })
      }
    </div>
  )

}

export default AnswersList
