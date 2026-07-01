import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '@/content/profile';
import { assetUrl } from '@/lib/utils';

const TrainingGallery = () => {
	return (
		<section id="training" className="py-20 bg-muted">
			<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 16 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
				>
					<h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Training & Industry Engagement</h2>
					<p className="text-muted-foreground mb-12">Technical presentations, consulting, and field work</p>
				</motion.div>

				<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
					{profile.trainingGallery.map((item, index) => (
						<motion.figure
							key={item.image}
							initial={{ opacity: 0, y: 16 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.4, delay: index * 0.08 }}
							className="rounded-xl overflow-hidden shadow-md bg-card border border-border"
						>
							<img
								src={assetUrl(item.image)}
								alt={item.caption}
								className="w-full h-52 object-cover"
							/>
							<figcaption className="p-4 text-sm text-muted-foreground">{item.caption}</figcaption>
						</motion.figure>
					))}
				</div>
			</div>
		</section>
	);
};

export default TrainingGallery;
