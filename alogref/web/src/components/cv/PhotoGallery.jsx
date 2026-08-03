import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '@/content/profile';
import { assetUrl } from '@/lib/utils';

const PhotoGallery = () => {
	return (
		<section id="gallery" className="py-20 bg-background">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 16 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
				>
					<h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Gallery</h2>
					<p className="text-muted-foreground mb-12">
						Moments from projects, training, and industry events
					</p>
				</motion.div>

				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
					{profile.galleryImages.map((image, index) => (
						<motion.div
							key={image}
							initial={{ opacity: 0, y: 12 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.35, delay: Math.min(index * 0.02, 0.4) }}
							className="rounded-lg overflow-hidden shadow-sm border border-border bg-card aspect-square"
						>
							<img
								src={assetUrl(image)}
								alt={`Gallery photo ${index + 1}`}
								loading="lazy"
								className="w-full h-full object-cover"
							/>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default PhotoGallery;
