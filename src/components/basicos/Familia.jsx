import React , { cloneElement} from "react";
const Familia = props => {

    return (
        <div>
            {React.Children.map(props.Children, (child, i) =>{
                return cloneElement(child, {...props, kei:i})
            })}
        </div>

    )
}

export default Familia;