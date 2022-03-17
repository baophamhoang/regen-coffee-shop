import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner} from '@fortawesome/free-solid-svg-icons'
export default function Loading(){
    return (
        <div  className='text-center' style={{padding:'20px 0 40px', width:'100%'}}>
            <FontAwesomeIcon icon={faSpinner} className="fa-pulse fa-3x fa-fw text-primary"/>
        </div>
    )
}