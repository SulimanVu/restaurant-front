import { FC } from "react";
import styles from "./profilePage.module.scss";
import { Outlet } from "react-router-dom";
import Header from "@/components/Header/Header";
import ProfileNav from "@/components/ProfileNav/ProfileNav";

const ProfilePage: FC = () => {
  return (
    <>
      <section className={styles.profile}>
        <aside>
          <ProfileNav />
        </aside>
        <main>
          <Outlet />
        </main>
      </section>
    </>
  );
};

export default ProfilePage;
