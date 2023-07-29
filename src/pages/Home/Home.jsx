import { Categorycard } from "../../components/Categorycard/Categorycard";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { useVideo } from "../../contexts/VideoContext";
import "./Home.css";

export const Home = () => {
    const { categories } = useVideo();

    return (
        <div className="home-container">
            <nav>
                <h1>Categories</h1>
            </nav>
            <div className="home-content">
                <div className="left">
                    <Sidebar />
                </div>

                <div className="right">
                    {categories.map((category, ind) => (
                        <Categorycard key={ind} {...category} />
                    ))}
                </div>
            </div>
        </div>
    );
};
