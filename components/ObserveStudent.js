import React, { Component, PropTypes } from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'
import '../styles/ObserveStudent.styl'

class ObserveStudent extends Component {
  render() {
    return (
      <div className="student-observation">
        <div className="name">Joe student</div>
        <div className="subjects">
         <div className="section-title">Subjects</div>
          <div className="toggle toggle-group">
            <input type="radio" className="item" name={'subjects[' + this.props.toggle + ']'}  id={'subject-1-' + this.props.toggle}/>
            <label className="toggle-labels" htmlFor={'subject-1-' + this.props.toggle}>Literacy</label>
            <input type="radio" className="item" name={'subjects[' + this.props.toggle + ']'} id={'subject-2-' + this.props.toggle}/>
            <label className="toggle-labels" htmlFor={'subject-2-' + this.props.toggle}>Math</label>
            <input type="radio" className="item" name={'subjects[' + this.props.toggle + ']'} id={'subject-3-' + this.props.toggle}/>
            <label className="toggle-labels" htmlFor={'subject-3-' + this.props.toggle}>Other</label>
            <input type="radio" className="item" name={'subjects[' + this.props.toggle + ']'} id={'subject-4-' + this.props.toggle}/>
            <label className="toggle-labels" htmlFor={'subject-4-' + this.props.toggle}>Non-instruction</label>
          </div>
        </div>
        <div className="instruction-types">
          <div className="section-title">Instruction Type</div>
          <div className="toggle toggle-group">
            <input type="radio" className="item" name={'instruction[' + this.props.toggle + ']'} id={'instruction-1-' + this.props.toggle}/>
            <label className="toggle-labels" htmlFor={'instruction-1-' + this.props.toggle}>Class</label>
            <input type="radio" className="item" name={'instruction[' + this.props.toggle + ']'} id={'instruction-2-' + this.props.toggle}/>
            <label className="toggle-labels" htmlFor={'instruction-2-' + this.props.toggle}>Group</label>
            <input type="radio" className="item" name={'instruction[' + this.props.toggle + ']'} id={'instruction-3-' + this.props.toggle}/>
            <label className="toggle-labels" htmlFor={'instruction-3-' + this.props.toggle}>Peers</label>
          </div>
        </div>
        <div className="focus">
          <div className="section-title">Focus</div>
          <div className="toggle toggle-group">
            <input type="radio" className="item" name={'focus[' + this.props.toggle + ']'} id={'focus-1-' + this.props.toggle}/>
            <label className="toggle-labels" htmlFor={'focus-1-' + this.props.toggle}>Code Focused</label>
            <input type="radio" className="item" name={'focus[' + this.props.toggle + ']'} id={'focus-2-' + this.props.toggle}/>
            <label className="toggle-labels" htmlFor={'focus-2-' + this.props.toggle}>Meaning</label>
          </div>
        </div>
        <div className="events">
          <div className="section-title">Events</div>
          <div className="toggle toggle-group">
            <input type="checkbox" className="item" name="events[]" id={'event-1-' + this.props.toggle}/>
            <label className="toggle-labels" htmlFor={'event-1-' + this.props.toggle}>Reads text including letters, words, sentences and connected text - aloud or silently - includes math equations and problems</label>
            <input type="checkbox" className="item" name="events[]" id={'event-2-' + this.props.toggle}/>
            <label className="toggle-labels" htmlFor={'event-2-' + this.props.toggle}>Asks on-topic questions</label>
            <input type="checkbox" className="item" name="events[]" id={'event-3-' + this.props.toggle}/>
            <label className="toggle-labels" htmlFor={'event-3-' + this.props.toggle}>Non-verbal responding</label>
            <input type="checkbox" className="item" name="events[]" id={'event-4-' + this.props.toggle}/>
            <label className="toggle-labels" htmlFor={'event-4-' + this.props.toggle}>Initiates a new idea, topic, or personal experience</label>
            <input type="checkbox" className="item" name="events[]" id={'event-5-' + this.props.toggle}/>
            <label className="toggle-labels" htmlFor={'event-5-' + this.props.toggle}>Answers questions that require thinking or reasoning</label>
            <input type="checkbox" className="item" name="events[]" id={'event-6-' + this.props.toggle}/>
            <label className="toggle-labels" htmlFor={'event-6-' + this.props.toggle}>Writing questions or responses to questions</label>
            <input type="checkbox" className="item" name="events[]" id={'event-7-' + this.props.toggle}/>
            <label className="toggle-labels" htmlFor={'event-7-' + this.props.toggle}>Participates in a discussion - at least 2 students and at least 2 turns</label>
            <input type="checkbox" className="item" name="events[]" id={'event-8-' + this.props.toggle}/>
            <label className="toggle-labels" htmlFor={'event-8-' + this.props.toggle}>Reads self-generated text including math equations or problems</label>
            <input type="checkbox" className="item" name="events[]" id={'event-9-' + this.props.toggle}/>
            <label className="toggle-labels" htmlFor={'event-9-' + this.props.toggle}>Takes notes or write to dictation</label>
          </div>
        </div>
        <div className="behaviors">
          <div className="section-title">Is Student on Task?</div>
          <div className="toggle">
            <input type="checkbox" className="item" name="task" id={this.props.toggle}/>
            <label className="toggle-labels" htmlFor={this.props.toggle}>
              <span className="on">Yes</span>
              <span className="off">No</span>
           </label>
          </div>
        </div>
      </div>
    )
  }
}

export default ObserveStudent
