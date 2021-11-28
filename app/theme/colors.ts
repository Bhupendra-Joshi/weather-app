import { palette } from './palette'

/**
 * Roles for colors.  Prefer using these over the palette.  It makes it easier
 * to change things.
 *
 * The only roles we need to place in here are the ones that span through the app.
 *
 * If you have a specific use-case, like a spinner color.  It makes more sense to
 * put that in the <Spinner /> assets.
 */
export const COLORS = {

  /**
   * The palette is available to use, but prefer using the name.
   */
  palette,

  /**
   * The main tinting color.
   */
  primary: palette.blue,

  /**
   * The main tinting color, but darker.
   */
  primaryDarker: palette.black,

  /**
   * The main tinting color, but darker.
   */
  transparent: palette.transparent,

}
