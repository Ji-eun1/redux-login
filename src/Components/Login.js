import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../Features/UserSlice';
import './Login.scss';

const Login = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // 8. dispatch 생성
    const dispatch = useDispatch();

    // 9. onSubmit 함수 작성 ( dispatch를 통해 유저의 name / email / password / loggidIn 정보를 store로 전송 )
    const onSubmit = (e) => {
        e.preventDefault();

        dispatch(
            login({
                name: name,
                email: email,
                password: password,
                loggedIn: true,
            })
        );
    }
    const nameChange = (e) => {
        setName(e.target.value);
    }
    const emailChange = (e) => {
        setEmail(e.target.value);
    }
    const passChange = (e) => {
        setPassword(e.target.value);
    }

    return (
        <div className="login">
            <form className="login_form" onSubmit={ e => onSubmit(e) }>
                <h1>Login Here</h1>

                <input type="name" placeholder="name" value={ name } onChange={ nameChange }/>
                <input type="email" placeholder="email" value={ email } onChange={ emailChange }/>
                <input type="password" placeholder="password" value={ password } onChange={ passChange }/>

                <button type="submit" className="submit_btn">Submit</button>
            </form>
        </div>
    )
}

export default Login
