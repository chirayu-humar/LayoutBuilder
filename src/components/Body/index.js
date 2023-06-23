// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
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
        <div className="innerMiddle">
          {/* first child of middle */}
          {showLeftNavbar && (
            <div className="leftNavbar">
              <h1>Left Navbar Menu</h1>
              <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
              </ul>
            </div>
          )}
          {/* second child of middle */}
          {showContent && (
            <div className="content">
              <h1>Content</h1>
              <p>Lorem ipsum sdfs sdfs sdfsf sdfsdf </p>
            </div>
          )}
          {/* third child of middle */}
          {showRightNavbar && (
            <div className="leftNavbar">
              <h1>Right Navbar</h1>
              <p>Ad 1</p>
              <p>Ad 2</p>
            </div>
          )}
          {/* third child ended */}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
