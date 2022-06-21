import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { api } from "../../utils/api";

import MainScreen from "../Layout/MainScreen";
import { getContext } from "../../hooks/ContextAPI";
import ButtonFollow from "../Layout/UserPage/ButtonFollow";

export default function UserPage() {
    const [user, setUser] = useState({
        name: "",
        image: "",
    });
    const { userId } = useParams();
    const route = `/user/${userId}`;
    const { header, refresh } = getContext();

    useEffect(() => {
        api.get(`${route}?posts=false`, header)
            .then((res) => {
                setUser({ name: res.data.name, image: res.data.image });
            })
            .catch();
    }, [refresh]);

    return (
        <MainScreen route={route}>
            <TitleContainer className="title">
                <article>
                    <img src={user.image} alt="" />
                    <h1>{user.name}'s posts</h1>
                </article>
                <ButtonFollow />
            </TitleContainer>
        </MainScreen>
    );
}

const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-block: 0.8rem;
    padding-right: 0.8rem;

    @media (max-width: 500px) {
        flex-direction: column;
        align-items: flex-start;
        padding-left: 0.8rem;
    }

    &>article{
        display: flex;
        flex-direction: row;
        align-items: center;

        img {
            width: 50px;
            height: 50px;
            margin-right: 12px;
            object-fit: cover;
            object-position: center;
            background-repeat: no-repeat;
            border-radius: 50%;
        }

        h1 {
            font-family: var(--font-logo-login-secundary);
            font-size: 1.8rem;
        } 
    }
`;
