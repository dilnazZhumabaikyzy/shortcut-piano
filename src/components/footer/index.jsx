import logo from '../../assets/images/email.png';

const Footer = ()=>{

    return(
        <div className='footer'>
            <h5>
            <a href="mailto:shortcutlearnpiano@gmail.com" >
            shortcutlearnpiano@gmail.com
            </a>                
            </h5>
            <img src={logo} alt=""/> 
        </div>
    );
};
export default Footer;