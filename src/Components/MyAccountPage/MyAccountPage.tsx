import React from 'react';
import HeaderMeta from '../Global/HeaderMeta/HeaderMeta';
import SectionComponent from '../Global/Section/Section';
import Contact from './Components/Contact';
import Deactivate from './Components/Deactivate';
import Delete from './Components/Delete';
import Password from './Components/Password';
import UserCredentials from './Components/UserCredentials';
import Username from './Components/Username';
import './Styles/MyAccountPage.scss';

const MyAccountPage = (): JSX.Element => {
    const sectionHeader = 'My Account';

    return (
        <SectionComponent header={sectionHeader}>
            <HeaderMeta title={sectionHeader} />
            <div className='my-account-page-wrapper'>
                <UserCredentials />
                <Username />
                <Contact />
                <Password />
                <Delete />
                <Deactivate />
            </div>
        </SectionComponent>
    )
};

export default MyAccountPage;