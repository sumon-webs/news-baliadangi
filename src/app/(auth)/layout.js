import NavBar from "../components/sheared/NavBar";

const AuthLayout = ({children}) => {
    return (
        <div>
            <NavBar/>
            {children}
        </div>
    );
};

export default AuthLayout;