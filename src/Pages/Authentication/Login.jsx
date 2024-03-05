import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./form.css";

import img from "../../assets/signup_img.jpg";

const Login = () => {
	const [useridentity, setUseridentity] = useState("");
	const [userpassword, setUserpassword] = useState("");
	const [status,setStatus]= useState('');
 
function handleChange(input){
const name = input.target.name;
const value = input.target.value;
     switch (name) {
			case "useridentity":
				setUseridentity(value);
				break;
			case "userpassword":
				setUserpassword(value);
				break;
	}}
function handleSubmit(e){
	e.preventDefault();

	axios
		.post("http://localhost:5000/login", {useridentity, userpassword })
		.then((json) => {
		    setStatus(json.data)
		})
		.catch((err) => console.log(err));
}
function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}
	
	return (
		<form onSubmit={handleSubmit}>
			<div
				className="h-[91.7vh] bg-cover bg-center flex items-center laptop:pl-48"
				style={{ backgroundImage: `url(${img})` }}>
				<div className=" flex flex-col item-center  text-[#fff] w-[26rem] h-[30rem] py-8 rounded-xl  transparent-background">
					<div className="mb-5">
						<h1 className=" text-2xl font-semibold text-left px-8 ">
							Login
						</h1>
					</div>

					<div className="flex flex-col justify-center items-center gap-10 px-8 mb-10 mt-5">
						<input
							type="text"
							name="useridentity"
							value={useridentity}
							className="py-3.5 w-full rounded-sm pl-3 bg-gray-800 text-sm outline-none"
							placeholder="Email or Username"
							onChange={handleChange}
						/>
						<input
							type="password"
							name="userpassword"
							value={userpassword}
							className="py-3.5 w-full rounded-sm pl-3 bg-gray-800 text-sm outline-none"
							placeholder="password"
							onChange={handleChange}
						/>

						<button
							type="submit"
							className="bg-[#8ba889] hover:bg-white hover:text-black duration-200 w-full py-3  text-black font-semibold rounded-sm">
							Login
						</button>
					</div>

                 {/* status bar */}
					<div className=" absolute h-5 ml-11 mt-[130px] text-xs text-red-300">
						{status === "No record existed" ? status : ""}
					</div>
					<div
						className={classNames(
							" absolute h-5 ml-11 mt-[218px] text-xs",
							status === "Login successfully"
								? "text-green-300"
								: "text-red-300"
						)}>
						{!(status === "No record existed") ? status : ""}
					</div>
                 {/* ------------------ */}


					<div className="flex justify-between text-sm text-gray-400 mt-3 px-8">
						<span className="flex flex-row space-x-1 mb-10 ">
							<input type="checkbox" className="cursor-pointer" />
							<p>Remember me</p>
						</span>
						<a href="help" className="hover:underline">
							Need help?
						</a>
					</div>

					<div className="flex flex-col px-8 mb-4 w-[270px]">
						<Link to={"/signup"}>
							<p className="text-[1rem] text-gray-400">
								New to Turfied?{" "}
								<span className="text-[1rem] text-white hover:underline cursor-pointer">
									Sign up now
								</span>
							</p>
						</Link>
					</div>
				</div>
			</div>
		</form>
	);
};

export default Login;
