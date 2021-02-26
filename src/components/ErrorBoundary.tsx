import * as React from "react";

type ErrorBoundaryStateInterface = {
  hasError: boolean
}

export default class ErrorBoundary extends React.Component<{}, ErrorBoundaryStateInterface> {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error(error, errorInfo);
  }

  render() {
    return this.state.hasError
      ? <h1>Something went wrong.</h1>
      :
      this.props.children;
  }
}