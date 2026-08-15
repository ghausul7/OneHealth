import {
    Routes,
    Route,
    useLocation,
    useNavigate,
} from "react-router-dom";

import Landing from "./pages/Landing";
import PatientDashboard from "./pages/PatientDashboard";
import DoctorDashboard from "./pages/DoctorDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import PatientLogin from "./pages/PatientLogin";
import PatientRegister from "./pages/PatientRegister";


function AuthModal({ children }) {

    const navigate = useNavigate();

    const closeModal = () => {
        navigate("/");
    };

    const handleBackgroundClick = (e) => {

        if (e.target === e.currentTarget) {
            closeModal();
        }

    };

    return (
        <div
            className="
                fixed
                inset-0
                z-[100]
                flex
                items-center
                justify-center
                bg-slate-950/50
                px-4
                py-6
                backdrop-blur-sm
            "
            onMouseDown={handleBackgroundClick}
        >

            <div
                className="
                    relative
                    max-h-[90vh]
                    w-full
                    max-w-md
                    overflow-y-auto
                    rounded-2xl
                    bg-white
                    shadow-2xl
                "
                onMouseDown={(e) => e.stopPropagation()}
            >

                {/* CLOSE BUTTON */}

                <button
                    type="button"
                    onClick={closeModal}
                    className="
                        absolute
                        right-4
                        top-4
                        z-50
                        grid
                        h-9
                        w-9
                        place-items-center
                        rounded-full
                        bg-slate-100
                        text-xl
                        text-slate-500
                        transition
                        hover:bg-slate-200
                        hover:text-slate-900
                    "
                    aria-label="Close"
                >
                    ×
                </button>


                {/* MODAL CONTENT */}

                {children}

            </div>

        </div>
    );
}


function App() {

    const location = useLocation();

    const isLogin =
        location.pathname === "/patient/login";

    const isRegister =
        location.pathname === "/patient/register";


    return (
        <>

            {/* =========================================
                MAIN ROUTES
            ========================================= */}

            <Routes>

                {/* HOME */}

                <Route
                    path="/"
                    element={<Landing />}
                />


                {/* PATIENT DASHBOARD */}

                <Route
                    path="/patient"
                    element={<PatientDashboard />}
                />


                {/* DOCTOR DASHBOARD */}

                <Route
                    path="/doctor"
                    element={<DoctorDashboard />}
                />


                {/* ADMIN DASHBOARD */}

                <Route
                    path="/admin"
                    element={<AdminDashboard />}
                />


                {/* LOGIN BACKGROUND */}

                <Route
                    path="/patient/login"
                    element={<Landing />}
                />


                {/* REGISTER BACKGROUND */}

                <Route
                    path="/patient/register"
                    element={<Landing />}
                />

            </Routes>


            {/* =========================================
                AUTH MODAL
            ========================================= */}

            {isLogin && (
                <AuthModal>
                    <PatientLogin />
                </AuthModal>
            )}


            {isRegister && (
                <AuthModal>
                    <PatientRegister />
                </AuthModal>
            )}

        </>
    );
}


export default App;