export interface BestSellerProduct {
  id: string;
  name: string;
  rating: number;
  image: string;
  category?: string;
  link?: string;
  tags?: string[]; 
}

//Features
export interface Feature {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  imagePosition: "left" | "right";
  button: {
    text: string;
    link?: string;
  };
}
//Products

export interface Product {
  id: string;
  title: string;
  description: string;
  icon: string;
  category?: string;
  link?: string;
}


//Testimonials
export interface Testimonial {
  id: string;
  name: string;
  product: string;
  image: string;
  rating: number;
  text: string;
  verified?: boolean;
}

//Trust Features
export interface TrustFeature {
  id: string;
  title: string;
  icon: string;
}
