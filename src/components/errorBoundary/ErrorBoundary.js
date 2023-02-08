import { Component } from "react";
import ErrorMSG from "../ErrorMSG/errorMSG";

class ErrorBoundary extends Component {
  state = {
    error: false
  }

  // static getDerivedStateFromError(error) {
  //     return {error: true};
  // }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
    this.setState({
      error: true
    })
  }

  render() {
    if(this.state.error) {
      return <ErrorMSG/>
    }
    return this.props.children;
  }
}

export default ErrorBoundary;