import React, { useState } from 'react';
import Link from 'next/link';
import styles from './slidedrawer.module.css';

const SlideDrawer = () => {
  
  const [isOpen, drawerToggle] = useState(false);

  return (
    <aside>
      <div className={isOpen ? styles.backdropActive : styles.backdrop} onClick={() => drawerToggle(false)}></div>
      <nav className={isOpen ? styles.drawerIsOpen : styles.drawer}>
        <Link
          href="/"
          onClick={() => drawerToggle(false)}>
          Nuestra empresa
        </Link>
        <Link
          href="/como-funciona-nuestro-servicio"
          onClick={() => drawerToggle(false)}>
          ¿Cómo funciona nuestro servicio?
        </Link>
        <Link
          href="/beneficios"
          onClick={() => drawerToggle(false)}>
          Beneficios
        </Link>
        <Link
          href="/ventajas"
          onClick={() => drawerToggle(false)}>
          Ventajas
        </Link>
        <Link
          href="/politicas-de-privacidad"
          onClick={() => drawerToggle(false)}>
          Políticas de Privacidad
        </Link>
      </nav>
      <button className={styles.toggler} onClick={() => drawerToggle(!isOpen)}>
        {
          isOpen
          ? <span className={styles.iconClose}></span>
          : <span className={styles.iconMenu}></span>
        }
      </button>
    </aside>
  )
}
export default SlideDrawer;