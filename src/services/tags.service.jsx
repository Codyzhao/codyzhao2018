export const tags = [
  { _id: "1", name: "React" },
  { _id: "2", name: "Angular" },
  { _id: "3", name: "Symfony" },
  { _id: "4", name: "AEM" },
  { _id: "5", name: "Drupal" }
];

export function getTags() {
  return tags.filter(g => g);
}
