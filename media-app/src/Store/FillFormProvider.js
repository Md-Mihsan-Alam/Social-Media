import React, { createContext, useState } from 'react';
export const FillFormContext = createContext();

export const FillFormProvider = ({children}) =>{
    const [CollectDetail, setCollectDetails] = useState([]);

    const updateDetails = (title , details) => {
        setCollectDetails((prevPosts) => [...prevPosts, { title, details }]);
    };

    return(
        <FillFormContext.Provider value={{ CollectDetail, updateDetails }}>
        {children}
        </FillFormContext.Provider>
    );
};

export default FillFormProvider;

