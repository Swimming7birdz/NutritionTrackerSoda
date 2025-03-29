import Profile from './pages/Profile/profile';
import History from './pages/History/history';
import Daily from './pages/Daily/daily';

const routes = [
    {path: '/profile', element: <Profile />},
    {path: '/history', element: <History />},
    {path: '/history', element: <Daily />},
];

export default routes;