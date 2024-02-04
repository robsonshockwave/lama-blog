'use client';

import { useState } from 'react';
import styles from './links.module.css';
import { NavLink } from './navLink/NavLink';
import Image from 'next/image';

const links = [
  {
    title: 'Homepage',
    path: '/',
  },
  {
    title: 'About',
    path: '/about',
  },
  {
    title: 'Contact',
    path: '/contact',
  },
  {
    title: 'Blog',
    path: '/blog',
  },
];

export const Links = () => {
  const [open, setOpen] = useState(false);

  // TEMPORARY
  const session = true;
  const isAdmin = true;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.title}>
            {link.title}
          </NavLink>
        ))}
        {session ? (
          <>
            {isAdmin && (
              <NavLink
                item={{
                  title: 'Admin',
                  path: '/admin',
                }}
              />
            )}
            <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <NavLink
            item={{
              title: 'Login',
              path: '/login',
            }}
          />
        )}
      </div>

      <Image
        className={styles.menuButton}
        onClick={() => setOpen((prev) => !prev)}
        src="/menu.png"
        alt="menu"
        width={30}
        height={30}
      />

      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
};
