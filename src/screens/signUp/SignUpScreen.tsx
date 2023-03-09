import {AuthStackProps} from '@models/ScreenProps';
import auth from '@react-native-firebase/auth';
import {Button, TextInput} from '@src/components';
import {Formik} from 'formik';
import React from 'react';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {object, string} from 'yup';

export default function SignUpScreen({
  navigation,
}: AuthStackProps): JSX.Element {
  return (
    <Formik
      initialValues={{email: '', password: '', confirmPassword: ''}}
      validationSchema={object({
        email: string().email('Invalid email address').required('Required'),
        password: string()
          .required('Required')
          .min(10, 'Must be at least 10 characters'),
        confirmPassword: string()
          .required('Required')
          .min(10, 'Must be at least 10 characters'),
      })}
      onSubmit={values =>
        auth()
          .createUserWithEmailAndPassword(values.email, values.password)
          .catch(error => console.log(error.code))
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
              // errorMessage={errors.email}
              // renderErrorMessage={!errors.email && touched.email}
            />
            <TextInput
              autoCapitalize="none"
              placeholder="Enter Password"
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              // errorMessage={errors.password}
              // renderErrorMessage={!errors.password && touched.password}
              secureTextEntry={true}
            />
            <TextInput
              autoCapitalize="none"
              placeholder="Confirm Password"
              onChangeText={handleChange('confirmPassword')}
              onBlur={handleBlur('confirmPassword')}
              value={values.confirmPassword}
              // errorMessage={errors.confirmPassword}
              // renderErrorMessage={
              // !errors.confirmPassword && touched.confirmPassword
              // }
              secureTextEntry={true}
            />
            <Button title="Sing Up" onPress={handleSubmit} />
            <Button
              title="Sign In"
              onPress={() => navigation.navigate('SignIn')}
            />
          </View>
        </SafeAreaView>
      )}
    </Formik>
  );
}
