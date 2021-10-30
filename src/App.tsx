import React from 'react'
import './App.css'
import 'assets/styles/ooic-grids.scss'
import Container from 'components/page/container/Container'
import { Row } from 'components/page/row'
import { Column } from 'components/page/column'

function App() {
  return (
    <div className="App">
      <Container width="medium">
        <Row>
          <Column>a</Column>
          <Column>a</Column>
          <Column>a</Column>
          <Column>a</Column>
        </Row>
      </Container>
    </div>
  )
}

export default App
