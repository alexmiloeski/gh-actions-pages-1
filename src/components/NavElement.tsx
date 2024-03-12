import { Link, useLocation } from "react-router-dom";

type NavElementProps = { path: string; label: string };

export const NavElement = ({ path, label }: NavElementProps) => {
  const location = useLocation();
  const isActive = location.pathname === path;
  return (
    <>
      <Link className={isActive ? "disabled-link" : ""} to={path}>
        {label}
      </Link>
      <br />
    </>
  );
};
