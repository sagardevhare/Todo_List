import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Navigation from './components/Navigation';
import TodoList from './components/TodoList';
import EmployeeList from './components/EmployeeList';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navigation />
          <Routes>
            <Route path="/" element={<TodoList />} />
            <Route path="/employees" element={<EmployeeList />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;