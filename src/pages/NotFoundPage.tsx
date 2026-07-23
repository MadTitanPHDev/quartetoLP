import { Link } from 'react-router-dom'
import SEO from '../components/layout/SEO'

export default function NotFoundPage() {
  return (
    <>
      <SEO
        title="Página não encontrada"
        description="A página solicitada não existe no site do Quarteto de Segurança e Saúde do Trabalho."
        path="/404"
      />

      <section className="section-container flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">Erro 404</p>
        <h1 className="mt-3 text-3xl font-bold text-brand-950 sm:text-4xl">Página não encontrada</h1>
        <p className="mt-4 max-w-md text-slate-600">
          O endereço acessado não existe ou foi movido. Volte à página inicial ou conheça o Encontro de SST.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            to="/"
            className="rounded-lg bg-brand-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-600"
          >
            Ir para o início
          </Link>
          <Link
            to="/encontro-sst"
            className="rounded-lg border border-brand-200 px-5 py-3 text-sm font-semibold text-brand-800 transition hover:bg-brand-50"
          >
            Encontro de SST
          </Link>
        </div>
      </section>
    </>
  )
}
