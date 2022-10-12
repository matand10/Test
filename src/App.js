import { Route, Routes } from 'react-router-dom';
import { routes } from './routes';

export const App = () => {
  return (
    <section className="App">
      <Routes>
        {routes.map(route => <Route key={route.path} exact element={route.component} path={route.path} />)}
      </Routes>
    </section>
  );
}

