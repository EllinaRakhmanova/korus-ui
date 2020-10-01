import * as React from 'react';
import * as L from '../../leda';

export const InfoContent = ({ text, additionalInfo }) => {
  if (!text) return '';

  const addInfo = !additionalInfo
    ? null
    : additionalInfo;

  return (
    <React.Fragment>
      <L.Span><p>{text}</p></L.Span>
      {addInfo}
      <L.Div _clear />
      <br />
    </React.Fragment>
  );
};
