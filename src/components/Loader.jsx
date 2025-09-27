import React from 'react';

const Loader = () => {
    return (
        <div className="w-full h-screen gap-x-2 flex justify-center items-center">
            <div className="w-5 bg-brand animate-pulse h-5 rounded-full animate-bounce" />
            <div className="w-5 animate-pulse h-5 bg-brand-dark rounded-full animate-bounce" />
            <div className="w-5 h-5 animate-pulse bg-dark-gray rounded-full animate-bounce" />
        </div>
    );
}

export default Loader;
