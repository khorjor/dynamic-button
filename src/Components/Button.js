import React, { Component } from 'react';

// export default class MyComponent extends Component {
//     render() {
//       return (
//         <div className="myContainer">
//           <AutoScale maxWidth={800} maxHeight={400} maxScale={3}>
//           <div className="buttons">
//             {
//                 button.map((cat, i)=>{
//                     return <button type="button" onClick={()=> filter(cat)} className="btn">{cat}</button>
//                 })
//             }
//             </div>
//             <div className="myContent">Example</div>
//           </AutoScale>
//         </div>
//       )
//     }
// }

function Button({button, filter}) {
    return (
        <div className="buttons">
            {
                button.map((cat, i)=>{
                    return <button type="button" onClick={()=> filter(cat)} className="btn">{cat}</button>
                })
            }
        </div>
    )
}

export default Button;
