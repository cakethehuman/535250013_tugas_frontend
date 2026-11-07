import Image from "next/image";

import { Col, Row } from "react-bootstrap";

export default function About() {
  return (
    <section className="d-flex justify-content-center align-items-center py-5">
      <Row className="w-100 justify-content-center text-center">
        <Col xs={12} md={8} lg={5}>
          <h1 className="display-3 mb-4 text-danger border-bottom border-danger">About Our Owner</h1>

          <div className="w-100 h-100 border border-3 border-dark rounded">
            <Row className="gy-1 flex-column align-items-center text-dark">
              <Image
              src="/images/ena_pfp.webp"
              alt="CS"
              className="m-3 rounded-circle object-fit rounded w-50 h-50"
              width={200} 
              height={200}
              />
              <h2>Shinonome ena</h2>
              <p>Shinonome Ena (東雲 絵名) is a third-year student at Kamiyama High School who attends night classes. She is the illustrator for the online music circle 25-ji, Nightcord de., going by the alias "Enanan."</p>
            </Row>
          </div>
        </Col>
      </Row>
    </section>
  );
}

