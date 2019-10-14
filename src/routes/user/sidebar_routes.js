import Dashboard from '@material-ui/icons/Dashboard';
import GroupWork from '@material-ui/icons/GroupWork'

function route(name, path, icon) {
  return {
    name,
    path,
    icon
  };
}

const sidebarRoutes = [
  route('Home', '/home', Dashboard),
  route('Team', '/team', GroupWork)
];

export default sidebarRoutes;