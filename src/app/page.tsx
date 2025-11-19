"use client";

import {
  Hero,
  TextSection,
  ImageSection,
  ProductSlider,
  RecipeSlider,
  FAQ,
  SocialMediaFeed,
  FacebookIcon,
  InstagramIcon,
} from "@dejstdm/white-label-ui";

export default function Home() {
  const products = [
    {
      id: 1,
      image: "/images/3168930179146---LAYS-GOURMET-SALT.png",
      imageAlt: "Lay's Gourmet chips",
      title: "Lay's Gourmet",
      description: "<p>With Lay's Gourmet, we pair each flavor with the texture that will best enhance it. Lay's Gourmet, elevate your appetizer.</p>",
      buttonLabel: "Learn More",
      buttonHref: "/products/gourmet",
    },
    {
      id: 2,
      image: "/images/LAYS-NATURE-135G_0.png",
      imageAlt: "Lay's Classic chips",
      title: "Lay's Classic",
      description: "<p>Lay's mission is to offer you irresistible chips to brighten up your appetizers, your summer barbecues, or to accompany your picnics.</p>",
      buttonLabel: "Learn More",
      buttonHref: "/products/classic",
    },
    {
      id: 3,
      image: "/images/LAY'S ANCIENNE NATURE 155G 1_0.png",
      imageAlt: "Lay's Old Recipe chips",
      title: "Lay's Old Recipe",
      description: "<p>Lay's Old Recipe chips are potatoes cut into thin slices and slowly cooked for more crispiness.</p>",
      buttonLabel: "Learn More",
      buttonHref: "/products/old-recipe",
    },
    {
      id: 4,
      image: "/images/05_FR_LAY'S PAYSANNE NATURE 155G_826x826px_0.png",
      imageAlt: "Lay's Farm Recipe chips",
      title: "Lay's Farm Recipe",
      description: "<p>Crave the generosity of Lay's Farm Recipe chips! Large wavy, thick, terribly crunchy chips with a good potato taste.</p>",
      buttonLabel: "Learn More",
      buttonHref: "/products/farm-recipe",
    },
    {
      id: 5,
      image: "/images/Lays-cuites-four-NATURE_0.png",
      imageAlt: "Lay's Baked chips",
      title: "Lay's Baked",
      description: "<p>Slightly striated for more crispiness, they offer a good potato taste and a delicious flavor, while limiting their fat content.</p>",
      buttonLabel: "Learn More",
      buttonHref: "/products/baked",
    },
    {
      id: 6,
      image: "/images/LAY'S-MPK-SEL-6x25g_0.png",
      imageAlt: "Lay's Individual Format chips",
      title: "Lay's Individual Format",
      description: "<p>Find your favorite flavors in individual format for even more pleasure: ideal to take away for your picnics and barbecues!</p>",
      buttonLabel: "Learn More",
      buttonHref: "/products/individual",
    },
    {
      id: 7,
      image: "/images/LAYS-MAX-NATURE_0.png",
      imageAlt: "Lay's MAX chips",
      title: "Lay's MAX",
      description: "<p>Lay's MAX, the range of wavy chips from Lay's.</p>",
      buttonLabel: "Learn More",
      buttonHref: "/products/max",
    },
    {
      id: 8,
      image: "/images/LAYS-3DS-Nature_0.png",
      imageAlt: "Lay's 3D chips",
      title: "Lay's 3D",
      description: "<p>Enjoy Lay's 3D's for your appetizers: delicious unique & crunchy corn cones thanks to their 3D shape!</p>",
      buttonLabel: "Learn More",
      buttonHref: "/products/3d",
    },
  ];

  const recipes = [
    {
      id: 1,
      image: "/images/3168930179146---LAYS-GOURMET-SALT.png",
      imageAlt: "Lay's Gourmet recipe",
      href: "/recipes/gourmet",
    },
    {
      id: 2,
      image: "/images/LAYS-NATURE-135G_0.png",
      imageAlt: "Lay's Classic recipe",
      href: "/recipes/classic",
    },
    {
      id: 3,
      image: "/images/LAY'S ANCIENNE NATURE 155G 1_0.png",
      imageAlt: "Lay's Old Recipe recipe",
      href: "/recipes/old-recipe",
    },
    {
      id: 4,
      image: "/images/05_FR_LAY'S PAYSANNE NATURE 155G_826x826px_0.png",
      imageAlt: "Lay's Farm Recipe recipe",
      href: "/recipes/farm-recipe",
    },
  ];

  const images = [
    {
      id: 1,
      src: "/images/3168930179146---LAYS-GOURMET-SALT.png",
      alt: "Lay's Gourmet chips packaging",
      href: "/products/gourmet",
    },
    {
      id: 2,
      src: "/images/LAYS-NATURE-135G_0.png",
      alt: "Lay's Classic chips packaging",
      href: "/products/classic",
    },
    {
      id: 3,
      src: "/images/LAY'S ANCIENNE NATURE 155G 1_0.png",
      alt: "Lay's Old Recipe chips packaging",
      href: "/products/old-recipe",
    },
    {
      id: 4,
      src: "/images/05_FR_LAY'S PAYSANNE NATURE 155G_826x826px_0.png",
      alt: "Lay's Farm Recipe chips packaging",
      href: "/products/farm-recipe",
    },
  ];

  const faqItems = [
    {
      id: 1,
      question: "What makes Lay's chips special?",
      answer: "<p>Lay's chips are made from carefully selected potatoes and cooked to perfection for maximum crispiness and flavor. We combine quality ingredients with traditional recipes to bring you irresistible chips.</p>",
    },
    {
      id: 2,
      question: "Are Lay's chips suitable for vegetarians?",
      answer: "<p>Most Lay's chips are suitable for vegetarians. Please check the product packaging for specific dietary information and allergen details.</p>",
    },
    {
      id: 3,
      question: "Where can I buy Lay's products?",
      answer: "<p>Lay's products are available in supermarkets, convenience stores, and online retailers. Check our store locator to find Lay's near you.</p>",
    },
    {
      id: 4,
      question: "What flavors are available?",
      answer: "<p>Lay's offers a wide range of flavors, from classic salted to gourmet varieties. Explore our products section to discover all available flavors.</p>",
    },
    {
      id: 5,
      question: "How should I store Lay's chips?",
      answer: "<p>To maintain freshness and crispiness, store Lay's chips in a cool, dry place. Once opened, reseal the bag or transfer to an airtight container.</p>",
    },
  ];

  const socialMediaItems = [
    {
      image: "/images/3168930179146---LAYS-GOURMET-SALT.png",
      alt: "Lay's Gourmet social post",
      url: "https://facebook.com/lays",
      platform: "facebook",
    },
    {
      image: "/images/LAYS-NATURE-135G_0.png",
      alt: "Lay's Classic social post",
      url: "https://instagram.com/lays",
      platform: "instagram",
    },
    {
      image: "/images/LAY'S ANCIENNE NATURE 155G 1_0.png",
      alt: "Lay's Old Recipe social post",
      url: "https://facebook.com/lays",
      platform: "facebook",
    },
    {
      image: "/images/05_FR_LAY'S PAYSANNE NATURE 155G_826x826px_0.png",
      alt: "Lay's Farm Recipe social post",
      url: "https://instagram.com/lays",
      platform: "instagram",
    },
  ];

  const socialLinks = [
    {
      name: "Follow us on Facebook",
      href: "https://facebook.com/lays",
      icon: <FacebookIcon size={20} />,
    },
    {
      name: "Follow us on Instagram",
      href: "https://instagram.com/lays",
      icon: <InstagramIcon size={20} />,
    },
  ];

  return (
    <>
      <Hero
        backgroundImage="/images/3168930179146---LAYS-GOURMET-SALT.png"
        headline="Lay's Chips"
        subheadline="<p>Irresistible chips for all your moments</p>"
        body="<p>Discover our range of delicious chips, made with carefully selected potatoes and traditional recipes. Perfect for your appetizers, barbecues, and picnics.</p>"
        buttonLabel="Discover Our Products"
        buttonHref="/products"
      />

      <TextSection
        headline="Our Products"
        text="<p>Lay's offers a wide variety of chips to satisfy all tastes. From classic salted chips to gourmet varieties, from traditional recipes to modern innovations, discover the range that suits you best.</p><p>Each product is carefully crafted using quality ingredients and traditional methods to guarantee an exceptional taste experience.</p>"
      />

      <ProductSlider
        headline="Our Range"
        products={products}
      />

      <ImageSection
        headline="Our Selection"
        subheadline="<p>Discover our most popular products</p>"
        images={images}
      />

      <TextSection
        headline="Our Commitments"
        text="<p>At Lay's, we are committed to offering you quality products while respecting the environment and our communities.</p><p>We work closely with potato farmers to ensure sustainable agriculture and support local economies.</p>"
      />

      <RecipeSlider
        headline="Recipe Ideas"
        subheadline="<p>Get inspired by our recipe suggestions</p>"
        recipes={recipes}
        headerButtonLabel="View All Recipes"
        headerButtonHref="/recipes"
      />

      <FAQ
        headline="Frequently Asked Questions"
        items={faqItems}
        collapseMode="single"
      />

      <SocialMediaFeed
        headline="Follow Us"
        subheadline="<p>Stay connected with Lay's on social media</p>"
        followText="Follow us on social networks"
        items={socialMediaItems}
        socialLinks={socialLinks}
      />

      <TextSection
        headline="Quality"
        text="<p>Quality is at the heart of everything we do at Lay's. We carefully select our potatoes and use traditional recipes to ensure an exceptional taste experience with every bite.</p><p>For your health, eat at least five fruits and vegetables a day - <a href='https://www.mangerbouger.fr' target='_blank' rel='noopener noreferrer'>www.mangerbouger.fr</a></p>"
      />
    </>
  );
}
