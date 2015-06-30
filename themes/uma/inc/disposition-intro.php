<section class="parallax">
	<div class="dispo dispo_intro">
		
	<?php
	$img = wp_get_attachment_image_src( get_post_thumbnail_id(), "full");
	//$css = 'style="background-image:url('.$bg[0].');"';
	?>
		<div class="banner">
			<div class="banner_img">
				<img src="<?php echo $img[0];?>">
			</div>
			<div class="banner_texte">
				<p><?php echo get_the_content();?></p>
				<div class="clear"></div>
				<i class="fa fa-chevron-down"></i>
			</div>
		</div>
	</div>
</section>

