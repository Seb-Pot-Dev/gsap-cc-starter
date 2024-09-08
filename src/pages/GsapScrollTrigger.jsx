import { useGSAP } from "@gsap/react"; // Hook pour intégrer GSAP dans React
import gsap from "gsap"; // Bibliothèque GSAP pour créer des animations
import { ScrollTrigger } from "gsap/all"; // Plugin pour gérer les animations déclenchées par le scroll
import { useRef } from "react"; // Hook React pour référencer des éléments DOM

gsap.registerPlugin(ScrollTrigger); // Enregistre ScrollTrigger pour l'utiliser avec GSAP

const GsapScrollTrigger = () => {
    const scrollRef = useRef(); // Référence au conteneur contenant les éléments à animer

    useGSAP(() => {
        const boxes = gsap.utils.toArray(scrollRef.current.children); // Récupère tous les enfants de scrollRef dans une liste

        boxes.forEach((box) => {
            // Animation GSAP sur chaque élément "box"
            gsap.to(box, {
                x: 150 * (boxes.indexOf(box) + 5), // Déplace chaque boîte sur l'axe X en fonction de son index
                rotation: 360, // Fait tourner la boîte de 360°
                borderRadius: "100%", // Transforme la boîte en un cercle
                scale: 1.5, // Agrandit la boîte de 1,5 fois sa taille
                scrollTrigger: {
                    trigger: box, // Déclenche l'animation au moment où la boîte entre dans le viewport
                    start: "bottom bottom", // L'animation commence quand le bas de l'élément touche le bas de la fenêtre
                    end: "top 10%", // L'animation se termine quand le haut de l'élément atteint 10% du viewport
                    scrub: true, // L'animation suit le défilement, permettant de la scruter
                },
                ease: "power1.inOut", // Applique une transition fluide à l'animation
            });
        });
    }, { scope: scrollRef }); // L'animation est appliquée uniquement au contenu référencé par scrollRef

	return (
		<main>
			<h1>GsapScrollTrigger</h1>

			<p className="mt-5 text-gray-500">
				Gsap Scroll Trigger est un plugin qui permet de créer des animations déclenchées
				par la position de défilement de la page.
			</p>

			<p className="mt-5 text-gray-500">
				Grâce à ScrollTrigger, vous pouvez définir diverses actions à déclencher à des points de défilement spécifiques,
				comme le démarrage ou la fin d'une animation, l'ajustement de l'animation en fonction du scroll,
				la fixation d'éléments à l'écran, et plus encore.
			</p>

			<p className="mt-5 text-gray-500">
				Lisez plus à propos de la méthode{" "}
				<a
					href="https://gsap.com/docs/v3/Plugins/ScrollTrigger/"
					target="_blank"
					rel="noreferrer noopener nofollow"
				>
					gsap scroll trigger
				</a>.
			</p>

			<div className="w-full h-[70vh] flex justify-center items-center flex-col">
				<p className="text-center text-gray-500">
					Défilez vers le bas pour voir l'animation
				</p>

				<svg
					className="animate-bounce mt-5"
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="blue"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<path d="M12 19V5" />
					<path d="M5 12l7 7 7-7" />
				</svg>
			</div>

			<div className="mt-20 w-full h-screen" ref={scrollRef}>
				{/* Boîtes animées */}
				<div
					id="scroll-pink"
					className="scroll-box w-20 h-20 rounded-lg bg-pink-500"
				/>
				<div
					id="scroll-orange"
					className="scroll-box w-20 h-20 rounded-lg bg-orange-500"
				/>
			</div>
		</main>
	);
};

export default GsapScrollTrigger;
