import { Instagram, MessageCircle, ShoppingBag } from 'lucide-react'

export const PROFILE_DATA = {
  name: 'Anny Lavigny',
  title: 'Moda Fitness Premium Feminina',
  subtitle: 'Maceió & Marechal Deodoro',
  avatarUrl: '/img/logo-loja.webp',
}

export const MAIN_LINKS = [
  {
    label: 'Catálogo',
    description: 'Confira nossas peças e coleções',
    icon: <ShoppingBag size={18} />,
    href: 'https://drive.google.com/drive/folders/1i7eCe4NleXFvwITU9sONYQMjGgTRBYIM',
    type: 'external',
  },
  {
    label: 'WhatsApp',
    description: 'Fale conosco e faça seu pedido',
    icon: <MessageCircle size={18} />,
    href: 'https://wa.me/5582988252710',
    type: 'external',
  },
  {
    label: 'Instagram',
    description: 'Acompanhe nossas novidades',
    icon: <Instagram size={18} />,
    href: 'https://instagram.com/lavigny.modafitness',
    type: 'external',
  },
]

export const FOOTER_DATA = {
  fullName: 'Anny Lavigny Moda Fitness',
}
