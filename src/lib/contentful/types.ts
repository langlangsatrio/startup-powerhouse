import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypeStartupPowerhouseServicesImage {
  sys: { id: string };
  fields: {
    file: {
      url: string;
      fileName?: string;
      contentType?: string;
    };
  };
}

export interface TypeStartupPowerhouseServicesFields {
  slug: EntryFieldTypes.Symbol;
  title: EntryFieldTypes.Symbol;
  shortDescription: EntryFieldTypes.Symbol;
  price: EntryFieldTypes.Symbol;
  serviceDescription: EntryFieldTypes.RichText;
  benefit: EntryFieldTypes.RichText;
  notBenefit: EntryFieldTypes.RichText;
  image: EntryFieldTypes.AssetLink;
}

export type TypeStartupPowerhouseServicesSkeleton = EntrySkeletonType<
  TypeStartupPowerhouseServicesFields,
  "startupPowerhouseServices"
>;
export type TypeStartupPowerhouseServices<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeStartupPowerhouseServicesSkeleton, Modifiers, Locales>;
