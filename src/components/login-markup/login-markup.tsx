import { Link } from 'react-router-dom';

export default function LoginMarkup() {
  //Нужно получить авторизацию, если авторизован, получить данные пользователя
  // if () {
  //   return (
  //     <ul className="user-block">
  //             <li className="user-block__item">
  //               <div className="user-block__avatar">
  //                 <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
  //               </div>
  //             </li>
  //             <li className="user-block__item">
  //               <a className="user-block__link">Sign out</a>
  //             </li>
  //           </ul>
  //   );
  // }

  return (
    <div className="user-block">
      <Link to='/login' className="user-block__link">Sign in</Link>
    </div>
  );
}
