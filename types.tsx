import { NativeStackScreenProps } from "@react-navigation/native-stack/lib/typescript/src/types";

export type RootStackParamList = {
  Home: undefined;
  PartOne: { userId: string } | undefined;
  PartTwo: undefined;
  ProductDetail: { product: ProductType };
  Cart: undefined;
  PartThree: undefined;
  Login: undefined;
  SignUp: undefined;
};
export type Screen =
  | "Home"
  | "PartOne"
  | "PartTwo"
  | "PartThree"
  | "ProductDetail"
  | "Cart"
  | "Login"
  | "SignUp"
  | "ProductDetail";
export type HomeScreenProp = NativeStackScreenProps<RootStackParamList, "Home">;

export type PartOneProp = NativeStackScreenProps<RootStackParamList, "PartOne">;

export type PartTwoProp = NativeStackScreenProps<RootStackParamList, "PartTwo">;

export type PartThreeProp = NativeStackScreenProps<
  RootStackParamList,
  "PartThree"
>;

export type LoginProp = NativeStackScreenProps<RootStackParamList, "Login">;

export type SignUpProp = NativeStackScreenProps<RootStackParamList, "SignUp">;

export type ProductDetailProp = NativeStackScreenProps<
  RootStackParamList,
  "ProductDetail"
>;

export type ProductType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
};
