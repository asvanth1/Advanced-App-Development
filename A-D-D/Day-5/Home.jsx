// import './Home.css'
// const Home = () => {
//   return (
//     <div>
//       <head>
  
//       </head>
//       <body>
//         <header id="nav-wrapper">
//           <nav id="nav">
//             <div className="nav left">
//               <span className="gradient skew">
//                 <h1 className="logo un-skew">
//                   <a href="#home"><img width='70px' src='data:image/jpeg;base64,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'></img></a>
//                 </h1>
//               </span>
//               <button id="menu" className="btn-nav">
//                 <span className="fas fa-bars"></span>
//               </button>
//             </div>
//             <div className="nav right">
//               <a href="#home" className="nav-link active">
//                 <span className="nav-link-span">
//                   <span className="u-nav">Home</span>
                 
//                 </span>
//               </a>
//               <a href="#about" className="nav-link">
//                 <span className="nav-link-span">
//                   <span className="u-nav">About</span>
//                 </span>
//               </a>
//               <a href="#work" className="nav-link">
//                 <span className="nav-link-span">
//                   <span className="u-nav">Work</span>
//                 </span>
//               </a>
//               <a href="#contact" className="nav-link">
//                 <span className="nav-link-span">
//                   <span className="u-nav">Contact</span>
//                 </span>
//               </a>
//             </div>
//           </nav>
//         </header>
//         <main>
//           <section id="home">
//             <br></br><br></br><br></br><br></br>
          
//           </section>
//           <section id="about"></section>
//           <section id="work"></section>
//           <section id="contact"></section>
//         </main>
//         <div>
//         </div>
//       </body>
//     </div>
//   );
// };

// export default Home;
