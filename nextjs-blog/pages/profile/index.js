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
        <Link
          href="/api/auth/logout"
          style={{
            textDecoration: "none",
            borderStyle: "solid",
            borderColor: "black",
            height: "7vh",
            width: "10vw",
            backgroundColor: "#00B45D",
            borderRadius: "40px",
            color: "#FFFFFF",
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
