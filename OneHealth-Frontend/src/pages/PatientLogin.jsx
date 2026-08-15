import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    Eye,
    EyeOff,
    Mail,
    LockKeyhole,
    ArrowRight,
} from "lucide-react";

export default function PatientLogin() {
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Patient Login:", formData);

        // Temporary navigation
        navigate("/patient");
    };

    return (
        <div className="w-full bg-white px-7 py-9 sm:px-10">

            {/* Heading */}

            <div className="text-center">

                <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
                    Welcome back
                </h1>

            </div>


            {/* Login Form */}

            <form
                onSubmit={handleSubmit}
                className="mt-8 space-y-5"
            >

                {/* Email / Phone */}

                <div>

                    <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-slate-700"
                    >
                        Email or phone number
                    </label>

                    <div className="relative">

                        <Mail
                            size={18}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                        />

                        <input
                            id="email"
                            name="email"
                            type="text"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter email or phone number"
                            required
                            className="
                                h-12
                                w-full
                                rounded-lg
                                border
                                border-slate-200
                                bg-white
                                pl-11
                                pr-4
                                text-sm
                                text-slate-900
                                outline-none
                                transition
                                placeholder:text-slate-400
                                focus:border-blue-500
                                focus:ring-2
                                focus:ring-blue-500/10
                            "
                        />

                    </div>

                </div>


                {/* Password */}

                <div>

                    <div className="mb-2 flex items-center justify-between">

                        <label
                            htmlFor="password"
                            className="text-sm font-medium text-slate-700"
                        >
                            Password
                        </label>

                        <Link
                            to="/patient/forgot-password"
                            className="text-xs font-medium text-black-600 hover:text-blue-900"
                        >
                            Forgot password?
                        </Link>

                    </div>

                    <div className="relative">

                        <LockKeyhole
                            size={18}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                        />

                        <input
                            id="password"
                            name="password"
                            type={showPassword ? "text" : "password"}
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter your password"
                            required
                            className="
                                h-12
                                w-full
                                rounded-lg
                                border
                                border-slate-200
                                bg-white
                                pl-11
                                pr-11
                                text-sm
                                text-slate-900
                                outline-none
                                transition
                                placeholder:text-slate-400
                                focus:border-blue-500
                                focus:ring-2
                                focus:ring-blue-500/10
                            "
                        />

                        <button
                            type="button"
                            onClick={() =>
                                setShowPassword(!showPassword)
                            }
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
                        >
                            {showPassword ? (
                                <EyeOff size={18} />
                            ) : (
                                <Eye size={18} />
                            )}
                        </button>

                    </div>

                </div>


                {/* Login Button */}

                <button
                    type="submit"
                    className="
        group
        flex
        h-12
        w-full
        items-center
        justify-center
        gap-2
        rounded-lg
        bg-black
        text-sm
        font-semibold
        text-white
        transition
        hover:bg-slate-800
    "
                >
                    Login

                    <ArrowRight
                        size={17}
                        className="transition-transform group-hover:translate-x-1"
                    />

                </button>

            </form>


            {/* OR */}

            <div className="my-7 flex items-center gap-4">

                <div className="h-px flex-1 bg-slate-200" />

                <span className="text-xs text-slate-400">
                    or continue with
                </span>

                <div className="h-px flex-1 bg-slate-200" />

            </div>


            {/* Google Login */}

            <button
                type="button"
                className="
                    flex
                    h-12
                    w-full
                    items-center
                    justify-center
                    gap-3
                    rounded-lg
                    border
                    border-slate-200
                    bg-white
                    text-sm
                    font-medium
                    text-slate-700
                    transition
                    hover:bg-slate-50
                "
            >

                {/* Google Logo */}

                <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                >
                    <path
                        fill="#4285F4"
                        d="M21.35 12.27c0-.68-.06-1.34-.17-1.97H12v3.73h5.23a4.47 4.47 0 0 1-1.94 2.93v2.44h3.14c1.84-1.69 2.92-4.18 2.92-7.13Z"
                    />

                    <path
                        fill="#34A853"
                        d="M12 21.8c2.63 0 4.84-.87 6.45-2.4l-3.14-2.44c-.87.58-1.98.92-3.31.92-2.54 0-4.7-1.72-5.47-4.03H3.28v2.52A9.74 9.74 0 0 0 12 21.8Z"
                    />

                    <path
                        fill="#FBBC05"
                        d="M6.53 13.85A5.86 5.86 0 0 1 6.22 12c0-.64.11-1.27.31-1.85V7.63H3.28A9.75 9.75 0 0 0 2.25 12c0 1.57.38 3.05 1.03 4.37l3.25-2.52Z"
                    />

                    <path
                        fill="#EA4335"
                        d="M12 6.12c1.43 0 2.71.49 3.72 1.45l2.79-2.79C16.83 3.18 14.63 2.2 12 2.2a9.74 9.74 0 0 0-8.72 5.43l3.25 2.52C7.3 7.84 9.46 6.12 12 6.12Z"
                    />
                </svg>

                Sign in with Google

            </button>


            {/* Register */}

            <p className="mt-7 text-center text-sm text-slate-500">

                Not a member?{" "}

                <Link
                    to="/patient/register"
                    className="font-semibold text-black hover:text-slate-700"
                >
                    Register now
                </Link>

            </p>

        </div>
    );
}