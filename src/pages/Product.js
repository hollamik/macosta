import React from 'react';
import Layout from './Layout';
import pic19 from '../img/white-american-breed-rabbit.jpg'
import pic17 from '../img/petfood.jpg'
import pic5 from '../img/Dog.jpg'
import Footer from '../components/Footer';

function Product() {
  return (
    <>
    <Layout />
    <div>
    <section class="page-section">
            <div class="container">
                <div class="product-item">
                    <div class="product-item-title d-flex">
                        <div class="bg-faded p-5 d-flex ms-auto rounded">
                            <h2 class="section-heading mb-0">
                                <span class="section-heading-upper">Breeded for the pet lover's</span>
                                <span class="section-heading-lower">Dogs&Cats</span>
                            </h2>
                        </div>
                    </div>
                    <img class="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0" src={pic19} alt="..." />
                    <div class="product-item-description d-flex me-auto">
                        <div class="bg-faded p-5 rounded"><p class="mb-0">
                        Lorem ipsum dolor sit amet consectetur adipisicing elitr
     Voluptate ad sed, repellat praesentium quia tempore obcaecati
      quam quod alias rerum et nam libero ab officiis
     dolore repellendus blanditiis voluptatibus excepturi
     Lorem ipsum dolor sit amet consectetur adipisicing elitr
     Voluptate ad sed, repellat praesentium quia tempore obcaecati
      quam quod alias rerum et nam libero ab officiis
     dolore repellendus blanditiis voluptatibus excepturi
                            </p></div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    <div>
    <section class="page-section">
            <div class="container">
                <div class="product-item">
                    <div class="product-item-title d-flex">
                        <div class="bg-faded p-5 d-flex me-auto rounded">
                            <h2 class="section-heading mb-0">
                                <span class="section-heading-upper">Best Treat for your Pets</span>
                                <span class="section-heading-lower">Drugs & Treatments</span>
                            </h2>
                        </div>
                    </div>
                    <img class="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0" src={pic17} alt="..." />
                    <div class="product-item-description d-flex ms-auto">
                        <div class="bg-faded p-5 rounded"><p class="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elitr
     Voluptate ad sed, repellat praesentium quia tempore obcaecati
      quam quod alias rerum et nam libero ab officiis
     dolore repellendus blanditiis voluptatibus excepturi</p></div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    <div>
    <section class="page-section">
            <div class="container">
                <div class="product-item">
                    <div class="product-item-title d-flex">
                        <div class="bg-faded p-5 d-flex ms-auto rounded">
                            <h2 class="section-heading mb-0">
                                <span class="section-heading-upper">Best of Breed around the World</span>
                                <span class="section-heading-lower">Special Pet Treat</span>
                            </h2>
                        </div>
                    </div>
                    <img class="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0" src={pic5} alt="..." />
                    <div class="product-item-description d-flex me-auto">
                        <div class="bg-faded p-5 rounded"><p class="mb-0"> Lorem ipsum dolor sit amet consectetur adipisicing elitr
     Voluptate ad sed, repellat praesentium quia tempore obcaecati
      quam quod alias rerum et nam libero ab officiis
     dolore repellendus blanditiis voluptatibus excepturi</p></div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    <Footer />
    </>
  );
}

export default Product;
