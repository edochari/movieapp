import React from "react";
import styles from "../CSS/Navbar.module.css";

class Navbar extends React.Component{

    render()
    {
      const{cartCount}=this.props;
        return (
            <>
              <div className={styles.nav}>
                <div className={styles.title}>MOVIE APP</div>
                <div className={styles.cartIconContainer}>
                    <img alt="cart-icon" src="https://cdn-icons-png.flaticon.com/128/2838/2838895.png" className={styles.icon}/>
                   
                    <span className={styles.cartCount}>{cartCount}</span>
                    
                </div>
              </div>
            </>
        )
    }
}

export default Navbar;