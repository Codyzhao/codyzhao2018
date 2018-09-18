import _ from "lodash";

export function filterByTag(items, tag) {
  return items.filter(item => _.find(item.tags, tag));
}
