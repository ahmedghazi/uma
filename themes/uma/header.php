<!doctype html>
<html <?php language_attributes(); ?> class="no-js">
	<head>
		<meta charset="<?php bloginfo('charset'); ?>">
		<title><?php wp_title(''); ?><?php if(wp_title('', false)) { echo ' :'; } ?> <?php bloginfo('name'); ?></title>

		<link href="//www.google-analytics.com" rel="dns-prefetch">
        <link href="<?php echo get_template_directory_uri(); ?>/img/icons/favicon.ico" rel="shortcut icon">
        <link href="<?php echo get_template_directory_uri(); ?>/img/icons/touch.png" rel="apple-touch-icon-precomposed">

		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<!--meta name="description" content="<?php bloginfo('description'); ?>"-->
		
		<?php //get_meta_og();?>
		<?php wp_head(); ?>
		<script>
        // conditionizr.com
        // configure environment tests
        conditionizr.config({
            assets: '<?php echo get_template_directory_uri(); ?>',
            tests: {}
        });
        </script>

        <script>
        	var ajaxUrl = "<?php bloginfo('url'); ?>/wp-admin/admin-ajax.php";
			var baseDir = "<?php bloginfo('url'); ?>";
			var templateDir = "<?php echo get_template_directory_uri(); ?>";
        </script>

	</head>
	<body <?php body_class(); ?>>

		<!-- wrapper -->
		<div class="wrapper vhidden">

			<!-- header -->
			<header class="header " role="banner">

					<!-- logo -->
					<div class="logo floatleft">
						<h1>
							<a href="<?php echo home_url(); ?>">
								<!-- svg logo - toddmotto.com/mastering-svg-use-for-a-retina-web-fallbacks-with-png-script -->
								UMÀ
							</a>
						</h1>
					</div>
					<!-- /logo -->

					<!-- nav -->
					<nav class="nav floatright" role="navigation">
						<?php //html5blank_nav(); ?>
						<?php 
							$args = array(
							  'menu'       	  => 'Menu Header', 
							  'theme_location'  => 'primary',
							  'container'       => 'div', 
							  //'container_id'    => 'menu',
							  'echo'            => true,
							  //'fallback_cb'     => 'wp_page_menu',
							  //'link_before' 	=> '',
							  //'link_after' 		=> '<span class="sep-menu">•</span>',
							  'items_wrap'      => '<ul id="%1$s" class="%2$s">%3$s</ul>',
							  'depth'           => 1,
							  'walker'          => '');

							wp_nav_menu($args);	
						?>
					</nav>
					<!-- /nav -->

			</header>
			<!-- /header -->

			