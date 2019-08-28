import React from 'react';
import { connect } from 'react-redux';
import { Form, Row, Col, InputGroup, InputGroupAddon, Button } from 'reactstrap';
import { addTodo } from '../actions'

const AddTodo = ({ dispatch }) => {

  function onSubmit(e) {
    e.preventDefault()
    if(!input.value.trim()) {
      return
    }
    dispatch(addTodo(input.value))
    input.value = ''
  }

  let input
  return (
    <Row style={{ marginTop: 20 }}>
      <Col>
        <Form onSubmit={e => {
          onSubmit(e)
        }}>
          <InputGroup>
            <input ref={node => input = node} />
            <InputGroupAddon addonType="append">
              <Button type="submit">
                Add Todo
              </Button>
            </InputGroupAddon>
          </InputGroup>
        </Form>
      </Col>
    </Row>
  )
}

export default connect()(AddTodo)
