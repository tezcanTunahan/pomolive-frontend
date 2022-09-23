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
  };

  return (
    <div className='navbar'>
      <div className='navbar__Left'>
        <h3>Pomolive</h3>
      </div>
      <div className='navbar__mid'>
        <Button onClick={() => Router.push('/')} text='Pomo Ofline' />
        <Button onClick={() => Router.push('/pomoonline')} text='Pomo online' />
        <Button onClick={() => Router.push('/studysummary')} text='study summary' />
      </div>
      <div className='navbar__right'>
        {user ? (
          <div>
            {user.result.name}
            <Button onClick={handleLogout} text='log out' />
          </div>
        ) : (
          <div>
            <Link href={'/login'}>Login</Link>
            <Link href={'/register'}>Register</Link>
          </div>
        )}
      </div>
    </div>
  );
}
