// import React from 'react'
// import {Box,Typography} from '@material-ui/core'

// function TabePanle(props) {

//     const {children, value,index} = props
//     return (
//         <div>
//             {
//                 value === index &&(
//                     <Box p={3}>
//                     <Typography>{children}</Typography>
//                   </Box>
//                 )

//             }
//         </div>
//     )
// }

// export default TabePanle





// export default  function TabePanle(props) {
//     const { children, value, index, ...other } = props;
  
//     return (
//       <div
//         role="tabpanel"
//         hidden={value !== index}
//         id={`full-width-tabpanel-${index}`}
//         aria-labelledby={`full-width-tab-${index}`}
//         {...other}
//       >
//         {value === index && (
//           <Box>
//             <Typography>{children}</Typography>
//           </Box>
//         )}
//       </div>
//     );
//   }