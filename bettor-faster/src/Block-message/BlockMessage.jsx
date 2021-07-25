import React, { Component }  from "react";

class BlockMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      value2: '',
      valueOld: '',
      changed: false,
      length: 0
    }
  }
  
  inputChange = (e) => {
    let next = this.state;
    next.value = e.target.value;
    next.changed = next.value !== next.valueOld;
    this.setState(next);
  }

  inputChange2 = (e) => {
    let next = this.state;
    next.value2 = e.target.value;
    next.changed = next.value !== next.valueOld;
    this.setState(next);
  }

  buttonClick = () => {
    document.querySelector(".texts").innerHTML = `<div className="text-block" id="hidden-message"><h2 className="text-title">Title: ${this.state.value}</h2> <p className="text-text">Text: ${this.state.value2}</p></div>`;
    document.getElementById('elementId').value='';
    document.getElementById('elementId2').value='';
  }
  
  buttonClickDel = () => {
    alert("Do you want delete message?");
    document.addEventListener('click', function(event) {
      let id = event.target.dataset.toggleId;
      if (!id) return;

      let elem = document.getElementById(id);

      elem.hidden = !elem.hidden;
    });
  }

  render() {
    return (
      <div>
        <div className="form">
            <div className="panel-body">
              <div className="col">
                <form action="" className="input-group">
                  <input 
                    id="elementId"
                    type="text" 
                    className="form-control" 
                    placeholder="Title"
                    required
                    ref={ref => this.input = ref}
                    onChange={this.inputChange}
                    value={this.state.value}
                  />
                  <input 
                    id="elementId2"
                    type="text" 
                    className="form-control-text" 
                    placeholder="Text"
                    required
                    ref={ref => this.input2 = ref}
                    onChange={this.inputChange2}
                    value={this.state.value2}
                  />
                  <button 
                    className="btn-send" 
                    type="button"
                    onClick={this.buttonClick}
                    disabled={!this.state.changed}
                  >Send message</button>
                  <button 
                    className="btn-delete" 
                    type="button"
                    data-toggle-id="hidden-message"
                    onClick={this.buttonClickDel}
                    disabled={!this.state.changed}
                  >Delete message</button>
                </form>
                {this.state.changed &&
                  <p className="text-success"></p>
                }
                <div className="texts"></div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BlockMessage;