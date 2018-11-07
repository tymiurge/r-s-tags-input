function propTypesBooster(propTypes) {
  
  let _propTypes = propTypes

  return Object.create({
    withExactChildrenNumber: function(number) {
      _propTypes = {
        ..._propTypes,
        children: function(props, propName, componentName) {
          const amount = props[propName].length
          if (amount !== number)
              return new Error(`${componentName} should have exactly ${number} children but ${amount} received.`)
        }
      }
      return this  
    }
  })

}

export default propTypesBooster