<?php /* Template Name: GAUCHE DROITE CENTRE */ get_header(); ?>

	
<div class="main">
		

		<?php if (have_posts()): while (have_posts()) : the_post(); ?>

			<!-- article -->
			
				
				<?php
					$args = array(
						"post_type" => "page",
						"post_parent" => get_the_ID(),
						"post_status" => "publish",
						"orderby" => "menu_order",
						"order" => "ASC"
					);

					$q = new WP_Query( $args );

					if ( $q->have_posts() ) :
						//echo '<ul class="retailers">';
						while ( $q->have_posts() ) : $q->the_post();
					
							$disposition = geT_field("disposition");
							switch($disposition){
								case "intro":
								include(locate_template('inc/disposition-intro.php'));
								break;
								case "centre":
								include(locate_template('inc/disposition-centre.php'));
								break;
								case "gauche":
								include(locate_template('inc/disposition-gauche.php'));
								break;
								case "droite":
								include(locate_template('inc/disposition-droite.php'));
								break;
							}
							
						endwhile;
						//echo '</ul>';
					endif;
					wp_reset_postdata();
				?>

				
			

		<?php endwhile; ?>
		<?php endif; ?>

		
<div class="sep200"></div>
	
	</div><!-- /main -->


<?php get_footer(); ?>