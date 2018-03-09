import React from 'react'
import { Table } from 'react-bootstrap'

const CoinTable = ({ header, coins }) => (
  <Table striped bordered condensed hover>
    <thead>
      <tr>
        {header.map(col => <td key={col}>{col}</td>)}
      </tr>
    </thead>        
    <tbody>
      {coins.map((coin, i) =>
        <tr key={i}>
          {coin.map((col, j) => <td key={i+j}>{col}</td>)}
        </tr>
      )}
    </tbody>
  </Table>
)

export default CoinTable
