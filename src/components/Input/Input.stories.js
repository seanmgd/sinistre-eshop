import { boolean, object, select, text } from '@storybook/addon-knobs'
import { Input as InputComponent } from './Input'

export default {
  title: 'Form elements/Inputs',
  component: InputComponent,
}

export const Example = () => (
  <InputComponent
    label={text('label', 'Adresse E-mail :')}
    type={select(
      'type',
      InputComponent.TYPES,
      InputComponent.defaultProps.type,
    )}
    touched={boolean('touched', false)}
    inputElementProps={object('inputElementProps', {
      type: 'email',
      placeholder: 'Mail Address',
      options: [
        { value: 'choice 1', displayValue: 'En cours' },
        { value: 'choice 2', displayValue: 'Réalisé' },
      ],
    })}
    invalid={boolean('invalid', false)}
  />
)

export const Input = () => (
  <InputComponent
    label={text('label', 'Adresse E-mail :')}
    type="input"
    touched={boolean('touched', false)}
    inputElementProps={object('inputElementProps', {
      type: 'email',
      placeholder: 'Mail Address',
    })}
    invalid={boolean('invalid', false)}
  />
)

export const Select = () => (
  <InputComponent
    label={text('label', 'Select')}
    type="select"
    touched={boolean('touched', false)}
    inputElementProps={object('inputElementProps', {
      options: [
        { value: 'choice 1', displayValue: 'En cours' },
        { value: 'choice 2', displayValue: 'Réalisé' },
      ],
    })}
    value={text('value', 'choice 0')}
    invalid={boolean('invalid', false)}
  />
)

export const Textarea = () => (
  <InputComponent
    label={text('label', 'Textarea')}
    type="textarea"
    touched={boolean('touched', false)}
    inputElementProps={object('inputElementProps', {
      rows: '5',
      cols: '33',
    })}
    value={text('value', 'this is a textarea...')}
    invalid={boolean('invalid', false)}
  />
)
