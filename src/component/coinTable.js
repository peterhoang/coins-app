import React from 'react'
import { Table } from 'react-bootstrap'
import { StyledImg } from '../component/styledComponents'

const CoinTable = ({ header, coins, title, captions }) => (
  <div>
  <h2>{title}</h2>
  <ul>
    {captions.map((caption, i) => <li key={i} dangerouslySetInnerHTML={{ __html: caption }} />)}
  </ul>
  <Table hover>
    <thead>
      <tr>
        {header.map(col => <td key={col}>{col}</td>)}
      </tr>
    </thead>        
    <tbody>
      {coins.map((coin, i) =>
        <tr key={i}>
          {coin.map((col, j) => { 
            
              let item = col
              if (col.indexOf(".png") > -1) {
                let imgsrc = `http://xai.coining.ai/static/${col}`
                item = <StyledImg src={imgsrc} />
              }
            
            return <td key={i+j}>{item}</td>
          })}
        </tr>
      )}
    </tbody>
  </Table>
  </div>
)

export default CoinTable
