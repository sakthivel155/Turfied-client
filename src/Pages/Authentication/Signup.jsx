import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./form.css";

import img from "../../assets/signup_img.jpg";

const Signup = () => {
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
    const [confpassword, setConfpassword] =useState("")
   	 const navigate = useNavigate()

	function handleChange(input) {
		const name = input.target.name;
		const value = input.target.value;
		switch (name) {
			case "email":
				setEmail(value);
				break;
			case "username":
				setUsername(value);
				break;
			case "password":
				setPassword(value);
				break;
			case "confpassword":
				for(var i=0;i<password.length;i++){
					if (value[i] === password[i]) {
						setConfpassword("correct")
					}else{
						setConfpassword("incorrect")
						break
					}
				}if(password.length < value.length){ 
                        setConfpassword("incorrect")
				    }
				
		}
	}
	function handleSubmit(e) {
		e.preventDefault();
  if (confpassword === "correct" && email.includes("@")) {
		axios
			.post("http://localhost:5000/signup", { email, username, password })
			.then((data) => {
				console.log(data);
				axios.post("http://localhost:5000/login",{ msg : "Successfully Signup" })
				navigate("/login");
			})
			.catch((err) => console.log(err));
  } else {
		setConfpassword("Enter valid email and re-type password fields");
  }
		
	}
	function classNames(...classes) {
		return classes.filter(Boolean).join(" ");
	}
	return (
		<form onSubmit={handleSubmit}>
			<div
				className="h-[91.7vh] bg-cover bg-center flex items-center laptop:pl-48"
				style={{ backgroundImage: `url(${img})` }}>
				<div className=" flex flex-col item-center text-[#fff] w-[26rem] h-[30rem] py-8 rounded-xl  transparent-background">
					<div className="mb-5">
						<h1 className=" text-2xl font-semibold text-left px-8">
							Signup
						</h1>
					</div>
					<div className="flex flex-col justify-center items-center gap-4 px-8 mb-2">
						<input
							type="text"
							name="email"
							value={email}
							className="py-3.5 w-full rounded-sm pl-3 bg-gray-800 text-sm outline-none"
							placeholder="Email"
							onChange={handleChange}
						/>
						<input
							type="text"
							name="username"
							value={username}
							className="py-3.5 w-full rounded-sm pl-3 bg-gray-800 text-sm outline-none"
							placeholder="Username"
							onChange={handleChange}
						/>
						<input
							type="password"
							name="password"
							value={password}
							className="py-3.5 w-full rounded-sm pl-3 bg-gray-800 text-sm outline-none"
							placeholder="password"
							onChange={handleChange}
						/>
						<input
							type="password"
							name="confpassword"
							className="py-3.5 w-full rounded-sm pl-3 bg-gray-800 text-sm outline-none"
							placeholder="Confirm password"
							onChange={handleChange}
						/>
					</div>

					<div
						className={classNames(
							" absolute h-5 ml-10 mt-[300px] text-xs",
							confpassword === "correct"
								? "text-green-300"
								: "text-red-300"
						)}>
						{confpassword}
					</div>

					<div className="px-8">
						<button
							type="submit"
							className="bg-[#8ba889] hover:bg-white hover:text-black duration-200 w-full py-3 mt-7 text-black font-semibold rounded-sm">
							Sign up
						</button>
					</div>
					<div className="flex justify-between text-sm text-gray-400 mt-3 px-8">
						<Link
							to={"/login"}
							className="mb-6 cursor-pointer text-[1rem] ">
							Already have an account{" "}
							<span className=" text-white hover:underline">
								{" "}
								Login
							</span>
						</Link>

						<a href="#" className="hover:underline">
							Need help?
						</a>
					</div>
				</div>
			</div>
		</form>
	);
};

export default Signup;
