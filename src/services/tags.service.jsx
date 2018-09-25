export const tags = [
  { _id: "1", name: "React" },
  { _id: "2", name: "Angular" },
  { _id: "3", name: "jQuery" },
  { _id: "4", name: "Symfony" },
  { _id: "5", name: "AEM" },
  { _id: "6", name: "Drupal" }
];

export function getTags() {
  return tags.filter(g => g);
}

export function getTagById(id) {
  return tags.filter(g => g._id === id)[0];
}

export function getTagName(tag) {
  return tag.name;
}

export function getTagNameById(id) {
  return getTagName(getTagById(id));
}
