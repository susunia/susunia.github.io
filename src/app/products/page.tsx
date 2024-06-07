"use client";
import { Col, Container, Row } from "react-bootstrap";
import "./styles.scss";
import FAQ from "@/components/FAQ/FAQ";
import { PiEnvelopeSimple } from "react-icons/pi";
import Link from "next/link";
import { motion } from "framer-motion";
import { FcElectroDevices } from "react-icons/fc";
import { Products } from "@/components/ProductList";

export default function OurServices() {
	return (
		<>
			<div className="container _._mt-10">
				<h2 className="h2_text gradient_text animate__animated animate__flipInX animate__slower _._text-center _._text-wrap">
					<FcElectroDevices style={{ display: "inline-block", marginTop: "-15px", marginRight: "5px" }} />
					Our Products
				</h2>
			</div>
			<Container>
				<Row>
					{Products.map((service, i) => {
						return (
							<Col key={i} sm={12} md={6} lg={4}>
								<Link href={`/products/${service.link}`} className="_._text-white">
									<motion.div className="box" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
										<img src={`/${service.icon}`} alt="" />
										<h2>{service.heading}</h2>
										<p>{service.body}</p>
									</motion.div>
								</Link>
							</Col>
						);
					})}
				</Row>
			</Container>
			{/* <FAQ></FAQ> */}
		</>
	);
}
