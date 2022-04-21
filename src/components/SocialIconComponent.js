import { FontAwesomeIcon } from "@fortawesome/react-fontawesome" 
import { 
    faFacebook,
    faGoogle,
    faLinkedin,
    faTwitter,
    faYoutube,
    faInstagram,
 } from '@fortawesome/free-brands-svg-icons'
import {
    faPhoneAlt,
    faEnvelope
} from '@fortawesome/free-solid-svg-icons'
import {} from '@fortawesome/free-regular-svg-icons'


function SocialIcon(props){
    function BrandComponent({brand, keyId, style, classes}){
        switch(brand){
            case 'google':
                return (<a key={keyId} style={style} className={`btn btn-social-icon btn-google ${classes}`} href="http://google.com/+">
                    <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>
                    </a>)
            case 'call':
                return (<a key={keyId} style={style} className={`btn btn-social-icon btn-success ${classes}`} href="tel:+85212345678">
                    <FontAwesomeIcon icon={faPhoneAlt}></FontAwesomeIcon>
                    </a>)
            case 'facebook':
                return <a key={keyId} style={style} className={`btn btn-social-icon btn-facebook ${classes}`} href="http://www.facebook.com/profile.php?id=">
                    <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                    </a>
            case 'instagram':
                return <a key={keyId} style={style} className={`btn btn-social-icon btn-instagram ${classes}`} href="http://www.facebook.com/profile.php?id=">
                    <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                    </a>
            case 'linkedin':
                return <a key={keyId} style={style} className={`btn btn-social-icon btn-linkedin ${classes}`} href="http://www.linkedin.com/in/">
                    <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                    </a>
            case 'twitter':
                return <a key={keyId} style={style} className={`btn btn-social-icon btn-twitter ${classes}`} href="http://twitter.com/">
                    <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                    </a>
            case 'youtube':
                return <a key={keyId} style={style} className={`btn btn-social-icon btn-google ${classes}`} href="http://youtube.com/">
                    <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
                    </a>
            case 'mail':
                return <a key={keyId} style={style} className={`btn btn-social-icon btn-danger ${classes}`} href="mailto:">
                    <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                    </a>
            default:
                return ''
        }
    }
    const socialBrands = (Object.keys(props));
    const classes = `${props.plain?`btn-plain `:``}${props.dark?`btn-plain-dark `:``}${props.size?'size-'+props.size:``}`
    return (socialBrands.map((x,id)=> <BrandComponent brand={x} keyId={id} style={props.style} classes={classes} />)|| '');
}

export default SocialIcon;