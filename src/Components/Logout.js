import './Logout.scss';
import { useDispatch, useSelector } from 'react-redux'
import { logout, selectUser } from '../Features/UserSlice';

const Logout = () => {

    const user = useSelector(selectUser);
    
    const dispatch = useDispatch();

    // 10. onClick 함수 생성 ( user 정보를 지움 )
    const onClick = (e) => {
        e.preventDefault();

        dispatch(
            logout(null)
        );
    }

    return (
        <div className="logout">
            <h1 class="welcome">
                Welcome
                <span className="user">{ user.name }</span>
            </h1>

            <button type="submit" className="logout_btn" onClick={ onClick }>Logout</button>
        </div>
    )
}

export default Logout
