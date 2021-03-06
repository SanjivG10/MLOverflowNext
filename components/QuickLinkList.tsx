import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { getUniqueValues, isEmpty } from "../helper";
import { useGet } from "../hooks/requests";
import Spinner from "./Spinner";
import QuickLink from "./../components/QuickLink";

export interface IQuickLink {
  name: string;
  description: string;
  image: string;
  link: string;
  id: number;
  slug: string;
  onEditSuccess?: () => void;
  fromList?: boolean;
  isOwner: boolean;
}

export interface IQuickLinkProps {
  quickLinks: {
    results: IQuickLink[];
    links: {
      first: string;
      last: string;
      next: null | string;
      prev: null | string;
    };
    meta: {
      pagination: {
        page: number;
        pages: number;
        count: number;
      };
    };
  };
}

const QuickLinkList = ({ quickLinks }: IQuickLinkProps) => {
  const [quickLinksData, setQuickLinksData] = useState(quickLinks);

  useEffect(() => {
    if (quickLinks) {
      setQuickLinksData(quickLinks);
    }
  }, [quickLinks]);

  const fetchMoreQuickLinks = async () => {
    if (quickLinksData.links.next) {
      const [data] = await useGet(quickLinksData.links.next);
      if (!isEmpty(data)) {
        const results = [...quickLinksData.results, ...data.results];
        const uniqueResults = getUniqueValues(results);
        setQuickLinksData({
          ...data,
          results: uniqueResults,
        });
      }
    }
  };

  return (
    <InfiniteScroll
      dataLength={quickLinksData?.results?.length || 0}
      next={fetchMoreQuickLinks}
      hasMore={Boolean(quickLinksData?.links?.next) || false}
      loader={<Spinner />}
    >
      <>
        {quickLinksData?.results?.map((quickLink) => {
          return <QuickLink {...quickLink} key={quickLink.id} fromList />;
        })}
      </>
    </InfiniteScroll>
  );
};

export default QuickLinkList;
