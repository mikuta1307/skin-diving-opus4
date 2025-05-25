import { useTarget } from '../../lib/context/TargetContext';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function ProductSection() {
  const { targetType, TARGET_TYPES } = useTarget();
  const router = useRouter();
  const [selectedProduct, setSelectedProduct] = useState(null);

  // タイプが変更されたときに選択をリセット
  useEffect(() => {
    setSelectedProduct(null);
  }, [targetType]);

  const getProductsByType = () => {
    switch (targetType) {
      case TARGET_TYPES.BEGINNER:
        return [
          {
            id: 'beginner-entry',
            name: 'ビギナーセット',
            price: '¥15,000',
            image: '/svg/sets/beginner-entry.svg',
            features: [
              '軽量で扱いやすい装備',
              '日本人向けサイズ展開',
              '取扱説明書・DVD付き',
              '初心者講習会優待券付き'
            ],
            badge: '初めての方に',
            rating: 5
          },
          {
            id: 'beginner-standard',
            name: 'ステップアップセット',
            price: '¥25,000',
            image: '/svg/sets/beginner-standard.svg',
            features: [
              '長く使える定番モデル',
              '排水弁付きで安心',
              'メンテナンスキット付属',
              'オンライン講座アクセス権'
            ],
            badge: '一番人気',
            rating: 5
          },
          {
            id: 'beginner-comfort',
            name: 'コンフォートセット',
            price: '¥35,000',
            image: '/svg/sets/beginner-comfort.svg',
            features: [
              '快適性重視の設計',
              'ソフトシリコン素材',
              '専用キャリーバッグ付き',
              '1年間保証付き'
            ],
            badge: '快適重視',
            rating: 4
          }
        ];

      case TARGET_TYPES.EXPERIENCED:
        return [
          {
            id: 'exp-performance',
            name: 'パフォーマンスセット',
            price: '¥32,000',
            image: '/svg/sets/exp-performance.svg',
            features: [
              'カーボン配合フィン',
              'ドライトップスノーケル',
              'ローボリュームマスク',
              '推進力30%アップ'
            ],
            badge: 'スキルアップ',
            rating: 5
          },
          {
            id: 'exp-pro',
            name: 'プロフェッショナル',
            price: '¥48,000',
            image: '/svg/sets/exp-pro.svg',
            features: [
              'プロ仕様の高性能',
              '超軽量チタンパーツ',
              'フリーダイビング対応',
              '深度計プレゼント'
            ],
            badge: '本格派',
            rating: 5
          },
          {
            id: 'exp-travel',
            name: 'トラベラーセット',
            price: '¥38,000',
            image: '/svg/sets/exp-travel.svg',
            features: [
              'コンパクト収納設計',
              '飛行機持込可能サイズ',
              '速乾性素材使用',
              '世界対応サイズ'
            ],
            badge: '旅行に最適',
            rating: 4
          }
        ];

      case TARGET_TYPES.GIFT:
        return [
          {
            id: 'gift-starter',
            name: 'ギフトスターター',
            price: '¥20,000',
            image: '/svg/sets/gift-starter.svg',
            features: [
              'カラーが選べる3色展開',
              'サイズ交換保証付き',
              'ギフトボックス入り',
              '体験チケット付き'
            ],
            badge: 'プレゼント人気No.1',
            rating: 5
          },
          {
            id: 'gift-couple',
            name: 'カップルセット',
            price: '¥45,000',
            image: '/svg/sets/gift-couple.svg',
            features: [
              'ペアでお得な2人分',
              'お揃いカラー選択可',
              '記念日刻印サービス',
              'ペア体験レッスン付き'
            ],
            badge: 'ペア割引',
            rating: 5
          },
          {
            id: 'gift-premium',
            name: 'プレミアムギフト',
            price: '¥50,000',
            image: '/svg/sets/gift-premium.svg',
            features: [
              '最高級シリコン素材',
              '名入れ刻印無料',
              'VIP体験ツアー招待',
              '豪華木製ケース入り'
            ],
            badge: '特別な贈り物に',
            rating: 5
          }
        ];

      default:
        return [];
    }
  };

  const products = getProductsByType();

  const handleProductClick = (productId) => {
    setSelectedProduct(productId);
    // 架空の詳細ページURLを生成
    const detailUrl = `/products/${targetType}/${productId}`;
    console.log(`遷移先: ${detailUrl}`);
    
    // 実際の実装では以下のようにページ遷移
    // router.push(detailUrl);
    
    // デモ用：新しいタブで架空のURLを表示
    alert(`商品詳細ページへ遷移します:\n${window.location.origin}${detailUrl}`);
  };

  return (
    <section id="products" className="section products-section">
      <div className="container">
        <h2 className="section-title">
          {targetType === TARGET_TYPES.BEGINNER && '初心者向けスターターセット'}
          {targetType === TARGET_TYPES.EXPERIENCED && 'スキルアップ装備セット'}
          {targetType === TARGET_TYPES.GIFT && 'ギフト向けセット'}
        </h2>
        <div className="products-grid">
          {products.map((product, index) => (
            <div 
              key={`${targetType}-${product.id}-${index}`} 
              className={`product-card fade-in ${selectedProduct === product.id ? 'selected' : ''}`}
              onClick={() => handleProductClick(product.id)}
            >
              {product.badge && (
                <div className="product-badge">{product.badge}</div>
              )}
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-content">
                <h3 className="product-name">{product.name}</h3>
                <div className="product-rating">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-icons">
                      {i < product.rating ? 'star' : 'star_border'}
                    </span>
                  ))}
                </div>
                <p className="product-price">{product.price}</p>
                <ul className="product-features">
                  {product.features.map((feature, i) => (
                    <li key={i}>
                      <span className="material-icons">check_circle</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button 
                  className="btn product-cta"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleProductClick(product.id);
                  }}
                >
                  このセットを詳しく見る
                  <span className="material-icons">arrow_forward</span>
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {targetType === TARGET_TYPES.BEGINNER && (
          <div className="cta-banner">
            <span className="material-icons">local_offer</span>
            <p>6月限定！全セット15%OFF</p>
            <button className="btn btn-accent">限定割引セットをチェック</button>
          </div>
        )}
      </div>
    </section>
  );
}