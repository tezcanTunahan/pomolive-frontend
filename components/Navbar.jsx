import Link from 'next/link';
import Button from './ui/Button';

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='navbar__Left'>
        <h3>Pomolive</h3>
      </div>
      <div className='navbar__mid'>
        <Button text='Pomo online' />
        <Button text='Pomo Ofline' />
      </div>
      <div className='navbar__right'>
        <Link href={'/login'}>Login</Link>
        <Link href={'/register'}>Register</Link>
      </div>
    </div>
  );
}
