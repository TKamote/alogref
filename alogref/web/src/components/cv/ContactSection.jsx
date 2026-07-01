import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Download } from 'lucide-react';
import { profile } from '@/content/profile';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
	const { identity } = profile;

	return (
		<section id="contact" className="py-20 bg-slate-950 text-white">
			<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
				<motion.div
					initial={{ opacity: 0, y: 16 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="space-y-8"
				>
					<div>
						<h2 className="text-3xl md:text-4xl font-bold mb-3">Let&apos;s Connect</h2>
						<p className="text-slate-400 text-lg">
							Open to Sales Engineer and Sales Manager opportunities in refrigeration and HVAC/R.
						</p>
					</div>

					<div className="flex flex-col sm:flex-row gap-4 justify-center text-slate-300">
						<a href={`mailto:${identity.email}`} className="flex items-center justify-center gap-2 hover:text-sky-400 transition-colors">
							<Mail className="w-5 h-5" />
							{identity.email}
						</a>
						<a href={`tel:${identity.phone.replace(/\s/g, '')}`} className="flex items-center justify-center gap-2 hover:text-sky-400 transition-colors">
							<Phone className="w-5 h-5" />
							{identity.phone}
						</a>
						<span className="flex items-center justify-center gap-2">
							<MapPin className="w-5 h-5" />
							{identity.location}
						</span>
					</div>

					<div className="flex flex-col sm:flex-row gap-3 justify-center">
						<Button asChild size="lg" className="bg-sky-600 hover:bg-sky-500">
							<a href={`mailto:${identity.email}?subject=Opportunity%20Inquiry`}>
								<Mail className="w-4 h-4 mr-2" />
								Send an email
							</a>
						</Button>
						<Button asChild variant="outline" size="lg" className="border-slate-600 text-slate-200 hover:bg-slate-800">
							<a href={`mailto:${identity.email}?subject=CV%20Request&body=Please%20find%20my%20CV%20attached.`}>
								<Download className="w-4 h-4 mr-2" />
								Request CV
							</a>
						</Button>
					</div>

					<p className="text-emerald-400 text-sm font-medium flex items-center justify-center gap-2">
						<span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
						{identity.availability}
					</p>
				</motion.div>
			</div>
		</section>
	);
};

export default ContactSection;
