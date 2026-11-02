import { theme } from '../carnival';

const { colors } = theme;

/**
 * The midway map's neon night palette. Tent violets, whites and cyans come
 * from the carnival theme; the sky, ground, paths and other scenery shades only
 * the map uses live here.
 */
export const palette = {
  sky: '#2a1458',
  skyHigh: '#04051a',
  cloud: '#262b5c',
  cloudShade: '#1b1f48',
  haze: '#ff2bd6',

  grass: '#0a1129',
  grassDark: '#1c2d5c',
  grassEdge: '#00b8d4',
  grassLight: '#0f1a3a',
  path: '#1b2754',
  pathShade: '#151f45',
  hedge: '#16607a',
  hedgeDark: '#0d3a50',
  hedgeLight: '#22d3ee',
  shadow: 'rgba(0, 0, 12, 0.45)',

  red: colors.stripeA,
  redShade: '#7e16b0',
  cream: colors.stripeB,
  creamShade: '#9fb6d3',
  gold: colors.accent,
  goldShade: '#0091a8',
  blue: '#5b5bff',
  blueShade: '#3530b0',
  sky2: colors.water,
  pink: '#ff4fa3',
  pinkShade: '#c02c7a',
  wood: colors.wood,
  woodDark: '#242d48',
  woodLight: '#5a6890',
  board: '#2b3960',
  metal: '#d6e4ff',
  metalShade: '#7f93bf',
  ink: colors.background,
  opening: '#04060f',
  closed: '#3a4466',
  closedShade: '#283050',
  white: '#ffffff',

  skins: ['#f1c27d', '#c68642', '#8d5524', '#e0ac69', '#ffdbac'],
  hairs: ['#3b2219', '#1b1035', '#a55728', '#e6c35c', '#6b4429'],
  shirts: [colors.water, '#39ff88', '#a77bff', colors.danger, '#5b5bff', colors.stripeB],
  pants: ['#1c2440', '#2a1f45', '#33384a'],
  bunting: [colors.stripeA, colors.accent, '#5b5bff', colors.stripeB],
  balloons: [colors.stripeA, colors.accent, '#5b5bff', colors.water, '#ff4fa3'],
} as const;
