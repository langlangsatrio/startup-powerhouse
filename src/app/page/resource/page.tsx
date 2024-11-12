"use client";
import contentfulClient from "@/lib/contentful/contentfulClient";
import {
  TypeStartupPowerhouseNewsletterSkeleton,
  TypeStartupPowerhouseNewsletterImage,
  TypeStartupPowerhouseNewsletterFields,
} from "@/lib/contentful/TypeStartupPowerhouseNewsletter";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useEffect } from "react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Link from "next/link";

const NewsletterListPage = () => {
  const [newsletterData, setNewsletter] =
    useState<TypeStartupPowerhouseNewsletterFields | null>(null);
  const [filterData, setFilterData] = useState<
    TypeStartupPowerhouseNewsletterFields[] | null
  >(null);
  const router = useRouter();
  useEffect(() => {
    const GetNewsletter = async () => {
      try {
        const newsletterFetch =
          await contentfulClient.getEntries<TypeStartupPowerhouseNewsletterSkeleton>(
            {
              content_type: "startupPowerhouseNewsletter",
            },
          );
        setNewsletter(newsletterFetch.items);
        setFilterData(newsletterFetch.items);
      } catch (error) {
        console.log(error);
      }
    };
    GetNewsletter();
  }, []);

  const onSearch = (e) => {
    const searchWord = e.target.value.toLowerCase();
    console.log(searchWord);
    const filter = newsletterData?.filter((item) =>
      item.fields.title.toLowerCase().includes(searchWord),
    );
    if (searchWord === "") {
      setFilterData(newsletterData);
    } else {
      setFilterData(filter);
    }
  };

  const printData = (input) => {
    return input?.map((value, index: number) => (
      <Card key={index} className="h-full w-full">
        <Link href={`/page/resource/${value.fields.slug}`}>
          <CardHeader>
            <h1 className="font-bold">{value.fields.title}</h1>
            <p>{value.fields.date}</p>
          </CardHeader>
        </Link>
        <CardContent>
          <img
            className="mb-3 rounded-lg"
            src={`${(value.fields.image as TypeStartupPowerhouseNewsletterImage).fields.file.url}`}
          />
          <p className="mb-3 text-justify text-sm">{value.fields.excerpt}</p>
          <Button
            className="w-full cursor-pointer"
            onClick={() => router.push(`/page/resource/${value.fields.slug}`)}
          >
            Read More
          </Button>
        </CardContent>
      </Card>
    ));
  };

  return (
    <div className="page-layout flex h-full flex-col justify-center px-10 py-6 md:py-10">
      <div className="flex flex-col items-center justify-center gap-3 pb-8 lg:pb-20">
        <Badge
          variant={"outline"}
          className="mb-4 flex w-fit flex-col gap-1 px-3 py-1 shadow-sm"
        >
          <h4 className="text-center text-base font-semibold">Newsletter</h4>
        </Badge>
        <h1 className="text-center text-2xl font-bold leading-normal md:px-5 md:text-3xl md:leading-relaxed lg:px-44 lg:text-5xl lg:leading-normal">
          Resources and stories
        </h1>
        <div>
          <p className="pb-4 text-center text-sm lg:text-lg">
            Subscribe for current updates and funding information
          </p>
          <div className="flex h-full w-full justify-center py-0 lg:py-7">
            <input type="text" className="border border-black" />
            <Button className="h-full w-1/3 rounded-none">Subscribe</Button>
          </div>
        </div>
      </div>
      <div className="md:px-5 lg:px-32">
        <div className="relative my-5 w-full">
          <FaSearch className="absolute left-3 top-3 md:left-6 md:top-4" />
          <input
            type="text"
            className="h-10 w-full rounded-lg border border-gray-50 pl-10 shadow-sm md:h-12 md:pl-14"
            placeholder="Search"
            onChange={onSearch}
          />
        </div>
        <div className="flex flex-col gap-3 md:grid md:grid-cols-2 md:gap-3 lg:grid-cols-4 lg:gap-4">
          {printData(filterData)}
        </div>
      </div>
    </div>
  );
};

export default NewsletterListPage;
