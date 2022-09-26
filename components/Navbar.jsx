import Link from 'next/link';
import { useEffect, useState } from 'react';
import Button from './ui/Button';
import decode from 'jwt-decode';
import Router from 'next/router';

export default function Navbar() {
  const [user, setUser] = useState();

  useEffect(() => {
    const token = user?.token;
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) return handleLogout();
    }
    setUser(JSON.parse(localStorage.getItem('user')));
  }, [user?.token]);
  const handleLogout = () => {
    localStorage.clear();
    setUser(null);
    Router.reload();
  };

  return (
    <nav className='navbar'>
      <div className='navbar__left'>
        <Link href={'./'}>Pomolive</Link>
      </div>
      <div className='navbar__mid'>
        <Link href='/'>Pomo Ofline</Link>
        <Link href='/pomoonline'>Pomo Online</Link>
        <Link href='/studysummary'>Study Summary</Link>
      </div>
      {user ? (
        <div className='navbar__right'>
          <span className='navbar__right__name'>{user.result.name}</span>
          <Button onClick={handleLogout} text='log out' />
        </div>
      ) : (
        <div className='navbar__right'>
          <Link href={'/login'}>Login</Link>
        </div>
      )}
    </nav>
  );
}
