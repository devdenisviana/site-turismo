import React from "react";
import styles from "./styles.module.css";
import Logo from "../../assets/coconut.svg"

export default function Header() {
    return (
      <>
      <header>
        <div className="container">
            <div className="row">
                <div className={styles.links}>
                    <div className="col-md-2"><img src={Logo} alt="" className={styles.logoImagem}/></div>
                    <div className="col-md-2"><a href="#" className={styles.linkHome}>Home</a></div>
                    <div className="col-md-2"><a href="#" className={styles.linkNorte}>África</a></div>
                    <div className="col-md-2"><a href="#" className={styles.linkNordeste}>Europa</a></div>
                    <div className="col-md-2"><a href="#" className={styles.linkCentroOeste}>Ásia</a></div>
                    <div className="col-md-2"><img src={Logo} alt="" className={styles.logoImagem}/></div>
                </div>
            </div>
        </div>
        </header>
      </>
    );
}