<?php
/**
 * The sidebar containing the main widget area.
 *
 * If no active widgets in sidebar, let's hide it completely.
 *
 * @package WordPress
 * @subpackage Twenty_Twelve
 * @since Twenty Twelve 1.0
 */
?>

	<script>var HN_OPTIN_WIDGET={"src":"https://e.hirenurture.com/optin/widget?user_id=550823092a30dbd46d21402f","isDocked":"true","dockElementId":"hirenurtureContainer"};</script>
	<script src="https://e.hirenurture.com/javascripts/optin/load_widget.js"></script>
	<div id="hirenurtureContainer"></div>

	<?php if ( is_active_sidebar( 'sidebar-1' ) ) : ?>
		<div id="secondary" class="widget-area" role="complementary">			
			<?php dynamic_sidebar( 'sidebar-1' ); ?>
		</div><!-- #secondary -->
	<?php endif; ?>