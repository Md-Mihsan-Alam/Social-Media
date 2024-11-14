import React, { createContext, useState } from 'react';
export const FillFormContext = createContext();

export const FillFormProvider = ({children}) =>{
    const [CollectDetail, setCollectDetails] = useState({title:'' , details:''});

    const updateDetails = (newtitle , newdetails) => {
        setCollectDetails({title:newtitle, details:newdetails});
    };

    return(
        <FillFormContext.Provider value={{ CollectDetail, updateDetails }}>
        {children}
        </FillFormContext.Provider>
    );
};

export default FillFormProvider;

