const schema = {
  name: "resource",
  type: "document",
  title: "Resource",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      require,
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
      require,
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
      name: "image",
      type: "image",
      title: "Image",
      options: {
        hotspot: true,
      },
      require,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "category",
      type: "string",
      title: "Category",
      options: {
        list: ["All", "Landing Page", "React JS", "Next JS", "Mobile"],
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
