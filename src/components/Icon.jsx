import Security from '../assets/Security.png'
import Logo from '../assets/logo_alb.png'
import Hosting from '../assets/Hosting.png'
import Training from '../assets/Training.png'
import Video from '../assets/Video.png'
import Consultancy from '../assets/Consultancy.png'
import Development from '../assets/Development.png'
import Remote  from '../assets/Remote.png'
import Client from '../assets/Client.png'
import Hours from '../assets/Hours.png'
import Solution from '../assets/Solution.png'

export default ({icon, styles})=>{
    switch (icon) {
        case 'Security':
            return <img style={styles} src={Security} alt='Security_icon'></img>
        case 'Hosting':
            return <img style={styles} src={Hosting} alt='Hosting_icon'></img>
        case 'Training':
            return <img style={styles} src={Training} alt='Training_icon'></img>
        case 'Video':
            return <img style={styles} src={Video} alt='Video_icon'></img>
        case 'Consultancy':
            return <img style={styles} src={Consultancy} alt='Consultancy_icon'></img>
        case 'Development':
            return <img style={styles} src={Development} alt='Development_icon'></img>
        case 'Remote':
            return <img style={styles} src={Remote} alt='Remote_icon'></img>
        case 'Client':
            return <img style={styles} src={Client} alt='Client_icon'></img>
        case 'Hours':
            return <img style={styles} src={Hours} alt='Hours_icon'></img>
        case 'Solution':
            return <img style={styles} src={Solution} alt='Solution_icon'></img>
        default:
            return <img style={styles} src={Logo} alt='Secure_icon'></img>
    }
};