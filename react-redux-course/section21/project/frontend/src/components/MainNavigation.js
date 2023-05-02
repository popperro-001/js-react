import { Form, NavLink, useRouteLoaderData } from "react-router-dom";

import classes from "./MainNavigation.module.css";
import NewsletterSignup from "./NewsletterSignup";

const ROUTES = [
  { path: "/", name: "Home" },
  { path: "/events", name: "Events" },
  { path: "/newsletter", name: "Newsletter" },
];

function MainNavigation() {
  const token = useRouteLoaderData("root");

  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          {ROUTES.map((route) => (
            <li key={route.name}>
              <NavLink
                to={route.path}
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
                end
              >
                {route.name}
              </NavLink>
            </li>
          ))}
          {!token && (
            <li>
              <NavLink
                to="/auth?mode=login"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
                end
              >
                Authentication
              </NavLink>
            </li>
          )}
          {token && (
            <li>
              <Form action="/logout" method="post">
                <button>Logut</button>
              </Form>
            </li>
          )}
        </ul>
      </nav>
      <NewsletterSignup />
    </header>
  );
}

export default MainNavigation;
