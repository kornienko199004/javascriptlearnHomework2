export interface Place {
  img: string;
  address: string;
  phone: number;
  weather: {
     title: string;
     icon: string;
     water: number;
     temperature: number;
  };
  social_info: {
     title: string;
     img: string;
     followers: number;
     following: number;
  };
  type: string;
}
