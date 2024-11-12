"use client";
import RichText from "@/components/richText/richText";
import getNewsletter from "@/lib/contentful/getNewsletter";
import {
  TypeStartupPowerhouseNewsletterImage,
  TypeStartupPowerhouseNewsletter,
} from "@/lib/contentful/TypeStartupPowerhouseNewsletter";
import { useEffect, useState } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { LocaleCode, ChainModifiers } from "contentful";
import { Document as RichTextDocument } from "@contentful/rich-text-types";

interface IAcceptInput {
  params: Promise<{ slug: string }>;
}

const BlogDetailPage: React.FC<IAcceptInput> = ({ params }: IAcceptInput) => {
  const [blogData, setBlogData] =
    useState<TypeStartupPowerhouseNewsletter<ChainModifiers, LocaleCode>>();
  // const [alsoRead, setAlsoRead] =
  //   useState<TypeStartupPowerhouseNewsletter<ChainModifiers, LocaleCode>[]>();
  // const router = useRouter();

  useEffect(() => {
    const fetchDetailBlog = async () => {
      try {
        const slug = (await params).slug;
        const response = await getNewsletter(slug);
        const newResponse = response?.filter(
          (item) => item.fields.slug === slug,
        );
        // const alsoReadData = response?.filter(
        //   (item) => item.fields.slug !== slug,
        // );  ===>> INI SEMENTARA GAK BISA JALAN, KARENA KITA FETCHING MEMASUKAN PARAMETER SLUG KE FUNGSI API. SEHINGGA, DIA FETCH HANYA UNTUK HALAMAN INI, BUKAN HALAMAN LAIN
        // BISA FETCH, TAPI MESTI BIKIN FUNGSI BARU. SEMENTARA COBA PIKIR CARA PALING EFEKTIF DULU. CODE

        setBlogData(newResponse?.[0]);
        // setAlsoRead(alsoReadData);
        // console.log("Ini ALSO READ DATA:", alsoReadData);
        console.log("Ini new response:", newResponse);
        console.log("Ini newresponse[0]:", newResponse?.[0]);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDetailBlog();
  }, [params]);

  console.log(blogData?.fields.body);
  if (!blogData) {
    return <div>error</div>;
  }

  return (
    <div>
      <div className="main layout flex flex-col px-11 py-5 md:px-24 md:py-10 lg:px-96">
        <div className="maincontent flex flex-col">
          <div className="title py-3">
            <h1 className="text-justify text-xl font-bold md:text-4xl md:leading-normal lg:text-left lg:text-5xl lg:leading-relaxed">
              {blogData?.fields?.title as string}{" "}
              {/**Harus ada tipenya, kalau gakl gitu typscript error */}
            </h1>
          </div>
          <div className="excerpt">
            <p className="pt-2 text-justify text-sm md:text-lg lg:pb-4 lg:text-xl lg:leading-relaxed">
              {blogData?.fields?.excerpt as string}
            </p>
          </div>
          <div className="date flex items-center justify-between pb-2 md:pb-4 lg:pb-6">
            <p className="py-3 text-justify text-sm md:text-lg lg:text-xl lg:leading-relaxed">
              {blogData?.fields?.date as string}
            </p>
            <div className="flex items-center justify-center gap-5">
              <FaXTwitter className="md:h-7 md:w-7" />
              <FaInstagram className="md:h-7 md:w-7" />
              <MdEmail className="md:h-12 md:w-7" />
            </div>
          </div>
          <div className="image">
            <img
              src={`${(blogData.fields?.image as TypeStartupPowerhouseNewsletterImage).fields?.file?.url}`}
              className="h-full w-full rounded-xl shadow-sm"
              alt={`${(blogData.fields?.image as TypeStartupPowerhouseNewsletterImage).fields.file.fileName}`}
            />
          </div>
          <div className="body py-4 lg:py-10 [&>*]:py-2 [&>*]:text-justify [&>*]:lg:py-4 [&>*]:lg:text-xl [&>*]:lg:leading-loose">
            <RichText document={blogData?.fields?.body as RichTextDocument} />{" "}
            {/**Import tipenya langsung dari richtext karena ini fix datanya pasti tipenya sama */}
          </div>
          <div className="share">
            <div className="h-1 w-full bg-gray-100"></div>
          </div>
        </div>
        {/* <div className="another-content py-5 lg:py-10">
          <h1 className="py-2 text-xl font-bold lg:py-5 lg:text-2xl">
            Also read
          </h1>
          <div className="card-conatiner-also-read flex h-full w-full basis-1/2 flex-col flex-nowrap gap-4 overflow-hidden py-2 lg:flex-row">
            {alsoRead?.map((value, index: number) => (
              <Card
                key={index}
                className="flex h-full w-full flex-col justify-between lg:h-full"
              >
                <CardHeader className="h-full w-full">
                  <h1 className="font-bold">{value.fields?.title}</h1>
                  <p>{value.fields?.date}</p>
                </CardHeader>
                <CardContent className="h-full w-full">
                  <img
                    className="mb-3 rounded-lg"
                    src={`${(value.fields?.image as TypeStartupPowerhouseNewsletterImage).fields?.file.url}`}
                  />
                  <Button
                    className="w-full cursor-pointer"
                    onClick={() =>
                      router.push(`/page/resource/${value.fields?.slug}`)
                    }
                  >
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default BlogDetailPage;
