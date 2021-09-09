export function getSurah(state) {
  return state.surah;
}

export function getSearchAyahResults(state) {
  return state.searchAyah.results;
}

export function getSearchAyahResultTranslations(state) {
  return state.searchAyah.resultTranslations;
}

export function getSearchAyahPaging(state) {
  return state.searchAyah.paging;
}

export function getPageScrollPosition(state) {
  return function(page) {
    return state.pageScrollPosition[page] ?? 0;
  };
}
