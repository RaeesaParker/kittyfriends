import React from 'react';


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

 // Update state so the next render will show the fallback UI.
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  // You can also log the error to an error reporting service
  componentDidCatch(error, errorInfo) {
    this.setState({hasError:true})
  }




  // You can render any custom fallback UI
  render() {
    if (this.state.hasError) {
      return <h2>Ooops. Something went wrong.</h2>;
    } else{
    return this.props.children;
    }
  }
}

export default ErrorBoundary;
