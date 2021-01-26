import React, {useEffect, useState} from 'react';


const ProfileStatusWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activeEditMode = () => {
        setEditMode(true)
    }
    const deactiveEditMode = () => {
        setEditMode(false)
        props.updateUserStatus(status)
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }


    return (
        <div>
            {!editMode &&
            <div>
                <span onClick={activeEditMode}>{props.status || '-----'}</span>
            </div>}
            {editMode &&
            <div>
                <input onBlur={deactiveEditMode} onChange={onStatusChange} value={status} autoFocus={true}/>
            </div>}
        </div>
    )
}

export default ProfileStatusWithHooks