/* ProductResponse */
export interface Product {
  ProductName: string;
  NumberOfVariants: number;
}

export interface ProductResponse {
  PageCount: number;
  Page: number;
  Products: Product[];
  HadError: boolean;
}

/* PreconfiguredProducts */
export interface PreconfiguredProducts {
  Sku: string;
  Name: string;
  Description: string;
  Items: Item[];
  Images: Image[];
}

export interface Item {
  ProductId: number | null;
  ProductVariantSku: string;
  TemplateName: string | null;
  Preconfigurations: Preconfiguration[];
}

export interface Preconfiguration {
  SpaceDesc: string;
  SpaceId: string;
  Url: string;
}

export interface Image {
  Url: string;
  Index?: number;
  Id?: string;
}

/* Templates */
export interface Layer {
  Id: string;
  Description: string;
  Type: string;
  ZIndex: number;
  X1: number;
  X2: number;
  Y1: number;
  Y2: number;
  Color: string;
  BackgroundImageUrl: string;
  OverlayImageUrl: string;
  FontName: string;
  FontSize: string;
  FontHAlignment: string;
  FontVAlighment: string;
  DefaultText: string;
}

export interface Space {
  Id: string;
  Description: string;
  Index: number;
  DefaultRotation: number;
  Layers: Layer[];
}

export interface Option {
  Name: string;
  ImageUrl: string;
  IsDefault: boolean;
  Category: string;
  IsPartnerSpecific: boolean;
  Spaces: Space[];
}

export interface ProductTemplate {
  Options: Option[];
}
