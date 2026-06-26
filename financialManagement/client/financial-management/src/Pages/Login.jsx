import { useState } from 'react';
import styles from './Login.module.css';
import {Link} from 'react-router-dom';

import {useNavigate} from 'react-router-dom';
export const Login = () => {

    const navigate = useNavigate();

    const LoginAPI = (email, password) => {
        const body = {
            email: email,
            password: password
        };
    fetch('http://localhost:3000/user/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }).then((response) => response.json())
    .then((data) => {

        console.log(data);
        localStorage.setItem('token', data.token);
        navigate('/dashboard');
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    return (
        <div className={styles.divLoginTudo}>
            <div className={styles.imagemLogin}>
                <img src="/login.svg" alt="Imagem Login" />
            </div>
           <form onSubmit={(e) => {
                e.preventDefault();
                console.log(email, password);
                LoginAPI(email, password);
            }} className={styles.form}>
                <h1>Controle sua vida financeira</h1>
                <p>Digite seu login para gerenciar sua renda.</p>
                
                <input 
                    placeholder='Digite seu Email' 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input 
                    placeholder='Digite sua Senha' 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Entrar</button>
                <p className={styles.link}>
                    <Link to="/cadastro">Cadastre-se</Link>
                </p>
           </form>
        </div>
    )
}
