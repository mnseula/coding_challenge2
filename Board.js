import React, {useState} from 'react'
import './Board.css'

function Board() {
    const [cells,setCells] = useState(Array(9).fill(''))
     
    const handleClick = (num) => {
        let clickedCells = [...cells];

        // if(clickedCells[num] !== ''){
        //     return;
        // }
        if ((num % 2) == 0 ) {
            clickedCells[num] = 'whitecell';
        } else {
            clickedCells[num] = 'blackcell'
        }
        
        setCells(clickedCells);
        console.log(clickedCells);
    };
  
    const Cell = ({ num }) => {
        if ((num % 2) == 0 ) {
            return <td className={cells[num]} onClick={() => handleClick(num)}></td>;
        } else {
            return <td className={cells[num]} onClick={() => handleClick(num)}></td>;
        }
        //return <td  onClick={() => handleClick(num)}></td>;
    };
    return (

    <div className='container'>
        <table>
            <tbody>
                <tr>
                    <Cell num = {0} />
                    <Cell num = {1}/>
                    <Cell num = {2} />
                </tr>
                <tr>
                    <Cell num = {3} />
                    <Cell num = {4}/>
                    <Cell num = {5} />
                </tr>
                <tr>
                    <Cell num = {6} />
                    <Cell num = {7}/>
                    <Cell num = {8}/>
                </tr>

            </tbody>
        </table>
    </div>
)
}

export default Board
