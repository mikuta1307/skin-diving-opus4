# ダイビングギア LP

## 📋 概要

「ダイビングギア LP」は、架空のスキンダイビング用品販売サイトのランディングページです。このプロジェクトは架空のWebサイトであり、実在のサービスではありません。

コンセプトは「スキンダイビングの第一歩は、正しい装備選びから」をテーマに、ターゲット層（初心者/経験者/ギフト）ごとに最適化されたコンテンツを動的に表示する機能を実装しています。

## 🛠️ 使用技術

- React
- Next.js
- HTML5
- CSS3
  - Flexbox
  - CSS Grid
  - CSS Animation
  - レスポンシブデザイン
- JavaScript
- Material Icons
- SVGアニメーション

## 🔒 検索エンジン対策

- `robots.txt` によるインデックス防止
- `meta robots` タグによる補完的な制御
- 架空サイトであることの明示的な記載

これらを設置することで、架空のサイトが実在のサービスと誤認されることを防止しています。

## ✨ 特徴

- **ターゲット層に応じた表示変更**: ユーザーの経験レベルや目的に合わせたコンテンツ表示
- **モダンなデザイン**: 海をイメージした爽やかな配色とクリーンなレイアウト
- **レスポンシブ対応**: モバイル、タブレット、デスクトップに最適化
- **アニメーション**: 海中の光線、泡、魚のアニメーション効果
- **Material Icons活用**: 視認性の高いアイコンでユーザビリティ向上
- **SVGグラフィック**: 軽量で高品質な画像表現
- **アクセシビリティ対応**: セマンティックHTML構造、適切なコントラスト比

## 📱 レスポンシブデザイン

- モバイル（～767px）
  - すべてのセクションを縦一列に配置
  - 画面下部に固定表示されるスティッキーCTA
  - ハンバーガーメニューによるナビゲーション
- タブレット（768px～1199px）
  - 商品セレクションを2カラムに変更
  - コンテンツセクションを最適化
- デスクトップ（1200px～）
  - 3カラムのグリッドレイアウトを商品セクションに使用
  - 横並びのレイアウトで情報を効率的に表示

## 🎨 配色

- プライマリーカラー: `#0066cc` (ディープブルー)
- セカンダリーカラー: `#00a8e8` (スカイブルー)
- アクセントカラー: `#ff6b6b` (コーラル)
- サクセスカラー: `#4ecdc4` (ターコイズ)
- ダークカラー: `#2d3436` (チャコール)
- ライトカラー: `#f5f7fa` (ペールグレー)

## 📂 ディレクトリ構造

```
skin-diving-lp/
├── public/
│   ├── styles/
│   │   ├── global.css
│   │   ├── header.css
│   │   ├── hero.css
│   │   ├── content.css
│   │   ├── products.css
│   │   └── modal.css
│   ├── svg/
│   │   ├── hero-bg-ocean.svg
│   │   ├── hero-beginner.svg
│   │   ├── hero-experienced.svg
│   │   ├── hero-gift.svg
│   │   ├── icons/
│   │   │   ├── mask.svg
│   │   │   ├── snorkel.svg
│   │   │   └── fins.svg
│   │   └── sets/
│   │       ├── beginner-entry.svg
│   │       ├── beginner-standard.svg
│   │       ├── beginner-comfort.svg
│   │       ├── exp-performance.svg
│   │       ├── exp-pro.svg
│   │       ├── exp-travel.svg
│   │       ├── gift-starter.svg
│   │       ├── gift-couple.svg
│   │       └── gift-premium.svg
│   └── robots.txt
├── pages/
│   ├── index.js
│   ├── _app.js
│   └── _document.js
├── components/
│   ├── Layout/
│   │   ├── Header.js
│   │   └── Footer.js
│   ├── Modal/
│   │   └── TargetSelectModal.js
│   ├── Hero/
│   │   └── HeroSection.js
│   ├── Content/
│   │   ├── BeginnerContent.js
│   │   ├── ExperiencedContent.js
│   │   └── GiftContent.js
│   ├── Products/
│   │   └── ProductSection.js
│   └── Common/
│       ├── FloatingButton.js
│       └── ComparisonTable.js
├── lib/
│   └── context/
│       └── TargetContext.js
├── .github/
│   └── workflows/
│       └── deploy.yml
├── scripts/
│   ├── fix-paths.js
├── next.config.js
├── package.json
├── README.md
└── LICENSE
```

## 🌟 実装したセクション

1. **ヘッダー**: ロゴ、ターゲット表示、ナビゲーションリンク
2. **ヒーローセクション**: アニメーション海中背景とターゲット別メッセージ
3. **コンテンツセクション**: ターゲット層に応じた説明（失敗例、選び方など）
4. **商品セレクション**: ターゲット別3種類のスターターセット紹介
5. **比較表**: ターゲット層に応じた商品比較
6. **よくある質問（FAQ）**: アコーディオン形式のQ&A
7. **ニュースレターセクション**: 装備選びチェックリストのダウンロード
8. **フッター**: リンク集と架空サイトの明記

## ⭐ デザイン上のこだわり

- **海中世界の表現**: アニメーション付きSVG背景で海の美しさを表現
- **視覚的階層**: 重要な情報を視覚的に目立たせる配色とサイズ設計
- **アニメーションの活用**: 光線、泡、魚の動きで臨場感を演出
- **直感的な操作感**: ホバーエフェクトやモーダルUIで操作性を向上
- **余白の適切な活用**: 読みやすさとデザイン性のバランスを追求

## 📝 学んだこと・工夫した点

- React Context APIを使用したグローバル状態管理
- ターゲット層に応じた動的コンテンツ切り替えの実装
- SVGアニメーションによる視覚効果の実装
- GitHub Actionsを使用した自動デプロイ
- js-cookieを使用したユーザー選択の永続化
- レスポンシブデザインの段階的な最適化

## 📊 今後の改善点

- TypeScriptの導入によるコード品質の向上
- テストコード（Jest, React Testing Library）の追加
- パフォーマンス最適化（Lighthouse対応）
- アクセシビリティ対応の強化（WCAG準拠）
- 多言語対応の実装
- ダークモード対応

## 📜 ライセンス

このプロジェクトは架空のWebサイトです。  
コードは[MITライセンス](LICENSE)の下で公開しています。これは以下を意味します：

- 自由に使用、修正、配布可能（商用利用も含む）
- 著作権表示とライセンス表示を維持すること
- 作者は法的責任を負わない

※ 画像やSVGについても独自に作成したオリジナルのものとして扱いますが、同様にMITライセンスを適用します。

## 👨‍💻 作者

mikuta1307

https://mikuta1307.github.io/skin-diving-opus4/

---

※ このプロジェクトは架空の練習用LPであり、実在の団体やサービスとは関係ありません。
