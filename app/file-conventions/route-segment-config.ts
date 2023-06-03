// The Route Segment options allows you configure the behavior of a Page, Layout, or Route Handler 
// by directly exporting the following variables:

/**
_________________________________________________________________________________________________________________________
|  Option                              Type        	                                             Default                 |
|________________________________________________________________________________________________________________________|
|  dynamic	           'auto' | 'force-dynamic' | 'error' | 'force-static'	                      'auto'                 |
|________________________________________________________________________________________________________________________|
|dynamicParams                        	boolean	                                                   true                  |
|________________________________________________________________________________________________________________________|
|revalidate	            false | 'force-cache' | 0 | number	                                       false                 |
|________________________________________________________________________________________________________________________|
|fetchCache	        'auto' | 'default-cache' | 'only-cache' | 'force-cache' |                                            |
|                    'force-no-store' | 'default-no-store' | 'only-no-store'	                     'auto'                |
|________________________________________________________________________________________________________________________|
|runtime                         	'nodejs' | 'edge'	                                              'nodejs'               |
|________________________________________________________________________________________________________________________|
|preferredRegion	          'auto' | 'global' | 'home' | string | string[]	                       'auto'                |
|________________________________________________________________________________________________________________________|
 */

// Examples:
export const dynamic = 'auto';
export const dynamicParams = true;
export const revalidate = false;
export const fetchCache = 'auto';
export const runtime = 'nodejs';
export const preferredRegion = 'auto';
