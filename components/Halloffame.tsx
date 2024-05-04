"use client";

import Loading from "@/app/loading";
import Card from "./Card";
import useResources from "@/hooks/useResource";
import { useEffect, useState } from "react";

const Halloffame = () => {
  const resources = useResources();
  const [loading, setLoading] = useState(true);

  const halloffameResources = resources.filter(
    (resource: any) => resource.halloffame === true
  );

  useEffect(() => {
    if (halloffameResources) {
      setLoading(false);
    }
  }, [halloffameResources]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="p-8 mx-auto flex flex-col lg:flex-row lg:gap-4 gap-y-12 xl:gap-12 ">
          {halloffameResources.length > 0 ? (
            halloffameResources.map((resource, index) => (
              <Card
                key={`${resource._id}-${index}`}
                id={resource._id}
                title={resource.title}
                description={resource.description}
                category={resource.category}
                image={resource.image}
                slug={resource.slug.current}
                halloffame={resource.halloffame}
                techStack1={resource.techStack1}
                techStack2={resource.techStack2}
                techStack3={resource.techStack3}
                techStack4={resource.techStack4}
                techStack5={resource.techStack5}
                livesite={resource.livesite}
                github={resource.github}
              />
            ))
          ) : (
            <p>No resources found.</p>
          )}
        </div>
      )}
    </>
  );
};

export default Halloffame;
