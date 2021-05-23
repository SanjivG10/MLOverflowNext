
export const HOME_URL_WITHOUT_SLASH = process.env.NEXT_PUBLIC_MODE === "debug" ? "http://localhost:8000" : "https://mloverflow.com"
export const HOME_URL = HOME_URL_WITHOUT_SLASH + "/"
export const URL = HOME_URL + "api/v1/";
export const FEED_URL = URL + "feeds/"
export const PAPER_URL = URL + "papers/"
export const FEED_AMOUNT_HOME_PAGE = 10;
export const PAPER_AMOUNT_HOME_PAGE = 5;
export const QUICK_LINK_AMOUNT_HOME_PAGE = 5;