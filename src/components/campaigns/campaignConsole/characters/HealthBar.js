import { Box } from '@mui/system'
import React from 'react'
import { v4 as uuid } from "uuid";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const HealthBar = ({ data, player, socket }) => {


    let greens = (data.health / data.maxHealth).toFixed(1) * 10
    let reds = 10 - greens

    const greensArray = []
    const redsArray = []

    for (let i = 0; i < greens; i++) {
        greensArray.push(<Box key={uuid()} className='health-greens' />)
    }
    for (let i = 0; i < reds; i++) {
        redsArray.push(<Box key={uuid()} className='health-reds' />)
    }

    const handleAddHealthClick = () => {

        if (!((data.health + 1) > data.maxHealth)){
            socket.updateCharacterHealth({health: data.health + 1, character_id: data.id})
        }
        
        
    }
    
    const handleMinusHealthClick = () => {
        if (!((data.health - 1) < 0)){
            socket.updateCharacterHealth({health: data.health - 1, character_id: data.id})
        }
        

    }


    return (
        <>
            {player ?
                <div className='health-management-container'>
                    <AddIcon onClick={handleAddHealthClick} />
                    <RemoveIcon onClick={handleMinusHealthClick} />
                </div>
                :
                null
            }
            <div className='health-bar-container-stats'>
                {data.health}/{data.maxHealth}
            </div>
            <div className='health-bar-container'>
                {redsArray}
                {greensArray}
            </div>
        </>
    )
}

export default HealthBar
