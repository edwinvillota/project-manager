import React, { Component } from 'react'

class Textarea extends Component {
  constructor (props) {
    super(props)
    this.state = {
      content: ''
    }
  }

  render () {
    return (
      <div className='row'>
        <form className='col s12'>
          <div className='row'>
            <div className='input-field col s12'>
              <textarea id='textarea1' className='materialize-textarea'>{this.state.content}</textarea>
              <label for='textarea1'>Textarea</label>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default Textarea
