import logo from '../../../assets/logo.png'
const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content border border-t-cyan-600">
                <div className="space-y-2 flex items-center">
                    <img src={logo} className="w-3/12" alt="Company Logo" />
                    <p className="font-semibold">WorldSpeak<br />Providing language teach<br />Address: 456 Street, Dhaka, BAngladesh</p>
                </div>
                <div>
                    <span className="footer-title">Contact</span>
                    <p>456 Street, Dhaka,<br /> Bangladesh</p>
                    <p>Phone: 123-456-7890</p>
                    <p>Email:info@worldspeak.com</p>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover" href="#">Terms of use</a>
                    <a className="link link-hover" href="#">Privacy policy</a>
                    <a className="link link-hover" href="#">Cookie policy</a>
                </div>
            </footer>
            <footer className="footer items-center p-4 bg-base-200 text-base-content p-3">
                <div className="text-center mx-auto">
                    <p className='text-center'>&copy; 2023 - All rights reserved by WorldSpeak</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;