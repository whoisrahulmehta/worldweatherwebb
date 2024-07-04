import { faCalendar, faClock, faLeftLong} from '@fortawesome/free-solid-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons/faHouse'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { memo } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

function Header({}) {
  const navigate = useNavigate();
  const backHandle=()=>{
    navigate(-1);
    console.log('going 1 page back')
  }
  console.log('rendered header component');
  return (
    <>
      <header>
      <span> <NavLink to='/hourly' ><FontAwesomeIcon icon={faClock} /> </NavLink></span>
        <span> <NavLink to='/' ><FontAwesomeIcon icon={faHouse} /> </NavLink></span>
        <span> <NavLink to='/weekly' ><FontAwesomeIcon icon={faCalendar} /> </NavLink></span>
        <span onClick={backHandle}> <FontAwesomeIcon icon={faLeftLong} /> </span>
      </header>
    </>
  )
}

export default memo(Header);
