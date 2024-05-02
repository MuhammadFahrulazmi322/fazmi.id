import Card from "./Card";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Filter from "./Filter";
import { getResources } from "@/sanity/actions";

const AllProjects = async () => {
  try {
    const resources = await getResources({
      query: "",
      category: "",
      page: "1",
    });

    return (
      <>
        {/* filter category */}
        <Filter />

        {/* card */}
        <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-12 mx-auto">
          {resources?.length > 0 ? (
            resources?.map((resource: any) => (
              <Card
                id={resource._id}
                key={resource._id}
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
            <p>No resource found</p>
          )}
        </div>

        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </>
    );
  } catch (error) {
    console.error("Error fetching resources:", error);
    return <p>Error fetching resources</p>;
  }
};

export default AllProjects;
