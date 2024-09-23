import Image from 'next/image'
import chuck from '../../../public/chuck.png'

const Header = () => {
    return (
        <header className='header'>
            <div className='header__title'>
                <h1>Chuck Norries Jokes</h1>
            </div>
        </header>
    )
}
export default Header;