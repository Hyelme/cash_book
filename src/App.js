import { Route, Routes } from 'react-router-dom';
import { UrlPaths } from './routes';
import './App.css';
import MonthlyPlanner from 'page/MonthlyPlanner';

const Monthly = () => {
  return (
    <Routes>
      <Route
        path={UrlPaths.cashbook.monthly.calendar}
        element={<MonthlyPlanner />}
      />
      <Route path={UrlPaths.cashbook.monthly.weekly} element={''} />
      <Route path={UrlPaths.cashbook.monthly.closing} element={''} />
    </Routes>
  );
};

const CashBook = () => {
  return (
    <Routes>
      <Route path={UrlPaths.cashbook.cover} element={''} />
      <Route path={UrlPaths.cashbook.goal} element={''} />
      <Route path={UrlPaths.cashbook.budgetCheck} element={''} />
      <Route path={UrlPaths.cashbook.financeList} element={''} />
      <Route path={UrlPaths.cashbook.monthly.index} element={<Monthly />} />
    </Routes>
  );
};

const Main = () => {
  return (
    <Routes>
      <Route path={UrlPaths.main.shelf} element={""} />
      <Route path={UrlPaths.main.init} element={""} />
    </Routes>
  );
};

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={UrlPaths.main.index} element={<Main />} />
        <Route path={UrlPaths.cashbook.index} element={<CashBook />} />
      </Routes>
    </div>
  );
}

export default App;
