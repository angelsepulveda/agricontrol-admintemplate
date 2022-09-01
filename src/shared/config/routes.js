import LayoutAdmin from "../layouts/LayoutAdmin";
import Dashboard from "../pages/Dashboard";

const routes = [
    {
        path: "/dashboard",
        layout: LayoutAdmin,
        component: Dashboard,
    }
];

export default routes;