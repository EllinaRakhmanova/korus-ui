import React, { useState } from 'react';
import * as L from '../../leda';
import { LiveDemo } from './LiveDemo';
import { InfoHeader } from './InfoHeader';
import { PropsTable } from './PropsTable';
import { InfoContent } from './InfoContent';
import { CustomPropsTable } from './CustomPropsTable';

export const Story = (props) => {
  const {
    context,
    source,
    liveDemo,
    text,
    additionalInfo,
    props: componentProps,
    customProps,
    compoundCustomProps,
  } = props;

  const [isPropsOpen, setPropsOpen] = useState(true);

  const [isDemoOpen, setDemoOpen] = useState(true);

  const liveDemoProps = {
    isDemoOpen,
    setDemoOpen,
    liveDemo,
  };

  if (compoundCustomProps) {
    return (
      <L.Div _article>
        <InfoHeader {...context} />
        <InfoContent text={text} additionalInfo={additionalInfo} />
        <LiveDemo {...liveDemoProps} />

        {compoundCustomProps.map((propsSet) => {
          const subComponentProps = {
            isPropsOpen,
            setPropsOpen,
            source,
            context,
            customProps: propsSet.props,
          };

          return (
            <L.Div>
              <L.H2 _title>{propsSet.componentName.replace(/\w+\|\s/, '')} Props</L.H2>
              <CustomPropsTable {...subComponentProps} />
            </L.Div>
          );
        })}
      </L.Div>
    );
  }

  const tableProps = {
    isPropsOpen,
    setPropsOpen,
    source,
    context,
    props: componentProps,
    customProps,
  };

  return (
    <L.Div _article>
      <InfoHeader {...context} />
      <InfoContent text={text} additionalInfo={additionalInfo} />
      <LiveDemo {...liveDemoProps} />
      {customProps
        ? <CustomPropsTable {...tableProps} />
        : <PropsTable {...tableProps} />
      }
    </L.Div>
  );
};
