import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    if (!props.profile){
        return <Preloader/>
    }

    return (
        <div>


            <div className={s.descriptionBlock}>
                <div><img src={props.profile.photos.large} alt='asd'/></div>
                <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus}/>
                {props.profile.fullName} <br/>
                Обо мне: {props.profile.aboutMe} <br/>
                {props.profile.lookingForAJob ? 'Ищу работу': null} <br/>
                {props.profile.lookingForAJobDescription} <br/>
                контакты: Хз как писать

            </div>
        </div>
    )
}

export default ProfileInfo;