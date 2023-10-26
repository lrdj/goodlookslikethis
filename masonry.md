---
layout: default
imageGrid:
  - path: /i/cases/pta/hmrc-pta-hirez.png
    caption: "Alea jacta est"
    class: ""
  - path: /i/cases/pta/findings-deck-rev.png
    caption: "From large down to little"
    class: ""
  - path: /i/cases/pta/hmrc-should-pta-exist-b.jpeg
    caption: "Disco, aplha, beta live flow"
    class: ""
  - path: /i/cases/pta/hmrc-should-pta-exist-t.jpeg
    caption: "CRM and AR Dynamics optionsntible"
    class: ""
  - path: /i/cases/pta/purpose-butterfly.jpeg
    caption: "La piscine a colin et chloe"
    class: ""
  - path: /i/cases/pta/system-flow.jpeg
    caption: "Le ciel m'est tombé sur la tete"
    class: ""
  - path: /i/cases/pta/why-pta-exists.jpeg
    caption: "Par Toutatis!"
    class: ""
---

<style>
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  grid-auto-rows: 1fr;
  grid-gap: 10px;
}

.item {
  margin: 0; padding: 0;
  grid-row: span 2;
}

.item.cols2 {
    grid-column: span 2;
}

.item.cols3 {
    grid-column: span 3;
}

.item.cols4 {
    grid-column: span 4;
}

.item.cols5 {
    grid-column: span 5;
}

.item img {
  width: 100%;
  height: auto;
}

.item figcaption {
  background-color: #eaeaea;
  color: #333;
  text-align: left;
  padding: 0.3em 0.25em 0.3em 0.5em;
  font-size: xx-small;
  font-weight: bold;
  text-transform: uppercase;
}

</style>

<main>
<section class="wrapper">
    <article>
        <div class="container">
            {% for image in page.imageGrid %}
                <figure class="item {{ image.class }}">
                    <img src="{{ image.path }}" alt="{{ image.caption }}">
                    <figcaption>{{ image.caption }}</figcaption>
                </figure>
            {% endfor %}
        </div>
    </article>
</section>

<section class="wrapper">
    <h2>Content goes here</h2>
    <p>Foo paragraph la la bar.</p>
</section>
</main>

