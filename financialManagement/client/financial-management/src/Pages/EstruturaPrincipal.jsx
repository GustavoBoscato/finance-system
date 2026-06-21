import styles from './EstruturaPrincipal.module.css'
import { Siderbar } from '../Components/Siderbar';
import { Outlet } from "react-router-dom";

export function EstruturaPrincipal() {
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