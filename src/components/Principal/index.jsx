import React from "react";
import styles from "./styles.module.css";


export default function Principal() {
  return (
    <>
      <main>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className={styles.conteudoPrincipal}>
                          <p className={styles.planos}><a href="#">Planos terrestres</a></p>
                          <p className={styles.planos}><a href="#">Planos maritimos</a></p>
                          <p className={styles.planos}><a href="#">Planos áreos</a></p>
                    </div>
                </div>
            </div>
        </div>
      </main>
    </>
  );
}
