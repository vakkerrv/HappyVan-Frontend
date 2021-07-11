import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { logout } from '../actions/userActions'

import TabPersonalInfo from '../components/TabPersonalInfo'
import TabAddress from '../components/TabAddress'

import SubscriptionTab from '../components/SubscriptionTab'

import '../css/ProfileScreenStyle.css';

// import { subscribe } from '../actions/subsActions'

const ProfileScreen = ({ history }) => {
    // const [subType, setSubType] = useState(1)
    // console.log('profile history', history)

    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    // const subscription = useSelector(state => state.subscription)
    // const { userInfo } = userLogin

    useEffect(() => {
        dispatch(logout())
        history.push('/')
        // if (!userInfo) {
        //     history.push('/')
        // }
    }, [history, userInfo])

    // const SubscribeHandler = (e) => {
    //     e.preventDefault()
    //     if(subType!==''){
    //         dispatch(subscribe(userInfo.id, subType))
    //     }
    // }

// <Container>
            
//             {userInfo ? (
//                     <Row>
//                         <Col md={8}>
//                             <Tabs defaultActiveKey="profile" id="account-settings">
//                                 <Tab eventKey="profile" title="Аккаунт">
//                                     <TabPersonalInfo/>
//                                     <TabAddress/>
//                                 </Tab>
//                                 <Tab eventKey="subscription" title="Подписка">
//                                     <SubscriptionTab/>
//                                 </Tab>
//                                 {/*<Tab eventKey="notifications" title="Уведомления">

//                                 </Tab>*/}
//                             </Tabs>
//                         </Col>
//                     </Row>
//                 ) : (
//                     <h1> Необходимо войти в аккаунт </h1>
//                 )}

//         </Container>
    
    return (
        <div></div>
  	  
    );
};

export default ProfileScreen;
