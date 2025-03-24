import { Link } from "react-router-dom";

const Page404 = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-9xl">404</h1>
                <h2 className="mb-4">Page non trouvée</h2>
                <p className="text-xl mb-4">Désolé, la page que vous recherchez n'existe pas.</p>
                <Link to="/" className="border-2 border-neutral-800 hover:bg-neutral-800 text-neutral-800 hover:text-white font-medium py-2 px-4 rounded-3xl transition-colors duration-300">
                    Retourner à l'accueil
                </Link>
            </div>
        </div>
    );
};

export default Page404;
