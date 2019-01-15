import { BrowserRouter, Route } from 'react-router-dom';
import AppFrame from '../components/AppFrame';
import Home from '../pages/Home';

const Router = (
  <BrowserRouter>
    <AppFrame>
      <Route exact path='/' component={Home} />
    </AppFrame>
  </BrowserRouter>
);

export default Router;
