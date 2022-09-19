import { useState } from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';

import * as UserActions from '../../actions/user';

import { Container, Checkbox } from "./styles";

interface SignupProps {
    setUsername: (name: string, persistantUser: boolean) => void
}

function Signup({ setUsername }: SignupProps){
    const [ inputName, setInputName ] = useState('')

    function handleSetNameInput(){
        const keepConnected = document.getElementById("keep-connected") as HTMLInputElement     
        setUsername(inputName, keepConnected.checked)
        setInputName('')
    }

    function handleChangeNameInput(name: string){
        if (/^[a-zA-Z\s]+$/.test(name) || name === ''){
            setInputName(name)
        }
    }

    return (
        <Container>
            <h1>Welcome to CodeLeap Network!</h1>
            <p>Please enter your username</p>
            <input
                type='text'
                placeholder='John Doe'
                pattern="^[a-zA-Z]+$"
                value={inputName}
                onChange={(e) => handleChangeNameInput(e.target.value)}
            />

            <div className='send'>
                <Checkbox>
                    <input type='checkbox' id='keep-connected' />
                    <label htmlFor='keep-connected'>Keep me connected</label>
                </Checkbox>
                <button disabled={inputName === ''} onClick={handleSetNameInput}>ENTER</button>
            </div>
        </Container>
    )
}

const mapDispatchToProps = (dispatch: Dispatch) => (
    bindActionCreators(UserActions, dispatch)
)

export default connect(null, mapDispatchToProps)(Signup)