import { useGSAP } from "@gsap/react"; // Hook pour intégrer GSAP dans React
import gsap from "gsap"; // Bibliothèque GSAP pour les animations

const GsapFromTo = () => {
	// Utilisation de gsap.fromTo() pour animer les éléments d'un état initial vers un nouvel état
	useGSAP(() => {
		gsap.fromTo(
			"#red-box",
			{
				x: 0, // L'élément commence à la position 0 sur l'axe X
				rotation: 0, // L'élément commence sans rotation
				borderRadius: "0%", // L'élément commence sans arrondi des coins
			},
			{
				x: 250, // L'élément est déplacé de 250px sur l'axe X
				repeat: Infinity, // L'animation se répète à l'infini
				yoyo: true, // L'animation revient à son état initial après chaque cycle
				borderRadius: "100%", // L'élément se transforme en un cercle
				rotation: 360, // L'élément effectue une rotation complète (360°)
				duration: 2, // Chaque cycle d'animation dure 2 secondes
				ease: "bounce.out", // Applique un effet rebond à l'animation
			}
		);
	}, []); // Le hook déclenche l'animation une seule fois au montage du composant

	return (
		<main>
			<h1>GsapFromTo</h1>

			<p className="mt-5 text-gray-500">
				La méthode <code>gsap.fromTo()</code> est utilisée pour animer
				des éléments d'un nouvel état à un autre nouvel état.
			</p>

			<p className="mt-5 text-gray-500">
				La méthode <code>gsap.fromTo()</code> est similaire aux méthodes{" "}
				<code>gsap.from()</code> et <code>gsap.to()</code>, mais la
				différence est que la méthode <code>gsap.fromTo()</code> anime
				les éléments d'un nouvel état à un autre nouvel état, tandis que{" "}
				<code>gsap.from()</code> anime les éléments d'un nouvel état
				vers leur état actuel, et <code>gsap.to()</code> anime les
				éléments de leur état actuel vers un nouvel état.
			</p>

			<p className="mt-5 text-gray-500">
				Lisez plus à propos de la{" "}
				<a
					href="https://greensock.com/docs/v3/GSAP/gsap.fromTo()"
					target="_blank"
					rel="noreferrer noopener nofollow"
				>
					méthode gsap.fromTo()
				</a>
				.
			</p>

			<div className="mt-20">
				<div id="red-box" className="w-20 h-20 bg-red-500 rounded-lg" />
			</div>
		</main>
	);
};

export default GsapFromTo;
