<section class="">
	<?php 
		$bg = wp_get_attachment_image_src( get_post_thumbnail_id(), "full");
		$css = 'style="background-image:url('.$bg[0].');"';
	?>
	<div class="dispo histoire_dispo_droite" <?php //echo $css;?> >
		<div class="histoire_banner">
			<div class="histoire_banner_img">
				<img src="<?php echo $bg[0];?>">
			</div>
		</div>

		<div class="colonne colonne_ideo">
			<h3>Umanu</h3>
			<img src="<?php echo get_template_directory_uri(); ?>/img/ideo-umanu.png" alt="ideogramme Umanu" width="451" height="">
		</div>
		<div class="colonne colonne_desc">
			<?php the_content();?>
		</div>
	</div>
</section>
