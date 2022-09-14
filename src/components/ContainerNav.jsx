import logo from '../images/RickAndMortySilueta.png'
import '../css/StyleNav.css'
import { BsGearWideConnected } from 'react-icons/bs'


export const ContainerNav = () => {
    return ( 
        <>
            <div className='ContainerNav'>   
                <div>   
                    <img className='ImageLogo' alt='img' src={logo}/>
                </div>
                <div >
                    <ul className='ContainerList'>    
                        <li>Docs</li>
                        <li>About</li>
                        <li className='suport'>SUPPORT US</li>
                        <li className='simbolsuport'><BsGearWideConnected/></li>
                    </ul>
                </div>
            </div>
            <div className='ContainerTitle'>   
                <h1 >The Rick and Morty</h1>
            </div>
        </>

    )
}