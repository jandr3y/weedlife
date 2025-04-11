import ProductGridList, { ProductGridListItem } from "@/components/product/product-grid-list/product-grid-list";
import { useTranslations } from "next-intl";

const PRODUCTS_BEST_SELLERS = [
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
  }
]

export default function Home() {
  const t = useTranslations('Global')

  return (
    <div>
      <ProductGridList title={t('best_sellers')}>
        {
          PRODUCTS_BEST_SELLERS.map((product,ix) => <ProductGridListItem key={'pn'+ix} {...product} />)
        }
      </ProductGridList>
      <ProductGridList title={t('recently_added')}>
        {
          PRODUCTS_BEST_SELLERS.map((product,ix) => <ProductGridListItem key={'po'+ix} {...product} />)
        }
      </ProductGridList>
    </div>
  );
}
