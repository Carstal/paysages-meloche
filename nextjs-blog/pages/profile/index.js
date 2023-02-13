//for auth
import React from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import styles from "../../styles/Home.module.css";
import { useTranslation } from "react-i18next";

export default function Profile() {
  const { t } = useTranslation();
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      user && (
        <div>
          <a href="/profile/info">
            <img class={styles.profile} src={user.picture} alt={user.name} />
          </a>
          <button class={styles.loginbutton}>
            <a href="/api/auth/logout">{t("logout")}</a>
          </button>
        </div>
      )
    );
  } else {
    return (
      <button class={styles.loginbutton}>
        <a href="/api/auth/login">{t("login")}</a>
      </button>
    );
  }
}
