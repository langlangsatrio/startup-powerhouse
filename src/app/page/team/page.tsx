"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Badge } from "@/components/ui/badge";

const TeamPage = () => {
  const [team, setTeam] = useState<object[]>([]);
  const teamFetch = async () => {
    try {
      const response = await axios.get(
        "https://randomuser.me/api/?results=10&nat=gb,us,es",
      );
      console.log(response.data.results);
      setTeam(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    teamFetch();
  }, []);

  return (
    <div className="flex flex-col border px-5 py-10">
      <div className="flex flex-col items-center justify-center">
        <Badge className="md:text-md mb-3 w-fit lg:mb-10 lg:text-lg">
          Teams
        </Badge>
        <h1 className="text-center text-2xl font-bold leading-normal md:px-5 md:text-3xl md:leading-relaxed lg:mb-3 lg:px-44 lg:text-5xl lg:leading-normal">
          Who are behind us?
        </h1>
        <p className="px-5 pb-7 pt-2 text-center text-sm md:px-20 md:text-lg lg:px-40 lg:pb-24 lg:text-2xl lg:leading-loose">
          We are a hardcore team of eight person who are obssesed with
          technology, startup and human outliers&apos; development. We build
          cool stuffs, sells like crazy and solve public problems. Compounded,
          we are moving to extend the outliers of our civilization. Join us on a
          journey to the future.
        </p>
        <p className="md:text-md px-5 pb-2 pt-2 text-center text-sm font-bold md:text-lg lg:px-20 lg:text-3xl lg:leading-relaxed">
          Proudly Honoring:
        </p>
        <div className="flex flex-col gap-2 gap-y-5 md:gap-y-8 lg:basis-1/2 lg:flex-row lg:flex-wrap lg:justify-evenly lg:gap-5 lg:gap-y-14 lg:px-20 lg:py-10">
          <div className="section-title-position">
            <h1 className="py-5 text-center text-xl font-bold md:text-3xl">
              Founder and Co-Founder
            </h1>
            <div className="flex h-fit w-full justify-between gap-3">
              {team
                .map((value, index) => {
                  interface IValue {
                    name?: {
                      first?: string;
                      last?: string;
                    };
                    picture?: {
                      large?: string;
                    };
                    email?: string;
                  }
                  const { name, picture, email }: IValue = value;
                  const fullname = name?.first + " " + name?.last;
                  return (
                    <Card
                      key={index}
                      className="flex h-full w-40 flex-col items-center justify-center p-0 shadow-sm shadow-blue-800 md:w-80 md:p-5 md:px-5"
                    >
                      <CardHeader className="m-0 h-fit px-0 pb-3 pt-5 md:px-5">
                        <Image
                          src={picture?.large as unknown as string}
                          className="m-0 h-full w-full rounded-lg p-0 md:w-72"
                          width={100}
                          height={100}
                          sizes="(max-width: 768px) 250px, 400px"
                          alt={fullname}
                        />
                      </CardHeader>
                      <CardContent className="m-0 flex flex-col items-center justify-center p-0 px-0 pb-3">
                        <h1 className="text-xs font-bold md:text-lg">
                          {fullname}
                        </h1>
                        <h1 className="hidden text-xs md:block md:text-lg">
                          {email}
                        </h1>
                      </CardContent>
                    </Card>
                  );
                })
                .slice(0, 2)}
            </div>
          </div>
          <div className="section-title-position">
            <h1 className="py-5 text-center text-xl font-bold md:text-3xl">
              Software Developer
            </h1>
            <div className="flex h-fit w-full justify-between gap-3">
              {team
                .map((value, index) => {
                  interface IValue {
                    name?: {
                      first?: string;
                      last?: string;
                    };
                    picture?: {
                      large?: string;
                    };
                    email?: string;
                  }
                  const { name, picture, email }: IValue = value;
                  const fullname = name?.first + " " + name?.last;
                  return (
                    <Card
                      key={index}
                      className="flex h-full w-40 flex-col items-center justify-center p-0 shadow-sm shadow-green-800 md:w-80 md:p-5 md:px-5"
                    >
                      <CardHeader className="m-0 h-fit px-0 pb-3 pt-5 md:px-5">
                        <Image
                          src={picture?.large as unknown as string}
                          className="m-0 h-full w-full rounded-lg p-0 md:w-72"
                          width={100}
                          height={100}
                          sizes="(max-width: 768px) 250px, 400px"
                          alt={fullname}
                        />
                      </CardHeader>
                      <CardContent className="m-0 flex flex-col items-center justify-center p-0 px-0 pb-3">
                        <h1 className="text-xs font-bold md:text-lg">
                          {fullname}
                        </h1>
                        <h1 className="hidden text-xs md:block md:text-lg">
                          {email}
                        </h1>
                      </CardContent>
                    </Card>
                  );
                })
                .slice(2, 4)}
            </div>
          </div>
          <div className="section-title-position">
            <h1 className="py-5 text-center text-xl font-bold md:text-3xl">
              Marketer and Salesperson
            </h1>
            <div className="flex h-fit w-full justify-between gap-3">
              {team
                .map((value, index) => {
                  interface IValue {
                    name?: {
                      first?: string;
                      last?: string;
                    };
                    picture?: {
                      large?: string;
                    };
                    email?: string;
                  }
                  const { name, picture, email }: IValue = value;
                  const fullname = name?.first + " " + name?.last;
                  return (
                    <Card
                      key={index}
                      className="flex h-full w-40 flex-col items-center justify-center p-0 shadow-sm shadow-red-800 md:w-80 md:p-5 md:px-5"
                    >
                      <CardHeader className="m-0 h-fit px-0 pb-3 pt-5 md:px-5">
                        <Image
                          src={picture?.large as unknown as string}
                          className="m-0 h-full w-full rounded-lg p-0 md:w-72"
                          width={100}
                          height={100}
                          sizes="(max-width: 768px) 250px, 400px"
                          alt={fullname}
                        />
                      </CardHeader>
                      <CardContent className="m-0 flex flex-col items-center justify-center p-0 px-0 pb-3">
                        <h1 className="text-xs font-bold md:text-lg">
                          {fullname}
                        </h1>
                        <h1 className="hidden text-xs md:block md:text-lg">
                          {email}
                        </h1>
                      </CardContent>
                    </Card>
                  );
                })
                .slice(4, 6)}
            </div>
          </div>
          <div className="section-title-position">
            <h1 className="py-5 text-center text-xl font-bold md:text-3xl">
              Design and Branding
            </h1>
            <div className="flex h-fit w-full justify-between gap-3">
              {team
                .map((value, index) => {
                  interface IValue {
                    name?: {
                      first?: string;
                      last?: string;
                    };
                    picture?: {
                      large?: string;
                    };
                    email?: string;
                  }
                  const { name, picture, email }: IValue = value;
                  const fullname = name?.first + " " + name?.last;
                  return (
                    <Card
                      key={index}
                      className="flex h-full w-40 flex-col items-center justify-center p-0 shadow-sm shadow-orange-800 md:w-80 md:p-5 md:px-5"
                    >
                      <CardHeader className="m-0 h-fit px-0 pb-3 pt-5 md:px-5">
                        <Image
                          src={picture?.large as unknown as string}
                          className="m-0 h-full w-full rounded-lg p-0 md:w-72"
                          width={100}
                          height={100}
                          sizes="(max-width: 768px) 250px, 400px"
                          alt={fullname}
                        />
                      </CardHeader>
                      <CardContent className="m-0 flex flex-col items-center justify-center p-0 px-0 pb-3">
                        <h1 className="text-xs font-bold md:text-lg">
                          {fullname}
                        </h1>
                        <h1 className="hidden text-xs md:block md:text-lg">
                          {email}
                        </h1>
                      </CardContent>
                    </Card>
                  );
                })
                .slice(6, 8)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
