import React, { useEffect, useState } from "react";
import SockJS from "sockjs-client";
import Stomp from "stompjs";

const WebSocketComponent = () => {
    const [negocios, setNegocios] = useState([]);

    useEffect(() => {
        const socket = new SockJS("http://localhost:8081/ws");
        const stompClient = Stomp.over(socket);

        stompClient.connect({}, (frame) => {
            console.log("Connected: " + frame);
            stompClient.subscribe("/topic/negocios", (message) => {
                const negocio = JSON.parse(message.body);
                setNegocios((prevNegocios) => [...prevNegocios, negocio]);
            });
        });

        return () => {
            if (stompClient) {
                stompClient.disconnect();
            }
        };
    }, []);

    return (
        <div>
            <h1>Negocios socket</h1>
            <ul>
                {negocios.map((negocio, index) => (
                    <li key={index}>{negocio.titulo}</li>
                ))}
            </ul>
        </div>
    );
};

export default WebSocketComponent;
