// 단축키 rafce
import React from 'react'
import './App.scss';
import Login from './Components/Login'
import Logout from './Components/Logout'
import { useSelector } from 'react-redux';
import { selectUser } from './Features/UserSlice'

const App = () => {

    // 11. 유저의 로그인 / 로그아웃 상태에 따라 다른 컴포넌트를 꺼내 보여줌.
    
    const user = useSelector(selectUser);
    console.log(user);

    return (
        <div>
            {
                user
                ? <Logout />
                : <Login />
            }
        </div>
    )
}

export default App
