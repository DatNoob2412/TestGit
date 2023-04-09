<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'newphp' );

/** Database username */
define( 'DB_USER', 'newphp' );

/** Database password */
define( 'DB_PASSWORD', 'caominh1912' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'vrDsFfpSz`@Ow`Nc3Rh8H$nZr{?*L{C6=]9E=P>T!zS6x4Qvm?A,7>243m;<_&ro' );
define( 'SECURE_AUTH_KEY',  'JI0p$P[S7*9@35H3M;uVU#j5;WQbo@#d6cpcdu/(}iVbJL-_djTtPTG63w9f53Hb' );
define( 'LOGGED_IN_KEY',    'm/b_JB0Ot<b2e>typYM]3V#f/}!`A8lGKb@pDU?^RCWjEWKEJk.cxiUx/eLZKi]B' );
define( 'NONCE_KEY',        'xnqLgWL#18fR%(j##M!@1pYNZDJ>=h02_d?%0Lki%d2*%oIpr8S?%3$?#rv_JnbP' );
define( 'AUTH_SALT',        'aIC{*DvpD6kDq.iSsE+N ghj<A{p6A`ycDB$Ro,.-.)4@@VFz[mC2x+u757t@d[Y' );
define( 'SECURE_AUTH_SALT', 'YK^tL*WkI0seE@-oM4jl&HQwGy|ZUwm`PK>>*o5O-rL-h.aCh=o7XSIP!RRu,GN9' );
define( 'LOGGED_IN_SALT',   's+st.R}PY=$u@C9-m5uh&J-&2tJ-a(IWXR-I2D$CU>~-r7X O_@@$f%K2#F-Jl0M' );
define( 'NONCE_SALT',       '+Hd,PtT|_{UKrJ:0}L._(Nj[ [+4<{mtu}(3QIppm_=X}t F6p4u}6 m|@6D#VkT' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
