import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
  width: 450px;
  height: 30px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding-left: 5px;
  padding-right: 5px;
`

const Cell = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${props => props.value === props.name ? '1px solid red' : '0.5px solid black'};
  color: ${props => props.value === props.name ? 'red' : 'black'};
  box-sizing: border-box;
  padding: 3px;
  cursor: pointer;
`

const DataParametersGroup = ({optionsList, click, value}) => {
    return (
        <Container>
            {
                Object.keys(optionsList).map((element, index) => (
                    <Cell value={value}
                          name={optionsList[element]}
                          onClick={() => click(optionsList[element])}
                          key={index}
                    >
                        {optionsList[element].title}
                    </Cell>
                ))
            }
        </Container>
    )
}

export default DataParametersGroup
