// import * as tagsAPI from "./tags.service";

const projects = [
  {
    _id: 1,
    image: "",
    title: "Title 1",
    caption: "Caption 1",
    tags: [{ _id: "1", name: "React" }]
  },
  {
    _id: 2,
    image: "",
    title: "Title 2",
    caption: "Caption 2",
    tags: [{ _id: "2", name: "Angular" }, { _id: "3", name: "Symfony" }]
  },
  {
    _id: 3,
    image: "",
    title: "Title 3",
    caption: "Caption 3",
    tags: [{ _id: "4", name: "AEM" }]
  },
  {
    _id: 4,
    image: "",
    title: "Title 4",
    caption: "Caption 4",
    tags: [{ _id: "5", name: "Drupal" }]
  },
  {
    _id: 5,
    image: "",
    title: "Title 5",
    caption: "Caption 5",
    tags: [{ _id: "3", name: "Symfony" }]
  },
  {
    _id: 6,
    image: "",
    title: "Title 6",
    caption: "Caption 6",
    tags: [{ _id: "1", name: "React" }, { _id: "3", name: "Symfony" }]
  }
];

export function getProjects() {
  return projects;
}
