"use client";

import { Col, Row } from "react-bootstrap";
import HeroSection from "@/components/herosection";
import Menu from "@/components/menu";
import About from "@/components/about";

export default function Home() {
  return (
    <div className="bg-white">
      <main>
        <HeroSection></HeroSection>
        <div className="d-flex justify-content-center">
          <h1 className="text-black mt-2">Ena Cheese Cake shop</h1>
        </div>
        <section
        id="Home"
        className="container-fluid d-flex justify-content-center align-items-center bg-night2-gradient py-5">
        <Row className="w-100 align-items-center">
          <Col xs={12} md={4} className="text-center mb-4 mb-md-0">
            <img
              src="/images/ena_owner.webp"
              alt="kogo_sticker"
              className="kogo_sticker"
              width={350}
              height={350}/>
          </Col>
          <Col xs={12} md={8} className="text-center text-md-start">
            <h1 className="text-dark display-3">Ena's Cake Shop</h1>
            <p className="text-dark text-light py-3">
Tucked away on a quiet corner, Ena’s Atelier is a small cake shop where every slice is made to look as good as it tastes. Each cake is designed, colored, and finished by hand, from the piped details to the ribbon on the box. Nothing leaves the counter plain.

Our display case is part bakery, part gallery. Come for the seasonal fruit tarts, the soft pastel cakes, and the daily specials, and stay for the details you only notice on the second look.
            </p>
          </Col>
        </Row>
      </section>
      <section id='Menu'>
        <Menu />
      </section>
      <section id='About'>
        <About />
      </section>
      </main>
    </div>
  );
}
