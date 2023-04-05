import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

function Food({ id, title, info, image }) {
  const [showInfo, setShowInfo] = useState(false)

  return (
    <>
      <article>
        <header>
          <h1>{title}</h1>
          <button className='btn' onClick={() => setShowInfo(!showInfo)}>
            {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </button>
        </header>

        {showInfo && (
          <div className='content'>
            <h4>${info}</h4>
            <img src={image} alt={title} />
          </div>
        )}
      </article>
    </>
  )
}

export default Food