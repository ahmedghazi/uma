<?php /* Template Name: INGRÉDIENTS */ get_header(); ?>
<div class="main">
	
		<?php if (have_posts()): while (have_posts()) : the_post(); ?>

			
			<?php include(locate_template('inc/disposition-intro.php'));?>

<section>
				<div class=" colonne">
				<?php
					$alphabet = array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');
					$args = array(
						"post_type" => "page",
						"post_parent" => get_the_ID(),
						"post_status" => "publish",
						"orderby" => "menu_order",
						"order" => "ASC"
					);

					$q = new WP_Query( $args );

					if ( $q->have_posts() ) :
						$c = 0;
						$arr_content = array();
						while ( $q->have_posts() ) : $q->the_post();?>
							
									<h2 data-idx="<?php echo $c?>"><?php echo $alphabet[$c].". "?><?php the_title();?></h2>
									
									<?php 
									$arr_content[] = array(
										"content" =>get_the_content(),
										"color" => geT_field("couleur"),
										"alpha" => $alphabet[$c],
									);
									$c++;
									?>
								
	
						<?php	
						endwhile;
						//echo '</ul>';
					endif;
					wp_reset_postdata();
				?>
				</div>

				<div id="" class="contenu colonne ">
					<?php
					$c = 0;
					foreach ($arr_content as $content) {
						$bg_color = $content["color"];
						if($bg_color == "")$bg_color = "#FFFFFF";
						$css = "style='background-color:".$bg_color."'";
						?>
						<div class="content_ingredient slideRight anime_md" <?php echo $css ;?> data-idx="<?php echo $c?>">
							<?php echo $content["alpha"].". "; ?>
							<?php echo $content["content"]; ?>
						</div>
						<?php
						$c++;
					}
					?>
				</div>

			

		<?php endwhile; ?>
		<?php endif; ?>

		

	</section><!-- /section -->
	
</div><!-- /main -->

<?php get_footer(); ?>