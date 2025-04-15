import Profile from './pages/Profile/profile';
import History from './pages/History/history';
import Create_Daily from './pages/Create_Daily/create_daily';
import View_Daily from './pages/View_Daily/view_daily';

const routes = [
    {path: '/profile', element: <Profile />},
    {path: '/history', element: <History />},
    {path: '/create_daily', element: <Create_Daily />},
    {path: '/view_daily', element: <View_Daily />},
];

export default routes;