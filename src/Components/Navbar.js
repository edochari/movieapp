import React from "react";
import styles from "../CSS/Navbar.module.css";

class Navbar extends React.Component{
    render()
    {
        return (
            <>
              <div className={styles.nav}>
                <div className={styles.title}>MOVIE APP</div>
                <div>
                    <img alt="cart-icon" src="https://cdn-icons-png.flaticon.com/128/2838/2838895.png" className={styles.icon}/>
                    <span className={styles.cartCount}>0</span>
                </div>
              </div>
            </>
        )
    }
}

export default Navbar;