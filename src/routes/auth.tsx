import { RouteObject } from "react-router-dom";

import AuthPage from '../pages/auth/AuthPage.tsx';
import LoginForm from "../pages/auth/components/LoginForm.tsx";
import RegisterForm from "../pages/auth/components/RegisterForm.tsx";

const auth: RouteObject[] = [
  {
    path: 'auth',
    element: <AuthPage/>,
    children: [
      {
        path: 'login',
        element: <LoginForm/>,
      },
      {
        path: 'register',
        element: <RegisterForm/>,
      }
    ]
  }
];

export default auth;
