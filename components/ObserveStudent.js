import React, { Component, PropTypes } from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'
import '../styles/ObserveStudent.styl'

class ObserveStudent extends Component {
  render() {
    return (
      <div className="student-observation">
        <div className="name">Joe student</div>
        <div className="subjects">
          <ButtonGroup justified>
            <ButtonGroup><Button>Literacy</Button></ButtonGroup>
            <ButtonGroup><Button>Math</Button></ButtonGroup>
          </ButtonGroup>
          <ButtonGroup justified>
            <ButtonGroup><Button>Other</Button></ButtonGroup>
            <ButtonGroup><Button>✓ Non-instruction</Button></ButtonGroup>
          </ButtonGroup>
        </div>
        <div className="instruction-types">
          <ButtonGroup justified>
            <ButtonGroup><Button>Class</Button></ButtonGroup>
            <ButtonGroup><Button>✓Group</Button></ButtonGroup>
            <ButtonGroup><Button>Peers</Button></ButtonGroup>
          </ButtonGroup>
        </div>
        <div className="focus">
          <ButtonGroup justified>
            <ButtonGroup><Button>✓ Code Focused</Button></ButtonGroup>
            <ButtonGroup><Button>Meaning</Button></ButtonGroup>
          </ButtonGroup>
        </div>
        <div className="events">
          <div className="cols">
            <Button>Reads text including letters, words, sentences and connected text - aloud or silently - includes math equations and problems</Button>
            <Button>Asks on-topic questions</Button>
            <Button>Non-verbal responding</Button>
          </div>
          <div className="cols">
            <Button>Initiates a new idea, topic, or personal experience</Button>
            <Button>Answers questions that require thinking or reasoning</Button>
            <Button>Writing questions or responses to questions</Button>
          </div>
          <div className="cols">
            <Button>Participates in a discussion - at least 2 students and at least 2 turns</Button>
            <Button>Reads self-generated text including math equations or problems</Button>
            <Button>Takes notes or write to dictation</Button>
          </div>
        </div>
        <div className="behaviors">
          <ButtonGroup>
            <ButtonGroup><Button>✓ Is on task</Button></ButtonGroup>
            <ButtonGroup><Button>Is off task</Button></ButtonGroup>
          </ButtonGroup>
        </div>
      </div>
    )
  }
}

export default ObserveStudent
