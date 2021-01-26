import React from 'react';


class ProfileStatus extends React.Component {state = {
        editMode: false
    }

    activateEditMode = () => {
        this.setState({
            editMode: true,
            status:this.props.status
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateUserStatus(this.state.status)
    }
    onInputChange =(e)=>{
        this.setState({
            status:e.target.value
        })
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status!==this.props.status){
            this.setState({
                status:this.props.status
            })

        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onClick={this.activateEditMode}>{this.props.status||'-----'}</span>
                </div>}
                {this.state.editMode &&
                <div>
                    <input onChange={this.onInputChange} onBlur={this.deactivateEditMode} autoFocus value={this.state.status}/>
                </div>}
            </div>
        )
    }

}

export default ProfileStatus