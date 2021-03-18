import React from 'react';

// function Demo1() {

//     return (

//         <div>
//             <h1>Hello From function Component</h1>
//         </div>
//     );
// }

const Demo1 = (props) => {
    return (
        <div>
            <h1>Hello From function Component</h1>
            <h2>{props.Title}</h2>
        </div>
    );

}

// const Demo1 = () => (
//     <div>
//         <h1>Hello From function Component</h1>

//     </div>
// );
export default Demo1;