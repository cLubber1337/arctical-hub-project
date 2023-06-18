import React from 'react';
import styles from "./Navbar.module.scss"
import {classNames} from "shared/lib/classNames/classNames";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";


interface NavbarProps {
    className?: string
}


export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(styles.navbar)}>
            <div className={styles.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={styles.mainLink}>Главная</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>О сайте</AppLink>
            </div>
        </div>
    );
};


