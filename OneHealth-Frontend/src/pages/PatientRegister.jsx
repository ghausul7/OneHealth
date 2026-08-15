import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
    Eye,
    EyeOff,
    User,
    Mail,
    Phone,
    Calendar,
    LockKeyhole,
    ArrowRight,
} from "lucide-react";


export default function PatientRegister() {

    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        dateOfBirth: "",
        password: "",
        confirmPassword: "",
    });

    const [error, setError] = useState("");


    /* =========================================
       HANDLE INPUT CHANGE
    ========================================= */

    const handleChange = (e) => {

        const { name, value } = e.target;

        setFormData((previous) => ({
            ...previous,
            [name]: value,
        }));

        setError("");
    };


    /* =========================================
       HANDLE REGISTER
    ========================================= */

    const handleSubmit = (e) => {

        e.preventDefault();

        setError("");


        /* Password match */

        if (formData.password !== formData.confirmPassword) {

            setError("Passwords do not match.");

            return;
        }


        /* Password length */

        if (formData.password.length < 8) {

            setError(
                "Password must be at least 8 characters."
            );

            return;
        }


        /* Temporary registration */

        console.log(
            "Patient Registration:",
            formData
        );


        /*
         * Temporary navigation.
         *
         * Later this will be replaced with
         * your Spring Boot registration API.
         */

        navigate("/patient/login");
    };


    return (
        <div className="w-full bg-white px-7 py-9 sm:px-10">

            {/* =====================================
                HEADER
            ===================================== */}

            <div className="text-center">

                <div className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-xl bg-blue-50 text-blue-600">
                    <User size={23} />
                </div>


                <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
                    Create an account
                </h1>


                <p className="mt-2 text-sm text-slate-500">
                    Register to get started with OneHealth
                </p>

            </div>


            {/* =====================================
                REGISTER FORM
            ===================================== */}

            <form
                onSubmit={handleSubmit}
                className="mt-8 space-y-4"
            >

                {/* =====================================
                    FULL NAME
                ===================================== */}

                <div>

                    <label
                        htmlFor="fullName"
                        className="mb-2 block text-sm font-medium text-slate-700"
                    >
                        Full name
                    </label>


                    <div className="relative">

                        <User
                            size={18}
                            className="
                                absolute
                                left-4
                                top-1/2
                                -translate-y-1/2
                                text-slate-400
                            "
                        />


                        <input
                            id="fullName"
                            name="fullName"
                            type="text"
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                            autoComplete="name"
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


                {/* =====================================
                    EMAIL
                ===================================== */}

                <div>

                    <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-slate-700"
                    >
                        Email address
                    </label>


                    <div className="relative">

                        <Mail
                            size={18}
                            className="
                                absolute
                                left-4
                                top-1/2
                                -translate-y-1/2
                                text-slate-400
                            "
                        />


                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            autoComplete="email"
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


                {/* =====================================
                    PHONE
                ===================================== */}

                <div>

                    <label
                        htmlFor="phone"
                        className="mb-2 block text-sm font-medium text-slate-700"
                    >
                        Phone number
                    </label>


                    <div className="relative">

                        <Phone
                            size={18}
                            className="
                                absolute
                                left-4
                                top-1/2
                                -translate-y-1/2
                                text-slate-400
                            "
                        />


                        <input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Enter your phone number"
                            autoComplete="tel"
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


                {/* =====================================
                    DATE OF BIRTH
                ===================================== */}

                <div>

                    <label
                        htmlFor="dateOfBirth"
                        className="mb-2 block text-sm font-medium text-slate-700"
                    >
                        Date of birth
                    </label>


                    <div className="relative">

                        <Calendar
                            size={18}
                            className="
                                absolute
                                left-4
                                top-1/2
                                -translate-y-1/2
                                text-slate-400
                            "
                        />


                        <input
                            id="dateOfBirth"
                            name="dateOfBirth"
                            type="date"
                            value={formData.dateOfBirth}
                            onChange={handleChange}
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
                                focus:border-blue-500
                                focus:ring-2
                                focus:ring-blue-500/10
                            "
                        />

                    </div>

                </div>


                {/* =====================================
                    PASSWORD
                ===================================== */}

                <div>

                    <label
                        htmlFor="password"
                        className="mb-2 block text-sm font-medium text-slate-700"
                    >
                        Password
                    </label>


                    <div className="relative">

                        <LockKeyhole
                            size={18}
                            className="
                                absolute
                                left-4
                                top-1/2
                                -translate-y-1/2
                                text-slate-400
                            "
                        />


                        <input
                            id="password"
                            name="password"
                            type={
                                showPassword
                                    ? "text"
                                    : "password"
                            }
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Create a password"
                            autoComplete="new-password"
                            minLength={8}
                            required
                            className="
                                h-12
                                w-full
                                rounded-lg
                                border
                                border-slate-200
                                bg-white
                                pl-11
                                pr-12
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
                                setShowPassword(
                                    (previous) => !previous
                                )
                            }
                            className="
                                absolute
                                right-4
                                top-1/2
                                -translate-y-1/2
                                text-slate-400
                                transition
                                hover:text-slate-700
                            "
                            aria-label={
                                showPassword
                                    ? "Hide password"
                                    : "Show password"
                            }
                        >

                            {showPassword ? (
                                <EyeOff size={18} />
                            ) : (
                                <Eye size={18} />
                            )}

                        </button>

                    </div>

                </div>


                {/* =====================================
                    CONFIRM PASSWORD
                ===================================== */}

                <div>

                    <label
                        htmlFor="confirmPassword"
                        className="mb-2 block text-sm font-medium text-slate-700"
                    >
                        Confirm password
                    </label>


                    <div className="relative">

                        <LockKeyhole
                            size={18}
                            className="
                                absolute
                                left-4
                                top-1/2
                                -translate-y-1/2
                                text-slate-400
                            "
                        />


                        <input
                            id="confirmPassword"
                            name="confirmPassword"
                            type={
                                showConfirmPassword
                                    ? "text"
                                    : "password"
                            }
                            value={
                                formData.confirmPassword
                            }
                            onChange={handleChange}
                            placeholder="Confirm your password"
                            autoComplete="new-password"
                            required
                            className="
                                h-12
                                w-full
                                rounded-lg
                                border
                                border-slate-200
                                bg-white
                                pl-11
                                pr-12
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
                                setShowConfirmPassword(
                                    (previous) => !previous
                                )
                            }
                            className="
                                absolute
                                right-4
                                top-1/2
                                -translate-y-1/2
                                text-slate-400
                                transition
                                hover:text-slate-700
                            "
                            aria-label={
                                showConfirmPassword
                                    ? "Hide confirm password"
                                    : "Show confirm password"
                            }
                        >

                            {showConfirmPassword ? (
                                <EyeOff size={18} />
                            ) : (
                                <Eye size={18} />
                            )}

                        </button>

                    </div>

                </div>


                {/* =====================================
                    ERROR
                ===================================== */}

                {error && (

                    <div className="rounded-lg border border-red-100 bg-red-50 px-4 py-3">

                        <p className="text-sm text-red-600">
                            {error}
                        </p>

                    </div>

                )}


                {/* =====================================
                    TERMS
                ===================================== */}

                <div className="flex items-start gap-2 pt-1">

                    <input
                        id="terms"
                        type="checkbox"
                        required
                        className="
                            mt-1
                            h-4
                            w-4
                            rounded
                            border-slate-300
                            accent-blue-600
                        "
                    />


                    <label
                        htmlFor="terms"
                        className="
                            text-xs
                            leading-5
                            text-slate-500
                        "
                    >

                        I agree to the OneHealth{" "}

                        <span className="font-medium text-slate-900">
                            Terms of Service
                        </span>

                        {" "}and{" "}

                        <span className="font-medium text-slate-900">
                            Privacy Policy
                        </span>

                        .

                    </label>

                </div>


                {/* =====================================
                    REGISTER BUTTON
                ===================================== */}

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
                        active:scale-[0.99]
                    "
                >

                    Register

                    <ArrowRight
                        size={17}
                        className="
                            transition-transform
                            group-hover:translate-x-1
                        "
                    />

                </button>

            </form>


            {/* =====================================
                LOGIN LINK
            ===================================== */}

            <p className="mt-7 text-center text-sm text-slate-500">

                Already a member?{" "}

                <Link
                    to="/patient/login"
                    className="
                        font-semibold
                        text-black
                        transition
                        hover:text-blue-600
                    "
                >
                    Login now
                </Link>

            </p>

        </div>
    );
}