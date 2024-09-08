import { useGSAP } from "@gsap/react"; // Hook pour intégrer GSAP dans React
import gsap from "gsap"; // Bibliothèque GSAP pour les animations

const GsapText = () => {
	// Animation du texte avec GSAP
	useGSAP(() => {
		// Animation pour le titre avec l'ID "text"
		gsap.to("#text", {
			ease: "power1.inOut", // Applique une transition fluide
			opacity: 1, // Rendre le texte complètement visible (opacity de 0 à 1)
			y: 0, // Ramène le texte à sa position verticale d'origine
		});
		// Animation pour les paragraphes avec la classe "para"
		gsap.fromTo(
			".para",
			{
				opacity: 0, // Commence avec une opacité de 0 (invisible)
				y: 20, // Position initiale décalée vers le bas de 20px
			},
			{
				opacity: 1, // Rendre les paragraphes visibles
				y: 0, // Ramène les paragraphes à leur position d'origine
				delay: 1, // Délai de 1 seconde avant de démarrer l'animation
				stagger: 0.1, // Applique un décalage de 0,1 seconde entre chaque paragraphe
			}
		);
	}, []); // L'animation se déclenche une fois au montage du composant

	return (
		<main>
			<h1 id="text" className="opacity-0 translate-y-10">
				GsapText
			</h1>

			<p className="mt-5 text-gray-500 para">
				Nous pouvons utiliser les mêmes méthodes telles que{" "}
				<code>gsap.to()</code>, <code>gsap.from()</code>,{" "}
				<code>gsap.fromTo()</code>, et <code>gsap.timeline()</code> pour
				animer du texte.
			</p>

			<p className="mt-5 text-gray-500 para">
				En utilisant ces méthodes, nous pouvons obtenir divers effets
				d'animation du texte tels que des apparitions, des disparitions,
				des glissements, et bien plus encore.
			</p>

			<p className="mt-5 text-gray-500 para">
				Pour des animations et effets textuels plus avancés, vous pouvez
				explorer le GSAP TextPlugin ou d'autres bibliothèques tierces
				spécialisées dans les animations de texte.
			</p>

			<p className="mt-5 text-gray-500 para">
				Lisez plus à propos du{" "}
				<a
					href="https://greensock.com/docs/v3/Plugins/TextPlugin"
					target="_blank"
					rel="noreferrer noopener nofollow"
				>
					TextPlugin
				</a>{" "}
				plugin.
			</p>
		</main>
	);
};

export default GsapText;
