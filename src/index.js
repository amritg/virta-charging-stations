import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, browserHistory } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux'

import Root from './views'
import { RootReducer } from './reducers/RootReducer'

const store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
)

const MainContainer = () => {
  return (
    <Provider store={store}>
      <Router historty={browserHistory}>
        <div>          
          <Route exact path='/' component={Root}/>
        </div>
      </Router>
    </Provider>
  )
}

const App = () => {
  return (
    <MainContainer />
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
