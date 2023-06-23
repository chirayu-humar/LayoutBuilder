// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      return (
        <div className="controllerOuter">
          <h1>Layout</h1>
          <div className="containerDivs">
            <input
              id="contentInput"
              onChange={onToggleShowContent}
              checked={showContent}
              type="checkbox"
            />
            <label htmlFor="contentInput">Content</label>
          </div>
          <div className="containerDivs">
            <input
              id="leftNavbar"
              onChange={onToggleShowLeftNavbar}
              checked={showLeftNavbar}
              type="checkbox"
            />
            <label htmlFor="leftNavbar">Left Navbar</label>
          </div>
          <div className="containerDivs">
            <input
              id="rightNavbar"
              onChange={onToggleShowRightNavbar}
              checked={showRightNavbar}
              type="checkbox"
            />
            <label htmlFor="rightNavbar">Right Navbar</label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
