import { Link } from 'react-router';
import Logo from '../assets/img/blobstudio-w-icon.svg';
import './css/navbar.css';

function BONav() {
    return (
        <>
            <nav className='bo-diagonal'>
                <Link to="/"><img src={Logo} alt="black.observer Logo" className='bo-logo' /></Link>
            </nav>
            <header className='absolute top-0 left-20 p-6'>
                <Link to="/">
                    <h1 className="font-marcellus text-2xl sm:text-3xl text-white"><span className='text-violet-200'>The</span> Black Observer</h1>
                </Link>
            </header>
        </>
    );
}

export default BONav;