/* eslint-disable react/prop-types */
import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const DataContext = createContext();

const DataProvider = ({children}) => {
    const [data, setData] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        axios("data.json").then((res) => setData(res.data));
    }, []);

    return (
        <DataContext.Provider value={{ data, cart, setCart }}>
            {children}
        </DataContext.Provider>
    );
};


export default DataProvider;
