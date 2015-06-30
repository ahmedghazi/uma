			<!-- footer -->
			<footer >
				<div class="footer_col">
					<div class="copy">
						All images &copy;<?php echo date("Y"); ?> <?php echo bloginfo("name"); ?>
					</div>
				</div><!--
				--><div class="footer_col aligncenter">
					<ul class="social">
						<li><a target="_blank" href="https://www.facebook.com/drinkuma"><i class="fa fa-facebook"></i></a></li>
						<li><a target="_blank" href="https://twitter.com/uma_paris_"><i class="fa fa-twitter"></i></a></li>
						<li><a target="_blank" href="https://instagram.com/uma.paris"><i class="fa fa-pinterest"></i></a></li>
					</ul>
				</div><!--
				--><div class="footer_col ">
					<nav class=" alignright" role="">
					<?php 
						$args = array(
						  'menu'       	  => 'Menu Footer', 
						  'theme_location'  => 'primary',
						  'container'       => 'div', 
						  //'container_id'    => 'menu',
						  'echo'            => true,
						  //'fallback_cb'     => 'wp_page_menu',
						  //'link_before' 	=> '',
						  //'link_after' 		=> '<span class="sep-menu">•</span>',
						  'items_wrap'      => '<ul id="%1$s" class="%2$s">%3$s</ul>',
						  'depth'           => 1,
						  'walker'          => '');

						wp_nav_menu($args);	
					?>
					</nav>
				</div>

			</footer>
			<!-- /footer -->

			

		</div>
		<!-- /wrapper -->

		<?php wp_footer(); ?>

		<!-- analytics -->
		<script>
		(function(f,i,r,e,s,h,l){i['GoogleAnalyticsObject']=s;f[s]=f[s]||function(){
		(f[s].q=f[s].q||[]).push(arguments)},f[s].l=1*new Date();h=i.createElement(r),
		l=i.getElementsByTagName(r)[0];h.async=1;h.src=e;l.parentNode.insertBefore(h,l)
		})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
		ga('create', 'UA-XXXXXXXX-XX', 'yourdomain.com');
		ga('send', 'pageview');
		</script>

	</body>
</html>
