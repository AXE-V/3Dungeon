export const filterCategory = {
  category: [
    'all category',
    'animals',
    'architecture',
    'abstract',
    'vechicles',
    'characters',
    'snaks',
    'nature',
    'sport',
    'military',
  ],
};
export const filterFormat = {
  format: ['all formats', '.gltf', '.glb', '.obj', '.fbx', '.3ds', '.ma', '.c4d', '.blend', '.stl'],
};
// export const filterPolyCount = {
//   poly_count: ['any', 'up to 10k', '10k to 50k', '50k to 100k', '100k to 250k'],
// };
export const filterLicense = {
  license: [
    'all license',
    'cc by',
    'cc by-sa',
    'cc by nd',
    'cc by-nc',
    'cco',
    'standart',
    'editorial',
  ],
};
// export const filterStars = { rating: ['5 stars', '4 stars', '3 stars', '2 stars', '1 stars'] };
export const filterDate = { created_at: ['all time', 'this week', 'this hour', 'this day'] };
// export const filterView = { view: ['models', 'users'] };
// export const filterSortBy = { sort_by: ['most recent', 'most liked', 'most viewed'] };
export const filterAllSelectData = [
  filterCategory,
  filterFormat,
  // filterPolyCount,
  filterLicense,
  // filterStars,
  filterDate,
  // filterView,
  // filterSortBy,
];
