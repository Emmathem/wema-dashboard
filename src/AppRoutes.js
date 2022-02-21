import React, { createContext /*useState*/ } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';

export const AppContent = createContext({});

const AppRoutes = () => {
  return (
    <AppContent.Provider value={{}}>
        <Router>
            <Switch>
                <Route path="/" exact component={Dashboard} />
            </Switch>
        </Router>
    </AppContent.Provider>
  )
}

export default AppRoutes