// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const Registration = () => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     day: "",
//     month: "",
//     year: "",
//     username: "",
//     gender: "",
//     email: "",
//     phone: "",
//     password: "",
//     confirmPassword: "",
//     parentPhone: "",
//     emergencyPhone: "",
//     country: "India",
//     state: "Maharashtra",
//     city: "Mumbai",
//     pincode: "400001",
//     role: ""
//   });
//   const [error, setError] = useState("");
//   const [countries, setCountries] = useState([]);
//   const [states, setStates] = useState([]);
//   const [cities, setCities] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetch("https://api.example.com/countries")
//       .then(response => response.json())
//       .then(data => setCountries(data));
//   }, []);

//   useEffect(() => {
//     if (formData.country) {
//       fetch(`https://api.example.com/states?country=${formData.country}`)
//         .then(response => response.json())
//         .then(data => setStates(data));
//     }
//   }, [formData.country]);

//   useEffect(() => {
//     if (formData.state) {
//       fetch(`https://api.example.com/cities?state=${formData.state}`)
//         .then(response => response.json())
//         .then(data => setCities(data));
//     }
//   }, [formData.state]);

//   const validateEmail = (email: string) => {
//     return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const { fullName, day, month, year, username, email, phone, password, confirmPassword, country, state, city, pincode, role } = formData;

//     if (!fullName || !day || !month || !year || !username || !email || !phone || !password || !confirmPassword || !country || !state || !city || !pincode || !role) {
//       setError("All fields are required.");
//       return;
//     }
//     if (!validateEmail(email)) {
//       setError("Invalid email format.");
//       return;
//     }
//     if (password.length < 6) {
//       setError("Password must be at least 6 characters long.");
//       return;
//     }
//     if (password !== confirmPassword) {
//       setError("Passwords do not match.");
//       return;
//     }
//     setError("");
//     console.log("Registration Data", formData);
    
//     if (role === "Player") {
//       navigate("/playerReg");
//     } else if (role === "Coach") {
//       navigate("/coachReg");
//     } else {
//       navigate("/defaultDashboard");
//     }
//   };

//   return (
//     <div className="h-screen bg-no-repeat bg-cover flex justify-center items-center" style={{ backgroundImage: `url(/assets/registerback.jpeg)` }}>
//       <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl">
//         <h2 className="text-2xl font-bold text-center mb-4">Registration</h2>
//         {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
//         <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <input type="text" name="fullName" placeholder="Full Name" onChange={handleChange} className="p-2 border rounded" />
//           <input type="tel" name="phone" placeholder="Phone No." onChange={handleChange} className="p-2 border rounded" />
//           <input type="text" name="username" placeholder="Username" onChange={handleChange} className="p-2 border rounded" />
//           <input type="tel" name="parentPhone" placeholder="Parent Phone" onChange={handleChange} className="p-2 border rounded" />
//           <input type="email" name="email" placeholder="Email" onChange={handleChange} className="p-2 border rounded" />
//           <input type="tel" name="emergencyPhone" placeholder="Emergency Phone" onChange={handleChange} className="p-2 border rounded" />
//           <input type="password" name="password" placeholder="Password" onChange={handleChange} className="p-2 border rounded" />
//           <select name="country" onChange={handleChange} className="p-2 border rounded">
//             {countries.length ? countries.map(c => <option key={c} value={c}>{c}</option>) : <option>India</option>}
//           </select> 
//           <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} className="p-2 border rounded" />
//           <select name="state" onChange={handleChange} className="p-2 border rounded">
//             {states.length ? states.map(s => <option key={s} value={s}>{s}</option>) : <option>Maharashtra</option>}
//           </select>
//           <div className="flex gap-2">
//             <div>Date of Birth: </div>
//             <input type="number" name="day" placeholder="DD" onChange={handleChange} className="p-2 border rounded w-1/3" />
//             <input type="number" name="month" placeholder="MM" onChange={handleChange} className="p-2 border rounded w-1/3" />
//             <input type="number" name="year" placeholder="YYYY" onChange={handleChange} className="p-2 border rounded w-1/3" />
//           </div>
//           <select name="city" onChange={handleChange} className="p-2 border rounded">
//             {cities.length ? cities.map(c => <option key={c} value={c}>{c}</option>) : <option>Mumbai</option>}
//           </select>
//           <div className="flex gap-4">
//             <div>Gender: </div>
//             <label><input type="radio" name="gender" value="Male" onChange={handleChange} /> Male</label>
//             <label><input type="radio" name="gender" value="Female" onChange={handleChange} /> Female</label>
//             <label><input type="radio" name="gender" value="Other" onChange={handleChange} /> Other</label>
//           </div>
//           <input type="text" name="pincode" placeholder="Pincode" onChange={handleChange} className="p-2 border rounded" />
//           <select name="role" onChange={handleChange} className="p-2 border rounded">
//             <option value="">Select Role</option>
//             <option value="Player">Player</option>
//             <option value="Coach">Coach</option>
//             <option value="Admin">Admin</option>
//           </select>
//           <button type="submit" className="col-span-2 bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Next</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Registration;


// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const getRoleId = (role: string): number => {
//   switch (role) {
//     case "Player":
//       return 3;
//     case "Coach":
//       return 2;
//     case "Admin":
//       return 1;
//     default:
//       return 0;
//   }
// };

// const Registration = () => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     day: "",
//     month: "",
//     year: "",
//     username: "",
//     gender: "",
//     email: "",
//     phone: "",
//     password: "",
//     confirmPassword: "",
//     parentPhone: "",
//     emergencyPhone: "",
//     country: "India",
//     state: "Maharashtra",
//     city: "Mumbai",
//     pincode: "400001",
//     role: ""
//   });

//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const validateEmail = (email: string) =>
//     /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     const {
//       fullName,
//       day,
//       month,
//       year,
//       username,
//       email,
//       phone,
//       emergencyPhone,
//       password,
//       confirmPassword,
//       country,
//       state,
//       city,
//       pincode,
//       gender,
//       role
//     } = formData;

//     if (
//       !fullName ||
//       !day ||
//       !month ||
//       !year ||
//       !username ||
//       !email ||
//       !phone ||
//       !password ||
//       !confirmPassword ||
//       !country ||
//       !state ||
//       !city ||
//       !pincode ||
//       !role
//     ) {
//       setError("All fields are required.");
//       return;
//     }

    

//     if (!validateEmail(email)) {
//       setError("Invalid email format.");
//       return;
//     }

//     if (password.length < 6) {
//       setError("Password must be at least 6 characters long.");
//       return;
//     }

//     if (password !== confirmPassword) {
//       setError("Passwords do not match.");
//       return;
//     }

//     setError("");

//     const nameParts = fullName.split(" ");
//     const firstName = nameParts[0];
//     const middleName = nameParts.length === 3 ? nameParts[1] : "";
//     const lastName = nameParts.length >= 2 ? nameParts[nameParts.length - 1] : "";

//     const dob = `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
//     const countryCode = "+91";

//     const userPayload = {
//       username,
//       email,
//       password,
//       first_name: firstName,
//       middle_name: middleName,
//       last_name: lastName,
//       phone,
//       emergency_contact_no: emergencyPhone,
//       dob,
//       gender,
//       country: 1, // Assuming India = 1
//       state: 1,   // Maharashtra = 1
//       city: 1,    // Mumbai = 1
//       pincode,
//       country_code: countryCode,
//       role: getRoleId(role),
//       status: "Active"
//     };

//     try {
//       const res = await fetch("http://localhost:8000/api/cricket/users/", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify(userPayload)
//       });

//       if (!res.ok) {
//         const errorData = await res.json();
//         console.error("Error:", errorData);
//         setError("Registration failed. Please check your details.");
//         return;
//       }

//       const data = await res.json();
//       console.log("Registered user:", data);
//       navigate("/next-page"); // Change this route as needed
//     } catch (err) {
//       console.error("Network error:", err);
//       setError("Something went wrong. Please try again.");
//     }
//   };

//   return (
//     <div
//       className="h-screen bg-no-repeat bg-cover flex justify-center items-center"
//       style={{ backgroundImage: `url(/assets/registerback.jpeg)` }}
//     >
//       <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl">
//         <h2 className="text-2xl font-bold text-center mb-4">Registration</h2>
//         {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
//         <form
//           onSubmit={handleSubmit}
//           className="grid grid-cols-1 md:grid-cols-2 gap-4"
//         >
//           <input type="text" name="fullName" placeholder="Full Name" onChange={handleChange} className="p-2 border rounded" />
//           <input type="tel" name="phone" placeholder="Phone No." onChange={handleChange} className="p-2 border rounded" />
//           <input type="text" name="username" placeholder="Username" onChange={handleChange} className="p-2 border rounded" />
//           <input type="tel" name="parentPhone" placeholder="Parent Phone" onChange={handleChange} className="p-2 border rounded" />
//           <input type="tel" name="emergencyPhone" placeholder="Emergency Contact No." onChange={handleChange} className="p-2 border rounded" />
//           <input type="email" name="email" placeholder="Email" onChange={handleChange} className="p-2 border rounded" />
//           <input type="password" name="password" placeholder="Password" onChange={handleChange} className="p-2 border rounded" />
//           <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} className="p-2 border rounded" />
//           <div className="flex gap-2">
//             <input type="number" name="day" placeholder="DD" onChange={handleChange} className="p-2 border rounded w-1/3" />
//             <input type="number" name="month" placeholder="MM" onChange={handleChange} className="p-2 border rounded w-1/3" />
//             <input type="number" name="year" placeholder="YYYY" onChange={handleChange} className="p-2 border rounded w-1/3" />
//           </div>
//           <div className="flex gap-4 items-center">
//             <span>Gender:</span>
//             <label><input type="radio" name="gender" value="Male" onChange={handleChange} /> Male</label>
//             <label><input type="radio" name="gender" value="Female" onChange={handleChange} /> Female</label>
//             <label><input type="radio" name="gender" value="Other" onChange={handleChange} /> Other</label>
//           </div>
//           <input type="text" name="country" placeholder="Country" onChange={handleChange} value={formData.country} className="p-2 border rounded" />
//           <input type="text" name="state" placeholder="State" onChange={handleChange} value={formData.state} className="p-2 border rounded" />
//           <input type="text" name="city" placeholder="City" onChange={handleChange} value={formData.city} className="p-2 border rounded" />
//           <input type="text" name="pincode" placeholder="Pincode" onChange={handleChange} className="p-2 border rounded" />
//           <select name="role" onChange={handleChange} className="p-2 border rounded">
//             <option value="">Select Role</option>
//             <option value="Player">Player</option>
//             <option value="Coach">Coach</option>
//             <option value="Admin">Admin</option>
//           </select>
//           <button type="submit" className="col-span-2 bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Next</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Registration;


import { useState } from "react";
import { useNavigate } from "react-router-dom";

const getRoleId = (role: string): number => {
  switch (role) {
    case "Player":
      return 3;
    case "Coach":
      return 2;
    case "Admin":
      return 1;
    default:
      return 0;
  }
};

const Registration = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    day: "",
    month: "",
    year: "",
    username: "",
    gender: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    parentPhone: "",
    emergencyPhone: "",
    country: "India",
    state: "Maharashtra",
    city: "Mumbai",
    pincode: "400001",
    role: ""
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email: string) =>
    /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const {
      fullName,
      day,
      month,
      year,
      username,
      email,
      phone,
      emergencyPhone,
      password,
      confirmPassword,
      country,
      state,
      city,
      pincode,
      gender,
      role
    } = formData;

    if (
      !fullName ||
      !day ||
      !month ||
      !year ||
      !username ||
      !email ||
      !phone ||
      !password ||
      !confirmPassword ||
      !country ||
      !state ||
      !city ||
      !pincode ||
      !role
    ) {
      setError("All fields are required.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Invalid email format.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError("");

    const nameParts = fullName.split(" ");
    const firstName = nameParts[0];
    const middleName = nameParts.length === 3 ? nameParts[1] : "";
    const lastName = nameParts.length >= 2 ? nameParts[nameParts.length - 1] : "";

    const dob = `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    const countryCode = "+91";

    const userPayload = {
      username,
      email,
      password,
      first_name: firstName,
      middle_name: middleName,
      last_name: lastName,
      phone,
      emergency_contact_no: emergencyPhone,
      dob,
      gender,
      country: 1,
      state: 1,
      city: 1,
      pincode,
      country_code: countryCode,
      role: getRoleId(role),
      status: "Active"
    };

    try {
      const res = await fetch("http://localhost:8000/api/cricket/users/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userPayload)
      });

      if (!res.ok) {
        const errorData = await res.json();
        console.error("Server validation error:", errorData); // ← View full reason
        setError("Registration failed: " + JSON.stringify(errorData));
        return;
      }
      

      const data = await res.json();
      console.log("Registered user:", data);
      localStorage.setItem("user_id", data.id);
      // If role is Player, go to player registration
      if (role === "Player") {
        navigate("/playerReg", { state: { id: data.id } });
      }
      // If role is Coach, go to coach registration
      else if (role === "Coach") {
        navigate("/coachReg", { state: { id: data.id } });
      }
      // Else, fallback or admin
      else {
        navigate("/next-page"); // or wherever you want admin to go
      }
      
    } catch (err) {
      console.error("Network error:", err);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div
      className="h-screen bg-no-repeat bg-cover flex justify-center items-center"
      style={{ backgroundImage: `url(/assets/registerback.jpeg)` }}
    >
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl">
        <h2 className="text-2xl font-bold text-center mb-4">Registration</h2>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <input type="text" name="fullName" placeholder="Full Name" onChange={handleChange} className="p-2 border rounded" />
          <input type="tel" name="phone" placeholder="Phone No." onChange={handleChange} className="p-2 border rounded" />
          <input type="text" name="username" placeholder="Username" onChange={handleChange} className="p-2 border rounded" />
          <input type="tel" name="parentPhone" placeholder="Parent Phone" onChange={handleChange} className="p-2 border rounded" />
          <input type="tel" name="emergencyPhone" placeholder="Emergency Contact No." onChange={handleChange} className="p-2 border rounded" />
          <input type="email" name="email" placeholder="Email" onChange={handleChange} className="p-2 border rounded" />
          <input type="password" name="password" placeholder="Password" onChange={handleChange} className="p-2 border rounded" />
          <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} className="p-2 border rounded" />
          <div className="flex gap-2">
            <input type="number" name="day" placeholder="DD" onChange={handleChange} className="p-2 border rounded w-1/3" />
            <input type="number" name="month" placeholder="MM" onChange={handleChange} className="p-2 border rounded w-1/3" />
            <input type="number" name="year" placeholder="YYYY" onChange={handleChange} className="p-2 border rounded w-1/3" />
          </div>
          <div className="flex gap-4 items-center">
            <span>Gender:</span>
            <label><input type="radio" name="gender" value="Male" onChange={handleChange} /> Male</label>
            <label><input type="radio" name="gender" value="Female" onChange={handleChange} /> Female</label>
            <label><input type="radio" name="gender" value="Other" onChange={handleChange} /> Other</label>
          </div>
          <input type="text" name="country" placeholder="Country" onChange={handleChange} value={formData.country} className="p-2 border rounded" />
          <input type="text" name="state" placeholder="State" onChange={handleChange} value={formData.state} className="p-2 border rounded" />
          <input type="text" name="city" placeholder="City" onChange={handleChange} value={formData.city} className="p-2 border rounded" />
          <input type="text" name="pincode" placeholder="Pincode" onChange={handleChange} className="p-2 border rounded" />
          <select name="role" onChange={handleChange} className="p-2 border rounded">
            <option value="">Select Role</option>
            <option value="Player">Player</option>
            <option value="Coach">Coach</option>
            <option value="Admin">Admin</option>
          </select>
          <button type="submit" className="col-span-2 bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Next</button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
