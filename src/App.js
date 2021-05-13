import './App.css';

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/home' component={Page1} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
