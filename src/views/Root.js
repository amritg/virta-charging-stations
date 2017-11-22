import React from 'react'
import Map from '../components/Map'
class Root extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <div>
        <Map />
      </div>
    )
  }
}

export default Root