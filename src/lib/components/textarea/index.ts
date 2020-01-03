import * as React from 'react';
import FormField from '../form-field';

interface ITextarea {
  /** Extra CSS classes to be applied */
  className?: string,
  /** Whether the field should be disabled */
  disabled?: boolean,
  /** Error message */
  error?: string,
  /** Hint */
  hint?: string,
  /** HTML id (If not specified then the name will be used) */
  id?: string,
  /** Label */
  label: any,
  /** HTML name */
  name: string,
  /** Initial number of lines of input on a textarea */
  rows?: number,
};

export const Textarea: React.SFC<ITextarea> = props =>
  React.createElement(FormField, {
    className: props.className,
    disabled: props.disabled,
    error: props.error,
    hint: props.hint,
    id: props.id,
    label: props.label,
    name: props.name,
    rows: props.rows,
    type: 'textarea'
  });

Textarea.defaultProps = {
  className: null,
  disabled: false,
  error: null,
  hint: null,
  id: null,
  rows: null
};

export default Textarea;
