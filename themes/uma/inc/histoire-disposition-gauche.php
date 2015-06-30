<section class="pin">
	<div class="dispo dispo_gauche">
		
		<div class="colonne colonne_desc">
			<?php the_content();?>
		</div>

		<div class="colonne">
			<?php 
			$id = get_field("identifiant_diaporama");
			global $wp_photo_gallery;
			$gallery = new WPPGPhotoGallery($id);
			$gallery_items = WPPGPhotoGallery::getGalleryItems($id);
			//print_r($gallery_items);
			$html = '<div class="diapos">';
			foreach($gallery_items as $item){
			    $css = 'style="background-image:url('.$item["image_url"].')"';
			    $html .= '<div class="diapo_item vvhidden">';
				    $html .= '<div class="diapo_item_image">';		  
				    	$html .= '<img src="'.$item["image_url"].'" width="" height="">';  
			    	$html .= '</div>';
			    $html .= '</div>';
			}
			$html .= '</div>';
			echo $html;
			?>
		</div>

	</div>
</section>
