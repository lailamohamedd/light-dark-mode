import React from 'react'

const Mode = ({darkMode, setDarkMode}) => {
  return (
    <div className={`mode ${darkMode ? "dark": ""}`} onClick={()=> setDarkMode(!darkMode)}>
      <div className="mode--image">
      </div>
    </div>
  )
}

export default Mode
