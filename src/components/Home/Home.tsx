import "./Home.scss";
import BgSvg from "./BgSvg";
import { FC, ReactElement } from "react";
import Typer from "@/components/Typer/Typer";
import { Container, Row, Col } from "react-bootstrap";
import { Services } from "../ServiceList";
import Link from "next/link";
import { Products } from "../ProductList";
// export default function Home() {
//     return (
//         <>
//             <div className="container _._mt-10">
//                 <h2 className="h2_text _._text-center">Get theTargeted andRelevant Traffic.</h2>
//             </div>
//             <BgSvg />
//         </>
//     );
// }

export const Home: FC<any> = (): ReactElement => {
    return (
        <>
            <div className="container _._mt-10 animate__animated animate__flipInX animate__slow">
                <h2 className="h2_text _._text-center anim">Get your software solution developed,</h2>
                <h2 className="h2_text _._text-center">
                    <span className="gradient_text">
                        <Typer />
                    </span>
                </h2>
            </div>
            <br />
            <br />
            <br />
            <Container>
                <Row>
                    <Col sm={12} md={6} lg={6}>
                        <img src="./abt3.png" alt="" />
                    </Col>
                    <Col sm={12} md={6} lg={6}>
                        <div className="_._p-2 _._flex _._align-middle _._justify-center _._items-center">
                            <span>
                                <b>Welcome to The codexde</b>
                                <h1>Get your software ready</h1>
                                <p>codexde.com</p>
                            </span>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row className="_._text-center">
                    <h2>Products</h2>
                </Row>
                <Row>
                    {Products.map((service, i) => {
                        return (
                            <Col key={i} sm={12} md={6} lg={6}>
                                <Link href={`/products/${service.link}`} className="box _._flex _._flex-col md:_._flex-row _._text-white">
                                    <div className="md:_._mr-5">
                                        <img src={`/${service.icon}`} alt="" width="1000px" height="auto" />
                                    </div>
                                    <div>
                                        <h3>{service.heading}</h3>
                                        <p>{service.body}</p>
                                    </div>
                                </Link>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
            <Container>
                <Row className="_._text-center">
                    <h2>Services</h2>
                </Row>
                <Row>
                    {Services.map((service, i) => {
                        return (
                            <Col key={i} sm={12} md={6} lg={6}>
                                <Link href={`/offered-services/${service.link}`} className="box _._flex _._flex-col md:_._flex-row _._text-white">
                                    <div className="md:_._mr-5">
                                        <img src={`/${service.icon}`} alt="" width="1000px" height="auto" />
                                    </div>
                                    <div>
                                        <h3>{service.heading}</h3>
                                        <p>{service.body}</p>
                                    </div>
                                </Link>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
            {/* <BgSvg /> */}
        </>
    );
};
