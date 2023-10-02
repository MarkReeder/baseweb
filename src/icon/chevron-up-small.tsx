/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// BASEUI-GENERATED-REACT-ICON
// DO NOT EDIT THIS FILE DIRECTLY, SEE README.md
import * as React from 'react';
import { useStyletron } from '../styles';
import { mergeOverride, toObjectOverride } from '../helpers/overrides';

import Icon from './icon';
import type { IconProps } from './types';

function ChevronUpSmall(props: IconProps, ref) {
  const [, theme] = useStyletron();
  const { title = 'Up Small', size, color, overrides = {}, ...restProps } = props;
  const SvgOverride = mergeOverride(
    // Icons from the theme target the SVG override in the underlying Icon component
    {
      component: theme.icons && theme.icons.ChevronUpSmall ? theme.icons.ChevronUpSmall : null,
    },
    overrides && overrides.Svg ? toObjectOverride(overrides.Svg) : {}
  );
  return (
    <Icon
      viewBox="0 0 24 24"
      ref={ref}
      title={title}
      size={size}
      color={color}
      overrides={{ Svg: SvgOverride }}
      {...restProps}
    >
      <rect width="24" height="24" fill="white" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.0607 8.93934C12.4749 8.35355 11.5251 8.35355 10.9394 8.93934L6.93936 12.9393C6.35358 13.5251 6.35358 14.4749 6.93936 15.0607C7.52515 15.6464 8.4749 15.6464 9.06068 15.0607L12 12.1213L14.9394 15.0607C15.5252 15.6464 16.4749 15.6464 17.0607 15.0607C17.6465 14.4749 17.6465 13.5251 17.0607 12.9393L13.0607 8.93934Z"
        fill="black"
      />
    </Icon>
  );
}

export default React.forwardRef<SVGSVGElement, IconProps>(ChevronUpSmall);
