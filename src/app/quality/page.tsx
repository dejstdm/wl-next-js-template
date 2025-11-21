"use client";

import { Hero, ProductSlider, FAQ, TextSection } from "@dejstdm/white-label-ui";

export default function QualityPage() {
  const qualityProducts = [
    {
      id: 1,
      image: "/images/3168930179146---LAYS-GOURMET-SALT.png",
      imageAlt: "Lay's Gourmet chips",
      title: "Lay's Gourmet",
      description:
        "<p>Crafted from carefully selected potatoes and cooked to a perfect golden color for a refined tasting experience.</p>",
      buttonLabel: "Discover Lay's Gourmet",
      buttonHref: "/products/gourmet",
    },
    {
      id: 2,
      image: "/images/LAYS-NATURE-135G_0.png",
      imageAlt: "Lay's Classic chips",
      title: "Lay's Classic",
      description:
        "<p>Simply sliced potatoes, quality sunflower oil, and just the right amount of salt for an iconic, timeless taste.</p>",
      buttonLabel: "Discover Lay's Classic",
      buttonHref: "/products/classic",
    },
    {
      id: 3,
      image: "/images/LAY'S ANCIENNE NATURE 155G 1_0.png",
      imageAlt: "Lay's Old Recipe chips",
      title: "Lay's Old Recipe",
      description:
        "<p>Slowly cooked slices for even more crispiness, inspired by traditional recipes and know-how.</p>",
      buttonLabel: "Discover Old Recipe",
      buttonHref: "/products/old-recipe",
    },
    {
      id: 4,
      image: "/images/05_FR_LAY'S PAYSANNE NATURE 155G_826x826px_0.png",
      imageAlt: "Lay's Farm Recipe chips",
      title: "Lay's Farm Recipe",
      description:
        "<p>Generous, wavy chips with a good potato taste, prepared to highlight the natural flavor of the potato.</p>",
      buttonLabel: "Discover Farm Recipe",
      buttonHref: "/products/farm-recipe",
    },
  ];

  const qualityFaqItems = [
    {
      id: 1,
      question: "How does Lay's ensure the quality of its chips?",
      answer:
        "<p>We select potatoes from trusted farmers, control each step from washing to cooking, and carry out numerous quality checks before our chips reach your table.</p>",
    },
    {
      id: 2,
      question: "Do you work with local farmers?",
      answer:
        "<p>Yes. Lay's works closely with local potato growers and long-term partners to ensure responsible farming practices and consistent product quality.</p>",
    },
    {
      id: 3,
      question: "What type of oil is used for cooking?",
      answer:
        "<p>Our chips are cooked in carefully selected vegetable oils. Please refer to the back of the pack for the exact oil blend used in each recipe.</p>",
    },
    {
      id: 4,
      question: "Are there quality controls on allergens?",
      answer:
        "<p>Yes. Our production sites follow strict procedures to manage allergens, and all potential allergens are clearly indicated on the product packaging.</p>",
    },
    {
      id: 5,
      question: "How do you preserve freshness and crispiness?",
      answer:
        "<p>From cooking to packaging, we protect our chips from humidity and light so they remain crispy. Once opened, close the bag carefully or use an airtight container.</p>",
    },
  ];

  return (
    <>
      <Hero
        backgroundImage="/images/3168930179146---LAYS-GOURMET-SALT.png"
        headline="Our Quality Promise"
        subheadline="<p>From the field to your table, quality guides every step of the Lay's journey.</p>"
        body="<p>We carefully select our potatoes, control each stage of production, and continuously improve our recipes to offer you chips that are both delicious and reliable.</p>"
        buttonLabel="Explore Our Products"
        buttonHref="/products"
      />

      <TextSection
        headline="From Potato to Chip"
        text="<p>Quality at Lay's starts with the potato. We collaborate with farmers who share our standards, selecting only potatoes that meet strict criteria. Once harvested, they are washed, peeled, sliced, and cooked under carefully monitored conditions.</p><p>Each batch is checked to ensure the right taste, texture, and color before being seasoned and packaged. This attention to detail helps guarantee the same delicious experience bag after bag.</p>"
      />

      <ProductSlider
        headline="Quality Across Our Range"
        products={qualityProducts}
      />

      <TextSection
        headline="Compare Our Products"
        text="<p>Each range in the Lay's family has its own personality. Lay's Gourmet focuses on refined recipes and textures, Lay's Classic offers the iconic taste you know and love, Lay's Old Recipe highlights traditional slow-cooking, and Lay's Farm Recipe celebrates generous cuts with a good potato taste.</p><p>Compare the flavors, textures, and occasions for each range to find the chips that best match your moments: everyday snacking, special appetizers, or sharing with friends and family.</p>"
      />

      <FAQ
        headline="Quality & Safety FAQ"
        items={qualityFaqItems}
        collapseMode="single"
      />
    </>
  );
}
