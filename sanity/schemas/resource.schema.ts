const schema = {
  name: "resource",
  type: "document",
  title: "Resource",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "image",
      type: "image",
      title: "Image",
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title",
      },
    },
    {
      name: "description",
      type: "string",
      title: "Description",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "techStack1",
      type: "image",
      title: "Tech Stack 1",
      options: {
        hotspot: true,
      },
    },
    {
      name: "techStack2",
      type: "image",
      title: "Tech Stack 2",
      options: {
        hotspot: true,
      },
    },
    {
      name: "techStack3",
      type: "image",
      title: "Tech Stack 3",
      options: {
        hotspot: true,
      },
    },
    {
      name: "techStack4",
      type: "image",
      title: "Tech Stack 4",
      options: {
        hotspot: true,
      },
    },
    {
      name: "techStack5",
      type: "image",
      title: "Tech Stack 5",
      options: {
        hotspot: true,
      },
    },
    
    {
      name: "category",
      type: "string",
      title: "Category",
      options: {
        list: ["all", "react js", "next js", "mobile"],
      },
    },
    {
      name: "halloffame",
      type: "boolean",
      title: "Hall Of Fame",
      description: "Show on HallofFame Page",
    },
    {
      name: "livesite",
      type: "url",
      title: "Live Site",
    },
    {
      name: "github",
      type: "url",
      title: "Github",
    },
  ],
};

export default schema;
