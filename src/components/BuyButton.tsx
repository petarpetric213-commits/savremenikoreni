import { Link } from '@tanstack/react-router'
import { useCart } from '@/context/CartContext'
import products from '@/data/products'

export function BuyButton({
  productId,
  className = '',
}: {
  productId: number
  className?: string
}) {
  const { addItem } = useCart()
  const product = products.find((p) => p.id === productId)

  if (!product) return null

  return (
    <div className="flex gap-2 flex-wrap">
      <button
        onClick={() => addItem(product)}
        className={`btn-luxury btn-primary ${className}`}
        style={{ padding: '0.625rem 1.25rem', fontSize: '0.75rem' }}
      >
        + Dodaj u korpu
      </button>
      <Link
        to="/korpa"
        className="btn-luxury btn-outline"
        style={{ padding: '0.625rem 1.25rem', fontSize: '0.75rem', textDecoration: 'none' }}
      >
        Korpa
      </Link>
    </div>
  )
}
