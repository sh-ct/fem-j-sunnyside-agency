export interface IData {
  ctaRows: ICtaRow[];
  ctaImages: ICtaImage[];
  testimonials: ITestimonial[];
}

export interface ICta {
  image: string;
  title: string;
  description: string;
  alt: string;
}

export interface ICtaRow extends ICta {
  highlight: string;
  url: string;
  reverse: boolean;
}

export interface ICtaImage extends ICta {
  textColor: string;
}

export interface ITestimonial {
  image: string;
  alt: string;
  name: string;
  role: string;
  bio: string;
}
