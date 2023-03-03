import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type AppTabParamList = {
  Home: undefined;
  Chat: undefined;
  Settings: undefined;
};

export type AppTabProps = NativeStackScreenProps<AppTabParamList>;

export type AuthStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

export type AuthStackProps = NativeStackScreenProps<AuthStackParamList>;
