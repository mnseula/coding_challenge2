import React, {useState} from 'react'
import './Board.css'

function Board() {
    const [cells,setCells] = useState(Array(9).fill(''))
     
    const handleClick = (num,color) => {
        let clickedCells = [...cells];

        if (color === 'whitecell') {
            if(num === 6 || num === 7 || num === 8){
                return;
            }
            if ((num % 2) == 0 ) {
                clickedCells[num] = 'blackcell';
            } 
            
            else if (((num % 2)) == 1 ) {
                clickedCells[num] = 'blackcell';
            } 
            
            else {
            }
            setCells(clickedCells);

        }
        else if (color === 'blackcell') {
            if(num === 0 || num === 1 || num === 2){
                return;
            }
            if ((num % 2) == 0 ) {
                clickedCells[num] = 'whitecell';
            } 
            
            else if (((num % 2)) == 1 ) {
                clickedCells[num] = 'whitecell';
            } 
            
            else {
            }
            setCells(clickedCells);

        }
        else {

        }
        
    };
  
    const Cell = ({ num,color }) => {
        if (((num % 2)) == 0 ) {
            if (cells[num])
                return <td className={cells[num]} onClick={() => handleClick(num,color = cells[num])}></td>;
            else{
                return <td className={cells[num]} onClick={() => handleClick(num,color = 'whitecell')}></td>;
            }
        } 
        else if (((num % 2)) == 1 ) { 
            if (cells[num])
                return <td className={cells[num]} onClick={() => handleClick(num,color = cells[num])}></td>;
            else{
                return <td className={cells[num]} onClick={() => handleClick(num,color = 'whitecell')}></td>;
            }
        } 
        else { 

        }
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
