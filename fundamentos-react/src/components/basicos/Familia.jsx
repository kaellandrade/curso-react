import React from'react';
import MembroFamilia from './MembroFamilia';
export default props =>{
    return(
        <React.Fragment>
            <MembroFamilia nome="Micael" {...props}></MembroFamilia>
            <MembroFamilia nome="Ana" {...props}></MembroFamilia>
            <MembroFamilia nome="Manoel" {...props}></MembroFamilia>


        </React.Fragment>
    );
}