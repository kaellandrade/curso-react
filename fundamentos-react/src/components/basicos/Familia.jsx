import React, {cloneElement} from'react';
export default props =>{
    return(
        <React.Fragment>
            {
               React.Children.map(props.children, (child) => {
                    return cloneElement(child, props);
                })
            }
        </React.Fragment>
    );
}