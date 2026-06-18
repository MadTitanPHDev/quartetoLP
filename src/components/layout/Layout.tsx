import { Outlet, useLocation } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import Header from './Header'
import Footer from './Footer'
import { fadeUp, transition } from '../../lib/motion'

export default function Layout() {
  const location = useLocation()
  const shouldReduceMotion = useReducedMotion()

  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#conteudo-principal"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:shadow-lg"
      >
        Ir para o conteúdo principal
      </a>

      <Header />
      <main id="conteudo-principal" className="flex-1">
        <motion.div
          key={location.pathname}
          initial={shouldReduceMotion ? false : 'hidden'}
          animate="visible"
          variants={fadeUp}
          transition={transition.default}
        >
          <Outlet />
        </motion.div>
      </main>
      <Footer />
    </div>
  )
}
