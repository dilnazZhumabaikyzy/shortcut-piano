import logo from '../../assets/images/email.png';
export const Footer = ()=>{
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