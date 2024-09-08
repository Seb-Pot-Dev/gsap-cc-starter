import { Link } from "react-router-dom"; // Importation du composant Link pour la navigation

// Tableau contenant les différentes animations GSAP avec leur titre, description, et chemin de navigation
const animations = [
	{
		title: "GSAP To",
		description:
			"La méthode to() est utilisée pour animer un élément unique d'un état initial à un état final.",
		path: "/gsapto", // Chemin de navigation
	},
	{
		title: "GSAP From",
		description:
			"La méthode from() est utilisée pour animer un élément unique d'un état final à un état initial.",
		path: "/gsapfrom",
	},
	{
		title: "GSAP FromTo",
		description:
			"La méthode fromTo() est utilisée pour animer un élément unique d'un état initial à un état final et vice versa.",
		path: "/gsapfromto",
	},
	{
		title: "GSAP Timeline",
		description:
			"La méthode timeline() est utilisée pour créer une timeline permettant de gérer plusieurs animations.",
		path: "/gsaptimeline",
	},
	{
		title: "GSAP Stagger",
		description:
			"La méthode stagger() est utilisée pour animer plusieurs éléments avec un effet de décalage (stagger).",
		path: "/gsapstagger",
	},
	{
		title: "GSAP ScrollTrigger",
		description:
			"Le plugin ScrollTrigger est utilisé pour déclencher des animations en fonction de la position de défilement.",
		path: "/gsapscrolltrigger",
	},
	{
		title: "GSAP Text",
		description: "Apprenez à animer du texte avec GSAP.",
		path: "/gsaptext",
	},
];

// Composant Home qui affiche la liste des animations disponibles
const Home = () => {
	return (
		<main className="container">
			<div className="flex flex-col">
				<h1 className="text-3xl font-bold text-zinc-50">
					Animations GSAP
				</h1>
				<ol className="flex flex-col mt-10">
					{animations.map((animation, index) => (
						// Liste des animations avec un style et un lien vers la page correspondante
						<li
							key={index}
							className="flex flex-row gap-2 p-5 hover:bg-zinc-800/50 rounded-lg"
						>
							<p>
								<span className="text-sm font-bold text-zinc-50">
									{index + 1}.{" "}
									{/* Affiche l'index (1, 2, 3, etc.) */}
								</span>
							</p>
							<div className="flex flex-col gap-2 flex-1">
								<Link
									to={animation.path} // Lien vers la page de l'animation
									className="text-md font-semibold text-blue-600"
								>
									{animation.title}{" "}
									{/* Titre de l'animation */}
								</Link>
								<p className="text-gray-400 text-xs">
									{animation.description}{" "}
									{/* Description de l'animation */}
								</p>
							</div>

							{/* Icône de flèche */}
							<svg
								className="size-6 text-gray-600 -rotate-90"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M10 13.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L10 13.586z"
								/>
							</svg>
						</li>
					))}
				</ol>
			</div>
		</main>
	);
};

export default Home;
