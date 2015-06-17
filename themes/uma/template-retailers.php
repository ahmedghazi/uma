<?php /* Template Name: RETAILERS */ get_header(); ?>
<div class="main">
	<section>

		

		<?php if (have_posts()): while (have_posts()) : the_post(); ?>

			<!-- article -->
			
				
				<div class=" colonne">
					<div class="form">
						<form action="">
							<p><input type="text" name="nom" placeholder="Nom:"></p>
							<p><input type="text" name="prenom" placeholder="Prénom:"></p>
							<p><input type="number" id="caisses" name="caisses"  placeholder="Nombre de caisse*:"></p>
							<p><textarea name="adresse" placeholder="Addresse:" id="" cols="" rows=""></textarea></p>
							<p><input type="text" id="total" name="total" disabled="disabled" placeholder="Total:"></p>
							<p><input type="submit" value="Commander"></p>
						</form>

						<div class="align_bottom">
							<p>Je définit l’heure et le jour de ma livraison par email avec l’équipe UMÀ après l’envois du formulaire.
							Je paye ma commande à la livraison.
							*Une caisse UMÀ Contient 14 bouteilles de 25cl.</p>
						</div>
					</div>
					<div class="map hidden" id="map"></div>
				</div>

				<div id="" class="contenu colonne">
					<div class="scroll">
						<?php
						$c = 0;
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
	$lat = get_field("lat");
	$lng = get_field("lng");
	$cl = $c == 0 ? "commander" : "retailer";

	echo "<li class='".$cl."' data-lat='".$lat."' data-lng='".$lng."'>".get_the_title().'</li>';
	$c++;
								endwhile;
								echo '</ul>';
							endif;
							wp_reset_postdata();
						?>
					</div>
				</div>

			

		<?php endwhile; ?>
		<?php endif; ?>

		

	</section>
	<!-- /section -->
</div><!-- /main -->

<?php get_footer(); ?>