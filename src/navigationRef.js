import { createRef } from 'react';

let navigator;

export const navigationRef = createRef();

export const navigate = (routeName, params) => {
    navigationRef.current?.navigate(routeName, params);
};