<?php /* Template Name: HOME */ get_header(); ?>

	
		

	<?php if (have_posts()): while (have_posts()) : the_post(); ?>

		
		<?php 
		$intro_visuel = wp_get_attachment_image_src( get_post_thumbnail_id(), "full");
		$intro_visuel_css = 'style="background-image:url('.$intro_visuel[0].');"';
		
		$intro_volet_gauche = get_field("volet_gauche");
		$intro_volet_gauche_css = 'style="background-image:url('.$intro_volet_gauche["url"].');"';

		$intro_volet_droit = get_field("volet_droit");
		$intro_volet_droit_css = 'style="background-image:url('.$intro_volet_droit["url"].');"';

		?>
			
		<div id="intro">
			<div id="intro_visuel" <?php echo $intro_visuel_css;?>></div>
			<div id="intro_volet_gauche" class="anime_lgg" <?php echo $intro_volet_gauche_css;?>></div>
			<div id="intro_volet_droit"  class="anime_lgg" <?php echo $intro_volet_droit_css;?>></div>
		</div>
			
		

	<?php endwhile; ?>
	<?php endif; ?>



	



<?php get_footer(); ?>