
export const HOME_URL_WITHOUT_SLASH = process.env.NEXT_PUBLIC_MODE === "debug" ? "http://localhost:8000" : "https://mloverflow.com"
export const HOME_URL = HOME_URL_WITHOUT_SLASH + "/"
export const URL = HOME_URL + "api/v1/";
export const FEED_URL = URL + "feeds/";
export const PAPER_URL = URL + "papers/";
export const QUOTE_URL = URL + "quote/";
const FEED_AMOUNT_HOME_PAGE = 10;
const PAPER_AMOUNT_HOME_PAGE = 5;
const QUICK_LINK_AMOUNT_HOME_PAGE = 5;
export const PAPER_URL_HOME = PAPER_URL + "?home=true&size=" + PAPER_AMOUNT_HOME_PAGE;
export const FEED_URL_HOME = FEED_URL + "?home=true&size=" + FEED_AMOUNT_HOME_PAGE;
export const TAGS_URL = URL + "tags/"