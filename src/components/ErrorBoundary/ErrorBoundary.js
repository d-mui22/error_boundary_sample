import React, {Component} from 'react'

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorMessage: ''
  }

  componentDidCatch = (error, info) => {
    this.setState({
      hasError: true,
      errorMessage: error
    })
  }

  render() {
    if (this.state.hasError) {
      return <h1>{this.state.errorMessage}</h1>
    }else {
      return this.props.children
    }
  }
}

export default ErrorBoundary

// Dont use ErrorBoundary all willy nilly, should only be used in cases where you know your code may fail.
// If you wrap it in normal code chances are development problem
// For uses in case where code may fail for reason out of your control
