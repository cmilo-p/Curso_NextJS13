import Link from "next/link";

export const metadata = {
    title: 'Tienda Oficial Next.js'
}

export default function TiendaLayout({ children }) {
  return (
    <>
      <nav>
        <h3>Seccion Tienda</h3>

        <ul>
          <li>
            <Link href="/tienda/categorias">Categorias</Link>
          </li>
          <li>
            <Link href="/tienda/categorias/computadoras">Computadoras</Link>
          </li>
        </ul>
      </nav>

      {children}
    </>
  );
}
