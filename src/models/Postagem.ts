import Temas from "./Tema";

interface Postagem {
    id: number;
    titulo: string;
    texto: string;
    temas?: Temas | null
}

export default Postagem;