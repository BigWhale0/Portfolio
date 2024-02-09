import React from 'react'
import bag from '../../assets/images/bag.png'

import React from 'react'

const navbar = () => {
  return (
    <div className='navbar'>
      <div className='cellContainer'>
        <div className='imageContainer'>
          <img src={bag}/>
        </div>
      </div>
    </div>
  )
}

export default navbar