import React from "react"

/*
  A higher-order component is a function that receives a component as a parameter,
  and returns another component
*/
const withRouter = (MyComponent) => {
  const OuterComponent = (props, context) => (
    // here you need to inject the router to the composed component
    <MyComponent
      { ...props }
      router={context.router}
    />
  )

  OuterComponent.contextTypes = {
    router: React.PropTypes.object.isRequired
  }

  return OuterComponent
}

export default withRouter
