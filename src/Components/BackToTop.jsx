// import React from 'react'

// function BackToTop() {
//     return (<>
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
//             <path fillRule="evenodd" d="M11.47 2.47a.75.75 0 011.06 0l3.75 3.75a.75.75 0 01-1.06 1.06l-2.47-2.47V21a.75.75 0 01-1.5 0V4.81L8.78 7.28a.75.75 0 01-1.06-1.06l3.75-3.75z" clipRule="evenodd" />
//         </svg>

//         import React from 'react';
// import { MDBBtn, MDBContainer, MDBIcon } from 'mdb-react-ui-kit';

// function App() {
//   let mybutton;

//   window.onscroll = function () {
//     mybutton = document.getElementById("btn-back-to-top");
//     scrollFunction(mybutton);
//   };

//   function scrollFunction(mybutton) {
//     if (
//       document.body.scrollTop > 20 ||
//       document.documentElement.scrollTop > 20
//     ) {
//       mybutton.style.display = "block";
//     } else {
//       mybutton.style.display = "none";
//     }
//   }

//   function backToTop() {
//     document.body.scrollTop = 0;
//     document.documentElement.scrollTop = 0;
//   }

//   return (
//     <MDBContainer fluid>

//       <MDBBtn
//         onClick={backToTop}
//         id='btn-back-to-top'
//         style={{
//           position: "fixed",
//           bottom: "20px",
//           right: "20px",
//           display: "none",
//         }}
//         className='btn-floating'
//         color='danger'
//         size='lg'>
//         <MDBIcon fas icon="arrow-up" />
//       </MDBBtn>


//       <div className="container mt-4 text-center" style={{height: '2000px'}}>
//         <p>
//           Start scrolling the page and a strong
//           <strong> "Back to top" button </strong> will appear in the
//           <strong> bottom right corner</strong> of the screen.
//         </p>

//         <p>
//           Click this button and you will be taken to the top of the page.
//         </p>
//       </div>

//     </MDBContainer>
//   );
// }

// export default App;
//     </>

//     )
// }

// export default BackToTop