import React, { useState } from 'react';
import * as L from '../../leda';
import { LiveDemo } from './LiveDemo';
import { PropsTable } from './PropsTable';
import { CustomPropsTable } from './CustomPropsTable';

export const ApiStory = (props) => {
  const {
    context,
    source,
    liveDemo,
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
        {compoundCustomProps.map((propsSet) => {
          const subComponentProps = {
            isPropsOpen,
            setPropsOpen,
            source,
            context,
            customProps: propsSet.props,
          };

          return (
            <L.Section _block>
              <L.H2 _title>{propsSet.componentName.replace(/\w+\|\s/, '')} Props</L.H2>
              <CustomPropsTable {...subComponentProps} />
            </L.Section>
          );
        })}

        <LiveDemo {...liveDemoProps} />
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
      <L.H2 _title>{context.kind.replace(/\w+\|\s/, '')} Props</L.H2>
      {customProps
        ? <CustomPropsTable {...tableProps} />
        : <PropsTable {...tableProps} />
      }
      <LiveDemo {...liveDemoProps} />
    </L.Div>
  );
};
