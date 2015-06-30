<section class="">
	<div class="dispo histoire_dispo_intro">
		<?php echo get_the_content();?>
		<?php
		//$img = wp_get_attachment_image_src( get_post_thumbnail_id(), "full");
		?>
		<?php the_post_thumbnail();?>
		
		<div class="clear"></div>
		<i class="fa fa-chevron-down"></i>
	</div>
</section>

