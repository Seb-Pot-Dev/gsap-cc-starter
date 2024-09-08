import { useGSAP } from "@gsap/react"; // Hook pour intégrer GSAP dans React
import gsap from "gsap"; // Bibliothèque GSAP pour créer des animations

const GsapFrom = () => {
	// Utilisation de gsap.from() pour animer les éléments à partir d'un état initial
	useGSAP(() => {
		gsap.from("#green-box", {
			x: 250, // L'élément démarre à 250px sur l'axe X (et revient à sa position d'origine)
			repeat: -1, // Animation répétée indéfiniment
			yoyo: true, // L'animation revient à son état initial après chaque cycle
			rotation: 360, // L'élément effectue une rotation complète (360°) pendant l'animation
			duration: 2, // L'animation dure 2 secondes
			ease: "power1.inOut", // Courbe d'animation fluide avec une accélération/décélération
		});
	}); // Le hook déclenche l'animation lorsque le composant est monté

	return (
		<main>
			<h1>GsapFrom</h1>

			<p className="mt-5 text-gray-500">
				La méthode <code>gsap.from()</code> est utilisée pour animer des
				éléments à partir d'un nouvel état vers leur état actuel.
			</p>

			<p className="mt-5 text-gray-500">
				La méthode <code>gsap.from()</code> est similaire à la méthode{" "}
				<code>gsap.to()</code>, mais la différence est que{" "}
				<code>gsap.from()</code> anime les éléments à partir d'un nouvel
				état vers leur état actuel, tandis que <code>gsap.to()</code>{" "}
				anime les éléments de leur état actuel vers un nouvel état.
			</p>

			<p className="mt-5 text-gray-500">
				Lisez plus à propos de la{" "}
				<a
					href="https://greensock.com/docs/v3/GSAP/gsap.from()"
					target="_blank"
					rel="noreferrer noopener nofollow"
				>
					méthode gsap.from()
				</a>
				.
			</p>

			<div className="mt-20">
				<div
					id="green-box"
					className="w-20 h-20 bg-green-500 rounded-lg"
				/>
			</div>
		</main>
	);
};

export default GsapFrom;
