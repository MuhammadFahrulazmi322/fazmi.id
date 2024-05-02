import { groq } from "next-sanity";
import { readClient } from "./lib/client";
import { buildQuery } from "./utils";

interface GetResourcesParams {
  query: string;
  category: string;
  page: string;
}
export const getResources = async (params: GetResourcesParams) => {
  const { query, category, page } = params;

  try {
    const resources = await readClient.fetch(
      groq`${buildQuery({
        type: "resource",
        query,
        category,
        page: parseInt(page),
      })}{
            title,
            description,
            category,
            "image": image.asset->url,
            slug,
            halloffame,
            "techStack1" : techStack1.asset->url,
            "techStack2" : techStack2.asset->url,
            "techStack3" : techStack3.asset->url,
            "techStack4" : techStack4.asset->url,
            "techStack5" : techStack5.asset->url,
            livesite,
            github,
        }`
    );

    return resources;
  } catch (error) {
    console.log(error);
  }
};
