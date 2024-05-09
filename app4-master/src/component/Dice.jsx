import React from 'react'
import dice1 from './images/dice1.png'
import dice2 from './images/dice2.png'
import dice3 from './images/dice3.png'
import dice4 from './images/dice4.png'
import dice5 from './images/dice5.png'
import dice6 from './images/dice6.png'
import   '../App.css'
import  {useState} from 'react';
const Dice = () => {
    const [foto1, setFoto1] = useState(dice1)
    const [foto2,setFoto2] = useState(dice2)
    const array1 = [ dice1,dice2,dice3,dice4,dice5,dice6];
    const array2 =[dice1,dice2,dice3,dice4,dice5,dice6];
     
    let img = document.querySelector('img')
function myfunc(){
   setFoto1(array1[Math.floor(Math.random()*6)])
}
function myFunc(){
    setFoto2(array2[Math.floor(Math.random()*6)])
}
  return (
    <div>
        <img onClick={myfunc} src={foto1}/>

      <img onClick={myFunc} src={foto2}/>
    </div>
  )
}

export default Dice