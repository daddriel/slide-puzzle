import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [matrix, setMatrix] = useState<number[][]>([])
 //slide puzzle game


  useEffect(() => {
   setMatrix([[1, 2, 3], [4, 0, 6], [0, 8, 9]])


  }, [])
  // const emptyNeighbor = (value:number) => {
    
    
  // }

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLElement;
    const value = target.innerText;
    if (target.innerText === '0') {
      console.log('empty cell');
    } else {
      console.log('not empty cell');
      // emptyNeighbor(parseInt(value));
      console.log(value);
      console.log("Position",target.dataset.rowIndex, target.dataset.colIndex);
    }
    
  }

 
  return (
    <>
      
      <main>
        <table>
          <tbody>
            {matrix.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, colIndex) => (
                  <td 
                  onClick={handleClick} 
                  key={`${rowIndex}-${colIndex}`} 
                  data-row-index={rowIndex}
                  data-col-index={colIndex}
                  >{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </>
      
  )
}

export default App
