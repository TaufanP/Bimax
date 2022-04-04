import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {TextInputProps} from 'react-native';
import {Gap, Phrase} from '~components/atoms';
import spaces from '~constants/spaces';
import {numberOnly} from '~helpers';
import Field from '../Field';
import PresetButton from '../PresetButton';

interface IForm {
  value: string;
}

interface BodyInputProps extends TextInputProps {
  label: string;
  buttonLabel: string;
  onSave(value: number): void;
}

const BodyInput = ({label, buttonLabel, onSave, ...props}: BodyInputProps) => {
  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm<IForm>({
    defaultValues: {
      value: '',
    },
    mode: 'onChange',
  });

  const onSubmit = (data: IForm) => onSave(parseFloat(data?.value));

  return (
    <>
      <Phrase preset="subheadingBold">{label}</Phrase>
      <Gap vertical={spaces.medium} />
      <Controller
        control={control}
        rules={{
          required: {
            value: true,
            message: 'Please fill the input',
          },
          validate: numberOnly,
        }}
        render={({field: {onChange, value}}) => (
          <>
            <Field
              autoFocus
              keyboardType="decimal-pad"
              maxLength={6}
              onChangeText={onChange}
              value={value}
              {...props}
            />
            {!!errors?.value?.message && (
              <>
                <Gap vertical={spaces.small} />
                <Phrase preset="danger">{errors?.value?.message}</Phrase>
              </>
            )}
          </>
        )}
        name="value"
      />
      <Gap vertical={spaces.semiLarge} />
      <PresetButton disabled={!isValid} onPress={handleSubmit(onSubmit)}>
        {buttonLabel}
      </PresetButton>
    </>
  );
};

export default BodyInput;
