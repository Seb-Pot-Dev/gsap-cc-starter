import { useGSAP } from "@gsap/react"; // Hook pour intégrer GSAP dans React
import gsap from "gsap"; // Bibliothèque GSAP pour les animations

const GsapTimeline = () => {
	// Création d'une timeline GSAP pour gérer plusieurs animations en séquence
	const timeline = gsap.timeline({
		repeat: -1, // La timeline se répète à l'infini
		repeatDelay: 1, // Délai de 1 seconde entre chaque répétition de la timeline
		yoyo: true, // L'animation revient à son état initial après chaque cycle
	});

	// Utilisation de useGSAP pour déclencher les animations après le montage du composant
	useGSAP(() => {
		timeline.to("#yellow-box", {
			x: 250, // Déplace l'élément de 250px sur l'axe X
			rotation: 360, // Rotation complète de l'élément
			borderRadius: "100%", // Transformation de l'élément en un cercle
			duration: 2, // L'animation dure 2 secondes
			ease: "back.inOut", // Applique un effet de courbe de retour avec une transition douce
		});

		timeline.to("#yellow-box", {
			y: 250, // Déplace l'élément de 250px sur l'axe Y
			scale: 2, // Agrandit l'élément à 2 fois sa taille
			rotation: 360, // Nouvelle rotation complète de l'élément
			borderRadius: "100%", // L'élément reste un cercle
			duration: 2, // L'animation dure 2 secondes
			ease: "back.inOut", // Transition douce avec courbe de retour
		});

		timeline.to("#yellow-box", {
			x: 500, // Déplace l'élément de 500px sur l'axe X
			scale: 1, // Réinitialise la taille à sa valeur d'origine
			rotation: 360, // Rotation complète supplémentaire
			borderRadius: "8px", // Retourne à un bord légèrement arrondi
			duration: 2, // L'animation dure 2 secondes
			ease: "back.inOut", // Transition avec courbe de retour
		});
	});

	return (
		<main>
			<h1>GsapTimeline</h1>

			<p className="mt-5 text-gray-500">
				La méthode <code>gsap.timeline()</code> est utilisée pour créer
				une instance de timeline permettant de gérer plusieurs
				animations.
			</p>

			<p className="mt-5 text-gray-500">
				La méthode <code>gsap.timeline()</code> est similaire aux
				méthodes <code>gsap.to()</code>, <code>gsap.from()</code>, et{" "}
				<code>gsap.fromTo()</code>, mais elle permet de gérer une
				séquence d'animations, tandis que les autres méthodes se
				concentrent sur une animation individuelle.
			</p>

			<p className="mt-5 text-gray-500">
				Lisez plus à propos de la{" "}
				<a
					href="https://greensock.com/docs/v3/GSAP/gsap.timeline()"
					target="_blank"
					rel="noreferrer noopener nofollow"
				>
					méthode gsap.timeline()
				</a>
				.
			</p>

			<div className="mt-20 space-y-10">
				<button
					onClick={() => {
						if (timeline.paused()) {
							timeline.play(); // Reprend la timeline si elle est en pause
						} else {
							timeline.pause(); // Met en pause la timeline si elle est en cours
						}
					}}
				>
					Play/Pause
				</button>

				<div
					id="yellow-box"
					className="w-20 h-20 bg-yellow-500 rounded-lg"
				/>
			</div>
		</main>
	);
};

export default GsapTimeline;
