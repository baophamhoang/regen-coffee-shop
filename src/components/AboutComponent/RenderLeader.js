import { Media } from 'reactstrap';
import { baseUrl } from '../../shared/baseUrl';

function RenderLeader({leader}){
    return (
            <Media className='mb-2'>
                <Media left top>
                    <Media object src={baseUrl+ leader.image}  alt={leader.designation}/>
                </Media>
                <Media body className="ml-5" >
                    <Media heading >{leader.name}</Media>
                    <Media className='mb-2'>{leader.designation}</Media>    
                    {leader.description}
                </Media>
            </Media>
    )
}
export default RenderLeader;