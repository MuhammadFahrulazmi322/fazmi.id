import { useState, useEffect } from "react";
import { getResources } from "@/sanity/actions";


const useResources = () => {
  const [resources, setResources] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getResources({
        query: "",
        category: "",
        page: "1",
      });
      setResources(data);
    };

    fetchData();
  }, []);

  return resources;
};

export default useResources;
