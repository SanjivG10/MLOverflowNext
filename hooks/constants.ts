export const HOME_URL_FOR_COPY = process.env.NEXT_PUBLIC_MODE === "debug" ? "http://localhost:3000/" : "http://104.236.193.15/"
export const HOME_URL_WITHOUT_SLASH = process.env.NEXT_PUBLIC_MODE === "debug" ? "http://localhost:8000" : "http://104.236.193.15"
export const HOME_URL = HOME_URL_WITHOUT_SLASH + "/"
export const URL = HOME_URL + "api/v1/";
export const LOGIN_URL = URL + "auth/google/"
export const UPLOAD_IMAGE_URL = URL + "upload/"
export const FEED_URL = URL + "feeds/";
export const COPY_URL = HOME_URL_FOR_COPY;
export const COPY_FEED_URL = HOME_URL_FOR_COPY + "feeds/"
export const PAPER_URL = URL + "papers/";
export const QUOTE_URL = URL + "quote/";
export const REPORT_URL = URL + "report/"
export const QUICKLINK_URL = URL + "quicklinks/";
export const COMMENT_URL = URL + "feed-comments/"
export const COMMENT_URL_PAPER = URL + "paper-comments/";
export const RESOURCE_URL = URL + "resources/"
const FEED_AMOUNT_HOME_PAGE = 10;
const PAPER_AMOUNT_HOME_PAGE = 5;
export const PAPER_URL_HOME = PAPER_URL + "?home=true&size=" + PAPER_AMOUNT_HOME_PAGE;
export const FEED_URL_HOME = FEED_URL + "?home=true&size=" + FEED_AMOUNT_HOME_PAGE;
export const TAGS_URL = URL + "tags/"