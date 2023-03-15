import HederaLogo from '../assets/hedera-logo.jpeg';

function Header() {
    return(
        <header id="main-header">
            <div>
                <img src={HederaLogo} alt="Hedera Logo" />
                <h1>Hello Hedera!</h1>
            </div>
        </header>
    );
}

export default Header;

