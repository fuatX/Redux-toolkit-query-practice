import { useParams } from "react-router-dom";
import LoadingComponent from "../../compenents/LoadingComponent";
import { useEffect } from "react";
import useCategoriesFetchApi from "../../customHooks/useCategoriesFetchApi";

const VITE_CAT_API_URL = import.meta.env.VITE_CAT_API_URL;
const VITE_CAT_API_KEY = import.meta.env.VITE_CAT_API_KEY;

export default function FetchCategory() {
  const { categoryName } = useParams();
  const [data, isLoading, isError, error] = useCategoriesFetchApi(categoryName);
  console.log(data);

  return (
    <div className="col-sm-12 ">
      <h1>Fetch : Kategori: {categoryName}</h1>
    </div>
  );
}
