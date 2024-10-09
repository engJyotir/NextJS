"use client";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import styles from "../signup/page.module.css"; 
import Link from "next/link";
import { useEffect } from "react";
import toast from "react-hot-toast";
export default function LoginPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",
       
    })
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);


    const onLogin = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/login", user);
            console.log("Login success", response.data);
            toast.success("Login success");
            router.push("/profile");
        } catch (error:any) {
            console.log("Login failed", error.message);
            toast.error(error.message);
        } finally{
        setLoading(false);
        }
    }

    useEffect(() => {
        if(user.email.length > 0 && user.password.length > 0) {
            setButtonDisabled(false);
        } else{
            setButtonDisabled(true);
        }
    }, [user]);
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