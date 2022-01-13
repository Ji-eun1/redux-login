import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../Features/UserSlice';
import './Login.scss';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { styled } from '@material-ui/core/styles';

const Login = () => {

    // Styled components API
    const MyButton = styled(Button)({
        background: 'linear-gradient(45deg, #363bd7 30%, #f56544 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        width: 300,
        height: 48,
        padding: '0 30px',
    });

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

    // 닉네임 입력 & 닉네임 validation
    const onChangeName = (e) => {
        setName(e.target.value);
    }
    const nameValidation = () => {  
        let check = /^([a-zA-Z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣]).{1,16}$/ // 닉네임 ( 특수문자도 허용되는데 특수문자 제외해야함 )
        console.log(check.test(name));
        return !(check.test(name));
    }

    // 이메일 입력 & 이메일 validation
    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    }
    const emailValidation = () => {
        let check = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+.{1,80}$/; // 아마도 맞는듯?
        return !(check.test(email));
    }

    // 패스워드 입력 & 패스워드 validation
    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }
    const passValidation = () => {
        let check = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{9,16}$/; // 9 ~ 16자 영문, 숫자 조합
        return check.test(password);
    }

    return (
        <div className="login">
            <form className="login_form" onSubmit={ e => onSubmit(e) }>
                <h1>Login Here</h1>

                {/* 이름 */}
                <TextField 
                    label="닉네임" 
                    type="text" 
                    name="validation" 
                    variant="outlined"
                    value={ name } 
                    onChange={ onChangeName } 
                    required
                    error={ nameValidation() }  // true --> 빨간불 & false --> 파란불
                    helperText={ nameValidation() ? "특수기호는 입력 하실 수 없습니다." : "" } 
                />

                {/* 이메일 */}
                <TextField 
                    label="이메일" 
                    type="text" 
                    name="validation" 
                    variant="outlined" 
                    value={ email } 
                    onChange={ onChangeEmail } 
                    required
                    error={ emailValidation() } 
                    helperText={ emailValidation() ? "특수기호나 한글은 입력 하실 수 없습니다.":"" } 
                />

                {/* 패스워드 */}
                <TextField 
                    label="패스워드" 
                    type="text" 
                    name="validation" 
                    variant="outlined" 
                    value={ password } 
                    onChange={ onChangePassword } 
                    required
                    error={ passValidation() } 
                    helperText={ passValidation() ? "특수기호나 한글은 입력 하실 수 없습니다.":"" } 
                />

                {/* <input type="name" placeholder="name" value={ name } onChange={ nameChange }/> */}
                {/* <input type="email" placeholder="email" value={ email } onChange={ emailChange }/> */}
                {/* <input type="password" placeholder="password" value={ password } onChange={ passChange }/> */}

                <MyButton 
                    type="submit" 
                    className="submit_btn"
                    variant="contained"
                >
                    Submit
                </MyButton>
            </form>
        </div>
    )
}

export default Login
