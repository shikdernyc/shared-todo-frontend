import Dashboard from '@material-ui/icons/Dashboard';

function route(name, path, icon) {
  return {
    name,
    path,
    icon
  };
}

const sidebarRoutes = [
  route('Home', '/', Dashboard)
];

export default sidebarRoutes;