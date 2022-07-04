import axios from "axios";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from 'react-router';

export default function SignUp(){
    const [userSignUp, setUserSignUp] = useState({ name: "", email: "", password: "", confirmPassword: ""});
    const navigate = useNavigate();

    async function postRegister (e) {
        e.preventDefault();
        try {
            
            if(userSignUp.password === userSignUp.confirmPassword){
                const data = { name: userSignUp.name, email: userSignUp.email, password: userSignUp.password, confirmPassword: userSignUp.confirmPassword};
                console.log(data)
                await axios.post("https://back-mywallet77.herokuapp.com/sign-up", data);
                    navigate("/");
            } else {
                alert("As senhas não são iguais! Tente novamente.");
                setUserSignUp({ name:"", email: "", password: "", confirmPassword:""});
            }
        } catch (e) {
            alert(e.response.data);
            setUserSignUp({ name:"", email: "", password: "", confirmPassword:""});
        }
    } 

    function montarFormularioSignIn(){
        return (
            <>
                <input type="text" id="name" value={userSignUp.name} placeholder="Nome" required
                    onChange={(e) => setUserSignUp({ ...userSignUp, name: e.target.value })} />

                <input type="email" id="email" value={userSignUp.email} placeholder="E-mail" required
                    onChange={(e) => setUserSignUp({ ...userSignUp, email: e.target.value })} />

                <input type="password" id="password" value={userSignUp.password} placeholder="Senha" required
                    onChange={(e) => setUserSignUp({ ...userSignUp, password: e.target.value })} />

                <input type="password" id="confirmPassword" value={userSignUp.confirmPassword} placeholder="Confirme a senha" required
                    onChange={(e) => setUserSignUp({ ...userSignUp, confirmPassword: e.target.value })} />

                <div>
                    <Button type="submit">Cadastrar</Button>
                </div>
            </>
        )
    }

    const formularioSignIn = montarFormularioSignIn();

    return (
        <>
            <Main>
                <h1> MyWallet </h1>
            <FormularioCompra onSubmit={postRegister}>
                    {formularioSignIn}
            </FormularioCompra>
            <StyledLink to="/"> Já tem uma conta? Entre agora! </StyledLink>
            </Main>
        </>

    )
}


const FormularioCompra = styled.form`
    display: flex;
    flex-direction: column;
    width: 90%;
    
    input {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        color: #000000; 
        background: #FFFFFF;
        border-radius: 5px;
        margin-bottom: 5px;
    }
`;

const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin-top: 40%;
    height: 50vh;
    h1 {
        font-family: 'Saira Stencil One';
        font-style: normal;
        font-weight: 400;
        font-size: 32px;
        line-height: 50px;
        color: #FFFFFF; 
    }
` ;

const StyledLink = styled(Link)`
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;
        color: #FFFFFF;
        text-decoration: none;
`;

const Button = styled.button`
    background: #A328D6;
    border-radius: 5px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    color: #FFFFFF;
    width: 100%;
    cursor: pointer;
`;