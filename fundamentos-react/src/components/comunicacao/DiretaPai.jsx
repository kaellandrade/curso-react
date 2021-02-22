import React from 'react'
import DiretaFilho from './DiretaFilho'

export default props => {
    return (
        <div>
            <DiretaFilho texto="Manoel" numero={20} bool={true}></DiretaFilho>
            <DiretaFilho texto="Paulo" numero={17} bool={false}></DiretaFilho>
            <DiretaFilho texto="José" numero={5} bool={true}></DiretaFilho>
        </div>
    )
}