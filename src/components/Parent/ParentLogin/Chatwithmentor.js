import { Container } from 'mdbreact';
import React, { Component } from 'react';
import { Launcher } from 'react-chat-window'

class Chatwithmentor extends Component {
  constructor() {
    super();
    this.state = {
      messageList: [{
        author: 'them',
        type: 'text',
        data: {
          text: 'some text'
        }
      }
        ,
      {
        author: 'me',
        type: 'emoji',
        data: {
          code: 'someCode'
        }
      }]
    };
  }

  _onMessageWasSent(message) {
    this.setState({
      messageList: [...this.state.messageList, message]
    })
  }

  _sendMessage(text) {
    if (text.length > 0) {
      this.setState({
        messageList: [...this.state.messageList, {
          author: 'them',
          type: 'text',
          data: { text }
        }]
      })
    }
  }
  render() {
    return (
      <div>
          


           <h3>Tap On Chat icons</h3> 

            <h1>Chat with Mentor</h1>
            


          <div className="card" style={{ width: "18rem" }}>
  <img src="https://indiaeducationdiary.in/wp-content/uploads/2017/09/Centurion-University-of-Technology-and-Management-640x304.jpg" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </p>
  </div>
  <ul className="list-group list-group-flush">
   
  </ul>
  <div>
  <div className="card-body">
    <a href="https://cutm.ac.in/academic-facilities/erp-facility/" className="card-link">
      Centurion Official Web Site
    </a>
    <a href="#" className="card-link">
      
    </a>
  </div>
  </div>




  






</div>





        
        <Launcher
          agentProfile={{
            teamName: ' Chat With Mentor',
            imageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png'
          }}
          onMessageWasSent={this._onMessageWasSent.bind(this)}
          messageList={this.state.messageList}
          showEmoji
        />
       

        <div class="container-md"> 
        
        
        
        
        
        </div>

      </div>
    );
  }

}





export default Chatwithmentor;