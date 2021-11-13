import React from 'react'
import './A.css'

function Slider () {
  return (
    <div>
      <div
        id='carouselExampleIndicators'
        className='carousel slide'
        data-ride='carousel'
      >
        <ol className='carousel-indicators'>
          <li
            data-target='#carouselExampleIndicators'
            data-slide-to={0}
            className='active'
          />
          <li data-target='#carouselExampleIndicators' data-slide-to={1} />
          <li data-target='#carouselExampleIndicators' data-slide-to={2} />
        </ol>
        <div className='container'>
          <div className='carousel-inner'>
            <div className='carousel-item active'>
              <img
                className='d-block w-100'
                src='https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                height='450px'
                width='500px'
                alt='First slide'
              />
            </div>
          </div>
          <br />
          <br />
          <div className='cointainer'>
            <div className='card' style={{ width: '18rem' }}>
              <img
                className='card-img-top'
                src='https://images.unsplash.com/photo-1532980400857-e8d9d275d858?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                alt='Card image cap'
              />
              <div className='card-body'>
                <h5 className='card-title'>Burger</h5>
                <p className='card-text'>
                Resturent : <b>Abc Resturent</b>
                </p>
                <a href='#' className='btn btn-primary'>
                  Go somewhere
                </a>
              </div>
            </div>
            <div className='card pagal' style={{ width: '18rem' }}>
              <img
                className='card-img-top'
                src='https://images.unsplash.com/photo-1481070555726-e2fe8357725c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                alt='Card image cap'
              />
              <div className='card-body'>
                <h5 className='card-title'>Spicy Burger</h5>
                <p className='card-text'>
                Resturent : <b>Example Resturent</b>
                </p>
                <a href='#' className='btn btn-primary'>
                  Go somewhere
                </a>
              </div>
            </div>
            <div className='card pagal' style={{ width: '18rem' }}>
              <img
                className='card-img-top'
                src='https://images.unsplash.com/photo-1609951651556-5334e2706168?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                alt='Card image cap'
              />
              <div className='card-body'>
                <h5 className='card-title'>Lemon Juice</h5>
                <p className='card-text'>
                  Resturent : <b>A-one Resturent</b>
                </p>
                <a href='#' className='btn btn-primary'>
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Slider
