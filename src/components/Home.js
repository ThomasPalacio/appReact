import React from 'react'

const Home = (props) => {
    return (
        <div className='home container-fluid'>
            <div className='row  d-flex justify-content-center'>
              <h1 className='titleInicio mt-5'>{props.title}</h1>
              <h3 className='subtitleInicio mt-0'>{props.subtitle}</h3>
            </div>
        </div>
    )
}

export default Home
