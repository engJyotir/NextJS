"use client";
import styles from "./page.module.css"; 
import Link from "next/link";
import React, { useEffect } from "react";
import {useRouter} from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";




export default function SignupPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: "",
    })
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const onSignup = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/signup", user);
            console.log("Signup success", response.data);
            router.push("/login");
            
        } catch (error:any) {
            console.log("Signup failed", error.message);
            
            toast.error(error.message);
        }finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if(user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);
    return (
        <div className={styles.container}>
            
            <h1 className={styles.header}> {loading ? "Processing" : "Signup"} </h1>
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
            <button className={styles.btn} onClick={onSignup}> {buttonDisabled ? "No Signup" : "Signup"} </button>
            <Link href="/login" className={styles.link}>
                Visit Login Page
            </Link>
        </div>
    );
}
