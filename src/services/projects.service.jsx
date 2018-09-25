// import * as tagsAPI from "./tags.service";
// { _id: "1", name: "React" },
// { _id: "2", name: "Angular" },
// { _id: "3", name: "jQuery" },
// { _id: "4", name: "Symfony" },
// { _id: "5", name: "AEM" },
// { _id: "6", name: "Drupal" }

const projects = [
  {
    _id: 1,
    image: "/projects/powerade.jpg",
    title: "Powerade Hydration Calculator",
    caption:
      "Powerade hydration calculator is based on scientific studies and provides an estimate only of fluid requirements under the above conditions.",
    tags: ["3", "4"]
  },
  {
    _id: 2,
    image: "",
    title: "Title 2",
    caption: "Caption 2",
    tags: ["2", "3"]
  }
];

export function getProjects() {
  return projects;
}
