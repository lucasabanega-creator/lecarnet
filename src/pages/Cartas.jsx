import Newsletter from "../components/Newsletter";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
export default function Cartas(){useDocumentMeta({title:"Cartas — Casa Banega",description:"Lecturas de Casa Banega sobre cultura del lujo, objetos y decisiones de marca, por correo."});return <div className="letters-page"><h1 className="sr-only">Cartas de Casa Banega</h1><Newsletter/></div>;}
