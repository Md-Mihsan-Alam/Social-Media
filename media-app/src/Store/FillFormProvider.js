import React, { createContext, useState, useReducer } from 'react';
export const FillFormContext = createContext();

// export const FillFormProvider = ({children}) =>{
    
    // const [CollectDetail, setCollectDetails] = useState([]);

    // const updateDetails = (title , details) => {
    //     setCollectDetails((prevPosts) => [...prevPosts, { title, details }]);
    // };


     // UseReducer------------------

    const initialState = {
        CollectDetail: [],
    };
    
    // Define the reducer function
    const formReducer = (state, action) => {
        switch (action.type) {
            case 'UpdateBoth':
                return {
                    ...state,
                    CollectDetail: [...state.CollectDetail, { title: action.title, details: action.details }],
                };
            default:
                return state;
        }
    };
    
    // Create the provider component
    export const FillFormProvider = ({ children }) => {
        const [state, dispatch] = useReducer(formReducer, initialState);
    
        // Dispatch function to update details
        const updateDetails = (title, details) => {
            dispatch({
                type: 'UpdateBoth',
                title,
                details,
            });
        };

    return(
        <FillFormContext.Provider value={{ CollectDetail: state.CollectDetail, updateDetails }}> 
        {children}
        </FillFormContext.Provider>
    );
};

export default FillFormProvider;

//  { CollectDetail, updateDetails }