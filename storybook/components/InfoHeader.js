import * as React from 'react';
import * as L from '../../leda';

export const InfoHeader = (props) => {
  if (!props) return null;

  const { kind, story } = props;

  const name = kind.split(/\|/).pop();

  return <L.H2 _title>{name} {story}</L.H2>;
};
