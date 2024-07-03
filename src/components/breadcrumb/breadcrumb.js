import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import "../../scss/breadcrumb/breadcrumb.scss";

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          // Remove bad link 
          return (
            <li key={name} className={`breadcrumb-item ${isLast ? 'active' : ''}`}>
              {isLast ? (
                <span>{name}</span>
              ) : (
                <Link to={routeTo} title={name}>{name}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
