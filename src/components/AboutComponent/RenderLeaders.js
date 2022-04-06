import { Media } from 'reactstrap';
import Loading from '../WaitingPages/LoadingComponent';
import ErrorMsg from '../WaitingPages/ErrorComponent';
import { Fade } from 'react-animation-components'
import {  useSelector } from 'react-redux'
import { leadersSelector } from '../../redux/selectors'
import RenderLeader from './RenderLeader';

function RenderLeaders(){
    const leadersData = useSelector(leadersSelector);
    if (leadersData.isLoading){
        return (<Loading/>)
      }
    else if (leadersData.errorMsg){
        return (<ErrorMsg msg={leadersData.errorMsg}/>)
    }
    else return(
        <Fade in >
            <Media list>
                {leadersData.leaders.map( leader => (
                    <RenderLeader leader={leader} key={leader.id}/>
                    ))
                }
            </Media>
        </Fade>
    )
}

export default RenderLeaders;