import styles from './EstruturaPrincipal.module.css';
import { Siderbar } from '../Components/Siderbar';
import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from '../function/useAuth';

export function EstruturaPrincipal() {
  const token = localStorage.getItem('token');

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className={styles.container}>
      <Siderbar />

      <div className={styles.main}>
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}