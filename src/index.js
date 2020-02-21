import React, { Component } from 'react'
import './index.styl'

class ScrollTop extends Component {
  constructor(props) {
    super(props)

    this.state = {
      visible: false,
    }
  }

  handleScroll = () => {
    this.setState({
      visible: window.scrollY > 200,
    })
  }

  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  render() {
    const { visible } = this.state

    return (
      <div id="scroll-to-top" className={visible ? 'shown' : ''}>
        <button onClick={this.scrollToTop} title="Scroll to top">
          <i className="icon-arrow"></i>
        </button>
      </div>
    )
  }
}

export default ScrollTop
