import Logo from '../assets/img/bo-icon-w.svg';
import './css/navbar.css';

function BONav() {
    return (
        <>
            <nav className='h-full bo-diagonal top-0 sticky'>
                <img src={Logo} alt="black.observer Logo" className='h-full' />
            </nav>
            <header className='absolute top-0 left-20 p-6'>
                <h1 className="font-marcellus text-2xl sm:text-3xl">Black Observer</h1>
            </header>
        </>
    );
}

export default BONav;