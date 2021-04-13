import React from 'react';
import socketio from "socket.io-client";

const ENDPOINT = "http://159.89.13.198:4001";

export const socket = socketio.connect(ENDPOINT);
export const SocketContext = React.createContext();
