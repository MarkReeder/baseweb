import * as React from 'react';

export interface FLOATING_MARKER_ANCHOR_POSITIONS {
  none: 'none';
  topLeft: 'top-left';
  topRight: 'top-right';
  bottomRight: 'bottom-right';
  bottomLeft: 'bottom-left';
}

export interface NEEDLE_SIZES {
  none: 'none';
  short: 'short';
  medium: 'medium';
  tall: 'tall';
}

export interface PINHEAD_SIZES {
  xSmallCircle: 'x-small-circle';
  xSmallSquare: 'x-small-square';
  small: 'small';
  medium: 'medium';
  large: 'large';
}

export interface PINHEAD_TYPES {
  floating: 'floating';
  fixed: 'fixed';
}

export interface FLOATING_MARKER_SIZES {
  small: 'small';
  medium: 'medium';
  large: 'large';
}

export interface FLOATING_MARKER_ANCHOR_TYPES {
  round: 'round';
  square: 'square';
}

export type NeedleSizeT = ValueOf<NEEDLE_SIZES>;
export type PinHeadT = ValueOf<PINHEAD_TYPES>;
export type PinHeadSizeT = ValueOf<PINHEAD_SIZES>;
export type AnchorPositionsT = ValueOf<FLOATING_MARKER_ANCHOR_POSITIONS>;
export type FloatingMarkerSizeT = ValueOf<FLOATING_MARKER_SIZES>;

export type FixedMarkerPropsT = {
  size?: PinHeadSizeT;
  needle?: NeedleSizeT;
  label?: string;
  startEnhancer?: React.Node;
  endEnhancer?: React.Node;
  color?: string;
  background?: string;
  dragging?: boolean;
};

export type FloatingMarkerPropsT = {
  color?: string;
  background?: string;
  label?: string;
  anchor?: AnchorPositionsT;
  endEnhancer?: React.Node;
  startEnhancer?: React.Node;
  anchorType?: FloatingMarkerAnchorTypeT;
  size?: FloatingMarkerSizeT;
};

export const FLOATING_MARKER_ANCHOR_POSITIONS: FLOATING_MARKER_ANCHOR_POSITIONS;
export const NEEDLE_SIZES: NEEDLE_SIZES;
export const PINHEAD_SIZES: PINHEAD_SIZES;
export const PINHEAD_TYPES: PINHEAD_TYPES;
export const FLOATING_MARKER_ANCHOR_TYPES: FLOATING_MARKER_ANCHOR_TYPES;
export const FLOATING_MARKER_SIZES: FLOATING_MARKER_SIZES;

export const FixedMarker: React.FC<FixedMarkerPropsT>;
export const FloatingMarker: React.FC<FloatingMarkerPropsT>;