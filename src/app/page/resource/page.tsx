"use client";
import contentfulClient from "@/lib/contentful/contentfulClient";
import {
  TypeStartupPowerhouseNewsletterSkeleton,
  TypeStartupPowerhouseNewsletterImage,
  TypeStartupPowerhouseNewsletter,
} from "@/lib/contentful/TypeStartupPowerhouseNewsletter";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useEffect } from "react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { LocaleCode, ChainModifiers } from "contentful";
import Image, { ImageLoaderProps } from "next/image";
import { ImageLoader } from "next/image";

const NewsletterListPage = () => {
  const [newsletterData, setNewsletter] =
    useState<TypeStartupPowerhouseNewsletter<ChainModifiers, LocaleCode>[]>();
  const [filterData, setFilterData] =
    useState<TypeStartupPowerhouseNewsletter<ChainModifiers, LocaleCode>[]>();
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

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchWord = e.target.value.toLowerCase();
    console.log(searchWord);
    if (!newsletterData) {
      return;
    }
    const filter = newsletterData?.filter((item) => {
      const word = item.fields.title as string;
      return word.toLowerCase().includes(searchWord);
    });
    if (searchWord === "") {
      setFilterData(newsletterData);
    } else {
      setFilterData(filter);
    }
  };

  const printData = (
    input:
      | TypeStartupPowerhouseNewsletter<ChainModifiers, LocaleCode>[]
      | undefined,
  ) => {
    console.log(input);
    const contentfulImageLoader: ImageLoader = ({
      src,
      width,
    }: ImageLoaderProps) => {
      return `${src}?w=${width}`;
    };
    return input?.map((value, index: number) => (
      <Card
        key={index}
        className="h-full w-full cursor-pointer hover:bg-gray-100"
        onClick={() => router.push(`/page/resource/${value?.fields?.slug}`)}
      >
        <Link href={`/page/resource/${value?.fields?.slug}`}>
          <CardHeader>
            <h1 className="font-bold">
              {value?.fields?.title as unknown as string}
            </h1>
            <p>{value?.fields?.date as unknown as string}</p>
          </CardHeader>
        </Link>
        <CardContent>
          <Image
            loader={contentfulImageLoader}
            width={200}
            height={50}
            src={`https://${(value.fields.image as unknown as TypeStartupPowerhouseNewsletterImage).fields.file.url}`}
            alt={value?.fields?.title as unknown as string}
            className="mb-3 w-full rounded-lg"
            sizes="(max-width:768px) 100px, 500px"
          />
          <p className="mb-3 text-justify text-sm">
            {value.fields.excerpt as unknown as string}
          </p>
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
