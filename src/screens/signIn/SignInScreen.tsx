import {Button, TextInput} from '@components';
import auth from '@react-native-firebase/auth';
import {AuthStackProps} from '@src/models';
import {Formik} from 'formik';
import React from 'react';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import {object, string} from 'yup';

export default function SignInScreen({
  navigation,
}: AuthStackProps): JSX.Element {
  const showErrorToast = (error: string) => {
    Toast.show({
      type: 'error',
      text1: 'Sign In Error',
      text2: error,
      position: 'bottom',
    });
  };

  return (
    <Formik
      initialValues={{email: '', password: ''}}
      validationSchema={object({
        email: string().email('Invalid email address').required('Required'),
        password: string().required('Required'),
      })}
      onSubmit={values =>
        auth()
          .signInWithEmailAndPassword(values.email, values.password)
          .catch((error: string) => showErrorToast(error))
      }
      validateOnChange={false}
      validateOnBlur={false}>
      {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
        <SafeAreaView>
          <View>
            <TextInput
              autoCapitalize="none"
              placeholder="Enter Email Address"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              errorMessage={errors.email}
              renderErrorMessage={!!errors.email && touched.email}
            />
            <TextInput
              autoCapitalize="none"
              placeholder="Enter Password"
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              errorMessage={errors.password}
              renderErrorMessage={!!errors.password && touched.password}
              secureTextEntry={true}
            />
            <Button title="Sign in" onPress={handleSubmit} />
            <Button
              title="Sign up"
              onPress={() => navigation.navigate('SignUp')}
            />
          </View>
        </SafeAreaView>
      )}
    </Formik>
  );
}
