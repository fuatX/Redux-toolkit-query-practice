import { useEffect, useState } from "react";
import LoadingComponent from "../../compenents/LoadingComponent";

const VITE_CAT_API_URL = import.meta.env.VITE_CAT_API_URL;

export default function FetchCategories() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState();

  const getApiData = async () => {
    const response = await fetch(`${VITE_CAT_API_URL}/breeds`);
    const responseData = await response.json();
    if (!response.ok) {
      setIsError(true);
      setError("Veri Alinamadi...");
      throw new Error("Veri Alinamadi");
    }
    // console.log(responseData);
    setData(responseData);
    setIsLoading(false);
  };

  // useEffect(()=>{},[])
  useEffect(() => {
    setTimeout(() => getApiData(), 1500);
  }, []);
  return (
    <div className="col-sm-12 ">
      <h1>Fetch : Kategoriler</h1>
      {isError ? <h2>{error}</h2> : isLoading ? <LoadingComponent /> : ""}
      <ul className="list-group">
        {data.map((item) => (
          <li className="list-group-item" key={item.id}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
