import NavBar from "../components/sheared/NavBar";

const MainLayout = ({children}) => {
    return (
        <div>
            <NavBar/>
            {children}
        </div>
    );
};

export default MainLayout;