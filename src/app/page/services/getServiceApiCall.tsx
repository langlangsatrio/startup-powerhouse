"use client";
import RichText from "@/components/richText/richText";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import contentfulClient from "@/lib/contentful/contentfulClient";
import { useEffect, useState } from "react";
import {
  TypeStartupPowerhouseServicesFields,
  TypeStartupPowerhouseServicesImage,
} from "@/lib/contentful/types";
import { Badge } from "@/components/ui/badge";
interface IGetProduct {
  id: string;
}

const GetServiceDetails: React.FC<IGetProduct> = ({ id }) => {
  const [fecthedService, setFetchedService] =
    useState<TypeStartupPowerhouseServicesFields | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const service = await contentfulClient.getEntry(id);
        console.log(service);
        setFetchedService(service.fields);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [id]);

  if (!fecthedService) {
    return <div>error</div>;
  }
  return (
    <div className="page-layout flex h-full flex-col items-start justify-center gap-0 bg-white px-10 pt-10 md:pt-16 lg:mt-0 lg:gap-4 lg:px-44 lg:pt-28">
      <div className="title-wrapper mb-5 flex w-full flex-col items-center lg:mb-6 lg:flex-row lg:items-center lg:justify-center">
        <div>
          <h1 className="mb-4 text-center text-2xl font-semibold md:mb-6 md:text-4xl md:font-bold lg:mb-8 lg:text-left lg:text-5xl">
            {fecthedService?.title}
          </h1>
          <p className="mb-6 text-center text-lg md:text-xl lg:mb-3 lg:pr-96 lg:text-left lg:text-2xl lg:leading-relaxed">
            {fecthedService?.shortDescription}
          </p>
        </div>
        <div className="mb-3 flex h-full flex-col items-center justify-end lg:items-end">
          <h1 className="mb-3 text-center text-5xl font-semibold md:mb-6 md:text-4xl md:font-bold lg:mb-8 lg:text-left lg:text-8xl">
            {fecthedService?.price}
          </h1>
          <Badge className="w-fit">Limited. Book now.</Badge>
        </div>
      </div>
      <div className="w-full pb-6 lg:h-1/2 lg:w-full">
        <img
          src={`${(fecthedService?.image as TypeStartupPowerhouseServicesImage).fields.file.url}`}
          className="h-full w-full rounded-xl shadow-sm"
        />
      </div>
      <div className="description text-md hidden text-center leading-relaxed lg:mb-5 lg:block lg:py-10 lg:text-left lg:text-xl lg:leading-loose">
        <RichText document={fecthedService?.serviceDescription} />
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-4 lg:flex-row lg:gap-10">
        <Card className="h-full w-full bg-green-50 p-3 shadow-md">
          <CardHeader>
            <CardTitle>With us-👍</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="[&>*]:flex [&>*]:flex-col [&>*]:gap-2 [&>*]:py-2 [&>*]:text-sm [&>*]:md:text-lg">
              <RichText document={fecthedService?.benefit} />
            </div>
          </CardContent>
        </Card>
        <Card className="h-full w-full bg-red-50 p-3 shadow-md">
          <CardHeader>
            <CardTitle>With others-🤔</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="[&>*]:flex [&>*]:flex-col [&>*]:gap-2 [&>*]:py-2 [&>*]:text-sm [&>*]:md:text-lg">
              <RichText document={fecthedService?.notBenefit} />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GetServiceDetails;
