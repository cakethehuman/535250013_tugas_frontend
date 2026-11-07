"use client";

import Image from "next/image";
import { Stack, Container, Row, Col } from "react-bootstrap";

type MenuCategory = "Baked" | "No-Bake" | "Drinks";

type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  img: string;
  category: MenuCategory;
};

const menuCategories: MenuCategory[] = ["Baked", "Drinks"];

const FALLBACK_IMG = "/image/ena_pfp.webp";

const menuList: MenuItem[] = [
  {
    id: "ny-classic",
    name: "New York Cheesecake",
    description: "Cheesecake panggang klasik, padat dan creamy.",
    price: 38000,
    img: "/images/New York CheeseCake.webp",
    category: "Baked",
  },
  {
    id: "basque-burnt",
    name: "Basque Burnt Cheesecake",
    description: "Permukaan karamel gosong, tengah lembut meleleh.",
    price: 42000,
    img: "/images/Basque Burnt Cheesecake.webp",
    category: "Baked",
  },
  {
    id: "japanese-cheesecake",
    name: "Japanese Cheesecake",
    description: "Cheesecake lembut dan ringan, tekstur jiggly.",
    price: 40000,
    img: "/images/Japanese Cheesecake.webp",
    category: "Baked",
  },
  {
    id: "iced-latte",
    name: "Iced Latte",
    description: "Espresso dan susu dingin, pas untuk cheesecake.",
    price: 28000,
    img: "/images/Iced Latte.webp",
    category: "Drinks",
  },
  {
    id: "chocolate-latte",
    name: "Chocolate Latte",
    description: "Cokelat pekat dengan susu yang creamy dan manis.",
    price: 30000,
    img: "/images/Chocolate Latte.webp",
    category: "Drinks",
  },
  {
    id: "matcha-latte",
    name: "Matcha Latte",
    description: "Matcha dan susu seimbang, sedikit pahit, lembut.",
    price: 30000,
    img: "/images/matcha latte.webp",
    category: "Drinks",
  },
];

export default function Menu() {
  return (
    <Stack gap={4} className="px-3 py-3">
      {menuCategories.map((category) => {
        const categoryItems = menuList.filter((item) => item.category === category);

        if (categoryItems.length === 0) return null;

        return (
          <section key={category} id={category} className="my-2">
            <div className="d-flex justify-content-center mb-3">
              <h2 className="text-danger fw-bold border-bottom border-danger pb-1">
                {category} Menu
              </h2>
            </div>

            <Container className="py-2 px-3">
              <Row xs={1} md={2} lg={3} className="g-4">
                {categoryItems.map((item) => (
                  <Col key={item.id}>
                    <div className="bg-white w-100 rounded-4 p-3 h-100 shadow-sm d-flex flex-column justify-content-between transition-hover">
                      <div>
                        <div className="position-relative overflow-hidden rounded-3 mb-3" style={{ height: "200px" }}>
                          <Image
                            src={item.img}
                            alt={item.name}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-fit-cover"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = FALLBACK_IMG;
                            }}
                          />
                        </div>

                        <h3 className="h5 fw-bold text-dark text-truncate mb-2" title={item.name}>
                          {item.name}
                        </h3>

                        <p
                          className="text-muted small mb-3"
                          style={{
                            minHeight: "44px",
                            maxHeight: "44px",
                            lineHeight: "22px",
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                          title={item.description}
                        >
                          {item.description}
                        </p>
                      </div>

                      <div className="d-flex justify-content-between align-items-end pt-2 border-top border-dark border-opacity-10">
                        <div>
                          <p className="text-muted small mb-0">Harga</p>
                          <p className="h5 fw-bold text-danger mb-0">
                            Rp {item.price.toLocaleString("id-ID")}
                          </p>
                        </div>

                        <button
                          type="button"
                          className="btn btn-sm bg-danger text-light add-to-cart px-3 py-2 rounded-3 shadow-sm d-flex align-items-center gap-1"
                          aria-label={`Pesan ${item.name}`}
                        >
                          <i className="bi bi-cart-plus" aria-hidden="true"></i>
                          <span>Pesan</span>
                        </button>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </Container>
          </section>
        );
      })}
    </Stack>
  );
}
