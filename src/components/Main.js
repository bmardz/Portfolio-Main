import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import dp from '../images/dp.jpg'
import todo from '../images/todo.png'
import smartbrain from '../images/smartbrain.png'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Slack Clone</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            Built a Slack clone where users can send messages to one another within the app. Messages are stored on Firebase so users can see old messages when reopening the app.
            </p>
            <br></br>
            <p>
            React - Firebase <a href="https://github.com/bmardz/slack-clone">Live version</a>.
          </p>
          {close}

          <h2 className="major">Messenger Clone</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin
            aliquam facilisis ante interdum congue. Integer mollis, nisl amet
            convallis, porttitor magna ullamcorper, amet egestas mauris. Ut
            magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas.
            By the way, check out my <a href="#work">Live Version</a>.
          </p>
          {close}

          <h2 className="major">Facial Recognition App</h2>
          <span className="image main">
            <img src={smartbrain} alt="" />
          </span>
          <p>
            A front-end web application that allows users to pretend to sign in or register. User is then taken to a page that allows them to enter an image url in which the app then detects any faces that are within the image through the use of an API.
            <br></br>
            <br></br>
            <p>
              Stack
              <br></br>
              - Reactjs - 
            </p>
            <p>
            By the way, check out my <a href="https://github.com/bmardz/Smart-Brain">Github</a> to access the files for this project.
            </p>
          </p>
          {close}

          <h2 className="major">Todo App</h2>
          <span className="image main">
            <img src={todo} alt="" />
          </span>
          <p>
            Simple Todo list built with Javascript. Users are able to do the following:
            <br></br> 
            <br></br>
              1. Add and delete todo items
            <br></br>
              2. Select between all, completed or uncompleted list items
            <br></br>
              3. Save to local storage so list items still display when browser is reopened
            <br></br>
            <br></br>
            <p>
              Stack
              <br></br>
              - Javascript - HTML - CSS
            </p>
            <p>
              By the way, check out my <a href="https://bmardz.github.io/todo-list/" target="_black">Live Version</a>.
            </p>
          </p>
          {close}
        </article>

        

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={dp} alt="" />
          </span>
          <p>
            Hi, I am Bryce a self taught front end developer based in Wollongong in search for a dev role. Approximately 10 months ago I found a new passion for web development and began teaching myself before and after work. 
            <br></br>
            <br></br>
            I love problem solving and building projects spending most of my free time coding and learning new things to become a better developer. I am hard working, passionate, committed and a fast learner! 
          </p>
          <br></br>
          <p>
            My current skills include:
            <br></br>
            <br></br>
            HTML - CSS - Javascript - Reactjs - Redux - Firebase - Gatsby - VSCode
          </p>
          {close}
        </article>
      </div>
    )
  }
}


Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
