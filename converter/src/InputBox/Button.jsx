import React from 'react'
import ThemeContext from '../context/context';
function Button() {
    const {themeMode,lightTheme,darkTheme}=ThemeContext();
    const clicker=()=>{
        if(themeMode==='dark'){
            lightTheme();
        }else{
            darkTheme();
        }
    }
  return (
    <button onClick={clicker} className=" bg-red-200 dark:bg-white h-12 w-19 mx-8 mt-11 rounded-2xl px-5  ">Toggle</button>
  )
}

export default Button