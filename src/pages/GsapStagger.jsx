import { useGSAP } from "@gsap/react"; // Hook pour intégrer GSAP dans React
import gsap from "gsap"; // Bibliothèque GSAP pour créer des animations

const GsapStagger = () => {
	// Utilisation de GSAP pour animer un groupe d'éléments avec un effet de décalage (stagger)
	useGSAP(() => {
    gsap.to('.stagger-box', {
      y: 250, // Déplacement vertical de chaque élément de 250 pixels
      rotation: 180, // Rotation de 180 degrés pour chaque élément
      yoyo: true, // L'animation revient à son état initial après chaque cycle
      repeat: -1, // L'animation est répétée à l'infini
      stagger: {
        amount: 0.5, // Le temps total de décalage est de 0.5 secondes
        grid: [2, 1], // Définit un agencement en grille (ici, 2 lignes et 1 colonne)
        axis: "y", // Le décalage est appliqué sur l'axe vertical (y)
        ease: 'circ.Out', // Applique une courbe d'animation circulaire pour un effet fluide
        from: 'center', // L'animation commence à partir des éléments du centre
      }
    })
  }, []); // L'effet d'animation est lancé une seule fois après le montage du composant

	return (
		<main>
			<h1>GsapStagger</h1>

			<p className="mt-5 text-gray-500">
				GSAP Stagger est une fonctionnalité qui permet d'appliquer des animations
				avec un délai décalé à un groupe d'éléments.
			</p>

			<p className="mt-5 text-gray-500">
				En utilisant la fonctionnalité Stagger de GSAP, vous pouvez spécifier la durée
				du décalage entre chaque animation d'élément, ainsi que personnaliser la durée et
				la courbe d'accélération de chaque animation. Cela permet de créer des effets dynamiques
				et visuellement attrayants, comme des rotations, des déplacements, ou des fondus enchaînés décalés.
			</p>

			<p className="mt-5 text-gray-500">
				Lisez plus à propos de la{" "}
				<a
					href="https://gsap.com/resources/getting-started/Staggers"
					target="_blank"
					rel="noreferrer noopener nofollow"
				>
					fonctionnalité GSAP Stagger
				</a>.
			</p>

			<div className="mt-20">
				<div className="flex gap-5">
					{/* Boîtes animées par GSAP */}
					<div className="w-20 h-20 bg-indigo-200 rounded-lg stagger-box" />
					<div className="w-20 h-20 bg-indigo-300 rounded-lg stagger-box" />
					<div className="w-20 h-20 bg-indigo-400 rounded-lg stagger-box" />
					<div className="w-20 h-20 bg-indigo-500 rounded-lg stagger-box" />
					<div className="w-20 h-20 bg-indigo-600 rounded-lg stagger-box" />
					<div className="w-20 h-20 bg-indigo-700 rounded-lg stagger-box" />
					<div className="w-20 h-20 bg-indigo-800 rounded-lg stagger-box" />
				</div>
			</div>
		</main>
	);
};

export default GsapStagger;
