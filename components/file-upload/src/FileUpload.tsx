import { FC, ReactNode, createElement as h } from 'react';
import { FormGroup } from '@not-govuk/form-group';
import { Input, InputProps } from '@not-govuk/input';

import '../assets/FileUpload.scss';

export type FileUploadProps = Omit<InputProps, 'type'> & {
  /** Error message */
  error?: ReactNode
  /** Hint */
  hint?: ReactNode
  /** Label */
  label: ReactNode
  /** HTML name */
  name: string
};

export const FileUpload: FC<FileUploadProps> = ({
  classBlock = 'govuk-file-upload',
  classModifiers: _classModifiers = [],
  className,
  error,
  hint,
  id: _id,
  label,
  ...attrs
}) => {
  const classModifiers = [
    error ? 'error' : undefined,
    ...(Array.isArray(_classModifiers) ? _classModifiers : [_classModifiers])
  ];
  const id = _id || attrs.name;
  const fieldId = `${id}-input`;
  const hintId = `${id}-hint`;
  const errorId = `${id}-error`;
  const describedBy = ([
    hint && hintId,
    error && errorId
  ]
    .filter(e => e)
    .join(' ') || undefined
  );

  return (
    <FormGroup
      id={id}
      fieldId={fieldId}
      label={label}
      hint={hint}
      hintId={hintId}
      error={error}
      errorId={errorId}
    >
      <Input
        {...attrs}
        type="file"
        classBlock={classBlock}
        classModifiers={classModifiers}
        className={className}
        aria-describedby={describedBy}
        id={fieldId}
      />
    </FormGroup>
  );
};

FileUpload.displayName = 'FileUpload';

export default FileUpload;
