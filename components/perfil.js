import {FaGithub,FaWhatsapp,FaEnvelope,FaPhoneAlt}  from 'react-icons/fa';

import Style from './perfil.module.css';


var Perfil =()=>{
    return(<div className={Style.card}>
    <div className={Style.box}>
        <div className={Style.img} >
        </div>
        <h2>Iago Mussel<br/><span>Programador por paixão</span></h2>
        <span>
            <ul>
                <li><a href="https://github.com/iagomussel"><FaGithub /></a></li>
                <li><a href="http://api.whatsapp.com/send?phone=5521997394610"><FaWhatsapp /></a></li>
                <li><a href="mailto:himmussel@gmail.com"><FaEnvelope /></a></li>
                <li><a href="tel:+5521997394610"><FaPhoneAlt /></a></li>
             </ul>
        </span>
    </div>
</div>);
}

export default Perfil;