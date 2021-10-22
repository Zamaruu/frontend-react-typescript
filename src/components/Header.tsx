import React from "react";
import { UserIcon } from "../Icons";
import styles from '../css/Header.module.css'

export const Header = () => {
    const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.currentTarget.value);
    }

    return (
        <div className={styles.container}>
            <a href="./">Q & A</a>
            <input onChange={handleSearchInputChange} type="text" placeholder="Search..." />
            <a href="./signin">
                <UserIcon></UserIcon>
                <span>SignIn</span>
            </a>
        </div>
    );
}