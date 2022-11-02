import { SET_FILTER } from "./const-filter";

export const setFilter = (filter) => ({
  type: SET_FILTER,
  filter: filter
});
