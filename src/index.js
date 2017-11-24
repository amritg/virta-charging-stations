import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, browserHistory } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux'

import Root from './views/Root'
import { RootReducer } from './reducers/RootReducer'

const store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
)

const MainContainer = () => {
  return (
    <Provider store={store}>
      <Router historty={browserHistory}>       
        <Route exact path='/' component={Root}/>
      </Router>
    </Provider>
  )
}

const App = () => {
  return (
    <div>
      <MainContainer />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
