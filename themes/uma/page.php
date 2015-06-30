<?php get_header(); ?>

<div class="main">
		<!-- section -->
		<section>

		<input type="hidden" id="bdc" value="<?php body_class(); ?>">

		<?php if (have_posts()): while (have_posts()) : the_post(); ?>

			<!-- article -->
			<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
				
				<div class="visionneuse colonne">
					<div class="slide animate vhidden" style="background-image:url(http://placehold.it/500x500&text=UMÀ1)"></div>
					<div class="slide animate vhidden" style="background-image:url(http://placehold.it/500x500&text=UMÀ2)"></div>
					<div class="slide animate vhidden" style="background-image:url(http://placehold.it/500x500&text=UMÀ3)"></div>
				</div>

				<div id="" class="contenu colonne">
					<div class="scroll">
						<?php the_content(); ?>
					</div>
				</div>

			</article>
			<!-- /article -->

		<?php endwhile; ?>

		<?php else: ?>

			<!-- article -->
			<article>

				<h2><?php _e( 'Sorry, nothing to display.', 'html5blank' ); ?></h2>

			</article>
			<!-- /article -->

		<?php endif; ?>

		</section>
		<!-- /section -->
	
</div><!-- /main -->

<?php get_footer(); ?>
