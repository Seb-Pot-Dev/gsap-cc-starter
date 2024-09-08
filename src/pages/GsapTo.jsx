import { useGSAP } from "@gsap/react"; // Hook pour intégrer GSAP dans React
import gsap from "gsap"; // Bibliothèque GSAP pour créer des animations

const GsapTo = () => {
	// Utilisation de gsap.to() pour animer les éléments vers un nouvel état
	useGSAP(() => {
		gsap.to("#blue-box", {
			x: 250, // L'élément se déplace de 250px sur l'axe X (vers la droite)
			repeat: -1, // L'animation est répétée à l'infini
			duration: 2, // Chaque cycle d'animation dure 2 secondes
			yoyo: true, // L'animation revient à son état initial après chaque cycle
			rotation: 360, // L'élément effectue une rotation complète de 360°
			ease: "elastic", // Applique une courbe d'animation élastique
		});
	}, []); // Le hook déclenche l'animation une fois que le composant est monté

	return (
		<main>
			<h1>GsapTo</h1>

			<p className="mt-5 text-gray-500">
				La méthode <code>gsap.to()</code> est utilisée pour animer des éléments
				de leur état actuel vers un nouvel état.
			</p>

			<p className="mt-5 text-gray-500">
				La méthode <code>gsap.to()</code> est similaire à la méthode{" "}
				<code>gsap.from()</code>, mais la différence est que la méthode{" "}
				<code>gsap.to()</code> anime les éléments de leur état actuel
				vers un nouvel état, tandis que la méthode <code>gsap.from()</code>{" "}
				anime les éléments à partir d'un nouvel état vers leur état actuel.
			</p>

			<p className="mt-5 text-gray-500">
				Lisez plus à propos de la{" "}
				<a
					href="https://greensock.com/docs/v3/GSAP/gsap.to()"
					target="_blank"
					rel="noreferrer noopener nofollow"
				>
					méthode gsap.to()
				</a>.
			</p>

			<div className="mt-20">
				<div
					id="blue-box"
					className="w-20 h-20 bg-blue-500 rounded-lg"
				/>
			</div>
		</main>
	);
};

export default GsapTo;
