import { useState, useEffect } from "react";
import { getResources } from "@/sanity/actions";

interface SearchParams {
  category?: string;
}

const useResources = (searchParams?: SearchParams) => {
  const [resources, setResources] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getResources({
        query: "",
        category: searchParams?.category || "",
        page: "1",
      });
      setResources(data);
    };

    fetchData();
  }, [searchParams]);

  return resources;
};

export default useResources;
