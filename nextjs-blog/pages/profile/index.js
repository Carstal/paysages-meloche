//for auth
import React from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import styles from "../../styles/Home.module.css";
import { useTranslation } from "react-i18next";
import Link from "next/link";

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
          <Link
            class={styles.loginbutton}
            href="/api/auth/logout"
            style={{
              textDecoration: "none",
            }}
          >
            <p
              style={{
                textAlign: "center",
              }}
            >
              {t("logout")}
            </p>
          </Link>
        </div>
      )
    );
  } else {
    return (
      <Link
        class={styles.loginbutton}
        href="/api/auth/login"
        style={{
          textDecoration: "none",
          borderStyle: "solid",
          borderColor: "black",
        }}
      >
        <p
          style={{
            textAlign: "center",
          }}
        >
          {t("login")}
        </p>
      </Link>
    );
  }
}
