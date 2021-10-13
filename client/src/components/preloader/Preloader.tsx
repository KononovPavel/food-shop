import React from 'react';
import loading from '../../assets/pleloader.gif'
const Preloader = () => {
    return (
        <React.Fragment>
            <img src={loading} alt="" width={300} height={300}/>
            <div style={{textAlign:"center"}}>Loading</div>
        </React.Fragment>
    );
};

export default Preloader;
