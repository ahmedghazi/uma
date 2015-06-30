<section class="hdd pin2">
	<?php 
		$bg = wp_get_attachment_image_src( get_post_thumbnail_id(), "full");
		$css = 'style="background-image:url('.$bg[0].');"';
	?>
	<div class="dispo histoire_dispo_droite parallax" <?php //echo $css;?> >
		<div class="histoire_banner banner_parallax">
			<div class="histoire_banner_img">
				<img src="<?php echo $bg[0];?>">
			</div>
		</div>

		<div class="colonne colonne_phonetique colonne_pin">
			<h3><?php the_field("titre"); ?></h3>
			<h4><?php the_field("phonetique"); ?></h4>
		</div>

		<div class="colonne colonne_desc">
			<?php the_content();?>
		</div>
	</div>
</section>
