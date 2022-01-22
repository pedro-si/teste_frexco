import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import React from 'react';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../../Pages/Home/Home.css"


export default function Pop(props){

    return(
    <Popup trigger={<button className='ButtonIcon' id="ButtonIcon"> <FontAwesomeIcon icon={faInfoCircle} className='icone' /> </button>} position="right center">
      <div>
          <p>calorias: {props.fruta.nutritions.calories}</p>
          <p>carboidratos: {props.fruta.nutritions.carbohydrates}</p>
          <p>gorduras: {props.fruta.nutritions.fat}</p>
          <p>proteina: {props.fruta.nutritions.protein}</p>
          <p>açúcares: {props.fruta.nutritions.sugar}</p>
</div>
    </Popup>)
}

