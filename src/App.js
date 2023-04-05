import React, { useState } from 'react'
import data from './data'
import Food from './Food'

function App() {
  const [items, setItems] = useState(data)

   const [questionEle, setQuestionEle] = useState(
      items.map((item) => {
      return <Food key={item.id} {...item} />
    })
  )

  return (
    <>
      <section>
        <div>
          <h1>food store</h1>
          <div className='line'></div>
        </div>

        <div className='section-center'>{questionEle}</div>

        <div className='container'>
          <button className='btn1' onClick={() => setQuestionEle([])}>
            clear
          </button>
        </div>
      </section>
    </>
  )
}

export default App