import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypeStartupPowerhouseNewsletterImage {
  sys: { id: string };
  fields: {
    file: {
      url: string;
      fileName?: string;
      contentType?: string;
    };
  };
}

export interface TypeStartupPowerhouseNewsletterFields {
  title: EntryFieldTypes.Symbol;
  excerpt: EntryFieldTypes.Symbol;
  image: EntryFieldTypes.AssetLink;
  date: EntryFieldTypes.Date;
  body: EntryFieldTypes.RichText;
  slug: EntryFieldTypes.Symbol;
}

export type TypeStartupPowerhouseNewsletterSkeleton = EntrySkeletonType<
  TypeStartupPowerhouseNewsletterFields,
  "startupPowerhouseNewsletter"
>;
export type TypeStartupPowerhouseNewsletter<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeStartupPowerhouseNewsletterSkeleton, Modifiers, Locales>;

export interface TypeStartupPowerhouseNewsletterFieldsNEW {
  title: EntryFieldTypes.Symbol;
  excerpt: EntryFieldTypes.Symbol;
  image: {
    sys: { id: string };
    fields: {
      file: {
        url: string;
        fileName?: string;
        contentType?: string;
      };
    };
  };
  date: EntryFieldTypes.Date;
  body: EntryFieldTypes.RichText;
  slug: EntryFieldTypes.Symbol;
}
