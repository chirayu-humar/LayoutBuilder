import {Component} from 'react'

import ConfigurationController from './components/ConfigurationController'
import ConfigurationContext from './context/ConfigurationContext'
import Layout from './components/Layout'

import './App.css'

class App extends Component {
  state = {
    contentVisible: true,
    leftNavBarVisible: true,
    rightNavBarVisible: true,
  }

  changeContentVisibility = () => {
    this.setState(prevState => ({
      contentVisible: !prevState.contentVisible,
    }))
  }

  changeLeftVisibility = () => {
    this.setState(prevState => ({
      leftNavBarVisible: !prevState.leftNavBarVisible,
    }))
  }

  changeRightVisibility = () => {
    this.setState(prevState => ({
      rightNavBarVisible: !prevState.rightNavBarVisible,
    }))
  }

  render() {
    const {contentVisible, leftNavBarVisible, rightNavBarVisible} = this.state
    return (
      <ConfigurationContext.Provider
        value={{
          showContent: contentVisible,
          showLeftNavbar: leftNavBarVisible,
          showRightNavbar: rightNavBarVisible,
          onToggleShowContent: this.changeContentVisibility,
          onToggleShowLeftNavbar: this.changeLeftVisibility,
          onToggleShowRightNavbar: this.changeRightVisibility,
        }}
      >
        <div className="bg-container">
          <ConfigurationController />
          <Layout />
        </div>
      </ConfigurationContext.Provider>
    )
  }
}

export default App
