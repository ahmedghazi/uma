<?php /* Template Name: RETAILERS */ get_header(); ?>

	<section>

		<input type="hidden" id="bdc" value="<?php body_class(); ?>">

		<?php if (have_posts()): while (have_posts()) : the_post(); ?>

			<!-- article -->
			<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
				
				<div class=" colonne">
					<div class="form">
						<form action="">
							<p><input type="text" name="nom" placeholder="Nom:"></p>
							<p><input type="text" name="prenom" placeholder="Prénom:"></p>
							<p><input type="number" name="caisses" placeholder="Nombre de causse*:"></p>
							<p><textarea name="addresse" placeholder="Addresse:" id="" cols="30" rows="10"></textarea></p>
							<p><input type="number" name="total" placeholder="Total:"></p>
						</form>

						<div class="align_bottom">
							<p>Je définit l’heure et le jour de ma livraison par email avec l’équipe UMÀ après l’envois du formulaire.
							Je paye ma commande à la livraison.
							*Une caisse UMÀ Contient 14 bouteilles de 25cl.</p>
						</div>
					</div>
					<div class="map"></div>
				</div>

				<div id="" class="contenu colonne">
					<div class="scroll">
						<?php
							$args = array(
								"post_type" => "page",
								"post_parent" => get_the_ID(),
								"post_status" => "publish",
								"orderby" => "menu_order",
							);

							$q = new WP_Query( $args );
		
							if ( $q->have_posts() ) :
								echo '<ul class="retailers">';
								while ( $q->have_posts() ) : $q->the_post();
									$template = basename( get_page_template() );
									$href = get_permalink(geT_the_ID());
									
									echo "<li class='retailer'><a data-role='ajax' class='anime' href='".$href."'>".get_the_title().'</a></li>';

									
								
								endwhile;
								echo '</ul>';
							endif;
							wp_reset_postdata();
						?>
					</div>
				</div>

			</article>
			<!-- /article -->

		<?php endwhile; ?>
		<?php endif; ?>

		

	</section>
	<!-- /section -->


<?php get_footer(); ?>