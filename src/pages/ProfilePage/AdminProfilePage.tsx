import { FC } from "react";
import styles from "./profilePage.module.scss";
import { Outlet } from "react-router-dom";
import AdminProfileNav from "@/components/ProfileNav/AdminProfileNav";

const AdminProfilePage: FC = () => {
  return (
    <>
      <section className={styles.profile}>
        <aside>
          <AdminProfileNav />
        </aside>
        <main>
          <Outlet />
        </main>
      </section>
    </>
  );
};

export default AdminProfilePage;
