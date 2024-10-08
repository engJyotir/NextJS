"use client";
import React from "react";
import Link from "next/link"; 
import styles from "./page.module.css"; 
import { useRouter } from "next/navigation";

export default function Signup() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: "",
    });

    const onSignup = async () => {
        
    };

    return (
        <div className={styles.container}>
            
            <h1 className={styles.header}>Signup</h1>
            <div className={styles.maindiv}>
            <div className={styles.formGroup}>
               
                <input
                    className={styles.input}
                    type="text"
                    id="Username"
                    value={user.username}
                    onChange={(e) => setUser({ ...user, username: e.target.value })}
                    placeholder="Username"
                />
            </div>
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
            </div>
            <button className={styles.btn} onClick={onSignup}>Sign Up</button>
            <Link href="/login" className={styles.link}>
                Visit Login Page
            </Link>
        </div>
    );
}
