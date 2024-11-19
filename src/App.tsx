import { Route, Routes } from "react-router-dom";
import { BASIC_ROUTES } from './routes/basicRouter';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[100vh]">
      <div className="w-full max-w-[390px] h-full flex flex-col bg-bg-background mx-auto shadow-lg">
        <Routes>
          {BASIC_ROUTES.map((route) => (
            <Route key={route.name} path={route.path()} element={<route.component />} />
          ))}
        </Routes>
      </div>
    </div>
  );
};

export default App;
