import { Link } from 'react-router';
import Logo from '../assets/img/bo-icon-w.svg';
import './css/navbar.css';

function BONav() {
    return (
        <>
            <nav className='h-full bo-diagonal top-0 sticky'>
                <Link to="/"><img src={Logo} alt="black.observer Logo" className='h-full' /></Link>
            </nav>
            <header className='absolute top-0 left-20 p-6'>
                <Link to="/">
                    <h1 className="font-marcellus text-2xl sm:text-3xl"><span className='text-violet-100'>The</span> Black Observer</h1>
                </Link>
            </header>
        </>
    );
}

export default BONav;