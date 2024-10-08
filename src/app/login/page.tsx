"use client";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import styles from "../signup/page.module.css"; 
import Link from "next/link";


export default function loginpage() {
    const [user, setUser] = React.useState({
        email: "",
        password: "",
    });
    const onLogin = async () => {

    };
    return (
        <div className={styles.container}>
            <h1 className={styles.header}>Login</h1>
            <div className={styles.maindiv}>
            <div className={styles.formGroup}>
                
                <input
                    className={styles.input}
                    type="email"
                    id="Email"
                    value={user.email}
                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                    placeholder="Email"
                />
            </div>
            <div className={styles.formGroup}>
                
                <input
                    className={styles.input}
                    type="password"
                    id="Password"
                    value={user.password}
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                    placeholder="Password"
                />
            </div>
            <button className={styles.btn} onClick={onLogin}>Login</button>
            <Link href="/signup" className={styles.link}>
               SignUp page
            </Link>
            </div>
        </div>
    )
}