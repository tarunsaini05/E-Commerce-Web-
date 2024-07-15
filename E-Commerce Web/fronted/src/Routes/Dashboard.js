import { useEffect, useState } from "react";
import Shop from "../e-commerce-web/Shop";
import './styles.css';
import axios from "axios";
import Card from "./card";

function Dashboard() {
    const [data, setdata] = useState([])
    console.log(data);
    const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:3500/product/getallavailableproduct");
            
            setdata(response.data.data);
            console.log(response.data.data)
        }
        catch (error) {
            console.log(error);

        }
    }
    useEffect(() => {
        fetchData();
    }, [])
    return (
        <>
            {<Shop />}
            <div>
                <div className="bg-white m-2 mx-4">
                </div>
                <div>
                    <div className="grid grid-cols-3 gap-4 ">
                        {data?.map((item) => (
                            <div key={item._id}>
                                <Card item={item} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>


        </>
    )
}
export default Dashboard;