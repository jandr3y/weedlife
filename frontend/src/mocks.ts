export const PRODUCTS = [
  {
    picture: '/images/products/6_130738297-scaled.webp',
    name: 'Erva X',
    value: 4.20,
    slug: 'erva-x',
    url: '/product/erva-x',
    amount: 0,
    id: '2',
  },
  {
    picture: '/images/products/7_130721159-scaled.webp',
    name: 'Erva Y',
    id: '1',
    value: 4.30,
    slug: 'erva-y',
    url: '/product/erva-y',
    amount: 0,
  },
  {
    picture: '/images/products/7_130721159-scaled.webp',
    name: 'Erva Z',
    id: '1',
    value: 4.50,
    slug: 'erva-y',
    url: '/product/erva-y',
    amount: 0,
  }
]

export function getProductBySlug(slug: string) {
  return PRODUCTS.find(item => item.slug === slug)
}