import { NativeStackScreenProps } from "@react-navigation/native-stack/lib/typescript/src/types";

export type RootStackParamList = {
  Home: undefined;
  PartOne: { userId: string } | undefined;
  PartTwo: undefined;
};

export type HomeScreenProp = NativeStackScreenProps<RootStackParamList, "Home">;

export type PartOneProp = NativeStackScreenProps<RootStackParamList, "PartOne">;

export type PartTwoProp = NativeStackScreenProps<RootStackParamList, "PartTwo">;
