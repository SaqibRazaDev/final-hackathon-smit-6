"use client"
import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';


import React from 'react'
import App from 'next/app';

const AdminLogin = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    let name = "admin";
    let pwd = "admin";

    const handleSubmit = (e) =>{
        if (username===name && password===pwd) {
            

        } else {
            print('error')
        }
    }

    return (
        <>

            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <br />
                <button type="submit">Login</button>
            
            </form>

            

        </>
    )
}

export default AdminLogin








// const AdminLogin = () => {
//   // State to manage input values
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   // State to manage error message
//   const [errorMessage, setErrorMessage] = useState('');

//   // Function to handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Check credentials (replace this with actual authentication logic)
//     if (username === 'yourUsername' && password === 'yourPassword') {
//       // If credentials are correct, navigate to the dashboard page
//       // (replace '/dashboard' with your actual dashboard page route)
//       window.location.href = '/dashboard';
//     } else {
//       // If credentials are incorrect, show an error message
//       setErrorMessage('Username or password is incorrect');
//     }
//   };

//   return (
//     <div>
//       <h1>Login Page</h1>
//   <form onSubmit={handleSubmit}>
//     <label>
//       Username:
//       <input
//         type="text"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//     </label>
//     <br />
//     <label>
//       Password:
//       <input
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//     </label>
//     <br />
//     <button type="submit">Login</button>
//   </form>
//       {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
//       <p>
//         Don't have an account?{' '}
//         <Link href="/signup">
//           <a>Sign up here</a>
//         </Link>
//       </p>
//     </div>
//   );
// };

// export default AdminLogin;
