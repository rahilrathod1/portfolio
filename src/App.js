import React from 'react';
import './App.css';
import EmailBox from './EmailBox';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDropdown: false,
    };
  }

  toggleDropdown = () => {
    this.setState(prevState => ({
      showDropdown: !prevState.showDropdown,
    }));
  };

  render() {
    return (
      <div className="App">
        <header>
          <nav>
            <div className="logo">Your Logo</div>
            <ul className={`menu ${this.state.showDropdown ? 'show' : ''}`}>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
            <div className="dropdown-toggle" onClick={this.toggleDropdown}>
              <div className={`hamburger ${this.state.showDropdown ? 'active' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </nav>
        </header>
        <main>
          <section className="about">
            <h1>About Me</h1>
            <p>Add some information about yourself here.</p>
          </section>
          <section className="hobbies">
            <h2>Hobbies</h2>
            <p>List your hobbies and interests.</p>
          </section>
          <section className="profession">
            <h2>Profession</h2>
            <p>Write about your professional background.</p>
          </section>
          <div className="email box">
          {/* Your other components */}
          <EmailBox />
        </div>
        </main>

        <footer>
          <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </footer>
      </div>
    );
  }
}

export default App;
