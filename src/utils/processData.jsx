// import _ from "lodash";

export function filterByTag(items, tag) {
  console.log(tag);
  return items.filter(item => item.tags.indexOf(tag._id) !== -1);
}
